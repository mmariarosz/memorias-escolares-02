
// LISTA DAS 17 REDAÇÕES

const essays = [
    {
        number: 1,
        title: "Título da redação 01",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA PRIMEIRA REDAÇÃO.`
    },
    {
        number: 2,
        title: "Título da redação 02",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA SEGUNDA REDAÇÃO.`
    },
    {
        number: 3,
        title: "Título da redação 03",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA TERCEIRA REDAÇÃO.`
    },
    {
        number: 4,
        title: "Título da redação 04",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA QUARTA REDAÇÃO.`
    },
    {
        number: 5,
        title: "Título da redação 05",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA QUINTA REDAÇÃO.`
    },
    {
        number: 6,
        title: "Título da redação 06",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA SEXTA REDAÇÃO.`
    },
    {
        number: 7,
        title: "Título da redação 07",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA SÉTIMA REDAÇÃO.`
    },
    {
        number: 8,
        title: "Título da redação 08",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA OITAVA REDAÇÃO.`
    },
    {
        number: 9,
        title: "Título da redação 09",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA NONA REDAÇÃO.`
    },
    {
        number: 10,
        title: "Título da redação 10",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA REDAÇÃO.`
    },
    {
        number: 11,
        title: "Título da redação 11",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA PRIMEIRA REDAÇÃO.`
    },
    {
        number: 12,
        title: "Título da redação 12",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA SEGUNDA REDAÇÃO.`
    },
    {
        number: 13,
        title: "Título da redação 13",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA TERCEIRA REDAÇÃO.`
    },
    {
        number: 14,
        title: "Título da redação 14",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA QUARTA REDAÇÃO.`
    },
    {
        number: 15,
        title: "Título da redação 15",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA QUINTA REDAÇÃO.`
    },
    {
        number: 16,
        title: "Título da redação 16",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA SEXTA REDAÇÃO.`
    },
    {
        number: 17,
        title: "Título da redação 17",
        content: `COLE AQUI O TEXTO COMPLETO DA SUA DÉCIMA SÉTIMA REDAÇÃO.`
    }
];


// ELEMENTOS DO SITE

const essayGrid = document.getElementById("essayGrid");
const searchEssay = document.getElementById("searchEssay");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("essayModal");


// MOSTRAR AS REDAÇÕES

function renderEssays(filter = "") {

    const term = filter.toLocaleLowerCase("pt-BR");

    const filtered = essays.filter(essay =>
        `${essay.title} ${essay.number}`
            .toLocaleLowerCase("pt-BR")
            .includes(term)
    );

    essayGrid.innerHTML = "";

    filtered.forEach(essay => {

        const card = document.createElement("button");

        card.className = "essay-card";
        card.type = "button";

        card.innerHTML = `
            <span class="essay-num">
                REDAÇÃO ${String(essay.number).padStart(2, "0")}
            </span>

            <h3>${essay.title}</h3>

            <span>ABRIR LEITURA ↗</span>
        `;

        card.addEventListener("click", () => {
            openEssay(essay);
        });

        essayGrid.appendChild(card);

    });

    emptyState.hidden = filtered.length !== 0;
}


// ABRIR A REDAÇÃO

function openEssay(essay) {

    document.getElementById("modalNumber").textContent =
        `REDAÇÃO ${String(essay.number).padStart(2, "0")}`;

    document.getElementById("modalTitle").textContent =
        essay.title;

    document.getElementById("modalContent").textContent =
        essay.content;

    modal.showModal();
}


// PESQUISAR REDAÇÕES

searchEssay.addEventListener("input", event => {

    renderEssays(event.target.value);

});


// FECHAR A JANELA

document.getElementById("modalClose").addEventListener("click", () => {

    modal.close();

});

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.close();
    }

});


// MENU PARA CELULAR

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});

mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// INICIAR O SITE

renderEssays();
