(function () {
  if (window.__doom_loader_loaded) return;
  window.__doom_loader_loaded = true;

  const SCRIPT_URL = "https://raw.githubusercontent.com/Igu2012/doom/main/index.js";

  const s = document.createElement("script");
  s.src = SCRIPT_URL;
  s.async = true;
  document.head.appendChild(s);
})();
