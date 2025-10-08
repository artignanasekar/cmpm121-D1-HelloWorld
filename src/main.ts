// src/main.ts
const root = document.querySelector<HTMLDivElement>("#app")!;
const statusEl = document.querySelector<HTMLParagraphElement>("#status")!;

const btn = document.createElement("button");
btn.id = "helloBtn";
btn.textContent = "👋 Say Hello";
btn.addEventListener("click", () => {
  const now = new Date().toLocaleTimeString();
  statusEl.textContent = `Hello, World! (clicked at ${now})`;
  btn.disabled = true;
  btn.textContent = "✅ Hello sent";
});

root.appendChild(btn);
