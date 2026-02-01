(function () {
  if (window.__doom_loader_loaded) return;
  window.__doom_loader_loaded = true;

  /* container */
  const root = document.createElement("div");
  root.style.position = "fixed";
  root.style.top = "20px";
  root.style.left = "20px";
  root.style.width = "700px";
  root.style.height = "500px";
  root.style.background = "#000";
  root.style.color = "#0f0";
  root.style.zIndex = "999999";
  root.style.border = "2px solid #0f0";
  root.style.fontFamily = "monospace";
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.id = "doom_root";

  /* header (drag) */
  const header = document.createElement("div");
  header.textContent = "DOOM WASM";
  header.style.cursor = "move";
  header.style.padding = "4px";
  header.style.background = "#020";
  header.style.userSelect = "none";
  root.appendChild(header);

  /* screen */
  const canvas = document.createElement("canvas");
  canvas.id = "screen";
  canvas.width = 640;
  canvas.height = 400;
  canvas.tabIndex = 0;
  canvas.style.outline = "none";
  canvas.style.background = "black";
  root.appendChild(canvas);

  /* output */
  const output = document.createElement("div");
  output.id = "output";
  output.style.flex = "1";
  output.style.overflow = "auto";
  output.style.fontSize = "12px";
  output.style.padding = "4px";
  root.appendChild(output);

  /* stats placeholders (avoid null errors) */
  [
    "fps_stats",
    "drawframes_stats",
    "getmsps_stats",
    "getms_stats",
    "capture_status",
    "capture_skip",
    "capture_upload",
    "capture_count",
    "focushint"
  ].forEach(id => {
    const el = document.createElement("div");
    el.id = id;
    el.style.display = "none";
    root.appendChild(el);
  });

  document.body.appendChild(root);

  /* drag logic */
  let ox = 0, oy = 0, dragging = false;
  header.onmousedown = e => {
    dragging = true;
    ox = e.clientX - root.offsetLeft;
    oy = e.clientY - root.offsetTop;
  };
  document.onmousemove = e => {
    if (!dragging) return;
    root.style.left = e.clientX - ox + "px";
    root.style.top = e.clientY - oy + "px";
  };
  document.onmouseup = () => dragging = false;

  /* load main script */
  const s = document.createElement("script");
  s.src = "https://raw.githubusercontent.com/Igu2012/doom/main/index.js";
  s.async = true;
  document.head.appendChild(s);
})();
