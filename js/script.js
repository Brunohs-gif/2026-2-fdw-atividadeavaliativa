(function () {
  "use strict";

  function marcarLinkAtivo() {
    var caminhoAtual = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".amc-navbar .nav-link[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === caminhoAtual) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function configurarToggleDePlanos() {
    var grupo = document.getElementById("planosToggle");
    if (!grupo) return;

    var botoes = grupo.querySelectorAll(".amc-toggle-btn");
    var precos = document.querySelectorAll("[data-mensal]");
    var periodos = document.querySelectorAll("[data-periodo-mensal]");

    function aplicar(periodo) {
      precos.forEach(function (el) {
        var valor = periodo === "trimestral" ? el.getAttribute("data-trimestral") : el.getAttribute("data-mensal");
        if (valor) el.textContent = valor;
      });
      periodos.forEach(function (el) {
        var texto = periodo === "trimestral" ? el.getAttribute("data-periodo-trimestral") : el.getAttribute("data-periodo-mensal");
        if (texto) el.textContent = texto;
      });
      botoes.forEach(function (btn) {
        var ativo = btn.getAttribute("data-periodo") === periodo;
        btn.classList.toggle("active", ativo);
        btn.setAttribute("aria-pressed", ativo ? "true" : "false");
      });
    }

    botoes.forEach(function (btn) {
      btn.addEventListener("click", function () {
        aplicar(btn.getAttribute("data-periodo"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    marcarLinkAtivo();
    configurarToggleDePlanos();
  });
})();
