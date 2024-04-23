class Article {
    main = false;
    img = "images/";
    title = "Article title";
    link = "pages/";
    constructor(m,i,t,l) {
        this.main = m;
        this.img = i;
        this.title = t;
        this.link = l;
    }
}

let societateArticles = [
    new Article(true,"https://i.simpalsmedia.com/point.md/news/900x900/19c77f39e4789b1a0de6bb0bac1ccba6.jpg","Началась уборка на мемориальном комплексе \"Вечность\"","pages/ru/societate/curatenia-a-inceput-la-complexul-memorial-eternitate.html"),
    new Article(false,"https://i.simpalsmedia.com/point.md/news/900x900/f244d2b9ec0b59cfd865f2ace35e6705.jpg","Раскрыта преступная группа, занимающаяся мошенническими финансовыми операциями","pages/ru/societate/un-grup-criminal-implicat-in-tranzactii-financiare-frauduloase-a-fost-descoperit.html")
];

let inLumeArticles = [
    new Article(true,"https://i.simpalsmedia.com/point.md/news/900x900/7f042914c83c54a3ba9ab29604bfbdac.jpg","Жара в Европе становится настолько сильной, что человеческий организм не справляется с нагрузкой","pages/ru/in-lume/caldura-in-europa-devine-atat-de-intensa-incat-corpul-uman-nu-poate-face-fata-sarcinii.html"),
    new Article(false,"https://i.simpalsmedia.com/point.md/news/900x900/3e3d8e8b0791fcfb0e2689313717f968.jpg","Названа дата выхода второго сезона сериала «Игра в кальмара»","pages/ru/in-lume/data-lansarii-celui-de-al-doilea-sezon-al-serialului-squid-game-a-fost-anuntata.html")
];

let politicaArticles = [
    new Article(true,"https://i.simpalsmedia.com/point.md/news/900x900/a2ce1b2ee8e8493ea716d64afc9a8865.jpg","МВД Румынии не может дать информацию о запрете на въезд 116 гражданам Молдовы","pages/ru/politica/ministerul-afacerilor-interne-nu-poate-oferi-informatii-despre-interdictia-de-intrare-pentru-116-cetateni-ai-republicii-moldova.html"),
    new Article(false,"https://i.simpalsmedia.com/point.md/news/900x900/697824f955f13276370a04fbf829383f.jpg","Начинается предвыборная кампания на новых и частичных местных выборах","pages/ru/politica/incepe-campania-pre-electorala-pentru-alegeri-locale-noi-si-partiale.html")
];

let incidenteArticles = [
    new Article(true,"https://i.simpalsmedia.com/point.md/news/900x900/7b39462fd646a837fbe1031dee78fc53.jpg","Уровень воды в реке Днестр стремительно растет","pages/ru/incidente/nivelul-apei-in-raul-nistru-creste-rapid.html"),
    new Article(false,"https://i.simpalsmedia.com/point.md/news/900x900/31648383882e4cabb3a1ae9f39665072.jpg","Спасатели поймали змею в столичном секторе Чеканы","pages/ru/incidente/salvatorii-au-prins-un-sarpe-in-sectorul-cecani-al-capitalei.html")
];

let economicaArticles = [
    new Article(true,"https://i.simpalsmedia.com/point.md/news/900x900/5ea9b60028827ab5507c067e9ec67730.jpg","Более 100 млн леев переведено через Instant Payments MIA менее чем за 6 недель","pages/ru/in-lume/peste-100-de-milioane-de-lei-transferati-prin-instant-payments-mia-in-mai-putin-de-6-saptamani.html"),
    new Article(false,"https://i.simpalsmedia.com/point.md/news/900x900/f6077c384a4d9a4cd2c493d5aabec36d.jpg","Молдова хочет возродить электронную промышленность","pages/ru/in-lume/moldova-vrea-sa-revigoreze-industria-electronica.html")
];

let Articles = societateArticles.concat(economicaArticles,politicaArticles,incidenteArticles,inLumeArticles);


function burgerShow() {
    document.querySelector('aside').classList.toggle('show');
}

function toateShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const toate = document.querySelector('#toate');
    toate.classList.add('active');

    renewSite();

    const numberOfArticles = Articles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(Articles[i].main === true) 
            getMainArticle(Articles[i].img,Articles[i].title,Articles[i].link);
        else
            getArticle(Articles[i].img,Articles[i].title,Articles[i].link);
    }

    burgerShow();
}

function societateShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const societate = document.querySelector('#societate');
    societate.classList.add('active');

    renewSite();

    const numberOfArticles = societateArticles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(societateArticles[i].main === true) 
            getMainArticle(societateArticles[i].img,societateArticles[i].title,societateArticles[i].link);
        else
            getArticle(societateArticles[i].img,societateArticles[i].title,societateArticles[i].link);
    }

    burgerShow();
}

function inLumeShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const lume = document.querySelector('#lume');
    lume.classList.add('active');

    renewSite();

    const numberOfArticles = inLumeArticles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(inLumeArticles[i].main === true) 
            getMainArticle(inLumeArticles[i].img,inLumeArticles[i].title,inLumeArticles[i].link);
        else
            getArticle(inLumeArticles[i].img,inLumeArticles[i].title,inLumeArticles[i].link);
    }

    burgerShow();
}

function politicaShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const politica = document.querySelector('#politica');
    politica.classList.add('active');

    renewSite();

    const numberOfArticles = politicaArticles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(politicaArticles[i].main === true) 
            getMainArticle(politicaArticles[i].img,politicaArticles[i].title,politicaArticles[i].link);
        else
            getArticle(politicaArticles[i].img,politicaArticles[i].title,politicaArticles[i].link);
    }

    burgerShow();
}

function incidenteShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const incidente = document.querySelector('#incidente');
    incidente.classList.add('active');

    renewSite();

    const numberOfArticles = incidenteArticles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(incidenteArticles[i].main === true) 
            getMainArticle(incidenteArticles[i].img,incidenteArticles[i].title,incidenteArticles[i].link);
        else
            getArticle(incidenteArticles[i].img,incidenteArticles[i].title,incidenteArticles[i].link);
    }

    burgerShow();
}

function economicaShow() {
    const previousActive = document.querySelector('.active');
    previousActive.classList.remove('active');

    const economica = document.querySelector('#economica');
    economica.classList.add('active');

    renewSite();

    const numberOfArticles = economicaArticles.length;
    for(let i = 0; i < numberOfArticles; i++) {
        if(economicaArticles[i].main === true) 
            getMainArticle(economicaArticles[i].img,economicaArticles[i].title,economicaArticles[i].link);
        else
            getArticle(economicaArticles[i].img,economicaArticles[i].title,economicaArticles[i].link);
    }

    burgerShow();
}

function renewSite() {
    const main = document.querySelector('.main');
    main.innerHTML = "<div class=\"adds\"><div class=\"add\">Reclama</div></div>";

    const articles = document.createElement('div');
    articles.classList.add('articles');

    main.append(articles);
    
}

function getMainArticle(src, title, attribute) {
    const main = document.querySelector(".main");

    const articles = document.querySelector(".articles");
    const previousMainArticle = document.querySelector(".main-article");
    if(previousMainArticle !== null){
        previousMainArticle.classList.remove("main-article");
        previousMainArticle.classList.add("article");
        previousMainArticle.remove();
        articles.prepend(previousMainArticle);
    }
    
    const mainArticle = document.createElement('a');
    mainArticle.href = attribute;
    mainArticle.classList.add('main-article');
    const mainArticleImage = document.createElement("img");
    mainArticleImage.src = src;
    const mainArticleTitle = document.createElement("div");
    mainArticleTitle.classList.add("title");

    mainArticleTitle.innerText = title;

    mainArticle.append(mainArticleImage, mainArticleTitle);
    
    main.prepend(mainArticle);
}

function getArticle(src, title, attribute){
    const articles = document.querySelector(".articles");
    
    const Article = document.createElement('a');
    Article.setAttribute('href', attribute);
    Article.classList.add('article');
    const ArticleImage = document.createElement("img");
    ArticleImage.src=src;
    const ArticleTitle = document.createElement("div");
    ArticleTitle.classList.add("title");

    ArticleTitle.innerText = title;

    Article.append(ArticleImage, ArticleTitle);
    
    articles.append(Article);
}

toateShow();
toateShow();
