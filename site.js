// Abas do cardápio (teclado: setas esquerda/direita).
const abas = [...document.querySelectorAll('[role="tab"]')];
function abrir(aba) {
  abas.forEach((a) => {
    const ativa = a === aba;
    a.setAttribute("aria-selected", String(ativa));
    a.tabIndex = ativa ? 0 : -1;
    document.getElementById(a.getAttribute("aria-controls")).hidden = !ativa;
  });
}
abas.forEach((a, i) => {
  a.tabIndex = i === 0 ? 0 : -1;
  a.addEventListener("click", () => abrir(a));
  a.addEventListener("keydown", (ev) => {
    const d = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const prox = abas[(i + d + abas.length) % abas.length];
    abrir(prox); prox.focus();
  });
});
