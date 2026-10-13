// Единственный источник цифр для страницы «Экономика»: курсы, допущения, позиции, структура продаж и цели.
// Новый прайс или цену правим только здесь; правки в полях на странице живут в браузере того, кто их сделал.
const ECON = {
  updated: "13.10.2026",

  // вводные калькулятора: key — имя в расчёте, unit "%" хранится как доля
  inputs: [
    { group: "Курсы", items: [
      { key: "uah", label: "UAH → PLN", value: 0.0885, digits: 4, src: "Средний курс NBP 13.10.2026 — 0,0868, плюс 2% на конвертацию" },
      { key: "krw", label: "KRW → PLN", value: 0.00298, digits: 5, src: "Средний курс NBP 13.10.2026 — 0,002922, плюс 2% на конвертацию" },
    ] },
    { group: "Закупка и ввоз", items: [
      { key: "discUa", label: "Украина: скидка опта от розницы бренда", value: 0, unit: "%", src: "Решение 13.10.2026: считаем по украинской рознице, опт пойдёт в плюс" },
      { key: "discKr", label: "Корея: скидка опта от розницы бренда", value: 0.45, unit: "%", guess: true, src: "Допущение: прайса дистрибьютора Merlot пока нет" },
      { key: "frUa", label: "Украина: доставка и оформление, от закупки", value: 0.08, unit: "%", guess: true, src: "Оценка" },
      { key: "frKr", label: "Корея: доставка и оформление, от закупки", value: 0.15, unit: "%", guess: true, src: "Оценка" },
      { key: "dutyUa", label: "Украина: пошлина", value: 0, unit: "%", guess: true, src: "0% при подтверждённом происхождении, иначе около 2,7% — см. «Импорт»" },
      { key: "dutyKr", label: "Корея: пошлина", value: 0, unit: "%", guess: true, src: "0% при декларации происхождения, иначе около 2,7% — см. «Импорт»" },
      { key: "vat", label: "Ставка VAT", value: 0.23, unit: "%", src: "Стандартная ставка в Польше" },
    ] },
    { group: "Расходы на заказ", items: [
      { key: "pay", label: "Платёжный провайдер, от оплаты", value: 0.015, unit: "%", guess: true, src: "Оценка, не тариф конкретного провайдера" },
      { key: "payFix", label: "Платёжный провайдер, фикс за заказ", value: 0.3, unit: "zł", digits: 2, guess: true, src: "Оценка" },
      { key: "pack", label: "Упаковка и открытка", value: 3, unit: "zł", guess: true, src: "Оценка" },
      { key: "exShare", label: "Доля заказов с обменом размера", value: 0.15, unit: "%", guess: true, src: "Оценка; возвраты в зоотоварах около 12%" },
      { key: "exCost", label: "Стоимость одного обмена", value: 28, unit: "zł", guess: true, src: "Оценка: две пересылки InPost" },
      { key: "freeFrom", label: "Порог бесплатной доставки", value: 250, unit: "zł", src: "Гипотеза из концепции" },
      { key: "deliv", label: "Доставка заказа за счёт магазина", value: 14, unit: "zł", guess: true, src: "Оценка по тарифу InPost" },
    ] },
    { group: "Партнёрская программа", items: [
      { key: "pShare", label: "Доля заказов по коду партнёра", value: 0.4, unit: "%", guess: true, src: "Допущение: партнёры и своя аудитория — основной канал" },
      { key: "pDisc", label: "Скидка клиенту по коду", value: 0.1, unit: "%", guess: true, src: "Черновик условий из концепции" },
      { key: "pComm", label: "Комиссия партнёра", value: 0.1, unit: "%", guess: true, src: "Черновик условий из концепции" },
    ] },
    { group: "Польская база", items: [
      { key: "plAov", label: "Средний заказ", value: 150, unit: "zł", src: "Допущение из концепции" },
      { key: "plGm", label: "Валовая маржа от выручки без VAT", value: 0.4, unit: "%", guess: true, src: "Допущение из концепции; оптовых цен польской базы пока нет" },
    ] },
    { group: "Постоянные расходы в месяц", items: [
      { key: "platform", label: "Платформа магазина", value: 150, unit: "zł", guess: true, src: "Оценка: базовый тариф готовой платформы" },
      { key: "acc", label: "Бухгалтерия sp. z o.o.", value: 700, unit: "zł", guess: true, src: "Оценка; уточнить у бухгалтера" },
      { key: "adsDay", label: "Реклама в день", value: 30, unit: "zł", src: "Середина решённого диапазона 10–50 zł" },
      { key: "other", label: "Прочее: домен, сервисы, связь", value: 150, unit: "zł", guess: true, src: "Оценка" },
    ] },
    { group: "Ориентиры", items: [
      { key: "target", label: "Целевая валовая маржа на импорте", value: 0.45, unit: "%", guess: true, src: "Цель для переговоров" },
      { key: "ceiling", label: "Потолок чистой ниши, оборот в год", value: 1000000, unit: "zł", src: "Bowl&Bone: 0,8–1,0 млн zł в год" },
    ] },
  ],
  vatPayer: false, // старт с освобождением по обороту; решает бухгалтер

  // home — розничная цена бренда у себя дома; pl — наша цена в Польше с VAT (предложение);
  // sized — размерный товар (резерв на обмен); main — основной товар заказа, а не добавка; on — входит в средние по источнику
  items: [
    { src: "Украина", brand: "BioIntellect", name: "Поводок облегчённый 3 м, до 10 кг", home: 1265, cur: "UAH", pl: 129, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Поводок классический 3 м", home: 1550, cur: "UAH", pl: 139, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Перестёжка «свободные руки», до 10 кг", home: 1620, cur: "UAH", pl: 169, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Анатомическая шлейка S/M", home: 1250, cur: "UAH", pl: 149, sized: 1, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Ошейник S, 16 мм", home: 580, cur: "UAH", pl: 69, sized: 1, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Бандана светоотражающая", home: 255, cur: "UAH", pl: 39, sized: 0, main: 0, on: 0 },
    { src: "Украина", brand: "IPO4YOU", name: "Шлейка ASTA", home: 1500, cur: "UAH", pl: 249, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Мембранный комбинезон Monocolor", home: 2321, cur: "UAH", pl: 399, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Мембранная попона", home: 1980, cur: "UAH", pl: 349, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Сумочка для лакомств", home: 600, cur: "UAH", pl: 99, sized: 0, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Дождевик для такс", home: 745, cur: "UAH", pl: 149, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Зимний комбинезон для такс", home: 920, cur: "UAH", pl: 179, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Дождевик для крупных собак", home: 1175, cur: "UAH", pl: 219, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Поводок Hands Free", home: 510, cur: "UAH", pl: 99, sized: 0, main: 1, on: 1 },
    { src: "Украина", brand: "Pet Fashion", name: "Комбинезон COLD", home: 593, cur: "UAH", pl: 119, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Pet Fashion", name: "Жилет E.Vest", home: 607, cur: "UAH", pl: 119, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "ЛавГав", name: "Месячный запас пакетов из крахмала", home: 130, cur: "UAH", pl: 25, sized: 0, main: 0, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Шлейка Ardor", home: 62000, cur: "KRW", pl: 259, sized: 1, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Поводок Ardor", home: 46800, cur: "KRW", pl: 189, sized: 0, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Дождевик Ain Coat", home: 126000, cur: "KRW", pl: 499, sized: 1, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Комбинезон Ain Suit", home: 162000, cur: "KRW", pl: 649, sized: 1, main: 1, on: 1 },
  ],

  // доля заказов по источникам на каждом этапе; корейский ассортимент появляется после чекпоинта на 6-м месяце
  sources: ["Польская база", "Украина", "Корея"],
  stages: [
    { title: "Этап 1", months: "мес. 1–3", mix: [0.75, 0.25, 0] },
    { title: "Этап 2", months: "мес. 4–6", mix: [0.6, 0.4, 0] },
    { title: "Этап 3", months: "мес. 7–12", mix: [0.5, 0.4, 0.1] },
  ],
  stageOfMonth: [0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2],

  // заказы в месяц: 6-й месяц — из сценариев концепции, остальная траектория предложена
  scenarios: [
    { id: "weak", title: "Слабо", orders: [5, 8, 12, 15, 18, 20, 22, 24, 26, 28, 30, 32] },
    { id: "normal", title: "Нормально", orders: [10, 20, 30, 45, 60, 75, 85, 95, 110, 125, 140, 150] },
    { id: "max", title: "Максимум", orders: [25, 50, 90, 130, 170, 200, 230, 260, 290, 320, 350, 380] },
  ],
  repeat: [0, 0.05, 0.1, 0.12, 0.15, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3],
  checkpoints: [
    { title: "Перед запуском", month: null, partners: "3–5 основателей" },
    { title: "~2 месяца после запуска", month: 2, partners: "4" },
    { title: "6-й месяц, перед корейской закупкой", month: 6, partners: "5–6" },
    { title: "12-й месяц", month: 12, partners: "10–12" },
  ],

  // розница в польских магазинах, проверено поиском 13.10.2026 — ориентир для наших цен
  market: [
    { what: "Поводок BioThane 3 м / 16 мм", price: "30–110 zł", note: "Простые тренировочные 30–55 zł; DOGCESSORIES, Puppy-toys, TipTop24 — 100–110 zł" },
    { what: "Шлейка Ruffwear Front Range", price: "210–249 zł", note: "8a.pl, размеры S и M" },
    { what: "Дождевик для собаки, бренд", price: "300–440 zł", note: "Decathlon: Kentucky 302 zł, Ruffwear Sun Shower 345 zł, Ruffwear Vert 438 zł; Barbour 349 zł" },
    { what: "Дождевик Non-stop Dogwear", price: "60–90 €", note: "Trekking Raincoat и Fjord Raincoat 2.0, varuste.net" },
    { what: "Сумочка для лакомств", price: "25–90 zł", note: "Trixie 32 zł, Ferplast 48 zł, Hunter 89 zł; премиум Kurgo и Ruffwear — 267–321 zł" },
    { what: "Компостируемые пакеты", price: "около 30 zł за 135 шт", note: "Объявление на sprzedajemy.pl; StarchBag — с сертификатом OK compost HOME, цена не найдена" },
  ],
};
