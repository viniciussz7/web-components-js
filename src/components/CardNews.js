class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("linkTitle");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("newsContent");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = (this.getAttribute("img-src") || "https://th.bing.com/th/id/R.3b6d50e81c838e5a9decea03d0b5a90b?rik=DLDOttmumnWPsA&pid=ImgRaw&r=0");
        newsImage.alt = (this.getAttribute("img-alt") || "Imagem da noticia");
        newsImage.width = "400";
        newsImage.height = "200";
        
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                background-color: #fff;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                max-width: 80vh;
                margin: 1rem;
                box-shadow: 3px 5px 26px 3px rgba(0,0,0,0.41);
                -webkit-box-shadow: 3px 5px 26px 3px rgba(0,0,0,0.41);
                -moz-box-shadow: 3px 5px 26px 3px rgba(0,0,0,0.41);
                }
            
            .card__left {
                padding-left: 1rem;
                padding-right: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .card__left > span {
                font-weight: 500;
            }
            
            .card__left > a {
                text-decoration: none;
                color: #000;
                font-weight: bold;
                font-size: 2rem;
                margin-top: 1rem;
            }
            
            .card__left > p {
                color: gray;
            }
            
            .card__right {
                padding: 1rem;
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);