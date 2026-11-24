(function () {
  "use strict";

  // Envia um formulário para um arquivo PHP usando fetch (insert no banco)
  function enviarForm(idForm, urlPhp, aoSucesso) {
    var form = document.getElementById(idForm);
    if (!form) return;
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      try {
        var resp = await fetch(urlPhp, { method: "POST", body: new FormData(form) });
        var dados = await resp.json();
        if (dados.ok) {
          alert("Enviado com sucesso!");
          form.reset();
          if (aoSucesso) aoSucesso();
        } else {
          alert(dados.erro || "Erro ao enviar.");
        }
      } catch (err) {
        alert("Erro de comunicação com o servidor.");
      }
    });
  }

  // Evita que texto digitado vire HTML na página (proteção contra XSS)
  function escaparHtml(texto) {
    var div = document.createElement("div");
    div.textContent = texto == null ? "" : texto;
    return div.innerHTML;
  }

  // LISTAGEM: depoimentos vindos do banco
  async function carregarDepoimentos() {
    var lista = document.getElementById("lista-depoimentos");
    if (!lista) return;
    try {
      var resp = await fetch("php/listar_depoimentos.php");
      var dados = await resp.json();
      lista.innerHTML = dados.map(function (d) {
        return '<div class="col-md-6 col-lg-4">' +
          '<div class="amc-testimonial card p-4">' +
            '<div class="d-flex align-items-center gap-3 mb-3">' +
              '<img src="' + escaparHtml(d.foto) + '" alt="Avatar de ' + escaparHtml(d.nome) + '">' +
              '<div>' +
                '<p class="fw-bold mb-0">' + escaparHtml(d.nome) + '</p>' +
                '<p class="small text-white-50 mb-0">' + escaparHtml(d.perfil) + ' · ' + escaparHtml(d.data) + '</p>' +
              '</div>' +
            '</div>' +
            '<blockquote class="mb-0">"' + escaparHtml(d.texto) + '"</blockquote>' +
          '</div>' +
        '</div>';
      }).join("");
    } catch (err) {
      lista.innerHTML = '<p class="text-center">Não foi possível carregar os depoimentos.</p>';
    }
  }

  // LISTAGEM: posts do blog vindos do banco
  async function carregarPosts() {
    var lista = document.getElementById("lista-posts");
    if (!lista) return;
    try {
      var resp = await fetch("php/listar_posts.php");
      var dados = await resp.json();
      lista.innerHTML = dados.map(function (p, i) {
        var invertido = i % 2 === 1;
        var fonte = p.fonte_url
          ? '<p class="small text-muted">Fonte de referência: <a href="' + escaparHtml(p.fonte_url) + '" target="_blank" rel="noopener">' + escaparHtml(p.fonte_nome) + '</a></p>'
          : "";
        return '<article id="artigo-' + (i + 1) + '" class="amc-article-card card border-0 mb-5">' +
          '<div class="row g-0">' +
            '<div class="col-md-5' + (invertido ? ' order-md-2' : '') + '">' +
              '<img src="' + escaparHtml(p.imagem) + '" class="img-fluid h-100 w-100" alt="' + escaparHtml(p.imagem_alt) + '">' +
            '</div>' +
            '<div class="col-md-7' + (invertido ? ' order-md-1' : '') + '">' +
              '<div class="card-body h-100 d-flex flex-column justify-content-center p-4 p-md-5">' +
                '<h2 class="h3">' + escaparHtml(p.titulo) + '</h2>' +
                '<p class="amc-article-meta mb-3">Por ' + escaparHtml(p.autor) + ' · ' + escaparHtml(p.data) + '</p>' +
                '<p>' + escaparHtml(p.conteudo) + '</p>' + fonte +
              '</div>' +
            '</div>' +
          '</div>' +
        '</article>';
      }).join("");
    } catch (err) {
      lista.innerHTML = '<p class="text-center">Não foi possível carregar os posts.</p>';
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    enviarForm("form-contato", "php/salvar_contato.php");
    enviarForm("form-depoimento", "php/salvar_depoimento.php", carregarDepoimentos);
    carregarDepoimentos();
    carregarPosts();
  });
})();
