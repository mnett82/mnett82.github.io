// WASM dependencies must be loaded and compiled asynchronously. This shim takes care of the
// asynchronous import, so that the rest of the application (see `app.js`) does not have to worry
// about bootstrapping details.
import("./app.js").catch(e => console.error("Error bootstrapping `app.js`:", e));

  