use {
    js_sys::{Date, Math},
    wasm_bindgen::{prelude::*, JsCast},
    web_sys::{CanvasRenderingContext2d, Element, HtmlCanvasElement},
};

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// Manually import and wrap console logging, since the standard libraries `println` macro when
// targeting wasm.
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub struct App {
    prev_frame: f64,
    positions: Vec<(f64, f64)>,
    velocities: Vec<(f64, f64)>,
    canvas: HtmlCanvasElement,
    cursor: Option<(f64, f64)>,
}

#[wasm_bindgen]
impl App {
    #[wasm_bindgen(constructor)]
    pub fn new(count: u32) -> Self {
        let document = web_sys::window().unwrap().document().unwrap();
        let canvas = document
            .get_element_by_id("rootCanvas")
            .unwrap()
            .dyn_into::<HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        Self {
            prev_frame: Date::new_0().get_time() * 0.001,
            positions: (0..count)
                .map(|_| {
                    (
                        canvas.width() as f64 * Math::random(),
                        canvas.height() as f64 * Math::random(),
                    )
                })
                .collect(),
            velocities: (0..count).map(|_| (0.0, 0.0)).collect(),
            canvas,
            cursor: None,
        }
    }

    pub fn set_cursor(&mut self, x: f64, y: f64) {
        self.cursor.replace((x, y));
    }

    pub fn tick(&mut self) {
        // Update simulation time.
        let dt = {
            let curr_frame = Date::new_0().get_time() * 0.001;
            let dt = curr_frame - self.prev_frame;
            self.prev_frame = curr_frame;

            dt
        };

        for i in 0..self.positions.len() {
            Self::update_particle(
                &self.cursor,
                &mut self.positions[i],
                &mut self.velocities[i],
                dt,
            );
        }
    }

    pub fn render(&self) {
        let ctx = self
            .canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<CanvasRenderingContext2d>()
            .unwrap();

        ctx.clear_rect(
            0.0,
            0.0,
            self.canvas.width() as f64,
            self.canvas.height() as f64,
        );

        ctx.begin_path();
        for i in 0..self.positions.len() {
            Self::draw_particle(&ctx, &self.positions[i], &self.cursor);
        }
        ctx.stroke();
    }

    fn update_particle(
        cursor: &Option<(f64, f64)>,
        p: &mut (f64, f64),
        v: &mut (f64, f64),
        dt: f64,
    ) {
        // Calculate the displacement vector for the virtual spring connecting the particle with the
        // cursor. When the cursor is not over the canvas, we consider the virtual spring not to be
        // displaced.
        let displacement = cursor.map(|(x, y)| (x - p.0, y - p.1));

        // Calculate the force vector exerted onto the (massive) particle based on the displacement
        // of the virtual spring.
        const RELAXED_SPRING_LENGTH: f64 = 100.0;
        const SPRING_CONSTANT: f64 = 20.0;
        let force = displacement.map(|(x, y)| {
            let abs = (x.powf(2.0) + y.powf(2.0)).sqrt();
            if (abs - RELAXED_SPRING_LENGTH).abs() < 0.0001 {
                return (0.0, 0.0); // No force when spring is near relaxed.
            }

            (
                SPRING_CONSTANT * (x / abs) * (abs - RELAXED_SPRING_LENGTH),
                SPRING_CONSTANT * (y / abs) * (abs - RELAXED_SPRING_LENGTH),
            )
        });

        // Calculate the acceleration of the (massive) particle caused by the spring force.
        const PARTICLE_MASS: f64 = 2.0;
        let acceleration = force.map(|(x, y)| (x / PARTICLE_MASS, y / PARTICLE_MASS));

        // Calculate the particle velocity and position by integrating acceleration over time. If
        // no acceleration is present, no update to the velocity is computed.
        if let Some((x, y)) = acceleration {
            *v = (v.0 + x * dt, v.1 + y * dt);

            // Limit the particle velocity to improve usability.
            const MAX_V: f64 = 500.0;
            let abs = (v.0.powf(2.0) + v.1.powf(2.0)).sqrt();
            if abs > MAX_V {
                *v = ((v.0 * MAX_V) / abs, (v.1 * MAX_V) / abs);
            }
        }
        p.0 += v.0 * dt;
        p.1 += v.1 * dt;
    }

    fn draw_particle(ctx: &CanvasRenderingContext2d, p: &(f64, f64), cursor: &Option<(f64, f64)>) {
        const SIZE: f64 = 1.5;
        ctx.move_to(p.0 - SIZE, p.1 - SIZE);
        ctx.line_to(p.0 + SIZE, p.1 + SIZE);
        ctx.move_to(p.0 + SIZE, p.1 - SIZE);
        ctx.line_to(p.0 - SIZE, p.1 + SIZE);
    }
}
