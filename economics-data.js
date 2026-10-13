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
      { key: "pack", label: "Упаковка и открытка с именем собаки", value: 3, unit: "zł", guess: true, src: "Оценка; открытка — из концепции" },
      { key: "gift", label: "Подарок в посылке: пакеты и памятка", value: 2, unit: "zł", guess: true, src: "Концепция, «Подарки и сертификаты»; сумма — оценка" },
      { key: "loyal", label: "Лояльность на заказ: день рождения собаки, бонус за фото", value: 2, unit: "zł", guess: true, src: "Концепция, «Поводы написать» и «Мотивация клиентов»; сумма — оценка" },
      { key: "exShare", label: "Доля заказов с обменом размера", value: 0.15, unit: "%", guess: true, src: "Оценка; возвраты в зоотоварах около 12%" },
      { key: "exOurs", label: "Из них по нашей ошибке (обе пересылки за нами)", value: 0.3, unit: "%", guess: true, src: "Концепция: обычно магазин платит повторную отправку, при своей ошибке — обе; доля — оценка" },
      { key: "retShare", label: "Доля отказов от покупки за 14 дней", value: 0.05, unit: "%", guess: true, src: "Концепция, сервисная политика; доля — оценка. Теряем доставку, упаковку и подарок" },
      { key: "freeFrom", label: "Порог бесплатной доставки", value: 250, unit: "zł", src: "Гипотеза из концепции" },
      { key: "deliv", label: "Доставка заказа за счёт магазина", value: 14, unit: "zł", guess: true, src: "Оценка по тарифу InPost" },
    ] },
    { group: "Партнёрская программа", items: [
      { key: "pShare", label: "Доля заказов по коду партнёра", value: 0.4, unit: "%", guess: true, src: "Допущение: партнёры и своя аудитория — основной канал" },
      { key: "pDisc", label: "Скидка клиенту по коду", value: 0.1, unit: "%", guess: true, src: "Черновик условий из концепции" },
      { key: "pComm", label: "Комиссия партнёра", value: 0.1, unit: "%", guess: true, src: "Черновик условий из концепции" },
      { key: "refShare", label: "Доля заказов «приведи друга»", value: 0.05, unit: "%", guess: true, src: "Концепция, «Клиент приводит клиента»; доля — оценка" },
      { key: "refDisc", label: "Скидка другу и такая же — приведшему", value: 0.1, unit: "%", guess: true, src: "Концепция: «подарите другу −X, получите −X»; размер — оценка" },
    ] },
    { group: "Польская база", items: [
      { key: "plGm", label: "Наша доля в розничной цене без VAT", value: 0.4, unit: "%", guess: true, src: "Допущение из концепции (маржа 40%); оптовых цен польской базы пока нет" },
      { key: "plBasket", label: "Основных товаров в заказе", value: 1.4, digits: 1, guess: true, src: "Допущение: с ним средний заказ выходит около 150 zł, как в концепции" },
    ] },
    { group: "Постоянные расходы в месяц", items: [
      { key: "platform", label: "Платформа магазина", value: 150, unit: "zł", guess: true, src: "Оценка: базовый тариф готовой платформы" },
      { key: "acc", label: "Бухгалтерия sp. z o.o.", value: 970, unit: "zł", src: "ifirma: 790 zł нетто при 16–20 расходных документах, с VAT 972 zł — без регистрации по VAT он не возвращается. См. «Форма и учёт»" },
      { key: "adsDay", label: "Реклама в день", value: 30, unit: "zł", src: "Середина решённого диапазона 10–50 zł" },
      { key: "other", label: "Прочее: домен, сервисы, связь", value: 150, unit: "zł", guess: true, src: "Оценка" },
      { key: "community", label: "Встречи, прогулки, розыгрыш месяца", value: 150, unit: "zł", guess: true, src: "Концепция: прогулки с Дашей и партнёрами, ежемесячный розыгрыш; сумма — оценка" },
      { key: "samples", label: "Образцы партнёрам и блогерам", value: 150, unit: "zł", guess: true, src: "Концепция: набор партнёра, товар для теста инфлюенсерам; сумма — оценка" },
      { key: "charity", label: "Помощь фонду", value: 100, unit: "zł", guess: true, src: "Концепция: один проверенный фонд, «начинаем с посильного бюджета»; сумма — оценка" },
      { key: "assistant", label: "Помощница Даши", value: 0, unit: "zł", guess: true, src: "В концепции отправки и поддержку ведут Даша и помощница; оплата не обсуждалась" },
    ] },
    { group: "Предзаказ до запуска", items: [
      { key: "preOrders", label: "Предзаказов от аудитории Даши и друзей", value: 25, guess: true, src: "Дмитрий, 13.10.2026: первые продажи с первой закупки будут, скорее всего, предзаказами. Число — оценка, размер аудитории не считали" },
    ] },
    { group: "Расходники в минус на старте", items: [
      { key: "lossLimit", label: "Лимит убытка на расходниках в месяц", value: 200, unit: "zł", guess: true, src: "Концепция: убыток как стоимость привлечения, с месячным лимитом; сумма — оценка" },
      { key: "lossMonths", label: "Сколько первых месяцев", value: 3, src: "Концепция: первые 2–3 месяца" },
    ] },
    { group: "Ориентиры", items: [
      { key: "target", label: "Целевая валовая маржа на импорте", value: 0.45, unit: "%", guess: true, src: "Цель для переговоров" },
      { key: "ceiling", label: "Потолок чистой ниши, оборот в год", value: 1000000, unit: "zł", src: "Bowl&Bone: 0,8–1,0 млн zł в год" },
    ] },
  ],
  vatPayer: false, // старт с освобождением по обороту; решает бухгалтер

  // home — розничная цена бренда у себя дома; pl — наша цена в Польше с VAT (предложение);
  // sized — размерный товар (резерв на обмен); main — основной товар заказа, а не добавка; on — входит в средние по источнику.
  // Польская база: pl — розница в польских магазинах 13.10.2026, закупка считается от неё через «нашу долю»;
  // когда придёт оптовый прайс, добавляем позиции buyNet — закупочную цену без VAT.
  // Состав польской базы — примерный, по категориям из концепции: списка Даши пока нет.
  items: [
    { src: "Польская база", brand: "amiPlay", name: "Шлейка guard Samba, M", url: "https://www.ceneo.pl/102399388", pl: 44, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "Dingo", name: "Шлейка Guard Energy", url: "https://dingo-shop.com.pl/szelki-guard-energy", pl: 78, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "Julius-K9", name: "Шлейка IDC Powerharness, размер 0", url: "https://naszemolosy.pl/julius-k9-idc-powerharness-szelki-dla-mlodych-psow-rozmiar-0", pl: 149, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "Hurtta", name: "Шлейка Weekend Warrior", url: "https://kropek.net.pl/HURTTA-Szelki-Weekend-Warrior-45-60cm-kolor-mandarynkowy", pl: 159, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "Non-stop Dogwear", name: "Шлейка Line Harness 5.0", url: "https://hopdog.pl/product/szelki-dla-psa-line-5-0/", pl: 225, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "Ruffwear", name: "Шлейка Front Range", url: "https://8a.pl/szelki-dla-psa-ruffwear-front-range-harness-m-basalt-gray", pl: 229, sized: 1, main: 1, on: 1 },
    { src: "Польская база", brand: "amiPlay", name: "Поводок-перестёжка Samba 8 в 1, M", url: "https://zooclick.pl/pl/produkt/amiplay-samba-smycz-regulowana-8in1-m-200-400-cm-x-2-cm-czarna.html", pl: 52, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "DOGCESSORIES", name: "Поводок BioThane 3 м / 16 мм", url: "https://noways.pl/pl/p/DOGCESSORIES-Smycz-Biothane-3m16mm-Zielona/10086", pl: 106, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "Dingo Gear", name: "Длинный поводок 10 м", url: "https://www.duzepsy.pl/linki-i-smycze-treningowe-dla-psa/smycz-treningowa-dla-psa-10-m-dingo-gear", pl: 95, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "Trixie", name: "Длинный поводок 10 м", url: "https://psiedobre.pl/TRIXIE-Smycz-Treningowa-dla-psa-10m-turkus-p742", pl: 21, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "Trixie", name: "Сумочка для лакомств Twist Treat", url: "https://www.doz.pl/p/trixie-twist-treat-saszetka-na-przysmaki-i-woreczki-11-x-14-cm-1-szt-184810", pl: 32, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "KONG", name: "Игрушка Classic, M", url: "https://www.ceneo.pl/27092826", pl: 50, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "без бренда", name: "Нюхательный коврик", url: "https://zdrowepieski.pl/products/mata-wechowa-dla-psa", pl: 60, sized: 0, main: 1, on: 1 },
    { src: "Польская база", brand: "Trixie", name: "Кликер", url: "https://www.ceneo.pl/16513520", pl: 12, sized: 0, main: 0, on: 1 },
    { src: "Польская база", brand: "без бренда", name: "Компостируемые пакеты, 135 шт", url: "https://sprzedajemy.pl/zwierzeta/akcesoria-dla-zwierzat/dla-psow/temat/rolk%C4%99", pl: 30, sized: 0, main: 0, on: 1 },
    { src: "Украина", brand: "BioIntellect", name: "Поводок облегчённый 3 м, до 10 кг", url: "https://biointellect.net/povidets-z-polehshenoho-biothane-dlia-malykh-sobak-i-kotiv-3m/942/", home: 1265, cur: "UAH", pl: 129, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Поводок классический 3 м", url: "https://biointellect.net/povidets-z-klasychnoho-biotanu-3m-dlia-sobak-vid-10-kh/", home: 1550, cur: "UAH", pl: 139, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Перестёжка «свободные руки», до 10 кг", url: "https://biointellect.net/perestibky/", home: 1620, cur: "UAH", pl: 169, sized: 0, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Анатомическая шлейка S/M", url: "https://biointellect.net/anatomichni-shleiky/", home: 1250, cur: "UAH", pl: 149, sized: 1, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Ошейник S, 16 мм", url: "https://biointellect.net/nashyinyky/", home: 580, cur: "UAH", pl: 69, sized: 1, main: 1, on: 0 },
    { src: "Украина", brand: "BioIntellect", name: "Бандана светоотражающая", url: "https://biointellect.net/bandana-svitlovidbyvna-khs/", home: 255, cur: "UAH", pl: 39, sized: 0, main: 0, on: 0 },
    { src: "Украина", brand: "IPO4YOU", name: "Шлейка ASTA", url: "https://www.ipo4you.com.ua/ua/product-category/shleyki/", home: 1500, cur: "UAH", pl: 249, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Мембранный комбинезон Monocolor", url: "https://barkandgo.com.ua/shop/sobaka/doschoviki-legki/", home: 2321, cur: "UAH", pl: 399, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Мембранная попона", url: "https://barkandgo.com.ua/shop/sobaka/poponi-vidkriti-lapki-duzhe-legko-vdivati/", home: 1980, cur: "UAH", pl: 349, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Bark&Go", name: "Сумочка для лакомств", url: "https://barkandgo.com.ua/shop/ih-lyudyam/bananka-dlya-vigulu/", home: 600, cur: "UAH", pl: 99, sized: 0, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Дождевик для такс", url: "https://dogsbomba.com/catalog/doshchoviki-dlya-taks/", home: 745, cur: "UAH", pl: 149, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Зимний комбинезон для такс", url: "https://dogsbomba.com/catalog/zimnie-kombinezony-dlya-taks/", home: 920, cur: "UAH", pl: 179, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Дождевик для крупных собак", url: "https://dogsbomba.com/catalog/dozhdeviki/", home: 1175, cur: "UAH", pl: 219, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Dogs Bomba", name: "Поводок Hands Free", url: "https://dogsbomba.com/catalog/povodki/", home: 510, cur: "UAH", pl: 99, sized: 0, main: 1, on: 1 },
    { src: "Украина", brand: "Pet Fashion", name: "Комбинезон COLD", url: "https://pet-fashion.com.ua/uk/29-teplij-odyag", home: 593, cur: "UAH", pl: 119, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "Pet Fashion", name: "Жилет E.Vest", url: "https://pet-fashion.com.ua/uk/31-zhileti", home: 607, cur: "UAH", pl: 119, sized: 1, main: 1, on: 1 },
    { src: "Украина", brand: "ЛавГав", name: "Месячный запас пакетов из крахмала", url: "https://lavgav.ua/products/month-corn-put-in", home: 130, cur: "UAH", pl: 25, sized: 0, main: 0, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Шлейка Ardor", url: "https://merlotstore.com/product/ardor-harness-pink/562", home: 62000, cur: "KRW", pl: 259, sized: 1, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Поводок Ardor", url: "https://merlotstore.com/", home: 46800, cur: "KRW", pl: 189, sized: 0, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Дождевик Ain Coat", url: "https://merlotstore.com/", home: 126000, cur: "KRW", pl: 499, sized: 1, main: 1, on: 1 },
    { src: "Корея", brand: "Merlot", name: "Комбинезон Ain Suit", url: "https://merlotstore.com/", home: 162000, cur: "KRW", pl: 649, sized: 1, main: 1, on: 1 },
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
    { id: "weak", title: "Слабо", hours: 6.5, team: "5–8 часов в неделю, 1–2 поста, 2 активных партнёра, без встреч", partners: [2, 2, 2], orders: [5, 8, 12, 15, 18, 20, 22, 24, 26, 28, 30, 32] },
    { id: "normal", title: "Нормально", hours: 17.5, team: "15–20 часов в неделю, 3–4 поста и видео, 5–6 активных партнёров, встреча раз в месяц", partners: [4, 5.5, 8], orders: [10, 20, 30, 45, 60, 75, 85, 95, 110, 125, 140, 150] },
    { id: "max", title: "Максимум", hours: 38, team: "35–40 часов в неделю, контент каждый день, 10–12 партнёров в 4 городах, 2–4 встречи в месяц", partners: [6, 11, 14], orders: [25, 50, 90, 130, 170, 200, 230, 260, 290, 320, 350, 380] },
  ],
  repeat: [0, 0.05, 0.1, 0.12, 0.15, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3],
  // partners в сценарии — активные партнёры в этих трёх точках; на 6-й месяц — из концепции, остальное предложено
  checkpoints: [
    { title: "~2 месяца после запуска", month: 2 },
    { title: "6-й месяц, перед корейской закупкой", month: 6 },
    { title: "12-й месяц", month: 12 },
  ],
  // сезон: на что умножаются заказы в каждом календарном месяце, с января; в среднем за год выходит 1
  season: {
    start: 0, // месяц запуска по умолчанию: 0 — январь; дата запуска не решена
    coef: [1.05, 0.95, 0.9, 0.9, 0.8, 0.8, 0.85, 0.95, 1.05, 1.15, 1.25, 1.35],
    note: "Оценка. Спрос на товары для собак в Польше слабее в конце весны и начале лета и выше с конца лета до зимы; в интернет-торговле на последний квартал приходится 30–40% годового оборота.",
    links: [["Shoper — сезонность зоотоваров", "https://www.shoper.pl/learn/?p=41196"], ["Poradnik Przedsiębiorcy — сезонность в интернет-продажах", "https://poradnikprzedsiebiorcy.pl/-sezonowosc-w-sprzedazy-internetowej-dowiedz-sie-jak-ja-wykorzystywac"], ["Webinterpret — доля последнего квартала", "https://webinterpret.com/en/wp-json/wp/v2/posts/396355"]],
  },
  payoutFrom: 50, // порог выплаты партнёру из черновика программы, zł

  // деньги, которые нужны разово; суммы из концепции, середины диапазонов
  startup: [
    { what: "Регистрация sp. z o.o. онлайн", zl: 400, when: 0, note: "Оценка: сборы S24 и налог с капитала; уточнить у бухгалтера" },
    { what: "Товар первой закупки", zl: 6500, when: 0, note: "Концепция: 6–7 тыс. zł, 15–25 позиций" },
    { what: "Упаковка, образцы партнёрам, размерные линейки", zl: 1250, when: 0, note: "Концепция: 1–1,5 тыс. zł" },
    { what: "Резерв на дозаказ", zl: 1750, when: 0, note: "Концепция: 1,5–2 тыс. zł" },
    { what: "Тест корейского товара через посредника", zl: 2400, when: 5, note: "Концепция: 500–700 USD" },
    { what: "Первая корейская закупка", zl: 14000, when: 6, note: "Концепция: 3 000–4 000 USD, один бренд" },
  ],

  // розница в польских магазинах, проверено поиском 13.10.2026 — ориентир для наших цен
  market: [
    { what: "Поводок BioThane 3 м / 16 мм", price: "30–110 zł", note: "Простые тренировочные — 30–55 zł, брендовые — 100–110 zł",
      links: [["DOGCESSORIES, 106 zł", "https://noways.pl/pl/p/DOGCESSORIES-Smycz-Biothane-3m16mm-Zielona/10086"], ["TipTop24, 110 zł", "https://tiptop24.pl/dla-psa/smycz-miejska-dla-sredniego-psa-biothane-pomaranczowa-16mm-3m"], ["Puppy-toys, 110 zł", "https://www.puppy-toys.pl/pl/p/Smycz-miejska-16-mm-BioThane/103"], ["4wild, 55 zł", "https://4wild.eu/smycz-dla-psa-3m"], ["MyPetShop, 31 zł", "https://www.mypetshop.pl/strona-glowna/125-smycz-biothane-dla-psa-treningowa-wodoodporna-3m.html"]] },
    { what: "Шлейка Ruffwear Front Range", price: "210–249 zł", note: "Размеры S и M",
      links: [["8a.pl, S — 210 zł", "https://8a.pl/szelki-dla-psa-ruffwear-front-range-harness-s-basalt-gray"], ["8a.pl, M — 249 zł", "https://8a.pl/szelki-dla-psa-ruffwear-front-range-harness-m-basalt-gray"]] },
    { what: "Дождевик для собаки, бренд", price: "300–440 zł", note: "Kentucky 302 zł, Ruffwear Sun Shower 345 zł, Ruffwear Vert 438 zł, Barbour 349 zł",
      links: [["Decathlon — дождевики", "https://www.decathlon.pl/vc/kurtki-przeciwdeszczowe-dla-psa"], ["8a.pl — Ruffwear Sun Shower", "https://8a.pl/kurtka-dla-psa-ruffwear-sun-shower-jacket-hibiscus-pink"], ["8a.pl — Ruffwear Vert", "https://8a.pl/kurtka-dla-psa-ruffwear-vert-jacket-blue-pool"], ["Breuninger — Barbour", "https://www.breuninger.com/pl/home-living/trends/akcesoria-dla-zwierzat-domowych-ubranka-dla-psow/"]] },
    { what: "Дождевик Non-stop Dogwear", price: "60–90 €", note: "Trekking Raincoat и Fjord Raincoat 2.0",
      links: [["varuste.net — дождевики Non-stop", "https://varuste.net/pl/c12667/raincoats-i-kombinezony-psie-sporty"]] },
    { what: "Сумочка для лакомств", price: "25–90 zł", note: "Trixie 32 zł, Ferplast 48 zł, Hunter 89 zł; премиум Kurgo и Ruffwear — 267–321 zł. Точные страницы Ferplast и Hunter не найдены",
      links: [["Trixie Twist Treat", "https://www.doz.pl/p/trixie-twist-treat-saszetka-na-przysmaki-i-woreczki-11-x-14-cm-1-szt-184810"], ["Ruffwear Treat Trader, 321 zł", "https://www.kaufland.pl/product/542230604/"], ["объявления, 25–29 zł", "https://sprzedajemy.pl/zwierzeta/akcesoria-dla-zwierzat/dla-psow/temat/saszetki"]] },
    { what: "Компостируемые пакеты", price: "около 30 zł за 135 шт", note: "У StarchBag есть сертификат OK compost HOME, цена не найдена",
      links: [["объявление, 9 рулонов", "https://sprzedajemy.pl/zwierzeta/akcesoria-dla-zwierzat/dla-psow/temat/rolk%C4%99"], ["StarchBag, 8 рулонов", "https://morele.net/produkt/14744491/"], ["Springos, 300 шт", "https://www.castorama.pl/departments/worki-na-psie-kupy-springos-300-szt-pojemnik-z-kipsem-woreczki-kompostowalne-20-rolek-1-kpl-/5907719459738_CAPL.prd"]] },
    { what: "Шлейки guard: amiPlay Samba, Dingo", price: "35–52 и 60–90 zł", note: "amiPlay зависит от размера; Dingo в официальном магазине — 78–89 zł",
      links: [["amiPlay Samba M, от 44 zł", "https://www.ceneo.pl/102399388"], ["amiPlay Samba L, 49 zł", "https://www.aquaelzoo.pl/psy/21426-amiplay-szelki-guard-samba-l-czerwony-5907563280373.html"], ["Dingo Guard Energy, 78 zł", "https://dingo-shop.com.pl/szelki-guard-energy"], ["Dingo Maks, 60 zł", "https://www.ceneo.pl/94557379"]] },
    { what: "Шлейки Julius-K9 IDC и Hurtta Weekend Warrior", price: "145–186 и около 159 zł", note: "Julius-K9 — размер 0",
      links: [["Julius-K9 IDC, 146 zł", "https://naszemolosy.pl/julius-k9-idc-powerharness-szelki-dla-mlodych-psow-rozmiar-0"], ["Julius-K9 на Ceneo", "https://www.ceneo.pl/37692311"], ["Hurtta, 159 zł", "https://kropek.net.pl/HURTTA-Szelki-Weekend-Warrior-45-60cm-kolor-mandarynkowy"], ["Hurtta на Ceneo", "https://www.ceneo.pl/94571039"]] },
    { what: "Шлейка Non-stop Line Harness 5.0", price: "120–286 zł", note: "Зависит от магазина и цвета",
      links: [["Hopdog, 120–221 zł", "https://hopdog.pl/product/szelki-dla-psa-line-5-0/"], ["Happy-Zoo, 260 zł", "https://happy-zoo.pl/pl/p/Szelki-Non-stop-Dogwear-Line-Harness-5.0-orange/1099"]] },
    { what: "Длинный поводок 10 м", price: "20–24 и 95–150 zł", note: "Trixie — хлопок или нейлон; Dingo Gear — полипропилен, дороже с ПВХ",
      links: [["Trixie, 21 zł", "https://psiedobre.pl/TRIXIE-Smycz-Treningowa-dla-psa-10m-turkus-p742"], ["Dingo Gear, 95 zł", "https://www.duzepsy.pl/linki-i-smycze-treningowe-dla-psa/smycz-treningowa-dla-psa-10-m-dingo-gear"], ["Dingo, нескользящий", "https://dingo-shop.com.pl/antyposlizgowa-linka-treningowa-dla-psa"]] },
    { what: "Кликер, KONG Classic M, нюхательный коврик", price: "6–25, 35–60 и 45–100 zł", note: "",
      links: [["кликер Trixie", "https://www.ceneo.pl/16513520"], ["KONG Classic M", "https://www.ceneo.pl/27092826"], ["нюхательные коврики", "https://allegro.pl/listing?string=mata+w%C4%99chowa+dla+psa"]] },
  ],


  // налоги и взносы: ставки и суммы на 2026 год, проверено поиском 13.10.2026; перед решением подтвердить у бухгалтера
  tax: {
    year: 2026,
    vatLimit: 240000,       // лимит освобождения от VAT, продажи в год
    socialFull: 1788.29,    // полный ZUS в месяц без добровольного больничного
    socialPref: 420.86,     // льготный ZUS в месяц без добровольного больничного
    healthMin: 432.54,      // минимальный взнос на здоровье в месяц: шкала и линейный
    healthScale: 0.09, healthFlat: 0.049, healthFlatCap: 14100, // 14 100 zł — лимит вычета взноса на линейном налоге
    healthLump: [[60000, 498.35], [300000, 830.58], [Infinity, 1495.04]], // ryczałt: взнос в месяц по обороту в год
    healthSolo: 830.58,     // взнос на здоровье единственного участника sp. z o.o. в месяц
    scale: [0.12, 0.32], scaleStep: 120000, scaleCredit: 3600,
    flat: 0.19, lump: 0.03, cit: 0.09, dividend: 0.19, estonian: 0.2,
    salaryYear: 57672,      // доход от работы по найму: минимальная зарплата 4 806 zł × 12 — допущение
    accJdg: 300,            // бухгалтерия JDG в месяц: ifirma, 244 zł нетто при 11–15 документах, с VAT 300 zł
    profitShare: 0.15,      // прибыль как доля оборота для таблицы «при разной прибыли» — допущение
    levels: [50000, 100000, 200000, 400000],
    params: [
      ["Лимит освобождения от VAT", "240 000 zł продаж в год"],
      ["Шкала PIT", "12% до 120 000 zł, 32% выше; уменьшение налога на 3 600 zł"],
      ["Линейный PIT", "19%, взнос на здоровье 4,9%, вычет взноса до 14 100 zł"],
      ["Ryczałt для торговли", "3% от оборота; взнос на здоровье 498,35 / 830,58 / 1 495,04 zł в месяц при обороте до 60 тыс. / до 300 тыс. / выше"],
      ["CIT малого и нового плательщика", "9%; налог на дивиденды 19%"],
      ["Эстонский CIT", "10% при выплате прибыли, вместе с налогом участника около 20%; пока прибыль в компании — 0"],
      ["ZUS предпринимателя в месяц", "полный 1 788,29 zł, льготный 420,86 zł (без добровольного больничного); первые 6 месяцев JDG — ulga na start"],
      ["Взнос на здоровье в месяц", "минимум 432,54 zł; единственный участник sp. z o.o. — 830,58 zł"],
      ["Работа по найму", "при зарплате от 4 806 zł социальные взносы с бизнеса не платятся, взнос на здоровье платится"],
    ],
    sources: [
      ["ifirma — взносы ZUS 2026", "https://www.ifirma.pl/blog/skladki-zus-2026-ile-wynosza-aktualne-skladki-zus-dla-przedsiebiorcow/"],
      ["firmove — взнос на здоровье 2026", "https://firmove.pl/aktualnosci/finanse/podatki/skladka-zdrowotna-jak-ja-obliczyc"],
      ["BDO — лимит вычета 14 100 zł", "https://www.bdo.pl/pl-pl/publikacje/bdo-w-mediach/2026/limit-odliczenia-skladki-zdrowotnej-w-2026-roku-wynosi-14-100-zl"],
      ["podatki.gov.pl — эстонский CIT", "https://www.podatki.gov.pl/podatki-firmowe/cit/cit-estonski/stawki-i-limity-w-estonskim-cit"],
      ["Akademia LTCA — CIT 9% в 2026", "https://akademialtca.pl/blog/kto-moze-placic-9-proc-cit-w-2026-r-znamy-juz-limity"],
      ["biznes.gov.pl — пересечение оснований для ZUS", "https://www.biznes.gov.pl/pl/portal/00288"],
      ["rejestracjaspolkizoo.pl — sp. z o.o. и ZUS", "https://rejestracjaspolkizoo.pl/skladki-zus-wspolnika-spolki-z-o-o-faq/"],
      ["Poradnik Przedsiębiorcy — шкала 2026", "https://poradnikprzedsiebiorcy.pl/-skala-podatkowa-nowy-prog-podatkowy-i-kwota-wolna"],
      ["Symfonia — ставки ryczałtu 2026", "https://symfonia.pl/blog/finanse-i-ksiegowosc/stawki-ryczaltu-od-przychodow-ewidencjonowanych-w-2026-roku/"],
    ],
  },

  // форма бизнеса, бухгалтер, документы и VAT: вывод Claude от 13.10.2026, командой не обсуждался.
  // Цены бухгалтеров и тарифы — с сайтов на эту дату; число документов — оценка, фактических данных нет.
  setup: {
    lead: "Sp. z o.o. с двумя участницами не платит ZUS и не обязана никого нанимать. В первый год она дороже JDG на 2–4,5 тыс. zł — целиком из-за бухгалтерии. Стартуем без VAT.",
    cards: [
      ["ZUS за участниц", "0 zł", "Участниц две — Даша и Настя, взносов за них нет при любых долях. У единственного участника было бы от 830,58 zł в месяц."],
      ["Сотрудники", "Не нужны", "Даша — prezes по решению собрания, без вознаграждения. Взносы появятся, только если компания начнёт кому-то платить."],
      ["Бухгалтер в месяц", "720–860 zł", "Нетто, онлайн-бюро, при 11–22 расходных документах. Обычное бюро в Познани — около 1 500 zł."],
      ["Расходных документов в месяц", "11–22", "Если заказывать у каждого украинского поставщика раз в квартал. При заказах каждый месяц — до 34."],
    ],
    // когда у sp. z o.o. всё же появляются взносы
    zus: [
      "вознаграждение prezes по решению собрания — 9% на здоровье и PIT, социальных взносов нет;",
      "договор компании с участницей (umowa o pracę, zlecenie) — обычные взносы по этому договору;",
      "оплата помощнице от компании по zlecenie — взносы; исключение — студент до 26 лет;",
      "разрешения на работу не нужны: у Даши stały pobyt, у Насти ВНЖ с доступом к рынку труда.",
    ],
    // первый год при прибыли 10 тыс. zł и 20 расходных документах в месяц; бухгалтер — ifirma, брутто
    forms: [
      ["Налоги и взносы государству", "0,9–2,6 тыс. zł", "около 6,4 тыс. zł"],
      ["Бухгалтер за год", "около 12,6 тыс. zł", "около 4,3 тыс. zł"],
      ["Всего", "13,5–15,2 тыс. zł", "около 10,7 тыс. zł"],
    ],
    formsNote: "Прибыль 10 тыс. zł, 20 расходных документов в месяц, цены ifirma с VAT (без регистрации по VAT он не возвращается). У sp. z o.o. нижняя граница — прибыль остаётся в компании, верхняя — выведена дивидендами. JDG посчитана на Дашу: она работает на полставки по umowa zlecenie, поэтому первые два с половиной года (ulga na start, затем льготный ZUS) с бизнеса платился бы только взнос на здоровье — минимум 5,2 тыс. zł в год, даже при убытке; условие для льготного этапа — zlecenie от 1 441,80 zł в месяц. Дальше — полный ZUS, ещё около 21,5 тыс. zł в год. За разницу получаем: Настя — совладелица, Даша не отвечает личным имуществом, корейским поставщикам показываем компанию.",
    offers: [
      { who: "ifirma, бюро", url: "https://www.ifirma.pl/cennik/", jdg: "211 zł до 10 документов, +33 zł за каждые 5", sp: "650 zł до 10 документов, +70 zł за каждые 5" },
      { who: "inFakt, с бухгалтером", url: "https://www.infakt.pl/ksiegowosc-dla-spolek/", jdg: "от 200 zł", sp: "от 619–620 zł, лимиты не опубликованы" },
      { who: "Бюро в Познани, средние по kb.pl", url: "https://kb.pl/cenniki/miejskie/biuro-rachunkowe/poznan/", jdg: "321 zł до 10 документов, 445 zł при 11–20", sp: "1 510 zł до 10 документов, 1 730 zł при 11–20" },
    ],
    offersNote: "Цены нетто в месяц. Доплаты ifirma для sp. z o.o.: годовая отчётность — примерно один месячный счёт; 25 zł за таможенную декларацию; 10 zł за покупку из ЕС; за опоздание с документами — от 160 zł. Средние по Познани — оценка сайта по объявлениям, не оферты бюро.",
    // расходные документы в месяц без украинского товара
    docs: [
      ["Польские поставщики", "2–4", "1–3"],
      ["Реклама Meta", "5–15", "1"],
      ["Выплаты партнёрам", "5–10", "0–3"],
      ["Доставка заказов (InPost)", "1–4", "1"],
      ["Платформа, платёжный оператор, бухгалтер, домен", "4–5", "4"],
      ["Упаковка, мелкие покупки, образцы", "5–10", "1–2"],
      ["Иностранные подписки", "2–5", "0–2"],
      ["Итого без украинского товара", "24–53", "8–16"],
    ],
    // украинский товар: 3–6 поставщиков, бухгалтер — ifirma, нетто в месяц
    importDocs: [
      ["Заказ у каждого поставщика раз в квартал", "11–22", "720–860 zł + 25–50 zł за декларации"],
      ["Заказ у каждого поставщика каждый месяц", "17–34", "790–1 000 zł + 75–150 zł за декларации"],
    ],
    importNote: "Украина — вне ЕС, это импорт с первой закупки. Ввозим сами, поэтому каждая посылка — три документа: счёт поставщика, таможенная декларация, счёт перевозчика. Переговоры с украинскими поставщиками не начаты, посчитано на 3–6 поставщиков.",
    less: [
      "Meta — пополнять баланс раз в месяц: иначе фактура приходит за каждое списание.",
      "Партнёрам платить раз в квартал и с порогом: каждая выплата — отдельный документ.",
      "Собирать предзаказы и заказывать у поставщика одной партией, а не мелкими посылками.",
      "Доставка — один договор со сводной фактурой за месяц, а не этикетки поштучно.",
      "Где можно — польские сервисы вместо иностранных.",
      "Мелочи покупать одним заходом в месяц у одного поставщика на фактуру.",
      "Сдавать документы бухгалтеру до 10-го числа.",
    ],
    parcel: [
      ["Доставка Nova Post", "70 zł до 2 кг, 85 zł до 10 кг, дальше 5 zł за килограмм"],
      ["Таможенный агент", "Nova Post цену не публикует; агентство при Poczta Polska берёт 50–149 zł за посылку"],
      ["Пошлина", "до 150 € — 3 € за каждый код товара в счёте; выше — по ставке, 0% с декларацией происхождения"],
      ["VAT", "23% от товара с доставкой и пошлиной; без регистрации по VAT не возвращается"],
      ["Бухгалтер", "25 zł за каждую таможенную декларацию (ifirma)"],
    ],
    vat: [
      "VAT — это 23%, спрятанные в цене почти любой вещи.",
      "Без VAT: всё, что заплатил покупатель, наше. Но VAT в наших собственных покупках и на таможне пропадает.",
      "С VAT: из каждой продажи 23% мы только держим для государства. Из них вычитается VAT, который заплатили сами, отдаём разницу. Купили больше, чем продали, — разницу возвращают нам.",
      "Мы продаём дороже, чем покупаем, а частный покупатель VAT вернуть не может — поэтому на обычных продажах без VAT выгоднее.",
    ],
    vatWhen: [
      "VAT работает на нас, когда покупаем много, а продаём мало: крупная закупка, техника для съёмок, машина (половина VAT).",
      "Переходим на VAT перед крупной закупкой, технику покупаем после перехода.",
      "С первого дня берём фактуры на весь товар: при переходе можно вернуть VAT с остатков на складе.",
      "Обратно к освобождению — не раньше чем через год после конца года перехода, и VAT с остатков придётся вернуть.",
      "Возврат от налоговой идёт до 60 дней, пока нет продаж — до 180.",
      "VAT с ресторанов, гостиниц и личных покупок не возвращается.",
    ],
    rules: [
      ["Касса не нужна", "если товар уходит курьером или почтой, вся оплата приходит на банковский счёт (перевод, BLIK) и по записям видно, кто и за какой заказ заплатил. Действует до 31.12.2027."],
      ["Наложенный платёж и самовывоз", "не включаем: по наложенному платежу источники расходятся, самовывоз требует кассу."],
      ["Meta, Shopify и другие иностранные сервисы", "это импорт услуг. Даже без VAT компания регистрируется как VAT-UE, каждый месяц сдаёт VAT-9M и доплачивает 23% сверху."],
      ["Импорт", "нужен номер EORI на компанию и поставщик, который умеет оформить экспортную фактуру и декларацию происхождения. Посылки «как частному лицу» нельзя: расход без документов не провести."],
    ],
    peers: [
      "Маленькие магазины обычно стартуют как JDG. Бухгалтерская фирма amavat называет переломным оборот 200–250 тыс. zł в год; от 300 тыс. JDG становится невыгодной. У нас в сценарии «Нормально» оборот ниже — sp. z o.o. выбираем из-за двух участниц, а не из-за денег.",
      "Большинство нишевых собачьих брендов в Польше — JDG; Psishop, Bowl&Bone и Smart Animal — sp. z o.o.",
      "Для двух партнёров есть дешёвая spółka cywilna: простая бухгалтерия, но каждый платит свой взнос на здоровье и отвечает личным имуществом.",
      "Около 40% интернет-магазинов закрываются в первый год (Dun & Bradstreet для PAP, по реестру компаний).",
      "Бренды часто продают сезонными коллекциями с заказом заранее; минимальные партии сильно различаются, об эксклюзиве договариваются отдельно.",
    ],
    ask: [
      "что входит в абонемент: годовая отчётность, импорт, декларации VAT-9M;",
      "подходит ли наш платёжный оператор под освобождение от кассы;",
      "как оформлять выплаты партнёрам;",
      "как проводить импорт: таможенные декларации, VAT на ввозе, номер EORI.",
    ],
    sources: [
      ["ifirma — цены бюро", "https://www.ifirma.pl/cennik/"],
      ["inFakt — цены", "https://www.infakt.pl/cennik/"],
      ["inFakt — бухгалтерия для sp. z o.o.", "https://www.infakt.pl/ksiegowosc-dla-spolek/"],
      ["kb.pl — цены бюро в Познани, 2026", "https://kb.pl/cenniki/miejskie/biuro-rachunkowe/poznan/"],
      ["infor — взносы участников sp. z o.o.", "https://ksiegowosc.infor.pl/obrot-gospodarczy/spolki/6565929,skladki-zus-wspolnikow-spolki-z-oo-jednoosobowej-i-wieloosobowej-kto-i-kiedy-nie-zaplaci-skladek.html"],
      ["Lege Artis — решение Верховного суда об участнике с 99%", "https://czasopismo.legeartis.org/2024/05/wspolnik-spolki-99-kapitalu-jednoosobowa-podleganie-ubezpieczeniom-spolecznym-zus-uchwala-sn/"],
      ["podatki.biz — взносы с вознаграждения prezes", "https://www.podatki.biz/artykuly/skladki-zus-od-wynagrodzenia-prezesa-zarzadu_33_44413.htm"],
      ["Nova Post — посылки из Украины в Польшу", "https://novapost.com/pl-pl/international/receive-from-ukraine/"],
      ["Agencja celna — оформление посылки на Poczta Polska", "https://agencja-celna.szczecin.pl/uslugi-celne/procedury-celne/import/odprawa-paczki-na-poczcie-polskiej/"],
      ["ifirma — фактуры Meta и импорт услуг", "https://www.ifirma.pl/blog/reklama-a-podatki-jak-rozliczyc-faktury-od-facebook-i-instagram-co-z-podatkiem-u-zrodla/"],
      ["Poradnik Przedsiębiorcy — касса в интернет-магазине", "https://poradnikprzedsiebiorcy.pl/-kasa-fiskalna-w-sklepie-internetowym-kiedy-jest-obowiazkowa"],
      ["firmove — продажа с доставкой и касса", "https://firmove.pl/aktualnosci/biznes/prowadzenie-firmy/sprzedaz-wysylkowa-a-kasa-fiskalna"],
      ["infor — отказ от освобождения и VAT с остатков", "https://ksiegowosc.infor.pl/podatki/vat/zwolnienia/735980,Rezygnacja-ze-zwolnienia-podmiotowego-z-VAT-czy-mozna-odzyskac-VAT-naliczony.html"],
      ["ifirma — возврат к освобождению от VAT", "https://www.ifirma.pl/blog/powrot-do-zwolnienia-z-vat-skutki-podatkowe/"],
      ["fakturaxl — сроки возврата VAT", "https://www.fakturaxl.pl/zwrot-podatku-vat-zasady-terminy"],
      ["amavat — когда переходить с JDG на sp. z o.o.", "https://amavat.pl/kiedy-w-e-commerce-oplaca-sie-przejsc-z-jdg-na-spolke-z-o-o/"],
      ["PAP — 20 новых интернет-магазинов в день", "https://www.pap.pl/mediaroom/w-polsce-rejestrowanych-jest-srednio-20-nowych-sklepow-internetowych-dziennie"],
      ["freenance — spółka cywilna 2026", "https://freenance.io/przedsiebiorczosc/spolka-cywilna-2026-jak-zalozyc-vs-jdg-vs-spolka-zoo-roznice-koszty/"],
    ],
  },
};
