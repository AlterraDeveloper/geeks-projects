const quotes = [
  {
    author: "Наполеон Хилл",
    text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
  },
  {
    author: "Альберт Эйнштейн",
    text: "Стремитесь не к успеху, а к ценностям, которые он дает",
  },
  {
    author: "Флоренс Найтингейл",
    text: "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
  },
  {
    author: "Майкл Джордан",
    text: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
  },
  {
    author: "Амелия Эрхарт",
    text: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
  },
  {
    author: "Федор Достоевский",
    text: "Надо любить жизнь больше, чем смысл жизни.",
  },
  {
    author: "Джон Леннон",
    text: "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
  },
  {
    author: "Альберт Эйнштейн",
    text: "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.",
  },
  {
    author: "Марк Твен",
    text: " Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!",
  },
  {
    author: "Борис Стругацкий",
    text: "Начинать всегда стоит с того, что сеет сомнения.",
  },

  {
    author: "Фазиль Искандер",
    text: "Настоящая ответственность бывает только личной. ",
  },
  {
    author: "Сократ",
    text: "Неосмысленная жизнь не стоит того, чтобы жить.",
  },
  {
    author: "Вуди Аллен",
    text: "80% успеха - это появиться в нужном месте в нужное время.",
  },
  {
    author: "Стив Джобс",
    text: "Ваше время ограничено, не тратьте его, живя чужой жизнью",
  },
  {
    author: "Винс Ломбарди, тренер по американскому футболу",
    text: "Победа - это еще не все, все - это постоянное желание побеждать.",
  },
  {
    author: "Иммануил Кант",
    text: "Наука — это организованные знания, мудрость — это организованная жизнь.",
  },
  {
    author: "Наполеон Бонапарт",
    text: "В моем словаре нет слова «невозможно».",
  },
];

function Quote(props) {
  return props.isLoading
    ? `<div class="quote skeleton">
        <img class="skeleton"/>
        <p class="quote-text skeleton"></p>
        <p class="quote-author skeleton"></p>
      </div>`
    : `<div class="quote">
            <img />
            <p class="quote-text">${props.text}</p>
            <p class="quote-author">${props.author}</p>
         </div>`;
}

function Page(props) {
  return `<div class="page ${props.currentPage === props.page && "selected"}">${
    props.page
  }</div>`;
}

function Pagination(props) {
  const pagesCount = Math.ceil(props.items.length / props.pageSize);
  const pages = Array.from({ length: pagesCount }, (e, i) => i + 1);
  return pages
    .map((page) => Page({ page, currentPage: props.currentPage }))
    .join("");
}

function QuotesList(props) {
  return props.quotes.map((quote) => Quote({...quote, isLoading: props.isLoading})).join("");
}

window.pagination = {
  currentPage: 1,
  pageSize: 3,
  items: quotes,
};

Array.prototype.skip = function (count) {
  return this.slice(count);
};

Array.prototype.take = function (count) {
  return this.slice(0, count);
};

const renderQuotes = () => {
  const { pageSize, currentPage, items } = { ...window.pagination };
  const quotes = items.skip((currentPage - 1) * pageSize).take(pageSize);
  const quotesList = document.querySelector(".quote-list");

  quotesList.innerHTML = QuotesList({ quotes: quotes, isLoading: true});

  setTimeout(() => {
    quotesList.innerHTML = QuotesList({ quotes: quotes, isLoading: false});
  }, 2500);
};

const renderPagination = () => {
  const pagination = document.querySelector(".pagination");
  pagination.innerHTML = Pagination(window.pagination);

  const pages = pagination.querySelectorAll(".page");
  pages.forEach((page, i) =>
    page.addEventListener("click", () => {
      window.pagination.currentPage = i + 1;
      renderPagination();
      renderQuotes();
    })
  );
};

renderPagination();
renderQuotes();
