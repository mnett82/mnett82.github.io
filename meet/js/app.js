import { App } from '../pkg/index.js';

// Create application state.
const app = new App(10000);

// Setup event listeners.
const canvas = document.getElementById('rootCanvas');
canvas.addEventListener('mousemove', function(event) {
    app.set_cursor(event.clientX, event.clientY);
});

// Configure render loop.
const renderLoop = () => {
    app.tick();
    app.render();

    window.requestAnimationFrame(renderLoop);
}

renderLoop();