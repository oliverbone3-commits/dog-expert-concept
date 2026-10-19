// Общая оболочка сайта: меню разделов, оглавление страницы, дата и версия в шапке и подвале.
// Новую страницу добавляем в SITE, версию и дату страницы меняем тоже здесь — больше нигде их нет.
const SITE = [
  { title: "Проект", pages: [
    { id: "home", href: "index.html", title: "Главная" },
    { id: "concept", href: "concept.html", title: "Концепция", version: "09", date: "14.10.2026",
      desc: "Позиционирование, аудитория, продукт, партнёрская сеть, контент, Корея, экономика, форма бизнеса и чекпоинты." },
  ] },
  { title: "Работа", pages: [
    { id: "suppliers", href: "suppliers.html", title: "Поставщики", version: "08", date: "19.10.2026",
      desc: "Кого рассматриваем, приоритеты, статус переговоров, контакты и письма." },
    { id: "checklist", href: "checklist.html", title: "Чек-лист запуска", version: "03", date: "13.10.2026",
      desc: "Этапы от регистрации JDG и первой закупки до первых 90 дней, с отметками и заметками." },
    { id: "economics", href: "economics.html", title: "Экономика", version: "15", date: "14.10.2026",
      desc: "Сколько остаётся с заказа, сколько заказов нужно для нуля, план по месяцам, товары, корм и план Б, налоги, форма бизнеса и бухгалтер — простыми словами, подробности свёрнуты." },
    { id: "kits", href: "kits.html", title: "Наборы", version: "01", date: "19.10.2026",
      desc: "Наборы «товар + методика Даши» под отдельные лендинги: Spokojny Sylwester и Spacer bez ciągnięcia — рынок, поставщики, экономика, сроки, структура лендинга." },
  ] },
  { title: "Справка", pages: [
    { id: "import", href: "import.html", title: "Импорт", version: "02", date: "13.10.2026",
      desc: "Пошлина и НДС, обязанности импортёра, что нужно для собственного импорта." },
  ] },
];

(() => {
  const pageId = document.body.dataset.page;
  const pages = SITE.flatMap(g => g.pages);
  const page = pages.find(p => p.id === pageId) || pages[0];
  const meta = p => p.version ? `версия ${p.version} · ${p.date}` : "";
  const main = document.querySelector("main");
  if (!main.id) main.id = "main";

  const bar = document.createElement("header");
  bar.className = "bar no-print";
  bar.innerHTML = `<a class="skip" href="#${main.id}">К содержимому</a>
    <button class="btn" id="nav-open" aria-controls="side" aria-expanded="false">Меню</button>
    <span class="bar-title">${page.title}</span>`;

  const side = document.createElement("aside");
  side.className = "side no-print"; side.id = "side";
  side.innerHTML = `<div class="side-head"><a class="brand" href="index.html">рядом с собакой</a><button class="btn" id="nav-close">Закрыть</button></div>
    <nav aria-label="Разделы сайта">${SITE.map(g => `<p class="side-label">${g.title}</p><ul>${g.pages.map(p =>
      `<li><a href="${p.href}"${p.id === page.id ? ' aria-current="page"' : ""}>${p.title}</a></li>`).join("")}</ul>`).join("")}</nav>
    <nav aria-label="На этой странице" id="toc" hidden><p class="side-label">На этой странице</p><ul></ul></nav>`;

  const scrim = document.createElement("div");
  scrim.className = "scrim"; scrim.hidden = true;
  document.body.prepend(bar, side, scrim);

  // page header and footer take version and date from SITE
  const eyebrow = document.querySelector("[data-meta]");
  if (eyebrow && meta(page)) eyebrow.textContent += " · " + meta(page);
  const footer = document.createElement("footer");
  footer.className = "wrap";
  footer.innerHTML = `<span>Рядом с собакой · ${page.title.toLowerCase()}${meta(page) ? " · " + meta(page) : ""}</span>${page.id === "home" ? "" : `<a href="index.html">На главную</a>`}`;
  document.body.append(footer);

  const hub = document.getElementById("hub");
  if (hub) hub.innerHTML = SITE.flatMap(g => g.pages.filter(p => p.id !== "home").map(p =>
    `<a class="card hub-card" href="${p.href}"><span class="eyebrow">${g.title}</span><h2>${p.title}</h2><p>${p.desc}</p><span class="hub-meta">${meta(p)}</span></a>`)).join("");

  // drawer on narrow screens; on wide ones the sidebar is always visible
  const wide = matchMedia("(min-width: 1100px)");
  const openBtn = bar.querySelector("#nav-open");
  const setOpen = open => {
    document.body.classList.toggle("nav-open", open);
    openBtn.setAttribute("aria-expanded", String(open));
    scrim.hidden = !open;
    side.inert = !open && !wide.matches;
    if (open) (side.querySelector("[aria-current]") || side.querySelector("a")).focus(); else if (document.activeElement && side.contains(document.activeElement)) openBtn.focus();
  };
  setOpen(false);
  wide.addEventListener("change", () => setOpen(false));
  openBtn.addEventListener("click", () => setOpen(true));
  side.querySelector("#nav-close").addEventListener("click", () => setOpen(false));
  scrim.addEventListener("click", () => setOpen(false));
  side.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && document.body.classList.contains("nav-open")) setOpen(false); });

  // table of contents: every element with data-nav and an id; pages that re-render call site.toc() again
  let spy;
  const toc = () => {
    const nav = side.querySelector("#toc"), items = [...document.querySelectorAll("[data-nav][id]")];
    nav.hidden = items.length < 2;
    nav.querySelector("ul").innerHTML = items.map(el =>
      `<li><a href="#${el.id}"${el.dataset.navDone ? ' class="done"' : ""}>${el.dataset.nav}</a></li>`).join("");
    if (spy) spy.disconnect();
    spy = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      nav.querySelectorAll("a").forEach(a => a.classList.toggle("here", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-15% 0px -75% 0px" });
    items.forEach(el => spy.observe(el));
  };
  toc();
  // a closed <details> target opens when its link is followed
  side.querySelector("#toc").addEventListener("click", e => {
    const a = e.target.closest("a"); if (!a) return;
    const target = document.getElementById(a.getAttribute("href").slice(1));
    if (target && target.tagName === "DETAILS") target.open = true;
  });
  window.site = { toc };
})();
