// CONFIG.JS - Файл конфігурації готелю
// Тут ви можете легко змінити всі дані готелю

export const hotelConfig = {
  // Основна інформація
  hotelName: "Y Dominikana",
  tagline: "Відмінне розташування у серці старого міста",
  description: "Чудовий міні-готель з відмінним сервісом у центрі Кам'янець-Подільського. Стильні номери з балконами, вид на історичні пам'ятки міста, затишна атмосфера та гостинний персонал. Ресторан української та міжнародної кухні на території.",

  // Контактна інформація
  contact: {
    phone: "+380 67 862 1345",
    address: "вул. Домініканська, 2а, Кам'янець-Подільський, 32300, Україна",
    workingHours: "Реєстрація заїзду: 14:00-19:00, виїзду: 07:00-11:00"
  },

  // Соціальні мережі та Бронювання
  social: {
    booking: "https://www.booking.com/hotel/ua/u-dominicana.uk.html",
    instagram: "https://www.instagram.com/u_dominikana_kp/?hl=ru"
  },

  // Google Maps координати
  location: {
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.6293685865535!2d26.569981176453844!3d48.67433057130777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733c786e2eecab5%3A0xeec4808f7c81ca43!2z0JPQvtGC0LXQu9GMIFVkb21pbmljYW5h!5e0!3m2!1sru!2sua!4v1774113148373!5m2!1sru!2sua",
    googleMapsUrl: "https://maps.app.goo.gl/awfEkCBDnbmH4GZ3A",
    latitude: "48.67433",
    longitude: "26.56998"
  }
};

