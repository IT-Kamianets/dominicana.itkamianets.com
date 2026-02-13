// CONFIG.JS - Файл конфігурації готелю
// Тут ви можете легко змінити всі дані готелю

export const hotelConfig = {
  // Основна інформація
  hotelName: "Y Dominikana",
  tagline: "Відмінне розташування у серці старого міста",
  description: "Чудовий міні-готель з відмінним сервісом у центрі Кам'янець-Подільського. Стильні номери з балконами, вид на історичні пам'ятки міста, затишна атмосфера та гостинний персонал. Ресторан української та міжнародної кухні на території.",
  
  // Контактна інформація
  contact: {
    phone: "+380 XX XXX XX XX",
    email: "info@udominikana.com",
    address: "вул. Домініканська, 2а, Кам'янець-Подільський, 32300, Україна",
    workingHours: "Реєстрація заїзду: 14:00-19:00, виїзду: 07:00-11:00"
  },
  
  // Соціальні мережі
  social: {
    facebook: "https://facebook.com/yourhotel",
    instagram: "https://instagram.com/yourhotel",
    tripadvisor: "https://tripadvisor.com/yourhotel"
  },
  
  // Google Maps координати
  location: {
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.945!2d26.58091!3d48.66360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM5JzQ5LjAiTiAyNsKwMzQnNTEuMyJF!5e0!3m2!1suk!2sua!4v1234567890123",
    latitude: "48.66360",
    longitude: "26.58091"
  }
};

