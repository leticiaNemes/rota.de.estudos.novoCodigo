document.addEventListener("DOMContentLoaded", function () {

  configurarQuiz();
  configurarMetas();

});


/* =========================================
   QUIZ DE ORIENTAÇÃO PROFISSIONAL
========================================= */

function configurarQuiz() {

  const formQuiz = document.getElementById("formQuiz");

  if (!formQuiz) {
    return;
  }


  formQuiz.addEventListener("submit", function (evento) {

    evento.preventDefault();


    const respostasQuiz = [

      document.querySelector(
        'input[name="q1"]:checked'
      ).value,

      document.querySelector(
        'input[name="q2"]:checked'
      ).value,

      document.querySelector(
        'input[name="q3"]:checked'
      ).value,

      document.querySelector(
        'input[name="q4"]:checked'
      ).value,

      document.querySelector(
        'input[name="q5"]:checked'
      ).value

    ];


    const pontos = {};


    respostasQuiz.forEach(function (area) {

      if (!pontos[area]) {

        pontos[area] = 0;

      }

      pontos[area]++;

    });


    let maiorPontuacao = 0;


    Object.values(pontos).forEach(function (quantidade) {

      if (quantidade > maiorPontuacao) {

        maiorPontuacao = quantidade;

      }

    });


    const areasVencedoras = Object.keys(pontos).filter(
      function (area) {

        return pontos[area] === maiorPontuacao;

      }
    );


    mostrarResultadoQuiz(
      areasVencedoras
    );

  });

}



function mostrarResultadoQuiz(areas) {

  const resultado =
    document.getElementById("resultadoQuiz");


  resultado.classList.remove("escondido");


  if (areas.length === 1) {

    const area = areas[0];


    resultado.innerHTML = `

      <h3>Resultado do seu quiz</h3>

      <p>
        🎯 A área que apresentou maior afinidade
        com suas respostas foi:
      </p>

      <div class="area-quiz">
        ${area}
      </div>

      <p>
        Esse resultado é apenas uma orientação inicial.
        Você pode pesquisar mais sobre a área e testar
        atividades relacionadas antes de tomar
        uma decisão definitiva.
      </p>

      <button
        type="button"
        id="usarAreaQuiz"
        class="botao-principal"
      >
        Usar esta área no meu plano
      </button>

    `;


    document
      .getElementById("usarAreaQuiz")
      .addEventListener(
        "click",
        function () {

          usarAreaNoPlano(area);

        }
      );

  }

  else {

    resultado.innerHTML = `

      <h3>Resultado do seu quiz</h3>

      <p>
        Suas respostas mostraram afinidade
        com mais de uma área:
      </p>

      <ul>

        ${areas.map(
          function (area) {

            return `<li>${area}</li>`;

          }
        ).join("")}

      </ul>

      <p>
        Isso não é um problema.
        Significa que você possui interesses variados.
        Pesquise essas áreas e compare qual delas
        combina mais com seus objetivos.
      </p>

    `;

  }


  resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}



function usarAreaNoPlano(area) {

  const campoFaculdade =
    document.getElementById("faculdade");


  campoFaculdade.value = area;


  document
    .getElementById("plano")
    .scrollIntoView({
      behavior: "smooth"
    });


  campoFaculdade.focus();

}



/* =========================================
   METAS SEMANAIS
========================================= */

function configurarMetas() {

  const botaoAdicionar =
    document.getElementById(
      "botaoAdicionarMeta"
    );

  const campoMeta =
    document.getElementById(
      "novaMeta"
    );


  if (!botaoAdicionar || !campoMeta) {

    return;

  }


  botaoAdicionar.addEventListener(
    "click",
    adicionarMeta
  );


  campoMeta.addEventListener(
    "keydown",
    function (evento) {

      if (evento.key === "Enter") {

        evento.preventDefault();

        adicionarMeta();

      }

    }
  );


  carregarMetasSalvas();

}



function adicionarMeta() {

  const campoMeta =
    document.getElementById(
      "novaMeta"
    );


  const texto =
    campoMeta.value.trim();


  if (texto === "") {

    alert(
      "Digite uma meta antes de adicionar."
    );

    campoMeta.focus();

    return;

  }


  const metas =
    carregarMetas();


  const novaMeta = {

    id: Date.now(),

    texto: texto,

    concluida: false

  };


  metas.push(novaMeta);


  salvarMetas(metas);


  campoMeta.value = "";


  carregarMetasSalvas();


  campoMeta.focus();

}



function carregarMetas() {

  const dados =
    localStorage.getItem(
      "metasEstudo"
    );


  if (!dados) {

    return [];

  }


  try {

    return JSON.parse(dados);

  }

  catch (erro) {

    return [];

  }

}



function salvarMetas(metas) {

  localStorage.setItem(

    "metasEstudo",

    JSON.stringify(metas)

  );

}



function carregarMetasSalvas() {

  const lista =
    document.getElementById(
      "listaMetas"
    );


  const resumo =
    document.getElementById(
      "resumoMetas"
    );


  if (!lista || !resumo) {

    return;

  }


  const metas =
    carregarMetas();


  const concluidas =
    metas.filter(
      function (meta) {

        return meta.concluida;

      }
    ).length;


  resumo.textContent =
    `${concluidas} de ${metas.length} metas concluídas`;


  if (metas.length === 0) {

    lista.innerHTML = `

      <p class="sem-metas">
        Você ainda não criou nenhuma meta.
      </p>

    `;

    return;

  }


  lista.innerHTML =
    metas.map(
      function (meta) {

        return `

          <div
            class="meta-card
            ${meta.concluida ? "meta-concluida" : ""}"
          >

            <div class="meta-conteudo">

              <input
                type="checkbox"
                class="checkbox-meta"
                data-id="${meta.id}"
                ${meta.concluida ? "checked" : ""}
              >

              <span>
                ${meta.texto}
              </span>

            </div>


            <button
              type="button"
              class="botao-excluir-meta"
              data-id="${meta.id}"
            >
              Excluir
            </button>

          </div>

        `;

      }
    ).join("");


  configurarBotoesMetas();

}



function configurarBotoesMetas() {

  const checkboxes =
    document.querySelectorAll(
      ".checkbox-meta"
    );


  checkboxes.forEach(
    function (checkbox) {

      checkbox.addEventListener(
        "change",
        function () {

          const id =
            Number(
              checkbox.dataset.id
            );


          alternarMeta(id);

        }
      );

    }
  );


  const botoesExcluir =
    document.querySelectorAll(
      ".botao-excluir-meta"
    );


  botoesExcluir.forEach(
    function (botao) {

      botao.addEventListener(
        "click",
        function () {

          const id =
            Number(
              botao.dataset.id
            );


          excluirMeta(id);

        }
      );

    }
  );

}



function alternarMeta(id) {

  const metas =
    carregarMetas();


  const metasAtualizadas =
    metas.map(
      function (meta) {

        if (meta.id === id) {

          return {

            ...meta,

            concluida:
              !meta.concluida

          };

        }


        return meta;

      }
    );


  salvarMetas(
    metasAtualizadas
  );


  carregarMetasSalvas();

}



function excluirMeta(id) {

  const metas =
    carregarMetas();


  const metasAtualizadas =
    metas.filter(
      function (meta) {

        return meta.id !== id;

      }
    );


  salvarMetas(
    metasAtualizadas
  );


  carregarMetasSalvas();

}
