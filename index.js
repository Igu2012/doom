function loadWasm() {
  const req = fetch("doom.wasm", { cache: "no-store" });

  return WebAssembly.instantiateStreaming(req, importObject)
    .catch(async () => {
      const resp = await fetch("doom.wasm", { cache: "no-store" });
      const buf = await resp.arrayBuffer();
      return WebAssembly.instantiate(buf, importObject);
    });
}
