if(window.__MINI_UI__)return;window.__MINI_UI__=true;
const s=document.createElement("style");
s.textContent=`#mini-ui{position:fixed;top:80px;left:80px;width:260px;background:#0b0b0b;color:#fff;font-family:monospace;border-radius:10px;box-shadow:0 0 25px rgba(255,0,0,.4);z-index:999999}
#mini-ui header{background:#120000;padding:8px;cursor:move;font-weight:bold;color:#ff2a2a;border-radius:10px 10px 0 0}
#mini-ui main{padding:10px}
#mini-ui button{width:100%;background:#ff2a2a;border:none;padding:6px;color:#000;border-radius:6px;cursor:pointer}
#mini-ui button:hover{filter:brightness(1.2)}`;
document.head.appendChild(s);
const ui=document.createElement("div");
ui.id="mini-ui";
ui.innerHTML=`<header>Mini Console UI</header><main><button id="runBtn">Executar</button></main>`;
document.body.appendChild(ui);
let d=false,ox=0,oy=0;
const h=ui.querySelector("header");
h.onmousedown=e=>{d=true;ox=e.clientX-ui.offsetLeft;oy=e.clientY-ui.offsetTop};
document.onmouseup=()=>d=false;
document.onmousemove=e=>{if(!d)return;ui.style.left=e.clientX-ox+"px";ui.style.top=e.clientY-oy+"px"};
document.getElementById("runBtn").onclick=()=>alert("Rodando");