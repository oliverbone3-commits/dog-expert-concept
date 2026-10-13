// Единственный источник данных о поставщиках: из него строятся страница, CSV и Excel.
// Поля записи — см. CSV_COLS в suppliers.html; top — популярные товары, letter — черновик письма.
const SUPPLIERS = [
 {
  "name": "Noble Pet",
  "country": "Украина",
  "city": "Харьков",
  "types": [
   "Одежда",
   "Лежаки и дом",
   "Аксессуары"
  ],
  "sizes": "Все размеры",
  "eu": "Только розница (Etsy)",
  "what": "Одежда, лежаки и подушки, автогамаки для перевозки собак.",
  "why": "Широкая линейка у одного производителя: одежда, лежаки, автогамаки.",
  "terms": "Интересные позиции (розница в Украине): дождевик от 990 грн, комбинезон от 1 650 грн, сумка-коврик Travel 1 300 грн. Магазинам и салонам обещают спецусловия, фото и печатные материалы; есть каталог для скачивания.",
  "note": "Уже продаёт за рубеж в розницу через Etsy. В подвале сайта стоит 2014–2022 — проверить, что бренд работает.",
  "source": "https://www.village.com.ua/village/city/animals/306957-dobirka-odyagu-dlya-tvarin",
  "checked": "13.10.2026",
  "site": "https://noblepet.com.ua/",
  "instagram": "https://www.instagram.com/noble_pet",
  "facebook": "https://www.facebook.com/noblepet.com.ua",
  "etsy": "https://www.etsy.com/shop/NoblePetStore",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "noblepetco@gmail.com",
  "phone": "+380667836190",
  "priority": "Первая очередь",
  "segment": "",
  "opinion": "Понравились модели и описание товаров.",
  "next": "Изучить подробнее. Проверить размерную сетку, посадку, качество и оптовые условия.",
  "catalog": "https://noblepet.com.ua/yak-zrobyty-zamiry/",
  "talks": "Не начаты",
  "reviews": "Rozetka: 268 отзывов на 103 товара. Etsy: 4,8 из 5 (252 отзыва), 836 продаж за 2,5 года.",
  "top": [
   {
    "title": "Куртка-дождевик Moss Yellow",
    "price": "1 050 грн",
    "meta": "105 отзывов, 4,6 · Rozetka",
    "url": "https://rozetka.com.ua/ua/68802291/p68802291/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/559221080.jpg"
   },
   {
    "title": "Пуховик Bobby Navy",
    "price": "1 240 грн",
    "meta": "97 отзывов, 4,8 · Rozetka",
    "url": "https://rozetka.com.ua/ua/252786756/p252786756/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/559221204.jpg"
   },
   {
    "title": "Комбинезон Travis",
    "price": "1 790 грн",
    "meta": "19 отзывов, 4,9 · Rozetka",
    "url": "https://rozetka.com.ua/ua/339618355/p339618355/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/559221491.jpg"
   },
   {
    "title": "Куртка-дождевик Moss Blue",
    "price": "1 050 грн",
    "meta": "13 отзывов, 4,6 · Rozetka",
    "url": "https://rozetka.com.ua/ua/252786746/p252786746/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/559221037.jpg"
   }
  ],
  "letter": {
   "to": "noblepetco@gmail.com",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nНам сподобалися ваші моделі та те, як докладно описані товари й заміри. Найбільше цікавлять дощовики Moss, пуховики Bobby та комбінезони Travis — зокрема через широку розмірну сітку з варіантами Long і Short.\n\nПідкажіть, будь ласка:\n1. Чи можете надіслати гуртовий каталог із цінами та мінімальним замовленням?\n2. Чи можна змішувати розміри в одному замовленні й замовити невеликий набір зразків?\n3. Чи маєте досвід гуртових відправлень до ЄС і які документи оформлюєте (експортна декларація, декларація про походження)?\n4. Чи можете надати склад тканин і дані про водовідштовхувальне просочення? Вони потрібні нам для маркування в ЄС.\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "BioIntellect",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Амуниция",
   "Аксессуары"
  ],
  "sizes": "Все размеры",
  "eu": "Есть магазины-партнёры (Испания)",
  "what": "Амуниция из оригинального BioThane®: поводки 2–5 м (облегчённые для собак до 10 кг и классические), перестёжки «свободные руки», анатомические шлейки, ошейники; светоотражающие банданы, жёлтые маркеры настроения.",
  "why": "Закрывает ядро ассортимента — поводки, шлейки, ошейники. Фурнитура из Чехии и Италии, отдельная облегчённая линейка для мелких собак. Сами зовут в опт и готовы брендировать амуницию логотипом партнёра.",
  "terms": "Интересные позиции (розница в Украине): поводок облегчённый 3 м для собак до 10 кг 1 265 грн, поводок классический 3 м 1 550 грн, перестёжка 1 620–2 333 грн, анатомическая шлейка 1 150–1 350 грн, ошейник 400–915 грн, бандана светоотражающая 255 грн. Опт: гибкие условия, коммерческое предложение по запросу.",
  "note": "По их словам, уже работают с магазинами в Украине, Израиле и Испании — эксклюзив в ЕС уточнить. Ширина ленты 9, 16 и 19 мм.",
  "source": "https://biointellect.net/hurtova-spivpratsia-z-biointellect/",
  "checked": "13.10.2026",
  "site": "https://biointellect.net/",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "biointellectanimals@gmail.com",
  "phone": "+380631079615",
  "priority": "Первая очередь",
  "segment": "",
  "opinion": "Амуниция выглядит отлично. Уже был положительный опыт с амуницией из этого же биотана: прослужила около 5 лет. Весь ассортимент выглядит перспективно.",
  "next": "Изучить полный каталог, оптовые цены и возможность перепродажи в Польше.",
  "catalog": "https://biointellect.net/perestibky/",
  "talks": "Не начаты",
  "reviews": "Отзывов не нашли: раздел на сайте пуст, на Rozetka бренда нет. Порядок — «хиты продаж» с сайта.",
  "top": [
   {
    "title": "Поводок из облегчённого BioThane 3 м, для малых собак и кошек",
    "price": "1 265 грн",
    "meta": "хит продаж на сайте",
    "url": "https://biointellect.net/povidets-z-polehshenoho-biothane-dlia-malykh-sobak-i-kotiv-3m/942/",
    "img": "https://biointellect.net/content/images/43/1024x1024l80mc50/povidets-z-polehshenoho-biothane-dlia-malykh-sobak-i-kotiv-3mid-81190185376935.webp"
   },
   {
    "title": "Поводок из классического биотана 3 м, от 10 кг",
    "price": "1 550 грн",
    "meta": "хит продаж на сайте",
    "url": "https://biointellect.net/povidets-z-klasychnoho-biotanu-3m-dlia-sobak-vid-10-kh/",
    "img": "https://biointellect.net/content/images/29/800x800l80mc50/povidets-z-klasychnoho-biotanu-3m-dlia-sobak-vid-10-kh-53402995287953.webp"
   },
   {
    "title": "Анатомическая шлейка из биотана S/M",
    "price": "1 250 грн",
    "meta": "первая в категории",
    "url": "https://biointellect.net/anatomichni-shleiky/1062/",
    "img": "https://biointellect.net/content/images/27/500x500l85nn0/biotanova-anatomichna-shleika-xssid-63200202787277.webp"
   },
   {
    "title": "Перестёжка «свободные руки» 3 м, до 10 кг",
    "price": "1 620 грн",
    "meta": "первая в категории",
    "url": "https://biointellect.net/perestibka-dlia-sobak-do-10kh-3m/566/",
    "img": "https://biointellect.net/content/images/17/500x500l85nn0/perestibka-dlia-sobak-do-10kh-3m566-92747142288749.webp"
   }
  ],
  "letter": {
   "to": "biointellectanimals@gmail.com",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин амуніції для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nАмуніцію з BioThane ми знаємо з власного досвіду — вона служить роками. Прочитали вашу статтю про гуртове партнерство й хочемо обговорити співпрацю. Найбільше нас цікавлять повідці з полегшеного біотану для собак до 10 кг, класичні повідці, анатомічні шлейки та перестібки.\n\nПідкажіть, будь ласка:\n1. Чи можете надіслати комерційну пропозицію: гуртові ціни та мінімальне замовлення?\n2. Чи можна замовити невелику пробну партію або зразки?\n3. Чи маєте досвід відправлень до ЄС для магазинів і які документи оформлюєте (експортна декларація, декларація про походження)?\n4. Чи є у вас уже партнери в Польщі?\n5. Які умови брендування амуніції логотипом магазину?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "IPO4YOU",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Амуниция",
   "Игрушки и тренировка"
  ],
  "sizes": "Средние и крупные",
  "eu": "Не найдено",
  "what": "Снаряжение для дрессировки и спорта с собакой: биотановые и паракордовые поводки, следовые поводки и шлейки, кожаные шлейки и ошейники, шлейка ASTA; одежда для кинологов, аджилити-инвентарь.",
  "why": "Амуниция для дрессировки — то, что рекомендуют кинологи; команда сама ведёт занятия и семинары. Есть раздел индивидуального заказа.",
  "terms": "Интересные позиции (розница в Украине): биотановый поводок с ручкой 452–1 267 грн, биотановый круглый поводок 498–1 674 грн, следовой поводок 10 м 1 357–1 448 грн, паракордовый поводок 163–362 грн, шлейка ASTA 1 403–1 629 грн, кожаная шлейка 1 674 грн. Опт — запросить.",
  "note": "Что производят сами, а что перепродают — на сайте не указано, уточнить.",
  "source": "https://www.ipo4you.com.ua/",
  "checked": "13.10.2026",
  "site": "https://www.ipo4you.com.ua/ua/",
  "instagram": "https://www.instagram.com/ipo4you",
  "facebook": "https://www.facebook.com/groups/260988080909100",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "https://www.youtube.com/channel/UCUZNYkwFYAoHf4dlhgjNi-Q",
  "email": "",
  "phone": "+380677062274",
  "priority": "Первая очередь",
  "segment": "Профессиональный",
  "opinion": "Магазин профессиональной амуниции. Много полезных игрушек для тренировок и крупных собак.",
  "next": "Рассмотреть для профессионального ассортимента. Изучить игрушки, тренировочный инвентарь и условия закупки.",
  "catalog": "https://www.ipo4you.com.ua/ua/shop/",
  "talks": "Не начаты",
  "reviews": "Отзывов на сайте нет. Порядок — по числу продаж в их магазине.",
  "top": [
   {
    "title": "Биотановый поводок",
    "price": "от 407 грн",
    "meta": "1-е место по продажам",
    "url": "https://www.ipo4you.com.ua/ua/product/biotanovyj-povodok-1-10-m/",
    "img": "https://www.ipo4you.com.ua/wp-content/uploads/2018/03/ESB_8576-480x381.jpg"
   },
   {
    "title": "Удавка 3–4 мм",
    "price": "от 181 грн",
    "meta": "2-е место по продажам",
    "url": "https://www.ipo4you.com.ua/ua/product/udavka-5-6mm/",
    "img": "https://www.ipo4you.com.ua/wp-content/uploads/2019/06/ESB_5232-copy-480x668.jpg"
   },
   {
    "title": "Прорезиненный поводок",
    "price": "от 317 грн",
    "meta": "3-е место по продажам",
    "url": "https://www.ipo4you.com.ua/ua/product/prorezinennyj-povodok-1-10m/",
    "img": "https://www.ipo4you.com.ua/wp-content/uploads/2019/03/ESB_8636-480x722.jpg"
   },
   {
    "title": "Сумка для лакомств с клипсой",
    "price": "от 271 грн",
    "meta": "4-е место по продажам",
    "url": "https://www.ipo4you.com.ua/ua/product/sumka-dlya-lakomstv-na-lipkoj-lente/",
    "img": "https://www.ipo4you.com.ua/wp-content/uploads/2020/07/treatsumka-1-300x451.jpg"
   },
   {
    "title": "Мяч «Дыня мини»",
    "price": "от 452 грн",
    "meta": "5-е место по продажам",
    "url": "https://www.ipo4you.com.ua/ua/product/kusalka-dynya-mini/",
    "img": "https://www.ipo4you.com.ua/wp-content/uploads/2018/10/ESB_0747-480x721.jpg"
   }
  ],
  "letter": {
   "to": "+380677062274",
   "channel": "Мессенджер или Instagram",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин амуніції для собак і шукаємо постачальника спорядження для дресирування.\n\nУ вас нас цікавлять біотанові та слідові повідці, шлейки, сумки для ласощів та іграшки для тренувань.\n\nПідкажіть, будь ласка:\n1. Чи працюєте ви з магазинами гуртом і які умови: ціни, мінімальне замовлення?\n2. Що з асортименту ви виготовляєте самі?\n3. Чи відправляли вже замовлення до Польщі й які документи оформлюєте?\n\nНа яку пошту зручно надіслати докладніший лист? Дякую!",
   "hint": "Почты на сайте нет: отправлять сообщением по телефону или в Instagram. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Bark&Go",
  "country": "Украина",
  "city": "Львов",
  "types": [
   "Одежда",
   "Аксессуары"
  ],
  "sizes": "Все размеры",
  "eu": "Только розница (Etsy)",
  "what": "Мембранные комбинезоны, куртки и попоны, жилеты, пыльники, охлаждающая коллекция; сумки для выгула, сумочки для лакомств, диспенсер для пакетов, дождевик для владельца.",
  "why": "Около 10 лет на рынке. По подкасту SendPulse (июнь 2026) основательница выбирает дистрибьюторов и фокусные рынки — партнёра ищут сами.",
  "terms": "Интересные позиции (розница в Украине): мембранный комбинезон 2 116–2 785 грн (29 размеров), мембранная попона 1 980 грн (24 размера), сумочка для лакомств 600–700 грн, диспенсер для пакетов 350 грн. Пошив под заказ 5–7 рабочих дней. Опт и минимальная партия — запросить.",
  "note": "На сайте есть раздел «Співпраця», но без условий. Большая размерная сетка и пошив под заказ позволяют продавать по замерам без склада.",
  "source": "https://sendpulse.ua/blog/podkast-z-oleksandroiu-vakarovoiu",
  "checked": "13.10.2026",
  "site": "https://barkandgo.com.ua/",
  "instagram": "",
  "facebook": "",
  "etsy": "https://www.etsy.com/shop/BarkAndGo",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "info.barkandgo.ua@gmail.com",
  "phone": "+380677494005",
  "priority": "Вторая очередь",
  "segment": "",
  "opinion": "Есть интересные модели дождевиков и другой одежды, но дизайн многих моделей слишком пёстрый и обычный. Можно собирать парные луки «человек + собака».",
  "next": "Изучить подробнее. Проверить модели для парных образов и потенциал продажи в Польше.",
  "catalog": "https://barkandgo.com.ua/shop/sobaka/doschoviki-legki/",
  "talks": "Не начаты",
  "reviews": "Etsy: 4,8 из 5 (1,4 тыс. отзывов), 5 770 продаж за 10 лет. На своём сайте отзывов нет. На Etsy цены в 2–3 раза выше, чем на украинском сайте.",
  "top": [
   {
    "title": "Дождевик-комбинезон для таксы, по меркам",
    "price": "448 zł",
    "meta": "витрина магазина на Etsy",
    "url": "https://www.etsy.com/listing/4339958653/waterproof-dachshund-corgi-raincoat",
    "img": "https://i.etsystatic.com/11183352/r/il/e6fc1f/8446712665/il_340x270.8446712665_a5o0.jpg"
   },
   {
    "title": "Дождевик в клетку (фланель)",
    "price": "630 zł",
    "meta": "витрина магазина на Etsy",
    "url": "https://www.etsy.com/listing/4412229192/waterproof-dog-raincoat-tartan-flannel",
    "img": "https://i.etsystatic.com/11183352/r/il/4c18fd/7441363740/il_340x270.7441363740_np1b.jpg"
   },
   {
    "title": "Снуд для собак",
    "price": "151 zł",
    "meta": "витрина магазина на Etsy",
    "url": "https://www.etsy.com/listing/4407849484/dog-snood-neck-warmer-for-all-dog-sizes",
    "img": "https://i.etsystatic.com/11183352/r/il/1751f0/7414728754/il_340x270.7414728754_l3d9.jpg"
   },
   {
    "title": "Попона Perfect Match, мембрана, 24 размера",
    "price": "1 980 грн",
    "meta": "1-е место по популярности на сайте",
    "url": "https://barkandgo.com.ua/shop/popona-dlya-sobak-perfect-match-pink-membrana-24-rozmiri/",
    "img": "https://barkandgo.com.ua/WebCache/Media/shop-12198/_assets/%D0%9F%D0%BE%D0%BF%D0%BE%D0%BD%D0%B8/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA_%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-09-23_%D0%BE_13.14.22-ratio-10x9-proportions-png.png"
   },
   {
    "title": "Ромпер флисовый Hygge",
    "price": "1 010 грн",
    "meta": "3-е место по популярности на сайте",
    "url": "https://barkandgo.com.ua/shop/romper-flisoviy-hygge/",
    "img": "https://barkandgo.com.ua/WebCache/Media/shop-12198/_assets/%D0%A0%D0%BE%D0%BC%D0%BF%D0%B5%D1%80%D0%B8/ChatGPT_Image_21_%D1%81%D0%B5%D0%BD%D1%82._2026_%D0%B3.%2C_19_25_49-ratio-10x9-proportions-png.png"
   }
  ],
  "letter": {
   "to": "info.barkandgo.ua@gmail.com",
   "channel": "Почта",
   "subject": "Співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nВаші речі ми знаємо з сайту та Etsy: подобаються мембранні дощовики й комбінезони, велика розмірна сітка та пошив за мірками. Окремо цікаві дощовики для такс і парні образи «людина + собака».\n\nПідкажіть, будь ласка:\n1. Чи працюєте ви з магазинами-партнерами і на яких умовах: гуртові ціни, мінімальне замовлення?\n2. Чи можна працювати під замовлення — ми передаємо заміри клієнта, ви шиєте — і які тоді терміни?\n3. Чи можна замовити кілька зразків для примірки та зйомки?\n4. Чи маєте досвід гуртових відправлень до ЄС і які документи оформлюєте (експортна декларація, декларація про походження)?\n5. Чи є у вас уже партнери в Польщі?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Dogs Bomba",
  "country": "Украина",
  "city": "",
  "types": [
   "Одежда",
   "Амуниция"
  ],
  "sizes": "Все размеры",
  "eu": "Только розница (Etsy)",
  "what": "Одежда с 2014 года, своя команда дизайнеров и швей; отдельные линейки для такс и корги.",
  "why": "Доступная цена и породные лекала: дождевик-комбинезон для таксы около 680–920 грн в рознице.",
  "terms": "Интересные позиции (розница в Украине): дождевик для такс 545–745 грн, зимний комбинезон для такс 920 грн, дождевик со шлейкой 920 грн, дождевик для крупных собак 1 175 грн, поводок Hands Free 510 грн. Опт и дропшиппинг — через форму на сайте, условия запросить.",
  "note": "Ткань дождевиков — водоотталкивающая плащёвка, не мембрана. Дистрибьютора в ЕС поиск не нашёл.",
  "source": "https://dogsbomba.com/",
  "checked": "13.10.2026",
  "site": "https://dogsbomba.com/",
  "instagram": "https://www.instagram.com/dogs_bomba",
  "facebook": "",
  "etsy": "https://www.etsy.com/shop/DogsBomba",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "dogsbomba@gmail.com",
  "phone": "+380996891029",
  "priority": "Вторая очередь",
  "segment": "Бюджетный",
  "opinion": "Ничего необычного или уникального, но есть интересные модели для дешёвого сегмента. Есть товары для такс.",
  "next": "Рассмотреть бюджетный сегмент. Отдельно изучить ассортимент для такс.",
  "catalog": "https://dogsbomba.com/catalog/platya/",
  "talks": "Не начаты",
  "reviews": "Rozetka: больше 1 000 товаров, но отзывов мало — 65 на 53 товара, не больше 3 на товар. Etsy: 4,0 из 5 (6 отзывов), 37 продаж, магазин на паузе с февраля 2026.",
  "top": [
   {
    "title": "Костюм махровый",
    "price": "625 грн",
    "meta": "топ продаж на сайте",
    "url": "https://dogsbomba.com/catalog/kostyum-makhrovyy-shokolad-d-271/",
    "img": "https://dogsbomba.com/storage/app/uploads/public/03c/ba2/ce0/thumb__600_400_0_0_auto.webp"
   },
   {
    "title": "Рубашка в клетку",
    "price": "580 грн",
    "meta": "топ продаж на сайте",
    "url": "https://dogsbomba.com/catalog/rubashka-kletchataya-elektrik-rub-73/",
    "img": "https://dogsbomba.com/storage/app/uploads/public/b02/923/bc2/thumb__600_400_0_0_auto.webp"
   },
   {
    "title": "Дождевик с рюшами",
    "price": "636 грн",
    "meta": "3 отзыва, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/531643534/p531643534/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/580748555.jpg"
   },
   {
    "title": "Жилет на липучках",
    "price": "970 грн",
    "meta": "3 отзыва, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/417762108/p417762108/",
    "img": "https://content.rozetka.com.ua/goods/images/big/408614938.jpg"
   }
  ],
  "letter": {
   "to": "dogsbomba@gmail.com",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nНас цікавить ваш одяг за доступною ціною: насамперед дощовики й зимові комбінезони для такс, а також дощовики для великих собак.\n\nПідкажіть, будь ласка:\n1. Чи можете відкрити доступ до гуртового каталогу з цінами? Яке мінімальне замовлення?\n2. Чи можна змішувати моделі та розміри в одному замовленні?\n3. Чи маєте досвід гуртових відправлень до ЄС і які документи оформлюєте (експортна декларація, декларація про походження)?\n4. Чи можете надати склад тканин? Він потрібен нам для маркування в ЄС.\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского. На сайте есть и форма заявки на опт: dogsbomba.com/wholesale-cooperation."
  }
 },
 {
  "name": "Woofit",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Небольшое ателье: дождевики, лёгкие и тёплые куртки, жилеты, свитеры, бомберы; своя размерная сетка по породам, правка под размер.",
  "why": "Начинали с пошива по индивидуальным меркам — можно обсуждать нестандартные размеры.",
  "terms": "Интересные позиции (розница в Украине): дождевик 1 300–1 500 грн, тёплая куртка 1 800–2 100 грн. Опт — запросить.",
  "note": "Почта на сайте скрыта защитой, писать через Instagram. Объёмы ателье небольшие.",
  "source": "https://www.village.com.ua/village/city/animals/306957-dobirka-odyagu-dlya-tvarin",
  "checked": "13.10.2026",
  "site": "https://www.woofitdogwear.com/",
  "instagram": "https://www.instagram.com/woofitdogwear",
  "facebook": "https://www.facebook.com/woofitdogwear/",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Вторая очередь",
  "segment": "Бюджетный",
  "opinion": "Есть неплохие модели, но они тоже ориентированы на дешёвый сегмент.",
  "next": "Сравнить цены и качество. Рассматривать для бюджетной линейки.",
  "catalog": "https://www.woofitdogwear.com/product-category/raincoats/",
  "talks": "Не начаты",
  "reviews": "Отзывов не нашли ни на сайте, ни на Rozetka. Порядок — по числу продаж в их магазине. Цены выше бюджетного сегмента.",
  "top": [
   {
    "title": "Тёплая куртка хаки",
    "price": "1 800 грн",
    "meta": "1-е место по продажам",
    "url": "https://www.woofitdogwear.com/product/tepla-kurtka-khaki/",
    "img": "https://www.woofitdogwear.com/wp-content/uploads/2021/01/dsc_5570-640x640.jpg"
   },
   {
    "title": "Тёплая куртка «Пташки»",
    "price": "2 100 грн",
    "meta": "2-е место по продажам",
    "url": "https://www.woofitdogwear.com/product/tepla-kurtka-iz-paternom-ptashky/",
    "img": "https://www.woofitdogwear.com/wp-content/uploads/2023/09/esb_7809-640x640.jpg"
   },
   {
    "title": "Двусторонняя бандана",
    "price": "300 грн",
    "meta": "4-е место по продажам",
    "url": "https://www.woofitdogwear.com/product/bandana/",
    "img": "https://www.woofitdogwear.com/wp-content/uploads/2018/09/esb_5964-640x640.png"
   },
   {
    "title": "Свитер «Догуфляж»",
    "price": "1 200 грн",
    "meta": "6-е место по продажам",
    "url": "https://www.woofitdogwear.com/product/sviter-dogufljazh-2/",
    "img": "https://www.woofitdogwear.com/wp-content/uploads/2021/11/dsc_6518-640x640.png"
   }
  ],
  "letter": {
   "to": "https://www.instagram.com/woofitdogwear",
   "channel": "Instagram",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин для собак. Нам подобаються ваші теплі куртки й дощовики та розмірна сітка за породами.\n\nПідкажіть, будь ласка:\n1. Чи працюєте ви з магазинами гуртом і на яких умовах?\n2. Які обсяги й терміни пошиву для вас реальні?\n3. Чи відправляли вже замовлення до Польщі?\n\nНа яку пошту зручно надіслати докладніший лист? Дякую!",
   "hint": "Почта на сайте скрыта: отправлять сообщением в Instagram. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "ЛавГав",
  "country": "Украина",
  "city": "",
  "types": [
   "Расходники"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Пакеты для уборки: из кукурузного крахмала (домашнее компостирование) и обычные; контейнер для рулонов.",
  "why": "Есть готовый «месячный запас» — наша механика расходников. Приглашают зоомагазины и салоны в партнёры.",
  "terms": "Интересные позиции (розница в Украине): «месячный запас» пакетов из кукурузного крахмала 130 грн, крахмальные пакеты 150–170 грн, контейнер для рулонов 80 грн. Опт — запросить.",
  "note": "Пакеты «БИО» — полиэтилен с добавкой-биодеградантом: проверить, не подпадают ли под запрет ЕС на оксоразлагаемый пластик, до проверки не брать. Сертификат компостируемости крахмальных пакетов на сайте не назван — запросить документ.",
  "source": "https://lavgav.ua/",
  "checked": "13.10.2026",
  "site": "https://lavgav.ua/",
  "instagram": "https://www.instagram.com/welovegaw",
  "facebook": "https://www.facebook.com/welovegaw",
  "etsy": "",
  "tiktok": "https://www.tiktok.com/@welovegaw",
  "telegram": "",
  "youtube": "https://www.youtube.com/channel/UC6nuUqtOEUtWTPOajtu6E-Q",
  "email": "welovegaw@gmail.com",
  "phone": "+380639351463",
  "priority": "Вторая очередь",
  "segment": "",
  "opinion": "Только пакеты для уборки за собаками, но выглядят плотными.",
  "next": "Проверить качество, толщину, стоимость упаковки и цену за один пакет.",
  "catalog": "https://lavgav.ua/faq",
  "talks": "Не начаты",
  "reviews": "Отзывов не нашли. Порядок — отметки «топ продаж» на сайте.",
  "top": [
   {
    "title": "ЭКО-пакеты из кукурузного крахмала",
    "price": "170 грн",
    "meta": "топ продаж на сайте",
    "url": "https://lavgav.ua/products/corn-bags",
    "img": "https://lavgav.ua/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSnJkbUZ5YVdGdWRITXZORFY2TjJSd2JXMWhaelkwWkdaaWNXbHZOVzFuYXpWaWJtNTBaQzg1TXpnM056a3dZV1ptTjJaaFptUTFZamMyTkdGalpqUmtZMk15TnpFek4yWmlPREZpWlRrMU1qRm1ZMlptTURjeE56QmtaRFZtWkRBMU1qSm1ZbU0yQmpvR1JWUTZFR1JwYzNCdmMybDBhVzl1U1NKTmFXNXNhVzVsT3lCbWFXeGxibUZ0WlQwaVEyOXlia0pCWnlBeklERXVjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkRGIzSnVRa0ZuSlRJd015VXlNREV1Y0c1bkJqc0dWRG9SWTI5dWRHVnVkRjkwZVhCbFNTSU9hVzFoWjJVdmNHNW5CanNHVkRvUmMyVnlkbWxqWlY5dVlXMWxPZ3BzYjJOaGJBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2Jfa2V5In19--5ebc18024ff506554eeb3296ee37ec27a61a8c85/CornBAg%203%201.png"
   },
   {
    "title": "Универсальные пакеты для уборки",
    "price": "100 грн",
    "meta": "топ продаж на сайте",
    "url": "https://lavgav.ua/products/universal_bio_bags",
    "img": "https://lavgav.ua/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSnJkbUZ5YVdGdWRITXZNR2R3TW5GME5HMDNaemhpZDJaaU0yNWphWGgzWld0blpUQm1hQzh3TVdNM1lqY3dZamd6WlRCa05UbGpNVGRsWldNME5XRTJOekk1TVRJeFkyWXpZMlpsWWpaaE5EUTJNelkwT0RWbE5UVXdNVGxqWmpjMk4yVTJNREEzQmpvR1JWUTZFR1JwYzNCdmMybDBhVzl1U1NKTGFXNXNhVzVsT3lCbWFXeGxibUZ0WlQwaWRYUnBiR2wwZVRNdGJXbHVMbkJ1WnlJN0lHWnBiR1Z1WVcxbEtqMVZWRVl0T0NjbmRYUnBiR2wwZVRNdGJXbHVMbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--346c6f28f6674347e1526b83cd532fc748714a51/utility3-min.png"
   },
   {
    "title": "Пакеты серии «Put In»: 5 грн с упаковки идут UAnimals",
    "price": "100 грн",
    "meta": "топ продаж на сайте",
    "url": "https://lavgav.ua/products/putin_cleanup-bags",
    "img": "https://lavgav.ua/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSnJkbUZ5YVdGdWRITXZOSEZpTVdKMGIzUm1aWEZpY0dKcGNEZzFZbWhyZFhSMmRERnJlQzh3TVdNM1lqY3dZamd6WlRCa05UbGpNVGRsWldNME5XRTJOekk1TVRJeFkyWXpZMlpsWWpaaE5EUTJNelkwT0RWbE5UVXdNVGxqWmpjMk4yVTJNREEzQmpvR1JWUTZFR1JwYzNCdmMybDBhVzl1U1NKSGFXNXNhVzVsT3lCbWFXeGxibUZ0WlQwaWNIVjBhVzR5TFcxcGJpNXdibWNpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSjNCMWRHbHVNaTF0YVc0dWNHNW5CanNHVkRvUlkyOXVkR1Z1ZEY5MGVYQmxTU0lPYVcxaFoyVXZjRzVuQmpzR1ZEb1JjMlZ5ZG1salpWOXVZVzFsT2dwc2IyTmhiQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2tleSJ9fQ==--cbc620ba409c6ce0e0a0d35f71869c16640c32d4/putin2-min.png"
   }
  ],
  "letter": {
   "to": "welovegaw@gmail.com",
   "channel": "Почта",
   "subject": "Гуртова закупівля пакетів — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nШукаємо постачальника пакетів для прибирання за собаками. Нас цікавлять пакети з кукурудзяного крохмалю та формат «місячний запас».\n\nПідкажіть, будь ласка:\n1. Чи можете надіслати гуртові ціни та мінімальне замовлення? Скільки пакетів в упаковці, який розмір і товщина?\n2. Чи є сертифікат, що підтверджує придатність крохмальних пакетів до компостування (EN 13432, OK compost HOME або інший)?\n3. Який склад БІО-пакетів: це поліетилен із добавкою? Для нас це важливо через вимоги ЄС до оксорозкладного пластику.\n4. Чи маєте досвід гуртових відправлень до ЄС і які документи оформлюєте (експортна декларація, декларація про походження)?\n5. Чи можна замовити зразки?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Vitameat",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Лакомства"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Сушёное мясо и субпродукты, один ингредиент в пачке, без добавок.",
  "why": "Сильный продукт для расходников.",
  "terms": "Запросить.",
  "note": "Ввоз кормов животного происхождения в ЕС требует ветеринарных разрешений — пока вне нашей схемы.",
  "source": "https://vitameat.com.ua/",
  "checked": "13.10.2026",
  "site": "https://vitameat.com.ua/",
  "instagram": "https://www.instagram.com/vitameat.kyiv",
  "facebook": "https://www.facebook.com/Vitameat",
  "etsy": "",
  "tiktok": "https://www.tiktok.com/@vitameat",
  "telegram": "https://t.me/vitameat",
  "youtube": "https://www.youtube.com/@vitameat_kyiv",
  "email": "info@vitameat.com.ua",
  "phone": "+380732839011",
  "priority": "Вторая очередь",
  "segment": "",
  "opinion": "Хорошие лакомства, но есть сомнения, будет ли цена конкурентоспособной в Польше.",
  "next": "Сравнить стоимость с польскими аналогами с учётом доставки и наценки.",
  "catalog": "https://vitameat.com.ua/product-category/susheni-kovbaski/",
  "talks": "Не начаты",
  "reviews": "Rozetka: 22 товара, 4 отзыва. На сайте 1 отзыв. Порядок — по числу продаж в их магазине.",
  "top": [
   {
    "title": "Лёгкие сушёные",
    "price": "от 144 грн",
    "meta": "1-е место по продажам; 3 отзыва, 5,0 на Rozetka",
    "url": "https://vitameat.com.ua/product/legeni-sushi/",
    "img": "https://vitameat.com.ua/wp-content/uploads/2026/09/abCx9GzDOW-300x300.webp"
   },
   {
    "title": "Вымя сушёное кусочками",
    "price": "от 200 грн",
    "meta": "2-е место по продажам",
    "url": "https://vitameat.com.ua/product/vymya-shmatochky/",
    "img": "https://vitameat.com.ua/wp-content/uploads/2026/09/455UiPMfz6-300x300.webp"
   },
   {
    "title": "Рубец сушёный колбасками",
    "price": "от 116 грн",
    "meta": "3-е место по продажам",
    "url": "https://vitameat.com.ua/product/rubets-kovbaskamy/",
    "img": "https://vitameat.com.ua/wp-content/uploads/2026/09/T3l8w7WybC-300x300.webp"
   }
  ],
  "letter": {
   "to": "info@vitameat.com.ua",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nНас цікавлять ваші сушені ласощі з одного інгредієнта: легені, рубець, ковбаски.\n\nПідкажіть, будь ласка:\n1. Чи маєте ви дозвіл на експорт до ЄС (підприємство в переліку затверджених ЄС для кормів тваринного походження) і чи вже постачаєте до країн ЄС?\n2. Чи можете надіслати гуртовий прайс і мінімальне замовлення?\n3. Який термін придатності та умови зберігання?\n4. Чи можете надати склад і аналітичні показники для маркування польською?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского. Главный вопрос — разрешение на экспорт в ЕС: без него ввоз невозможен."
  }
 },
 {
  "name": "BASIC.FOOD",
  "country": "Украина",
  "city": "Ровно",
  "types": [
   "Лакомства"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Сушёные говяжьи субпродукты: лёгкие, сердце, печень, рубец.",
  "why": "Простой состав без консервантов.",
  "terms": "Запросить.",
  "note": "То же ограничение: ветеринарные разрешения на ввоз.",
  "source": "https://basic-food.shop/",
  "checked": "13.10.2026",
  "site": "https://basic-food.shop/",
  "instagram": "https://www.instagram.com/basic.rivne",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "https://t.me/basic_food_bot",
  "youtube": "",
  "email": "info@basic-food.shop",
  "phone": "+380976655442",
  "priority": "Вторая очередь",
  "segment": "",
  "opinion": "Аналогично VitaMeat: хорошие лакомства, но нужно сравнить цены с польским рынком.",
  "next": "Проверить себестоимость, составы, сроки годности и оптовые условия.",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных нет: на Rozetka бренда нет, сайт не отдаёт список товаров.",
  "top": [],
  "letter": {
   "to": "info@basic-food.shop",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nНас цікавлять ваші сушені яловичі субпродукти: легені, серце, печінка, рубець.\n\nПідкажіть, будь ласка:\n1. Чи маєте ви дозвіл на експорт до ЄС (підприємство в переліку затверджених ЄС для кормів тваринного походження) і чи вже постачаєте до країн ЄС?\n2. Чи можете надіслати гуртовий прайс і мінімальне замовлення?\n3. Який термін придатності та умови зберігання?\n4. Чи можете надати склад і аналітичні показники для маркування польською?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского. Главный вопрос — разрешение на экспорт в ЕС: без него ввоз невозможен."
  }
 },
 {
  "name": "Pet Fashion",
  "country": "Украина",
  "city": "",
  "types": [
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Комбинезоны, дождевики, жилеты, худи; отдельные лекала под таксу и другие породы.",
  "why": "Попадает в нишу такс. У владельца (Suziria Group) уже есть канал в Польшу для корма Savory через Hovet.",
  "terms": "Интересные позиции (розница в Украине): комбинезон COLD 564–593 грн, дождевик RAIN 553–640 грн, жилет E.Vest 541–649 грн, светоотражающий Yellow Vest 354 грн, комбинезон Milly с размерами под корги 1 215 грн. Размеры до 7XL. Опт — через Suziria Brands, запросить.",
  "note": "Крупный производитель: эксклюзив маловероятен. Лекала под таксу при проверке сайта 12.10.2026 не подтверждены.",
  "source": "https://mind.ua/news/20266537-ukrayinska-suziria-brands-vihodit-na-rinki-polshchi-ta-niderlandiv",
  "checked": "13.10.2026",
  "site": "https://pet-fashion.com.ua/",
  "instagram": "https://www.instagram.com/petfashion_tm",
  "facebook": "https://www.facebook.com/petfashion.tm",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "https://www.youtube.com/channel/UCVrt1m3VlfDR0LVjD6ogkyA",
  "email": "",
  "phone": "",
  "priority": "Третья очередь",
  "segment": "",
  "opinion": "Совершенно обычная одежда. Ничем не отличается от польского рынка.",
  "next": "Искать только товары с конкурентной ценой или интересными условиями опта.",
  "catalog": "https://pet-fashion.com.ua/uk/60-dosshoviki-ta-vitrovki",
  "talks": "Не начаты",
  "reviews": "Rozetka: 332 отзыва на 70 товаров из первой тысячи.",
  "top": [
   {
    "title": "Лежак Brig",
    "price": "1 395 грн",
    "meta": "39 отзывов, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/548883678/p548883678/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/602851290.jpg"
   },
   {
    "title": "Комбинезон Rain",
    "price": "746 грн",
    "meta": "38 отзывов, 4,7 · Rozetka",
    "url": "https://rozetka.com.ua/ua/548883321/p548883321/",
    "img": "https://content.rozetka.com.ua/goods/images/big/602850804.jpg"
   },
   {
    "title": "Лежак Lux",
    "price": "505 грн",
    "meta": "38 отзывов, 4,7 · Rozetka",
    "url": "https://rozetka.com.ua/ua/425117229/p425117229/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/421181185.jpg"
   },
   {
    "title": "Комбинезон Cold",
    "price": "565 грн",
    "meta": "16 отзывов, 4,9 · Rozetka",
    "url": "https://rozetka.com.ua/ua/569534710/p569534710/",
    "img": "https://content.rozetka.com.ua/goods/images/big/434422528.jpg"
   }
  ],
  "letter": {
   "to": "https://www.instagram.com/petfashion_tm",
   "channel": "Instagram или Facebook",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин для собак і розглядаємо ваш одяг для асортименту: комбінезони COLD, дощовики RAIN, жилети.\n\nПідкажіть, будь ласка:\n1. Хто у вас відповідає за експорт і гуртові продажі за кордон?\n2. Чи є у Pet Fashion дистриб'ютор у Польщі?\n3. Чи можна отримати гуртовий прайс і умови для невеликого магазину?\n\nНа яку пошту зручно надіслати докладніший лист? Дякую!",
   "hint": "Почты на сайте бренда нет: отправлять сообщением в Instagram или Facebook. Опт идёт через Suziria Brands. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Montmorency",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Одежда и аксессуары для собак и кошек, своё ателье, пошив по меркам.",
  "why": "Премиальный сегмент: 1 500–3 000 грн за вещь (цены 2021 года).",
  "terms": "Запросить.",
  "note": "Сайт montmorency.com.ua сейчас отдаёт 404 — проверить, работает ли бренд.",
  "source": "https://www.village.com.ua/village/city/animals/306957-dobirka-odyagu-dlya-tvarin",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "https://www.instagram.com/montmorency_for_pets",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Третья очередь",
  "segment": "Премиум",
  "opinion": "С 2023 года нет информации.",
  "next": "Проверить, работает ли бренд сейчас и актуальны ли контакты.",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": {
   "to": "https://www.instagram.com/montmorency_for_pets",
   "channel": "Instagram",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин для собак. Бачили ваш одяг та пошив за мірками, але сайт зараз не відкривається.\n\nПідкажіть, будь ласка:\n1. Чи працює бренд зараз і де можна подивитися актуальний каталог?\n2. Чи співпрацюєте ви з магазинами?\n\nДякую!",
   "hint": "Сайт не работает, с 2023 года о бренде нет информации: сначала выясняем, жив ли он. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "БроніК9",
  "country": "Украина",
  "city": "Львов",
  "types": [
   "Амуниция"
  ],
  "sizes": "Средние и крупные",
  "eu": "Не найдено",
  "what": "Магазин амуниции для служебных собак: шлейки, тактические ошейники и поводки, намордники, обувь, защита. Большая часть — чужие бренды (OneTigris, Letsperfect, норвежская амуниция).",
  "why": "Вариант для крупных и рабочих собак и собачьего спорта.",
  "terms": "Похоже на своё производство (уточнить): шлейки К9 1 655 и 2 510 грн, комплект К9 ошейник с поводком 845 грн, амортизирующий поводок 440 грн. Опт не указан. В Европу отправляют по индивидуальной договорённости, 7–14 рабочих дней.",
  "note": "Что шьют сами — по сайту не видно, вывод сделан по названиям товаров.",
  "source": "https://bronik9.com.ua",
  "checked": "13.10.2026",
  "site": "https://bronik9.com.ua/",
  "instagram": "https://www.instagram.com/bronik_k9",
  "facebook": "https://www.facebook.com/BronikK9",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "https://youtube.com/@BroniK9",
  "email": "",
  "phone": "+380981789756",
  "priority": "Третья очередь",
  "segment": "Профессиональный",
  "opinion": "Слишком серьёзная амуниция. Больше подходит профессиональным спортсменам и служебным собакам.",
  "next": "Узкая профессиональная ниша, не для основного ассортимента.",
  "catalog": "https://bronik9.com.ua/category/5268-nashijniki-ta-povodki",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": {
   "to": "+380981789756",
   "channel": "Мессенджер или Instagram",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин амуніції для собак. Нас цікавить амуніція для великих і робочих собак: шлейки К9, комплекти нашийник із повідцем, амортизаційні повідці.\n\nПідкажіть, будь ласка:\n1. Що з асортименту ви виготовляєте самі?\n2. Чи працюєте ви з магазинами гуртом і на яких умовах?\n3. Чи відправляли вже замовлення до Польщі й які документи оформлюєте?\n\nНа яку пошту зручно надіслати докладніший лист? Дякую!",
   "hint": "Почта на сайте скрыта: отправлять сообщением по телефону или в Instagram. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Best 4 Dogs",
  "country": "Украина",
  "city": "",
  "types": [
   "Амуниция"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Профессиональная амуниция: несколько видов поводков и ошейников.",
  "why": "Возможный источник поводков для дрессировки.",
  "terms": "Неизвестно.",
  "note": "Сайт best4dogs.com.ua не открывается; команда смотрела страницу в каталоге Made in UA.",
  "source": "https://madeinua.org/catalog/tovary-dlia-tvaryn/best-4-dogs/",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Третья очередь",
  "segment": "",
  "opinion": "Ассортимент не понравился.",
  "next": "Низкий приоритет.",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": null
 },
 {
  "name": "Mr. Snoopy",
  "country": "Украина",
  "city": "",
  "types": [
   "Амуниция",
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Ошейники, поводки, шлейки; худи, дождевики, зимние жилеты.",
  "why": "Один из немногих найденных украинских брендов именно амуниции.",
  "terms": "Запросить. Цены 2021 года: поводок от 200 грн.",
  "note": "Сайт mrsnoopy.com не открывается — проверить, работает ли бренд.",
  "source": "https://www.village.com.ua/village/city/animals/306957-dobirka-odyagu-dlya-tvarin",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "https://www.instagram.com/mrsnoopythedog",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": {
   "to": "https://www.instagram.com/mrsnoopythedog",
   "channel": "Instagram",
   "subject": "",
   "body": "Добрий день! Мене звати Дар'я, я кінологиня з Познані. Ми з командою запускаємо в Польщі інтернет-магазин амуніції для собак. Бачили ваші нашийники, повідці та шлейки, але сайт зараз не відкривається.\n\nПідкажіть, будь ласка:\n1. Чи працює бренд зараз і де можна подивитися актуальний каталог?\n2. Чи співпрацюєте ви з магазинами?\n\nДякую!",
   "hint": "Сайт не работает: сначала выясняем, жив ли бренд. Дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Rebellious Collars",
  "country": "Украина",
  "city": "",
  "types": [
   "Амуниция"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Мастерская: ошейники из натуральной кожи под размер и цвет.",
  "why": "Кожаная амуниция ручной работы.",
  "terms": "Неизвестно.",
  "note": "Контакты поиском не нашлись — искать в Instagram.",
  "source": "https://shotam.info/ukrains-ki-zootovary-top-10-vyrobnykiv-odiahu-budynochkiv-ta-smakolykiv-dlia-tvaryn/",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": null
 },
 {
  "name": "Dogtag",
  "country": "Украина",
  "city": "Киев",
  "types": [
   "Адресники"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Адресники с гравировкой телефона владельца, разные формы и размеры.",
  "why": "Недорогое персональное дополнение к заказу.",
  "terms": "—",
  "note": "На сайте одна строка: мастерская закрыта, ушли в ВСУ (проверено 12.10.2026).",
  "source": "https://madeinua.org/catalog/tovary-dlia-tvaryn/dogtag/",
  "checked": "13.10.2026",
  "site": "http://dogtag.kiev.ua",
  "instagram": "",
  "facebook": "https://www.facebook.com/dogtag.kiev.ua",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": null
 },
 {
  "name": "Ласощі з села",
  "country": "Украина",
  "city": "Запорожье",
  "types": [
   "Лакомства"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Сушёные говяжьи субпродукты широкой линейкой; производитель — ТД «Едельвейс Україна».",
  "why": "Работают оптом, большой ассортимент.",
  "terms": "Запросить.",
  "note": "То же ограничение: ветеринарные разрешения на ввоз.",
  "source": "https://www.lasoshizsela.com/",
  "checked": "13.10.2026",
  "site": "https://www.lasoshizsela.com/",
  "instagram": "https://www.instagram.com/lasochi_z_sela",
  "facebook": "https://www.facebook.com/groups/1171886699563323",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "korma.zp.ua@gmail.com",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": {
   "to": "korma.zp.ua@gmail.com",
   "channel": "Почта",
   "subject": "Гуртова співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nНас цікавлять ваші сушені яловичі субпродукти: рубець, легені, печінка, трахея.\n\nПідкажіть, будь ласка:\n1. Чи маєте ви дозвіл на експорт до ЄС (підприємство в переліку затверджених ЄС для кормів тваринного походження) і чи вже постачаєте до країн ЄС?\n2. Чи можете надіслати гуртовий прайс і мінімальне замовлення?\n3. Який термін придатності та умови зберігання?\n4. Чи можете надати склад і аналітичні показники для маркування польською?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского. Главный вопрос — разрешение на экспорт в ЕС: без него ввоз невозможен."
  }
 },
 {
  "name": "SNACK'ON",
  "country": "Украина",
  "city": "",
  "types": [
   "Лакомства"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Крафтовые сушёные лакомства из говядины.",
  "why": "Небольшое производство, без консервантов.",
  "terms": "Запросить.",
  "note": "То же ограничение: ветеринарные разрешения на ввоз. 13.10.2026 сайт не работает: домен без содержимого.",
  "source": "https://snackon.com.ua/",
  "checked": "13.10.2026",
  "site": "https://snackon.com.ua/",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Данных не нашли.",
  "top": [],
  "letter": null
 },
 {
  "name": "Harley&Cho",
  "country": "Украина",
  "city": "",
  "types": [
   "Лежаки и дом"
  ],
  "sizes": "Все размеры",
  "eu": "Уже в ЕС",
  "what": "Лежаки, диваны, миски на подставке, автогамаки; немного амуниции.",
  "why": "Известный бренд, но не наша стартовая категория.",
  "terms": "—",
  "note": "Похоже, уже есть немецкий сайт — уникальности не будет.",
  "source": "https://harleyandcho.ua/",
  "checked": "13.10.2026",
  "site": "https://harleyandcho.ua/",
  "instagram": "https://www.instagram.com/harleyandcho",
  "facebook": "https://www.facebook.com/harleyandcho.main",
  "etsy": "https://www.etsy.com/listing/584236455",
  "tiktok": "",
  "telegram": "",
  "youtube": "https://www.youtube.com/@HarleyandCho",
  "email": "info@harleyandcho.ua",
  "phone": "+380674527445",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "Для разнообразия можно заказывать.",
  "next": "Рассмотреть как дополнительного поставщика для расширения ассортимента.",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Rozetka: 382 отзыва на 38 товаров из первой тысячи.",
  "top": [
   {
    "title": "Лежак Dreamer Brown M",
    "price": "2 289 грн",
    "meta": "97 отзывов, 4,8 · Rozetka",
    "url": "https://rozetka.com.ua/ua/490423359/p490423359/",
    "img": "https://content.rozetka.com.ua/goods/images/big/512209596.jpg"
   },
   {
    "title": "Лежак Dreamer Velvet M",
    "price": "3 290 грн",
    "meta": "55 отзывов, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/485596274/p485596274/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/519549393.jpg"
   },
   {
    "title": "Миски на подставке Lunch Bar S",
    "price": "2 890 грн",
    "meta": "21 отзыв, 4,9 · Rozetka",
    "url": "https://rozetka.com.ua/ua/575716819/p575716819/",
    "img": "https://content.rozetka.com.ua/goods/images/big/242718694.jpg"
   }
  ],
  "letter": {
   "to": "info@harleyandcho.ua",
   "channel": "Почта",
   "subject": "Співпраця — магазин для собак у Польщі",
   "body": "Добрий день!\n\nМене звати Дар'я, я кінологиня з Познані. Разом із командою ми запускаємо в Польщі інтернет-магазин для собак: невеликий асортимент, який я сама рекомендую клієнтам, і продаж через мережу кінологів та грумерів.\n\nДля розширення асортименту нас цікавлять ваші лежаки Dreamer та миски на підставці Lunch Bar.\n\nПідкажіть, будь ласка:\n1. Чи є у вас дистриб'ютор або склад у Польщі чи в ЄС?\n2. Які умови для магазинів у ЄС: гуртові ціни, мінімальне замовлення?\n3. Звідки відправляються замовлення і які документи ви оформлюєте?\n\nНам зручно листуватися українською або англійською.\n\nДякую і гарного дня!\nДар'я [прізвище]\n[телефон, Instagram]",
   "hint": "Перед отправкой вписать фамилию и контакты и дать текст прочитать носителю украинского."
  }
 },
 {
  "name": "Collar / WAUDOG",
  "country": "Украина",
  "city": "Чернигов",
  "types": [
   "Амуниция",
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Уже в ЕС",
  "what": "Ошейники, поводки, шлейки, адресники с QR, куртки AiryVest, Puller.",
  "why": "Ориентир по качеству, а не поставщик для уникального ассортимента.",
  "terms": "Опт в Польше — через COLLAR PL.",
  "note": "Продаётся в 70 странах, в Польше есть своя компания.",
  "source": "https://forbes.ua/company/eksperimenty-na-zhivotnykh-17022021-1037",
  "checked": "13.10.2026",
  "site": "https://collar.pl/",
  "instagram": "https://www.instagram.com/waudog.pl/",
  "facebook": "https://www.facebook.com/waudogpl",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "info@waudog.pl",
  "phone": "+48603742216",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Rozetka: больше 7 000 отзывов по двум маркам; ниже — только товары для собак.",
  "top": [
   {
    "title": "Куртка AiryVest ONE",
    "price": "969 грн",
    "meta": "219 отзывов, 4,8 · Rozetka",
    "url": "https://rozetka.com.ua/ua/422596260/p422596260/",
    "img": "https://content.rozetka.com.ua/goods/images/big/419217113.jpg"
   },
   {
    "title": "Мячик Liker 7",
    "price": "95 грн",
    "meta": "124 отзыва, 4,8 · Rozetka",
    "url": "https://rozetka.com.ua/ua/392251662/p392251662/",
    "img": "https://content.rozetka.com.ua/goods/images/big/358714451.jpg"
   },
   {
    "title": "Ошейник кожаный Waudog Classic",
    "price": "224 грн",
    "meta": "91 отзыв, 4,7 · Rozetka",
    "url": "https://rozetka.com.ua/ua/569624830/p569624830/",
    "img": "https://content2.rozetka.com.ua/goods/images/big/643725753.jpg"
   },
   {
    "title": "Поводок Waudog Waterproof 3 м",
    "price": "676 грн",
    "meta": "75 отзывов, 4,8 · Rozetka",
    "url": "https://rozetka.com.ua/ua/569423944/p569423944/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/643318174.jpg"
   }
  ],
  "letter": {
   "to": "info@waudog.pl",
   "channel": "Почта, на польском",
   "subject": "Współpraca hurtowa — nowy sklep internetowy dla psów",
   "body": "Dzień dobry,\n\nnazywam się Daria, jestem trenerką psów z Poznania. Razem z zespołem uruchamiamy sklep internetowy z akcesoriami dla psów: niewielki asortyment, który sama polecam klientom, i sprzedaż przez sieć trenerów i groomerów.\n\nInteresują nas produkty WAUDOG i Collar: kurtki AiryVest, smycze Waterproof, obroże oraz zabawki Liker i Puller.\n\nProszę o informację:\n1. Jakie są warunki współpracy hurtowej dla nowego sklepu internetowego: cennik, minimalne zamówienie, rabaty?\n2. Czy sprzedają Państwo z magazynu w Polsce i jaki jest czas dostawy?\n3. Czy możemy korzystać ze zdjęć i opisów produktów?\n\nSklep jest na etapie uruchamiania.\n\nZ góry dziękuję i pozdrawiam\nDaria [nazwisko]\n[telefon, e-mail]",
   "hint": "У Collar есть польская компания, поэтому пишем по-польски. Почта взята с waudog.pl; оптовый сайт — collar.pl, телефон +48 603 742 216. Дать текст прочитать носителю польского."
  }
 },
 {
  "name": "Bronzedog",
  "country": "Украина",
  "city": "",
  "types": [
   "Амуниция",
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не найдено",
  "what": "Ошейники, шлейки, поводки, намордники, одежда.",
  "why": "Широкая линейка амуниции.",
  "terms": "—",
  "note": "Часть товара сделана в Китае — не «украинское производство».",
  "source": "https://e-zoo.com.ua/ua/139-amuniciya-dlya-sobak/f/12956-biotan",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "Не начаты",
  "reviews": "Rozetka: 542 отзыва на 143 товара из первой тысячи.",
  "top": [
   {
    "title": "Адресник из нержавеющей стали «Косточка»",
    "price": "129 грн",
    "meta": "77 отзывов, 4,9 · Rozetka",
    "url": "https://rozetka.com.ua/ua/87752392/p87752392/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/184593091.jpg"
   },
   {
    "title": "Адресник с гравировкой «Косточка» 40×25 мм",
    "price": "129 грн",
    "meta": "53 отзыва, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/87752506/p87752506/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/184593091.jpg"
   },
   {
    "title": "Поводок брезентовый светоотражающий 5 м",
    "price": "392 грн",
    "meta": "20 отзывов, 5,0 · Rozetka",
    "url": "https://rozetka.com.ua/ua/305319368/p305319368/",
    "img": "https://content1.rozetka.com.ua/goods/images/big/187828547.jpg"
   }
  ],
  "letter": null
 },
 {
  "name": "DIQPET",
  "country": "Китай",
  "city": "Шанхай",
  "types": [
   "Одежда"
  ],
  "sizes": "Мелкие (до 8 кг)",
  "eu": "Не применимо",
  "what": "Urban Trekking Onesie: комбинезон на четыре лапы со встроенными ботинками. Есть отдельная линия на собак до 40 кг.",
  "why": "Функциональная вещь для грязи и мокрого снега; поставщик честно описывает ограничения ткани.",
  "terms": "MOQ 30 шт., размеры можно смешивать, один цвет. Образцы: 2 шт. Прайс и доставка — в ответе от 07.10.2026.",
  "note": "Крой корейский: размеры меньше европейских, подбирать по обхвату груди. Ткань водоотталкивающая, не мембрана.",
  "source": "Ответ DIQPET на 11 вопросов, 07.10.2026 (файл у команды)",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "В переписке",
  "reviews": "Не проверяли.",
  "top": [],
  "letter": {
   "to": "Nick, DIQPET — ответом в текущей переписке",
   "channel": "Почта, на английском",
   "subject": "Re: Urban Trekking Onesie — follow-up questions",
   "body": "Hi Nick,\n\nThank you for the detailed reply and the size guide. They answered most of our questions, and we appreciate how openly you described the limits of the fabric.\n\nBefore we decide on samples, could you clarify a few points?\n1. Can you confirm in writing that the DWR finish is free of PFHxA and other PFAS? The EU has restricted PFHxA in consumer clothing textiles since October 2026, and we want to be on the safe side.\n2. Under the DDP option, who acts as the importer of record in Poland? We need the import to be declared in our company's name, so we may prefer FOB or DAP with our own customs clearance.\n3. Can the Polish sticker label carry our company as the EU importer (name and address) and a batch or model number?\n4. Could you send the price list and MOQ for the large-size line (XS–XXXL)?\n5. Can the spray-rating test (AATCC 22) be done before a first order, and at what cost?\n\nBest regards,\nDarya [surname]\n[phone, email]",
   "hint": "Продолжение переписки, а не первое письмо. Образцы в нём не заказываем — это решение команды."
  }
 },
 {
  "name": "Merlot Studio",
  "country": "Корея",
  "city": "",
  "types": [
   "Одежда"
  ],
  "sizes": "Все размеры",
  "eu": "Не применимо",
  "what": "Одежда для собак: Coore Top / Suit, Ain Coat / Suit; размеры S–5XL, до 50 кг.",
  "why": "Корейский ассортимент не только на мелких собак — редкость.",
  "terms": "Каталог 25SS получен. MOQ и прайс дистрибьютора — запросить.",
  "note": "Контакт — в переписке у команды.",
  "source": "Каталог Merlot 25SS (файл у команды)",
  "checked": "13.10.2026",
  "site": "",
  "instagram": "",
  "facebook": "",
  "etsy": "",
  "tiktok": "",
  "telegram": "",
  "youtube": "",
  "email": "",
  "phone": "",
  "priority": "Без приоритета",
  "segment": "",
  "opinion": "",
  "next": "",
  "catalog": "",
  "talks": "В переписке",
  "reviews": "Не проверяли.",
  "top": [],
  "letter": {
   "to": "Merlot Studio — ответом в текущей переписке",
   "channel": "Почта, на английском",
   "subject": "Merlot 25SS catalogue — distributor terms for Poland",
   "body": "Hello,\n\nThank you for sending the 25SS catalogue. We are a team from Poznań, Poland, launching an online dog shop built around a dog trainer's recommendations and a network of trainers and groomers. We are at the pre-launch stage and would like to start with samples.\n\nWe are most interested in the Ain Coat, the Ain Suit and the Coore line. A size range up to 5XL is rare among Korean brands.\n\nCould you tell us:\n1. What are your distributor prices and minimum order? Can sizes be mixed in one order?\n2. What are the terms for a sample order?\n3. Do you already have a distributor in Poland or elsewhere in the EU, and what are your conditions for exclusivity?\n4. Can you issue an origin declaration under the EU–Korea free trade agreement?\n5. Can you share the fabric composition and confirm that the water-repellent finish is PFAS-free? We need this for EU labelling.\n\nBest regards,\nDarya [surname]\n[phone, email]",
   "hint": "Ответ на присланный каталог. Вписать фамилию и контакты."
  }
 }
];
