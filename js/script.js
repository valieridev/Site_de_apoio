document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        setTimeout(() => {
            header.classList.add("animar-entrada");
        }, 100);
    }

   
    const maos = document.querySelectorAll(".mao");
    setTimeout(() => {
        maos.forEach(mao => {
            mao.classList.add("animar-entrada");
        });
    }, 100);

    
    const imgPrincipal = document.querySelector("#mensagemprincipal");
    if (imgPrincipal) {
        setTimeout(() => {
            imgPrincipal.classList.add("animar-entrada");
        }, 100);
    }

    
    const containerButtons = document.querySelector(".container-buttons");
    if (containerButtons) {
        setTimeout(() => {
            containerButtons.classList.add("animar-entrada");
        }, 100);
    }

    const layoutMobile = document.querySelector(".layout-mobile");
    if (layoutMobile) {
        setTimeout(() => {
            layoutMobile.classList.add("animar-entrada");
        }, 100);
    }


   
    const h2 = document.querySelector(".container-textos h2");
    if (h2) {
        prepararEAnimarTexto(h2);
    }
});

/*animação texto do container textos*/

function prepararEAnimarTexto(h2) {
    let delayMs = 300; 
    const incrementoMs = 25; 

    function processarNo(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const texto = node.textContent;
            const fragment = document.createDocumentFragment();

            for (let char of texto) {
                const spanChar = document.createElement("span");
                spanChar.classList.add("letra");
                spanChar.textContent = char;
                spanChar.style.transitionDelay = `${delayMs}ms`;
                delayMs += incrementoMs;
                fragment.appendChild(spanChar);
            }
            node.parentNode.replaceChild(fragment, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(processarNo);
        }
    }

    Array.from(h2.childNodes).forEach(processarNo);

    setTimeout(() => {
        h2.classList.add("animar-texto");
    }, 50);
}