// НОМЕРИ - Масив об'єктів для легкого редагування
export const rooms = [
  {
    id: 1,
    name: "Двомісний номер Делюкс з балконом",
    description: "Просторий номер площею 40 м² з балконом та видом на пам'ятки старого міста.",
    images: [
      "/rooms/1/1_main.webp",
      "/rooms/1/2.webp",
      "/rooms/1/3.webp",
      "/rooms/1/4.webp",
      "/rooms/1/5.webp"
    ],
    price: "2150",
    currency: "грн",
    area: "40 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко + диван-ліжко",
    features: ["Балкон", "Кондиціонер", "Телевізор з плоским екраном", "Wi-Fi"],
    bathroom: ["Ванна", "Душ", "Біде", "Фен", "Капці", "Рушники"],
    amenities: ["Шафа/гардероб", "Опалення"],
    view: "Вид на пам'ятку",
    rating: 9.5
  },
  {
    id: 2,
    name: "Двомісний номер з балконом (з диваном)",
    description: "Комфортний номер 27 м² з балконом та додатковим диваном.",
    images: [
      "/rooms/2/1_main.webp",
      "/rooms/2/2.webp",
      "/rooms/2/3.webp",
      "/rooms/2/4.webp",
      "/rooms/2/5.webp",
      "/rooms/2/6.webp"
    ],
    price: "1900",
    currency: "грн",
    area: "27 м²",
    guests: 2,
    beds: "1 двоспальне ліжко + диван-ліжко",
    features: ["Балкон", "Тераса", "Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Ванна або душ", "Біде", "Фен", "Капці"],
    amenities: ["Шафа/гардероб", "Опалення"],
    view: "Вид на місто",
    rating: 9.5
  },
  {
    id: 3,
    name: "Двомісний номер з балконом",
    description: "Світлий номер 27 м² з балконом та видом на місто.",
    images: [
      "/rooms/3/1_main.webp",
      "/rooms/3/2.webp",
      "/rooms/3/3.webp",
      "/rooms/3/4.webp",
      "/rooms/3/5.webp",
      "/rooms/3/6.webp",
      "/rooms/3/7.webp"
    ],
    price: "1900",
    currency: "грн",
    area: "27 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Балкон", "Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Ванна або душ", "Біде", "Фен"],
    amenities: ["Шафа/гардероб"],
    view: "Вид на місто",
    rating: 9.5
  },
  {
    id: 4,
    name: "Стандартний номер із ліжком King-size",
    description: "Номер площею 30 м² з особливо широким ліжком та зоною відпочинку.",
    images: [
      "/rooms/4/1_main.webp",
      "/rooms/4/2.webp",
      "/rooms/4/3.webp",
      "/rooms/4/4.webp",
      "/rooms/4/5.webp"
    ],
    price: "2000",
    currency: "грн",
    area: "30 м²",
    guests: 2,
    beds: "1 king-size + диван-ліжко",
    features: ["Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Ванна або душ", "Біде", "Фен"],
    amenities: ["Опалення"],
    view: "Вид на пам'ятку",
    rating: 9.5
  },
  {
    id: 5,
    name: "Напівлюкс з балконом",
    description: "Двокімнатний номер 37 м² з балконом та окремою зоною вітальні.",
    images: [
      "/rooms/5/1_main.webp",
      "/rooms/5/2.webp",
      "/rooms/5/3.webp",
      "/rooms/5/4.webp",
      "/rooms/5/5.webp",
      "/rooms/5/6.webp",
      "/rooms/5/7.webp",
      "/rooms/5/8.webp",
      "/rooms/5/9.webp"
    ],
    price: "2400",
    currency: "грн",
    area: "37 м²",
    guests: 3,
    beds: "1 двоспальне ліжко + диван-ліжко",
    features: ["Балкон", "Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Душ", "Біде", "Фен"],
    amenities: ["Шафа/гардероб", "Опалення"],
    view: "Вид на місто",
    rating: 9.5
  },
  {
    id: 7,
    name: "Двомісний номер (15 м², варіант 2)",
    description: "Класичний номер з базовими зручностями.",
    images: [
      "/rooms/7/1_main.webp",
      "/rooms/7/2.webp",
      "/rooms/7/3.webp",
      "/rooms/7/4.webp",
      "/rooms/7/5.webp"
    ],
    price: "1500",
    currency: "грн",
    area: "15 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Ванна або душ", "Фен"],
    amenities: ["Опалення"],
    view: "Вид на пам'ятку",
    rating: 9.5
  },
  {
    id: 8,
    name: "Стандартний двомісний номер",
    description: "Компактний номер 12 м² у мансардному стилі.",
    images: [
      "/rooms/8/1_main.webp",
      "/rooms/8/2.webp",
      "/rooms/8/3.webp",
      "/rooms/8/4.webp",
      "/rooms/8/5.webp",
      "/rooms/8/6.webp",
      "/rooms/8/7.webp"
    ],
    price: "1350",
    currency: "грн",
    area: "12 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Душ", "Фен"],
    amenities: ["Опалення"],
    view: "Вид на місто",
    rating: 9.5
  },
  {
    id: 9,
    name: "Покращений двомісний номер",
    description: "Просторий номер 24 м² з додатковою зоною відпочинку.",
    images: [
      "/rooms/9/1_main.webp",
      "/rooms/9/2.webp"
    ],
    price: "1700",
    currency: "грн",
    area: "24 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Душ", "Біде", "Фен"],
    amenities: ["Опалення"],
    view: "Вид на місто",
    rating: 9.5
  },
  {
    id: 10,
    name: "Бюджетний двомісний номер",
    description: "Бюджетний варіант 12 м² з балконом та необхідними зручностями.",
    images: [
      "/rooms/10/1_main.webp",
      "/rooms/10/2.webp",
      "/rooms/10/3.webp",
      "/rooms/10/4.webp"
    ],
    price: "1200",
    currency: "грн",
    area: "12 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Балкон", "Кондиціонер", "Телевізор", "Wi-Fi"],
    bathroom: ["Душ", "Фен"],
    amenities: ["Опалення"],
    view: "Вид на пам'ятку",
    rating: 9.5
  },
  {
    id: 11,
    name: "Двомісний номер",
    description: "Затишний номер 15 м² з власною ванною кімнатою та зоною для відпочинку.",
    images: [
      "/rooms/11/1.webp"
    ],
    price: "1500",
    currency: "грн",
    area: "15 м²",
    guests: 2,
    beds: "1 ліжко розміру Queen-size",
    features: ["Окремий вхід", "Кондиціонер", "Телевізор з плоским екраном", "Wi-Fi", "Диван"],
    bathroom: ["Ванна або душ", "Біде", "Фен", "Капці", "Рушники", "Безкоштовні туалетно-косметичні засоби"],
    amenities: ["Шафа/гардероб", "Опалення", "Килимове покриття", "Подовжені ліжка", "Гіпоалергенні подушки"],
    view: "Вид на місто",
    rating: 9.0
  }
];


