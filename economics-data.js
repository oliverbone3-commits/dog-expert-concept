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
      { key: "pComm", label: "Комиссия партнёра", value: 0.04, unit: "%", src: "Дмитрий, 13.10.2026: комиссия 3–5%; в расчёте середина. Было 10% из черновика программы" },
      { key: "refShare", label: "Доля заказов «приведи друга»", value: 0.05, unit: "%", guess: true, src: "Концепция, «Клиент приводит клиента»; доля — оценка" },
      { key: "refDisc", label: "Скидка другу и такая же — приведшему", value: 0.1, unit: "%", guess: true, src: "Концепция: «подарите другу −X, получите −X»; размер — оценка" },
    ] },
    { group: "Польская база", items: [
      { key: "plGm", label: "Наша доля в розничной цене без VAT", value: 0.4, unit: "%", guess: true, src: "Допущение из концепции (маржа 40%); оптовых цен польской базы пока нет" },
      { key: "plBasket", label: "Основных товаров в заказе", value: 1.4, digits: 1, guess: true, src: "Допущение: с ним средний заказ выходит около 150 zł, как в концепции" },
    ] },
    { group: "Корма", items: [
      { key: "foodGm", label: "Наша доля в розничной цене сухого корма", value: 0.18, unit: "%", guess: true, src: "Оценка по исследованию 13.10.2026: 10–15% при цене крупных интернет-магазинов, 15–18% у нишевых брендов, 25% — потолок при прямом договоре. Оптовых прайсов нет. У консервов стоит 20%, у лакомств 35% — в самих позициях" },
      { key: "vatFood", label: "Ставка VAT на корм", value: 0.08, unit: "%", src: "Корм и лакомства для домашних животных — 8%, поз. 10 приложения 3 к закону о VAT; подтвердить у бухгалтера" },
      { key: "foodDisc", label: "Скидка клиенту по коду партнёра на корм", value: 0.1, unit: "%", guess: true, src: "Пока как на остальной товар — черновик условий из концепции" },
      { key: "foodComm", label: "Комиссия партнёра с корма", value: 0.04, unit: "%", src: "Как на остальной товар: 3–5% (Дмитрий, 13.10.2026), в расчёте середина" },
      { key: "foodGift", label: "Подарок и лояльность в заказе корма", value: 4, unit: "zł", guess: true, src: "Пока как в обычном заказе: подарок 2 zł и лояльность 2 zł" },
      { key: "foodDeliv", label: "Доставка мешка 9–12 кг за счёт магазина", value: 19.5, unit: "zł", src: "InPost Paczkomat, размер C до 25 кг, через Furgonetka: 18,61–19,44 zł с VAT (13.10.2026)" },
      { key: "foodFree", label: "Порог бесплатной доставки корма", value: 250, unit: "zł", guess: true, src: "Пока как на остальной товар. У zooplus и Fera порог 99 zł, у John Dog 139 zł, у Maxi Zoo 149 zł" },
      { key: "foodBuyers", label: "Доля клиентов, которые берут у нас корм", value: 0.15, unit: "%", guess: true, src: "Оценка, данных нет. В интернет-зоомагазинах корм покупают около 4% владельцев; у нас выше за счёт рекомендации Даши" },
      { key: "foodEvery", label: "Раз в сколько недель возвращаются за кормом", value: 6, guess: true, src: "Расчёт по норме кормления: мешка 12 кг собаке 20 кг хватает на 38 дней, мешка 9 кг собаке 10 кг — на 48" },
      { key: "foodUpsell", label: "Доля заказов корма с допродажей обычного товара", value: 0.25, unit: "%", guess: true, src: "Оценка, данных нет: миска, игрушка, амуниция по совету в корзине или от Даши" },
      { key: "foodAddon", label: "Доля заказов корма с консервой или лакомством", value: 0.3, unit: "%", guess: true, src: "Оценка, данных нет" },
    ] },
    { group: "Постоянные расходы в месяц", items: [
      { key: "platform", label: "Платформа магазина", value: 150, unit: "zł", guess: true, src: "Оценка: базовый тариф готовой платформы" },
      { key: "acc", label: "Бухгалтерия JDG", value: 340, unit: "zł", src: "ifirma: 277 zł нетто при 16–20 расходных документах, с VAT 341 zł — без регистрации по VAT он не возвращается. См. «Форма и учёт»" },
      { key: "health", label: "Взнос на здоровье владелицы JDG", value: 433, unit: "zł", src: "Минимальный взнос 2026 года — 432,54 zł в месяц; платится с первого дня и при убытке" },
      { key: "adsDay", label: "Реклама в день", value: 15, unit: "zł", src: "На время теста 15 zł в день (Дмитрий, 13.10.2026); решённый диапазон — 10–50 zł" },
      { key: "other", label: "Прочее: домен, сервисы, связь", value: 0, unit: "zł", src: "На время теста выключено (Дмитрий, 13.10.2026). Было 150 zł в месяц: оценка" },
      { key: "community", label: "Встречи, прогулки, розыгрыш месяца", value: 0, unit: "zł", src: "На время теста выключено (Дмитрий, 13.10.2026). Было 150 zł в месяц: концепция: прогулки с Дашей и партнёрами, ежемесячный розыгрыш; сумма — оценка" },
      { key: "samples", label: "Образцы партнёрам и блогерам", value: 0, unit: "zł", src: "На время теста выключено (Дмитрий, 13.10.2026). Было 150 zł в месяц: концепция: набор партнёра, товар для теста инфлюенсерам; сумма — оценка" },
      { key: "charity", label: "Помощь фонду", value: 0, unit: "zł", src: "На время теста выключено (Дмитрий, 13.10.2026). Было 100 zł в месяц: концепция: один проверенный фонд, «начинаем с посильного бюджета»; сумма — оценка" },
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
  // Корма: кандидаты от Claude, поиск 13.10.2026, командой и Дашей не обсуждались. pl — розница в Польше на эту дату,
  // закупка считается от неё через «нашу долю в цене сухого корма»; gm — своя доля позиции (консервы, лакомства).
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
    { src: "Корма", brand: "Wiejska Zagroda", name: "Сухой беззерновой, индейка с ягнёнком, 9 кг", url: "https://www.doz.pl/p/wiejska-zagroda-indyk-z-jagniecina-karma-sucha-dla-psa-9-kg-205570", pl: 173, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Wiejska Zagroda", name: "Сухой монобелковый, индейка, 2 кг", url: "https://wiejskazagroda.pl/pl/products/karma-sucha-dla-psa-wiejska-zagroda-monoproteinowa-indyk-s-m-2-kg-dorosly-3784", pl: 62, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Wiejska Zagroda", name: "Консерва монобелковая, говядина, 500 г", url: "https://wiejskazagroda.pl/pl/products/karma-mokra-dla-psa-wiejska-zagroda-monoproteinowa-wolowina-dorosly-500g-4456", pl: 16.5, sized: 0, main: 0, on: 1, gm: 0.2 },
    { src: "Корма", brand: "Pan Mięsko", name: "Сухой, телятина с индейкой, 9 кг", url: "https://wiejskazagroda.pl/pl/products/karma-sucha-dla-psa-pan-miesko-cielecina-z-indykiem-xs-9-kg-1783", pl: 136, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Pan Mięsko", name: "Полувлажный, говядина с ягнёнком, 1 кг", url: "https://wiejskazagroda.pl/pl/products/karma-polwilgotna-dla-psa-pan-miesko-wolowina-z-jagniecina-dorosly-1kg-4774", pl: 23, sized: 0, main: 0, on: 1 },
    { src: "Корма", brand: "Alpha Spirit", name: "Влажный Real Food, говядина, 280 г", url: "https://wiejskazagroda.pl/pl/products/karma-mokra-dla-psa-alpha-spirit-real-food-beef-dorosly-280g-4503", pl: 13.9, sized: 0, main: 0, on: 1, gm: 0.2 },
    { src: "Корма", brand: "Baltica", name: "Сухой гипоаллергенный, лосось, 12 кг", url: "https://www.okazje.info.pl/szukaj/baltica-salmon-hypoallergenic-ml-12kg/ceny.html", pl: 284, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Baltica", name: "Сухой гипоаллергенный, лосось, мелкие породы, 3 кг", url: "https://mediamarkt.pl/pl/product/_karma-sucha-dla-psa-baltica-excellent-losos-hypoallergenic-xs-s-3kg-168615315.html", pl: 85, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "John Dog", name: "Сухой Fresh, утка с кроликом, 3 кг", url: "https://johndog.pl/produkt/karma-sucha-john-dog-fresh-kaczka-z-krolikiem/", pl: 83, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "John Dog", name: "Консерва Pure Black, утка, 400 г", url: "https://johndog.pl/produkt/karma-mokra-pure-black-kaczka/", pl: 12.5, sized: 0, main: 0, on: 1, gm: 0.2 },
    { src: "Корма", brand: "John Dog", name: "Лакомство Minis, минтай и форель, 80 г", url: "https://johndog.pl/produkt/przysmak-dla-psa-i-kota-mintaj-i-pstrag-john-dog-minis-80-g/", pl: 13.9, sized: 0, main: 0, on: 1, gm: 0.35 },
    { src: "Корма", brand: "John Dog", name: "Сушёное жевательное лакомство, 3 шт", url: "https://johndog.pl/produkt/suszony-gryzak-dla-psa-penis-wolowy-3-szt/", pl: 36.9, sized: 0, main: 0, on: 1, gm: 0.35 },
    { src: "Корма", brand: "Syta Micha", name: "Консервы, ягнёнок с овощами, 12 × 400 г", url: "https://mediamarkt.pl/pl/product/_karma-mokra-dla-psa-syta-micha-jagniecina-z-warzywami-puszka-12x400g-182881900.html", pl: 167, sized: 0, main: 1, on: 1, gm: 0.2 },
    { src: "Корма", brand: "Brit Care", name: "Сухой гипоаллергенный, ягнёнок, 12 кг", url: "https://www.okazje.info.pl/szukaj/brit-care-dog-hypoallergenic-adult-large-breed-jagniecina-i-ryz-12-kg/ceny.html", pl: 166, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Farmina N&D", name: "Сухой Ocean, треска, 12 кг", url: "https://www.okazje.info.pl/szukaj/farmina-n-d-ocean-canine-cod-pumpkin-orange-adult-medium-maxi-12kg/ceny.html", pl: 280, sized: 0, main: 1, on: 1 },
    { src: "Корма", brand: "Wolfsblut", name: "Сухой Wild Duck, утка, 12,5 кг", url: "https://mediamarkt.pl/pl/product/_sucha-karma-dla-psa-wolfsblut-wild-duck-adult-125kg-165890763.html", pl: 288, sized: 0, main: 1, on: 1 },
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

  // доля заказов по источникам на каждом этапе; корейский ассортимент появляется после чекпоинта на 6-м месяце;
  // корм в доли не входит: это повторные заказы сверх плана, они считаются от числа клиентов (вводные группы «Корма»)
  sources: ["Польская база", "Украина", "Корея", "Корма"],
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
    start: 11, // месяц запуска: 11 — декабрь. Дмитрий, 13.10.2026: запускаемся месяца через два, к декабрю
    coef: [1.05, 0.95, 0.9, 0.9, 0.8, 0.8, 0.85, 0.95, 1.05, 1.15, 1.25, 1.35],
    note: "Оценка. Спрос на товары для собак в Польше слабее в конце весны и начале лета и выше с конца лета до зимы; в интернет-торговле на последний квартал приходится 30–40% годового оборота.",
    links: [["Shoper — сезонность зоотоваров", "https://www.shoper.pl/learn/?p=41196"], ["Poradnik Przedsiębiorcy — сезонность в интернет-продажах", "https://poradnikprzedsiebiorcy.pl/-sezonowosc-w-sprzedazy-internetowej-dowiedz-sie-jak-ja-wykorzystywac"], ["Webinterpret — доля последнего квартала", "https://webinterpret.com/en/wp-json/wp/v2/posts/396355"]],
  },
  payoutFrom: 50, // порог выплаты партнёру из черновика программы, zł

  // деньги, которые нужны разово; суммы из концепции, середины диапазонов
  startup: [
    { what: "Налог с займа на закупку", zl: 50, when: 0, note: "0,5% с 10 тыс. zł, ставка по памяти — уточнить у бухгалтера; регистрация JDG бесплатная" },
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
    { what: "Корм Wiejska Zagroda, 9 кг", price: "161–266 zł", note: "У бренда на сайте 224–266 zł, у перепродавцов 161–195 zł: корм продают со скидкой от цены бренда. Производитель MPPK Group, у него же Pan Mięsko и дистрибуция Alpha Spirit; для магазинов есть закрытая оптовая платформа",
      links: [["doz.pl, 173 zł", "https://www.doz.pl/p/wiejska-zagroda-indyk-z-jagniecina-karma-sucha-dla-psa-9-kg-205570"], ["сайт бренда, сухие корма", "https://wiejskazagroda.pl/pl/menu/karma-sucha-192"], ["оптовая платформа", "https://b2b.wiejskazagroda.pl/logowanie"]] },
    { what: "Корм Pan Mięsko, 9 кг", price: "136–199 zł", note: "У бренда 136–162 zł, в аптечной сети doz.pl — 199 zł",
      links: [["сайт бренда, 136 zł", "https://wiejskazagroda.pl/pl/products/karma-sucha-dla-psa-pan-miesko-cielecina-z-indykiem-xs-9-kg-1783"], ["doz.pl, 199 zł", "https://www.doz.pl/p/pan-miesko-sucha-karma-dla-psa-m-cielecina-z-indykiem-9-kg-205507"]] },
    { what: "Корм Baltica, лосось, 12 кг", price: "270–330 zł", note: "Польский производитель Baltica Pet Food, Мысленице; 3 кг — 85 zł",
      links: [["Empik, 284 zł", "https://www.okazje.info.pl/szukaj/baltica-salmon-hypoallergenic-ml-12kg/ceny.html"], ["MediaMarkt, 3 кг", "https://mediamarkt.pl/pl/product/_karma-sucha-dla-psa-baltica-excellent-losos-hypoallergenic-xs-s-3kg-168615315.html"]] },
    { what: "Европейские корма, 12 кг", price: "165–305 zł", note: "Brit Care (Чехия) 165–250 zł, Farmina N&D Ocean (Италия) 280–306 zł, Wolfsblut (Германия) 288 zł за 12,5 кг. Продаются во всех крупных магазинах, цену сравнивают",
      links: [["Brit Care", "https://www.okazje.info.pl/szukaj/brit-care-dog-hypoallergenic-adult-large-breed-jagniecina-i-ryz-12-kg/ceny.html"], ["Farmina N&D", "https://www.okazje.info.pl/szukaj/farmina-n-d-ocean-canine-cod-pumpkin-orange-adult-medium-maxi-12kg/ceny.html"], ["Wolfsblut", "https://mediamarkt.pl/pl/product/_sucha-karma-dla-psa-wolfsblut-wild-duck-adult-125kg-165890763.html"]] },
    { what: "Консервы 400–500 г", price: "12–17 zł", note: "John Dog Pure Black 12,50 zł, Syta Micha около 14 zł в упаковке из 12, Wiejska Zagroda 500 г — 16,49 zł",
      links: [["John Dog", "https://johndog.pl/produkt/karma-mokra-pure-black-kaczka/"], ["Syta Micha, 12 шт", "https://mediamarkt.pl/pl/product/_karma-mokra-dla-psa-syta-micha-jagniecina-z-warzywami-puszka-12x400g-182881900.html"], ["Wiejska Zagroda", "https://wiejskazagroda.pl/pl/products/karma-mokra-dla-psa-wiejska-zagroda-monoproteinowa-wolowina-dorosly-500g-4456"]] },
  ],

  // план Б: меры, которые меняют вводные (set), меры без расчёта (more) и то, что нашли про наценку на корм (facts).
  // Исследование Claude от 13.10.2026, командой не обсуждалось; оптовых прайсов нет, цифры — из открытых источников.
  optimize: {
    lead: "Корм для нас — повод вернуться, а не заработок: за ним приходят каждые 4–9 недель, и в части заказов к мешку добавляется обычный товар, на котором мы и зарабатываем. Условие одно: сам заказ корма не должен быть в минус.",
    levers: [
      { id: "terms", title: "Корм — без скидки клиенту по коду", set: { foodDisc: 0 },
        text: "Условие, без которого корм не работает. Комиссия партнёра уже снижена до 3–5%, но клиент по коду всё ещё получает на корм 10% скидки, а у нас с мешка остаётся 18%. Магазины с партнёрскими программами на корм платят партнёру 4–5% и скидку дают не всегда. Решение по программе — за командой.",
        links: [["dlaPsiaka — 5%", "https://dlapsiaka.pl/content/11-program-partnerski"], ["MobilKarm — 4%", "https://www.mobilkarm.pl/program-partnerski/"]] },
      { id: "upsell", title: "Допродажа обычного товара в каждом втором заказе корма", set: { foodUpsell: 0.5 },
        text: "Сейчас стоит в каждом четвёртом. Миска, игрушка, амуниция: подсказка в корзине «к этому корму берут», совет Даши, напоминание перед сезоном. Товар едет в уже оплаченной посылке." },
      { id: "addon", title: "Лакомство или консерва в 7 из 10 заказов корма", set: { foodAddon: 0.7 },
        text: "Сейчас стоит 3 из 10. На лакомствах остаётся 35–60% цены против 10–18% на сухом корме: набор «мешок + лакомство», подсказка в корзине, совет Даши в карточке." },
      { id: "direct", title: "Специализированные корма и бренды, которые держат цену: наша доля 25%", set: { foodGm: 0.25 },
        text: "Вместо 18%. Гипоаллергенные и монобелковые корма берут по рекомендации, а не по цене: на ветеринарных диетах клиникам оставалось 30–40%, интернет-магазинам — 10–15%. У John Dog перепродавцы на 8–17% дешевле сайта бренда, у Wiejska Zagroda — на 27–34%. Какие корма берём — пока не решено.",
        links: [["Hurtowniakarm — «до 25%»", "https://www.hurtowniakarm.pl/dropshipping-hurtownia-karm"], ["John Dog на Ceneo", "https://www.ceneo.pl/182265954"], ["Wiejska Zagroda на Ceneo", "https://www.ceneo.pl/139615137"]] },
      { id: "ship", title: "Мешок — дешёвым перевозчиком, 14,5 zł", set: { foodDeliv: 14.5 },
        text: "Вместо 19,5 zł в InPost: автомат DPD до 20 кг — 13,15 zł, Orlen Paczka — 15,98 zł.",
        links: [["DPD", "https://furgonetka.pl/cennik/dpd"], ["Orlen Paczka", "https://furgonetka.pl/cennik/orlen"], ["InPost", "https://furgonetka.pl/cennik/inpost"]] },
      { id: "gift", title: "Подарок и открытка — только в первом заказе", set: { foodGift: 0 },
        text: "Корм заказывают снова и снова; подарок за 4 zł в каждом заказе — это пятая часть того, что с него остаётся." },
      { id: "stress", title: "Риск: цена и доставка как у крупных магазинов", set: { foodGm: 0.1, foodFree: 149 },
        text: "Не мера, а проверка на прочность: наша доля 10% и бесплатная доставка от 149 zł. За кормом возвращаются, только если он не дороже, чем у Fera и zooplus. Интернет-магазинам на корме оставалось 10–15% (UOKiK), Krakvet — 9–13%.",
        links: [["UOKiK о наценках", "https://tvn24.pl/biznes/najnowsze/zbyt-droga-karma-dla-zwierzat-uokik-nalozyl-3-mln-zl-kary-ra392182-ls4437412"], ["Krakvet в Forbes", "https://www.forbes.pl/przywodztwo/marek-batko-tworca-krakvetu-najwiekszego-sklepu-zoologicznego-w-polsce-wywiad/mh9ngj8"]] },
    ],
    more: [
      ["Продавать корм без склада", "Оптовик сам отправляет мешок клиенту: не нужны деньги на запас, нет риска срока годности. Hurtowniakarm — доставка клиенту за их счёт от 80 zł; 2Dog — от 1 штуки, сбор 10 zł за заказ; ZooMax возит Wiejska Zagroda, Pan Mięsko и Alpha Spirit.", [["Hurtowniakarm", "https://hurtowniakarm.pl/dropshipping-hurtownia-karm"], ["2Dog", "https://2dog.pl/dropshipping/"], ["ZooMax", "https://zoomax.pl/dropshipping/"]]],
      ["Рекомендовать корм за комиссию, не продавая его", "Тяжёлые мешки можно вообще не возить: dlaPsiaka платит 5% с корзины и даёт клиенту −10%, PsiBufet платит кинологам за первый заказ и продления подписки (сумма не опубликована). С заказа на 160 zł это около 8 zł без склада и доставки.", [["dlaPsiaka", "https://dlapsiaka.pl/content/11-program-partnerski"], ["PsiBufet", "https://join.psibufet.com/ambasadorzy/"]]],
      ["Свои лакомства", "Жевательные лакомства под своей маркой: Petmex — от одной смешанной палеты, запуск 4–8 недель; ZAREA — от 10–50 кг. Hubun после четырёх убыточных лет на чужих кормах ушёл именно сюда (42 Bites).", [["Petmex", "https://petmex.pl/wlasna-marka/"], ["ZAREA", "https://zarea.com.pl/en/"], ["42 Bites", "https://42bites.pl/"]]],
      ["Маленькие мешки и пробники", "Килограмм в мешке 2–3 кг дороже на 19–24%, пробник 120 г стоит 6–7 zł; посылка лёгкая, а Даша может дать пробник на занятии.", [["John Dog — цены по фасовкам", "https://johndog.pl/kategoria-produktu/pies/karma-przysmaki-dla-psa/karma-sucha-dla-psa/"]]],
      ["Подписка на корм", "Скидка 5–15% за автоматический дозаказ. У Chewy на подписчиков приходится 83% выручки; польских данных об эффекте нет.", [["Animal Island — 15%", "https://www.animalisland.eu/pages/subskrypcja"], ["Chewy", "https://www.subscriptioninsider.com/article-type/news/chewys-autoship-customer-sales-reached-83-3-of-net-sales-in-fiscal-2025"]]],
      ["Запас не больше чем на 2–3 месяца продаж", "Сухой корм хранится 12–18 месяцев, магазины уценяют его, когда остаётся меньше трёх. Остаточный срок при поставке спрашивать у каждого оптовика.", [["сроки хранения", "https://zoopers.pl/czy-sucha-karma-moze-sie-popsuc-jak-ja-przechowywac/193/b"]]],
      ["До первой закупки спросить ветеринарную инспекцию", "Главная инспекция пишет, что розница корма для домашних животных регистрации не требует; отраслевой сайт утверждает обратное про склад и интернет-магазин. Нужен письменный ответ инспекции в Познани.", [["Главная ветеринарная инспекция", "https://www.wetgiw.gov.pl/handel-eksport-import/pytania-i-odpp/printpage"], ["Petinsider", "https://petinsider.pl/sprzedaz-karmy-pod-marka-wlasna-jak-to-zrobic/"]]],
    ],
    facts: [
      { what: "Что остаётся интернет-магазину с корма", value: "10–15%", note: "Установил антимонопольный орган по ветеринарным диетам Royal Canin; у ветклиник — 30–40%. Данные 2010–2014 годов.", links: [["tvn24", "https://tvn24.pl/biznes/najnowsze/zbyt-droga-karma-dla-zwierzat-uokik-nalozyl-3-mln-zl-kary-ra392182-ls4437412"]] },
      { what: "Krakvet, мешок 15 кг", value: "9–13%", note: "Основатель в 2017 году: в опте около 100 zł, клиенту 110–115 zł с бесплатной доставкой. Процент — наш расчёт.", links: [["Forbes", "https://www.forbes.pl/przywodztwo/marek-batko-tworca-krakvetu-najwiekszego-sklepu-zoologicznego-w-polsce-wywiad/mh9ngj8"]] },
      { what: "Обычный зоомагазин, 2025", value: "до 8%", note: "Один владелец: сети продают по цене, по которой он закупает у дистрибьютора.", links: [["PetInsider", "https://petinsider.pl/aktualnosci-co-o-2024-mowi-branza/"]] },
      { what: "Оптовик с отправкой клиенту", value: "до 25%", note: "Рекламное обещание Hurtowniakarm, то есть потолок.", links: [["Hurtowniakarm", "https://www.hurtowniakarm.pl/dropshipping-hurtownia-karm"]] },
      { what: "Советы для открывающих зоомагазин", value: "20–30% и 40–60%", note: "Сухой премиум-корм и лакомства. Источник цифр не указан, доверять осторожно.", links: [["nssd.pl", "https://nssd.pl/sklep-zoologiczny-2026-koszty-otwarcia-i-marza/"]] },
      { what: "Гиганты: zooplus и Chewy", value: "28–30%", note: "Валовая наценка всей компании, с прямыми контрактами и своими марками (у zooplus они 16% продаж). После расходов у zooplus оставалось 0,8% продаж.", links: [["zooplus", "https://www.petbusinessworld.co.uk/trade-news/retailers/zooplus-reveals-record-year.html"], ["Chewy", "https://www.sec.gov/Archives/edgar/data/1766502/000176650224000012/chwyq42023exhibit991.htm"]] },
      { what: "Перепродавцы дешевле сайта бренда", value: "на 8–34%", note: "Wiejska Zagroda 9 кг: 224–266 zł у бренда, 155–194 zł на Ceneo. John Dog 12 кг: 260–280 против 219–258 zł.", links: [["Wiejska Zagroda", "https://www.ceneo.pl/139615137"], ["John Dog", "https://www.ceneo.pl/182012569"], ["Brit Care", "https://www.ceneo.pl/147015559"]] },
      { what: "Бренд не может защитить нашу цену", value: "запрещено", note: "За минимальные интернет-цены для партнёров Empire Brands оштрафована почти на 0,5 млн zł (2025).", links: [["UOKiK", "https://archiwum.uokik.gov.pl/aktualnosci.php?news_id=19705"]] },
      { what: "Кто зарабатывает на корме", value: "владельцы марок", note: "Paka Zwierzaka: 17 млн zł выручки и 2,2 млн zł прибыли. Перепродавец Hubun: 16,6 млн zł и убыток 1,7 млн zł. Fera: 246 млн zł и убыток 9 млн zł. Данные из сводок реестра, напрямую не сверены.", links: [["Fera", "https://monitorkrs.pl/pl/0000501167/krs/fera"], ["Hubun", "https://aleo.com/int/company/hubun-spolka-akcyjna-mszana-dolna"], ["Bankier о наценке", "https://www.bankier.pl/wiadomosc/Miliardy-w-miskach-Branza-zoologiczna-walczy-o-portfele-wlascicieli-zwierzat-9206967.html"]] },
      { what: "На сколько хватает мешка", value: "4–9 недель", note: "Собака 20 кг съедает около 9,6 кг в месяц: мешка 12 кг хватает на 38 дней, 9 кг — на 28. Собаке 10 кг мешка 9 кг хватает на 48 дней. Расчёт по норме на упаковке.", links: [["норма кормления", "https://www.doz.pl/p/pan-miesko-sucha-karma-dla-psa-xl-cielecina-z-indykiem-20-kg-205508"]] },
      { what: "Расход владельца на корм", value: "100–300 zł в месяц", note: "Так отвечают 61% владельцев собак; каждый десятый тратит до 500 zł.", links: [["Rzeczpospolita", "https://www.rp.pl/biznes/art43800461-pies-lub-kot-tylko-dla-bogatych-ile-wydajemy-na-domowe-zwierzeta"]] },
      { what: "Где покупают корм", value: "4% — в интернет-зоомагазинах", note: "Дискаунтеры — 40% покупателей, супермаркеты — 26%, обычные зоомагазины — 8%. Массовый рынок, собаки и кошки вместе.", links: [["dlahandlu.pl", "https://www.dlahandlu.pl/nonfood/miska-wazniejsza-niz-wlasny-portfel-polacy-kupuja-to-jak-szaleni,167505.html"]] },
      { what: "Бесплатная доставка у конкурентов", value: "от 99–149 zł", note: "zooplus и Fera — 99 zł, Wiejska Zagroda — 100 zł, John Dog — 139 zł, Maxi Zoo — 149 zł. Наш порог 250 zł для корма высок.", links: [["zooplus", "https://www.zooplus.pl/info/about/shippingcosts"], ["Fera", "https://fera.pl/centrum-pomocy/pomoc-dostawa-jakie-opcje-dostawy-oferuje-fera-pl/"], ["John Dog", "https://johndog.pl/dostawa/"]] },
      { what: "Минимальный заказ у небольших поставщиков", value: "450–600 zł", note: "dlaPsiaka — от 599 zł, Slowdog (лакомства) — доставка бесплатно от 450 zł, Bazar Pupila — от 500 zł. Условия MPPK и Baltica — только по запросу.", links: [["dlaPsiaka", "https://b2b.dlapsiaka.pl/"], ["Slowdog", "https://slowdog.pl/wspolpracuj-z-nami"], ["Bazar Pupila", "https://bazarpupila.pl/hurtownia-zooologiczna-dla-psa-kota/"], ["Baltica", "https://balticapets.pl/pl/content/6-wspolpraca-b2b"]] },
    ],
    factsNote: "Не нашли: ни одного открытого прайса с оптовой и рекомендованной розничной ценой, скидки и минимальный заказ у MPPK, Baltica и John Dog, наценку перепродавца на консервы, польские данные о том, как часто дозаказывают корм. Настоящие цифры даст только запрос прайсов: bok@mppk.pl, hurt@balticapetfood.pl, info@johndog.pl.",
  },

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
    accSp: 970,             // бухгалтерия sp. z o.o. в месяц: ifirma, 790 zł нетто при 16–20 документах, с VAT 972 zł
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
      ["Даша: zlecenie и возраст", "24 года, полставки по zlecenie: до 26 лет zlecenie не облагается PIT; первые 30 месяцев JDG — без социальных взносов (полгода ulga na start, дальше zlecenie выше порога 1 441,80 zł)"],
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
    lead: "Тест на полгода проводим через JDG Даши: за это время платится только взнос на здоровье, а закрыть или поставить на паузу можно одним заявлением. Sp. z o.o. Даши и Насти открываем, если тест прошёл.",
    cards: [
      ["Взносы за полгода теста", "2,6 тыс. zł", "Только взнос на здоровье, 432,54 zł в месяц — с первого дня и даже при убытке. Социальных взносов нет."],
      ["Социальный ZUS Даши", "0 zł", "Первые 30 месяцев: полгода ulga na start, дальше её zlecenie выше порога 1 441,80 zł. С 31-го месяца — полный ZUS, поэтому в JDG не задерживаемся."],
      ["Бухгалтер в месяц", "244–310 zł", "Нетто, онлайн-бюро, при 11–22 расходных документах. Для sp. z o.o. — 720–860 zł."],
      ["Расходных документов в месяц", "11–22", "Если заказывать у каждого украинского поставщика раз в квартал. При заказах каждый месяц — до 34."],
    ],
    // когда у sp. z o.o. всё же появляются взносы
    zus: [
      "письменный договор займа: 10 тыс. zł на закупку дают Настя и Дмитрий, а JDG оформлена на Дашу — без договора деньги юридически становятся её;",
      "там же записать, кому принадлежат бренд, домен, сайт, контент и товар и как всё это переходит в будущую sp. z o.o.;",
      "номер EORI на JDG Даши и таможенный агент — для украинских посылок;",
      "регистрация VAT-UE до первой рекламы в Meta;",
      "Даша — импортёр и продавец и отвечает личным имуществом; спросить бухгалтера про страхование ответственности.",
    ],
    // первый год при прибыли 10 тыс. zł и 20 расходных документах в месяц; бухгалтер — ifirma, брутто
    forms: [
      ["Взносы", "2,6 тыс. zł", "0"],
      ["Налог с прибыли", "0", "0–9% с прибыли"],
      ["Бухгалтер", "около 2,3 тыс. zł", "около 6,8 тыс. zł"],
      ["Регистрация", "0", "около 0,4 тыс. zł и 5 000 zł капитала на счёте компании"],
      ["Всего за полгода", "около 4,9 тыс. zł", "около 7,2 тыс. zł"],
      ["Закрыть, если тест не пошёл", "бесплатно, одним заявлением", "ликвидация: несколько месяцев и расходы на бухгалтера"],
    ],
    formsNote: "Шесть месяцев, около 20 расходных документов в месяц, цены ifirma с VAT (без регистрации по VAT он не возвращается); у sp. z o.o. в сумму входит годовая отчётность. Налог в JDG — ноль, пока прибыль за год ниже 30 тыс. zł: Даше 24 года, её zlecenie до 26 лет освобождено от PIT и необлагаемую сумму не занимает. Чем платим за JDG: бизнес на бумаге только Дашин, и она отвечает личным имуществом. В sp. z o.o. Настя — совладелица, а по долгам отвечает компания; защита не полная — prezes отвечает, если компания не может расплатиться (ст. 299 KSH). Модель наверху страницы посчитана для JDG: бухгалтер 340 zł и взнос на здоровье 433 zł в месяц.",
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
      "Маленькие магазины обычно стартуют как JDG. Бухгалтерская фирма amavat называет переломным оборот 200–250 тыс. zł в год; от 300 тыс. JDG становится невыгодной. У нас в сценарии «Нормально» оборот ниже — тест через JDG совпадает с обычной практикой.",
      "Большинство нишевых собачьих брендов в Польше — JDG; Psishop, Bowl&Bone и Smart Animal — sp. z o.o.",
      "Для двух партнёров есть дешёвая spółka cywilna: простая бухгалтерия, но каждый платит свой взнос на здоровье и отвечает личным имуществом.",
      "Около 40% интернет-магазинов закрываются в первый год (Dun & Bradstreet для PAP, по реестру компаний).",
      "Бренды часто продают сезонными коллекциями с заказом заранее; минимальные партии сильно различаются, об эксклюзиве договариваются отдельно.",
    ],
    ask: [
      "что входит в абонемент: годовая отчётность, импорт, декларации VAT-9M;",
      "подходит ли наш платёжный оператор под освобождение от кассы;",
      "как оформлять выплаты партнёрам;",
      "как проводить импорт: таможенные декларации, VAT на ввозе, номер EORI;",
      "как оформить заём от Насти и Дмитрия и переход товара и бренда в sp. z o.o. после теста.",
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