// НОМЕРИ - Масив об'єктів для легкого редагування
export const rooms = [
  {
    id: 1,
    name: "Двомісний номер Делюкс з балконом",
    description: "Розкішний номер площею 40 м² з панорамним видом на пам'ятки старого міста. Поєднання класичного стилю з сучасним комфортом.",
    image: "https://img.hotels24.ua/photos/partner_hotel/room/143/14336/1433639/Otel-U-Dominikana-nomer-Standart-dvuhmestniy-bolshoy-cena-1433639mx.jpg",
    price: "2350",
    pricePerNight: "€47",
    currency: "грн",
    area: "40 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко + диван-ліжко",
    features: ["Широке двоспальне ліжко", "Диван-ліжко", "Балкон з видом на пам'ятку", "Wi-Fi", "Телевізор з плоским екраном", "Кондиціонер", "Фен", "Ванна", "Біде", "Капці", "Халат"],
    bathroom: ["Ванна", "Душ", "Біде", "Туалетно-косметичні засоби", "Фен", "Капці", "Рушники"],
    amenities: ["Окремий вхід", "Килимове покриття", "Опалення", "Супутникові канали", "Шафа/гардероб"],
    view: "Вид на пам'ятку",
    rating: 9.5
  },
  {
    id: 2,
    name: "Напівлюкс з балконом (2+1)",
    description: "Просторий двокімнатний номер з окремою спальнею та вітальнею. Ідеальний для сімейного відпочинку або тривалого проживання.",
    image: "https://img.hotels24.ua/photos/partner_hotel/room/143/14382/1438234/Gostinica-U-Dominikana-nomer-Polulyuks-dvuhmestniy-s-balkonom-21-1438234z600.jpg",
    price: "2700",
    pricePerNight: "€54",
    currency: "грн",
    area: "45 м²",
    guests: 3,
    beds: "1 широке двоспальне ліжко + розкладний диван-ліжко",
    features: ["Окрема спальня", "Вітальня", "Балкон", "Диван-ліжко", "Wi-Fi", "Кондиціонер", "Вид на місто", "Телевізор з плоским екраном"],
    bathroom: ["Фен", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Біде", "Рушники", "Капці"],
    amenities: ["Кабельне ТБ", "Опалення", "Шафа/гардероб"],
    view: "Вид на місто",
    rating: 9.4
  },
  {
    id: 3,
    name: "Стандартний номер із ліжком King-size",
    description: "Комфортабельний номер з особливо широким двоспальним ліжком King-size та додатковим місцем для відпочинку.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    price: "1600",
    pricePerNight: "€32",
    currency: "грн",
    area: "30 м²",
    guests: 2,
    beds: "1 особливо широке двоспальне ліжко + диван-ліжко",
    features: ["Особливо широке ліжко King-size", "Диван-ліжко", "Wi-Fi", "Телевізор", "Кондиціонер", "Супутникове ТБ"],
    bathroom: ["Ванна", "Фен", "Туалетно-косметичні засоби", "Туалет", "Умивальник", "Біде", "Рушники"],
    amenities: ["Шафа/гардероб", "Опалення"],
    rating: 9.3
  },
  {
    id: 4,
    name: "Покращений двомісний номер №9 'Дахи старого міста'",
    description: "Унікальний номер із стильним дизайном та чудовим видом на дахи історичного центру міста.",
    image: "https://img.hotels24.ua/photos/partner_hotel/room/141/14147/1414720/Otel-U-Dominikana-nomer-Uluchshenniy-dvuhmestniy-9-Krishi-starogo-goroda-1414720z600.jpg",
    price: "1800",
    pricePerNight: "€36",
    currency: "грн",
    area: "28 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Широке двоспальне ліжко", "Wi-Fi", "Телевізор з плоским екраном", "Кондиціонер", "Вид на місто", "Гостьовий куточок"],
    bathroom: ["Халат", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Умивальник"],
    amenities: ["Холодильник", "Вішак для одягу"],
    view: "Вид на місто",
    rating: 9.6
  },
  {
    id: 5,
    name: "Стандартний двомісний номер з балконом",
    description: "Затишний номер з приватним балконом, звідки відкривається прекрасний вид на старе місто.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    price: "2000",
    pricePerNight: "€40",
    currency: "грн",
    area: "32 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Двоспальне ліжко", "Балкон", "Wi-Fi", "Вид на місто", "Телевізор", "Кондиціонер"],
    bathroom: ["Фен", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Рушники", "Капці"],
    amenities: ["Кабельне ТБ", "Опалення", "Шафа/гардероб"],
    view: "Вид на місто",
    rating: 9.4
  },
  {
    id: 6,
    name: "Стандартний двомісний номер з терасою",
    description: "Номер з окремим виходом на просторну терасу - ідеальне місце для ранкової кави або вечірнього відпочинку.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    price: "2000",
    pricePerNight: "€40",
    currency: "грн",
    area: "30 м²",
    guests: 2,
    beds: "1 двоспальне ліжко або розкладний диван-ліжко",
    features: ["Двоспальне ліжко", "Окремий вихід на терасу", "Wi-Fi", "Телевізор", "Кондиціонер", "Холодильник"],
    bathroom: ["Фен", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Біде", "Рушники", "Капці"],
    amenities: ["Кабельне ТБ", "Опалення"],
    rating: 9.5
  },
  {
    id: 7,
    name: "Сімейний двомісний номер №6",
    description: "Просторий номер для сімейного відпочинку з додатковим спальним місцем на розкладному дивані.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    price: "1800",
    pricePerNight: "€36",
    currency: "грн",
    area: "35 м²",
    guests: 2,
    beds: "1 двоспальне ліжко + розкладний диван-ліжко",
    features: ["Двоспальне ліжко", "Диван-ліжко", "Wi-Fi", "Телевізор", "Кондиціонер", "Холодильник", "Пізній виїзд"],
    bathroom: ["Фен", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Біде", "Рушники", "Капці"],
    amenities: ["Кабельне ТБ", "Опалення"],
    rating: 9.3
  },
  {
    id: 8,
    name: "Стандартний двомісний номер №5",
    description: "Класичний номер з усіма необхідними зручностями для комфортного перебування.",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
    price: "1600",
    pricePerNight: "€32",
    currency: "грн",
    area: "25 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Широке двоспальне ліжко", "Wi-Fi", "Телевізор", "Кондиціонер", "Супутникове ТБ"],
    bathroom: ["Ванна", "Фен", "Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Рушники", "Капці"],
    amenities: ["Опалення"],
    rating: 9.2
  },
  {
    id: 9,
    name: "Стандартний двомісний номер №4",
    description: "Компактний та затишний номер з усім необхідним для комфортного відпочинку.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    price: "1600",
    pricePerNight: "€32",
    currency: "грн",
    area: "25 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко king size",
    features: ["Широке ліжко King-size", "Wi-Fi", "Телевізор", "Кондиціонер", "Супутникове ТБ"],
    bathroom: ["Ванна", "Фен", "Туалетно-косметичні засоби", "Туалет", "Умивальник", "Біде", "Рушники"],
    amenities: ["Шафа/гардероб"],
    rating: 9.2
  },
  {
    id: 10,
    name: "Економ двомісний номер",
    description: "Бюджетний варіант з усім необхідним для комфортного проживання за доступною ціною.",
    image: "https://img.hotels24.ua/photos/partner_hotel/room/149/14945/1494529/Otel-U-Dominikana-nomer-Ekonom-dvuhmestniy-foto-1494529z600.jpg",
    price: "1350",
    pricePerNight: "€27",
    currency: "грн",
    area: "20 м²",
    guests: 2,
    beds: "1 широке двоспальне ліжко",
    features: ["Широке двоспальне ліжко", "Wi-Fi", "Телевізор", "Власна ванна кімната", "Холодильник"],
    bathroom: ["Туалетно-косметичні засоби", "Туалет", "Душова кабіна", "Умивальник"],
    amenities: ["Вішак для одягу", "Балкон"],
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
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/14217/1421771/1421771208/photo-u-dominicana-kamianets-podilskyi-1.JPEG",
    alt: "Зовнішній вигляд готелю У Домінікана",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/14989/1498989/1498989439/photo-u-dominicana-kamianets-podilskyi-6.JPEG",
    alt: "Вхід до готелю з вулиці Домініканської",
    category: "exterior"
  },
  {
    id: 3,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/16228/1622881/1622881589/photo-u-dominicana-kamianets-podilskyi-30.JPEG",
    alt: "Затишний номер з сучасним дизайном",
    category: "rooms"
  },
  {
    id: 4,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/16482/1648257/1648257200/photo-u-dominicana-kamianets-podilskyi-19.JPEG",
    alt: "Просторий номер з великим ліжком",
    category: "rooms"
  },
  {
    id: 5,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/16527/1652769/1652769579/photo-u-dominicana-kamianets-podilskyi-69.JPEG",
    alt: "Сучасна ванна кімната",
    category: "rooms"
  },
  {
    id: 6,
    src: "https://lh5.googleusercontent.com/proxy/mUKoOKT_Bkmh4Z10JYX2v9aRJZLMg6ONDN3GyXn9ocZmphns2EPN8flHdZ9LB4jYPhTB0LDAfRSixB8GjfecyI0ZLAdQNj4YX-ZW_nfp7iHmuEzmGHJyI9QwJRqb1J9GaSGqhwxBkkhn_asH3xEBl0g55-rRx0M=w253-h168-k-no",
    alt: "Вид з балкону на старе місто",
    category: "view"
  },
  {
    id: 7,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/15221/1522138/1522138117/photo-u-dominicana-kamianets-podilskyi-66.JPEG",
    alt: "Рецепція готелю",
    category: "interior"
  },
  {
    id: 8,
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerU1fZtfVvBDJ6piq5dXY6SpzJjmOLXnQRwJ1GXa1lWyZfresC8PLbWC5mnd_5yepjvJoeoj33firEnGJk5oQvsv7410dM1VjRmsWT6b2qp04q3qYAAvOPoohCO5xDIHIIbR3eN=w253-h189-k-no",
    alt: "Ресторан з українською кухнею",
    category: "restaurant"
  },
  {
    id: 9,
    src: "https://udominicanakamianetspodilskyi.ua-hotel.com/data/Photos/OriginalPhoto/16562/1656204/1656204424/photo-u-dominicana-kamianets-podilskyi-62.JPEG",
    alt: "Номер з балконом та панорамним видом",
    category: "rooms"
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
