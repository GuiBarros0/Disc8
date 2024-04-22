function initAnimacaoScroll() {
  const parceiros = document.querySelectorAll(".js-parceiros ul li");

  if (parceiros.length) {
    function animaScroll() {
      const windowMetade = window.innerHeight * 0.7;
      parceiros.forEach((parceiro, index) => {
        const parceiroTop = parceiro.getBoundingClientRect().top;
        const isParceiroVisible = parceiroTop - windowMetade < 0;

        if (isParceiroVisible) {
          setTimeout(() => {
            parceiro.classList.add("ativo");
          }, index * 200);
        }
      });
    }
  }

  const conteudos = document.querySelectorAll(".js-conteudo");

  if (conteudos.length) {
    function animaScrollConteudo() {
      const windowMetade = window.innerHeight * 0.6;
      conteudos.forEach((conteudo) => {
        const conteudoTop = conteudo.getBoundingClientRect().top;
        const isConteudoVisible = conteudoTop - windowMetade < 0;

        if (isConteudoVisible) {
          conteudo.classList.add("ativo");
        }
      });
    }
  }

  window.addEventListener("scroll", animaScroll);
  window.addEventListener("scroll", animaScrollConteudo);
}
initAnimacaoScroll();
