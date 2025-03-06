const images = {
  HTML: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html5-logo-dom-markup-language-frontend-coding-lang-pack-logos-icons-7578018.png",
  CSS: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css3-html5-cascading-style-sheets-coding-lang-pack-logos-icons-7578024.png?f=webp",
  JS: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp",
};

const texts = {
  HTML: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.",
  CSS: "CSS (англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык декорирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.",
  JS: "JavaScript (англ. /ˈdʒɑːvəskrɪpt/; аббр. JS) — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262). JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
};

const tabs = document.querySelectorAll(".tabs input");
const image = document.querySelector("img");
const tabText = document.querySelector(".tabs-content p");

for (const tab of tabs) {
  tab.addEventListener("change", changeTab);
}

function renderTab(tabName) {
  image.setAttribute("src", images[tabName]);
  tabText.textContent = texts[tabName];
}

// hoisting - поднятие, всплытие, хоистинг
function changeTab(event) {
  renderTab(event.target.value);
}

renderTab("HTML");
