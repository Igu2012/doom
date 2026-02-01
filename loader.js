(() => {
  if (window.__DOOM_LOADED__) return;
  window.__DOOM_LOADED__ = true;

  const root = document.createElement("div");
  root.style.cssText = `
    position:fixed;
    top:40px;
    left:40px;
    width:700px;
    background:#000;
    border:1px solid #400;
    z-index:999999;
    font-family:monospace;
  `;

  const header = document.createElement("div");
  header.textContent = "DOOM";
  header.style.cssText = `
    background:#200;
    color:#f33;
    padding:6px;
    cursor:move;
    user-select:none;
  `;

  const body = document.createElement("div");
  body.style.padding = "6px";

  root.appendChild(header);
  root.appendChild(body);
  document.body.appendChild(root);

  let dx = 0, dy = 0, drag = false;
  header.onmousedown = e => {
    drag = true;
    dx = e.clientX - root.offsetLeft;
    dy = e.clientY - root.offsetTop;
  };
  document.onmouseup = () => drag = false;
  document.onmousemove = e => {
    if (!drag) return;
    root.style.left = e.clientX - dx + "px";
    root.style.top = e.clientY - dy + "px";
  };

  body.innerHTML = `
    <canvas id="screen" width="640" height="400" tabindex="0"></canvas>
    <div id="output"></div>
    <div style="color:#888;font-size:12px;margin-top:4px">
      FPS: <span id="fps_stats">0</span>
      Draws: <span id="drawframes_stats">0</span>
    </div>
    <div style="display:none">
      <span id="getmsps_stats"></span>
      <span id="getms_stats"></span>
      <span id="capture_status"></span>
      <span id="capture_skip"></span>
      <span id="capture_upload"></span>
      <span id="capture_count"></span>
    </div>
  `;

  const canvas = document.getElementById("screen");
  canvas.focus();

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/Igu2012/doom@main/doom.wasm";
  script.defer = true;
  document.body.appendChild(script);
})();