// ПОСЛУГИ - Масив послуг готелю
export const services = [
  {
    id: 1,
    icon: "parking",
    title: "Безкоштовна парковка",
    description: "Громадська автостоянка на території готелю. Паркування для велосипедів"
  },
  {
    id: 2,
    icon: "wifi",
    title: "Безкоштовний Wi-Fi",
    description: "Високошвидкісний інтернет у всіх номерах та зонах загального користування"
  },
  {
    id: 3,
    icon: "restaurant",
    title: "Ресторан",
    description: "Українська та міжнародна кухня. Високі оцінки від гостей"
  },
  {
    id: 4,
    icon: "reception",
    title: "Цілодобова рецепція",
    description: "Привітний персонал завжди до ваших послуг"
  },
  {
    id: 5,
    icon: "ev-charging",
    title: "Зарядка електромобілів",
    description: "Станція для заряджання електричних автомобілів (7 кВт)"
  },
  {
    id: 6,
    icon: "bike",
    title: "Оренда велосипедів",
    description: "Прокат велосипедів для прогулянок містом"
  },
  {
    id: 7,
    icon: "ac",
    title: "Кондиціонер",
    description: "Система кондиціонування в кожному номері"
  },
  {
    id: 8,
    icon: "power",
    title: "Безперебійне електропостачання",
    description: "Власний генератор для безперебійного електропостачання, опалення та води"
  },
  {
    id: 9,
    icon: "location",
    title: "В центрі старого міста",
    description: "Відмінне розташування поряд з історичними пам'ятками (оцінка 9.9/10)"
  },
  {
    id: 10,
    icon: "pets",
    title: "Розміщення з тваринами",
    description: "Можливе розміщення з домашніми тваринами за попереднім запитом"
  }
];

// ГАЛЕРЕЯ - Масив зображень
export const galleryImages = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/p/AF1QipMM19VUto11UQjkRNm7F3XyWgcad3uAnfgq1Ly5=w253-h189-k-no",
    alt: "",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqMI7PxnmEmqSu33nEhC9DsA4YNde1xAcvOs7C4Pbv6GrJGFDzcmnIt2r2Ze7bCcX7M6Zwcd4cBghT07N1iEAlfONQa1SGvU5Kz7Q0xMXtvatu5rscOpbkYcrhgwIziy4ul4oxbCw=w253-h449-k-no",
    alt: "",
    category: "exterior"
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwersJrIcEhKh7e0GlXP2wFiz8SSgoAxPZ7s8H9pXS7YZXzwW3ZdEp7mAVtej9RMaZODhja9MmUdXvUC1fp-SEhZmsIRQhiQqV--B85sBnmvC4z1kP7H40JqL_KBtF8IHrKtmODHjJQ=w253-h533-k-no",
    alt: "",
    category: "rooms"
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfLajZZbx6kbmuZJ_UhH51BDFidH5vCRqkITEX80pNTlFnouNKyHORJ5FpNj-Boa0wMCmfu-Esv_GyEh1ufOM1ZWwXy27lIWrHDMr3IbWDiL2-0OIj5Wr54LEXrUQ7QN8fYxY=w253-h190-k-no",
    alt: "",
    category: "rooms"
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMN57Valzg3s9gdOPnGgJQcc0nEF-6xCZW4UWjakik0Ygb_afWpXytbMV8819ecMsjRLteNeDM_Mi8372w_o4MX6FDPsS3ikb1tMkegAoEcJnWNRP7zeICmH9mYZx07fLUFrQ=w253-h448-k-no",
    alt: "",
    category: "rooms"
  },
  {
    id: 6,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwergcFbZUoF18NR3965RTAzH7VkBweaUO_aM3-adna9zvygFuOlwK4qURMwfR1i5R55kxLlqwHR9IxH3TzUod881mh-jdyumqIHk0ieBpSqHXddM3CoGmlRKV6cQeJS4C_frFfo=w253-h337-k-no",
    alt: "",
    category: "view"
  },
  {
    id: 7,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoD84BiG7a2K1dLSiL2SUrSA4AA6Q1EwjQxV_GdRw77O5RmW2gYYlR2NVdVF3RK6cuh5PvMIvQ1dg97hl6jHvlhAX6FrHzTw0k_BgQl-dMo4tcsaGmHDK-AC1CyYLgbTcZbiw=w253-h337-k-no",
    alt: "",
    category: "interior"
  },
  {
    id: 8,
    src: "https://lh3.googleusercontent.com/p/AF1QipNufTPd_p1R3SdHQM4QDnoE4XeLgvBpJMG6EU3c=w253-h316-k-no",
    alt: "",
    category: "restaurant"
  }

];

// ПЕРЕВАГИ ГОТЕЛЮ
export const hotelFeatures = [
  {
    id: 1,
    icon: "star",
    title: "Відмінні відгуки",
    description: "9.6/10 на Booking.com (712 відгуків)"
  },
  {
    id: 2,
    icon: "map-pin",
    title: "Найкраще розташування",
    description: "У самому центрі старого міста (оцінка 9.9/10)"
  },
  {
    id: 3,
    icon: "briefcase",
    title: "Бездоганний сервіс",
    description: "Персонал 9.7/10 - уважний та гостинний"
  },
  {
    id: 4,
    icon: "sparkles",
    title: "Кришталева чистота",
    description: "Оцінка чистоти 9.6/10 від гостей"
  }
];
