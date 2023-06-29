import { Product, Category } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Футболка Vk basic collection',
    maxAvailable: 3,
    price: 1790,
    description:
      'Эта белая облегающая футболка с классическим дизайном и удобной посадкой станет идеальным дополнением любого гардероба. Изготовленная из высококачественной хлопковой смеси, состоящей из 90 % хлопка и 10 % лайкры, эта рубашка дышащая и эластичная, что обеспечивает оптимальный комфорт и свободу движений. Она доступна в размерах L и S, что делает её универсальным изделием для различных типов телосложения. Узкая конструкция обеспечивает элегантный и стильный вид, что делает ее отличным выбором как для повседневных, так и для нарядных мероприятий.',
    preview: '/imgs/1_preview.png',
    photos: [
      '/imgs/1_photo_1.png',
      '/imgs/1_photo_2.png',
    ],
    categoryId: [2],
  },
  {
    id: 2,
    name: 'Футболка Vk basic collection',
    maxAvailable: 5,
    price: 1790,
    description:
      'Эта синяя футболка оверсайз — идеальное сочетание комфорта и стиля. Изготовленная из мягкой и дышащей смеси хлопка и полиэстера, она идеально подходит для любого повседневного случая. Свободный крой добавляет модный штрих и обеспечивает максимальный комфорт, а классический синий цвет позволяет легко сочетать её с любым нарядом. Доступная в размерах S-XL, эта футболка является обязательным элементом гардероба любого модника.',
    preview: '/imgs/2_preview.png',
    photos: [
      '/imgs/2_photo_2.png',
      '/imgs/2_photo_1.png',
    ],
    categoryId: [2],
  },
  {
    id: 3,
    name: 'Футболка Vk basic collection',
    maxAvailable: 5,
    price: 4200,
    categoryId: [2],
    description:
      'Эта черная футболка оверсайз — удобный и стильный вариант для повседневного ношения. Доступная в размерах S-XL, она обеспечивает непринужденную посадку, которая идеально подходит для наслоения или как отдельная вещь. Изготовленная из смеси 90% хлопка и 10% полиэстера, она обеспечивает мягкость и воздухопроницаемость и идеально подходит для повседневного ношения. Классический черный цвет универсален и легко сочетается с любым нарядом, а дизайн оверсайз добавит модный штрих вашему гардеробу. Носите ли вы ее с джинсами или шортами, эта черная футболка оверсайз станет незаменимой вещью для любого модника.',
    preview: '/imgs/3_preview.png',
    photos: [
      '/imgs/3_photo_1.png',
      '/imgs/3_photo_2.png',
    ],
  },
  {
    id: 4,
    name: 'Худи Vk basic collection',
    maxAvailable: 5,
    price: 4500,
    categoryId: [3],
    description:
      'Cиняя oversize худи. Размеры L. Состав: хлопок 95%, лайкра 5%. Эта синяя хлопковая худи станет прекрасным дополнением любого повседневного гардероба. Изготовленная из мягкой и удобной хлопчатобумажной ткани, она имеет непринужденную посадку. Глубокий синий цвет добавит красок любому наряду. Отдыхаете ли вы дома или выполняете поручения, эта толстовка обязательно станет одним из основных элементов вашего гардероба.',
    preview: '/imgs/4_preview.png',
    photos: [
      '/imgs/4_photo_1.png',
      '/imgs/4_photo_2.png',
    ],
  },
  {
    id: 5,
    name: 'Кепка Vk basic collection',
    maxAvailable: 5,
    price: 3200,
    categoryId: [6],
    description:
      'Бейсболка из чистого органического хлопка с непринужденной контрастной вышивкой спереди. Изогнутый козырек с декоративной строчкой для аутентичного стиля. Сзади можно регулировать ширину кепки с помощью защелки и металлической застежки.',
    preview: '/imgs/5_preview.png',
    photos: ['/imgs/5_photo_1.png'],
  },
  {
    id: 6,
    name: 'Худи Vk basic collection',
    maxAvailable: 5,
    price: 4500,
    categoryId: [3],
    description:
      'Эта черная хлопковая толстовка с капюшоном — элегантная и минималистичная вещь, идеально подходящая для повседневного ношения. Эта толстовка с капюшоном из мягкого и удобного хлопка выполнена в классическом стиле пуловера с капюшоном на кулиске и без карманов, что создает обтекаемый вид. Черный цвет обеспечивает универсальную и неподвластную времени эстетик. Благодаря простому, но стильному дизайну эта толстовка с капюшоном идеально подходит для ношения поверх ваших любимых футболок или в сочетании с джинсами для создания повседневного образа.',
    preview: '/imgs/6_preview.png',
    photos: [
      '/imgs/6_photo_1.png',
      '/imgs/6_photo_2.png',
    ],
  },
  {
    id: 7,
    name: 'Футболка Vk basic collection',
    maxAvailable: 5,
    price: 2000,
    categoryId: [2],
    description:
      'Эта футболка из хлопка антрацитового цвета отличается элегантным и современным дизайном. Рубашка изготовлена ​​из высококачественного хлопкового материала, что делает ее удобной и прочной для повседневного ношения. Антрацитовый цвет придает ему утонченный и стильный вид, что позволяет легко сочетать его с любым нарядом. Являетесь ли вы поклонником популярной российской социальной сети или цените ее уникальный дизайн, эта футболка идеально подходит для тех, кто хочет добавить индивидуальности в свой гардероб.',
    preview: '/imgs/7_preview.png',
    photos: [
      '/imgs/7_photo_1.png',
      '/imgs/7_photo_2.png',
    ],
  },
  {
    id: 8,
    name: 'Свитшот Vk basic collection',
    maxAvailable: 5,
    price: 2900,
    categoryId: [3],
    description:
      'Эта хлопковая толстовка антрацитового цвета идеально подходит для повседневного, но стильного образа. Изготовлена из высококачественного хлопка, она мягкая и удобная в носке. Антрацитовый цвет придает ей утонченный и современный вид, что делает её подходящим для самых разных случаев. Толстовка имеет простой дизайн без карманов, что придает ей чистый и обтекаемый вид. Круглый вырез горловины и длинные рукава обеспечивают отличную защиту и тепло в прохладную погоду. Ребристые края на манжетах, воротнике и кромке придают текстуру и обеспечивают плотную и удобную посадку. В целом, эта хлопковая толстовка антрацитового цвета — универсальное и практичное дополнение к любому гардеробу.',
    preview: '/imgs/8_preview.png',
    photos: [
      '/imgs/8_photo_1.png',
      '/imgs/8_photo_2.png',
    ],
  },
  {
    id: 9,
    name: 'Ежедневник Vk basic collection',
    maxAvailable: 5,
    price: 750,
    categoryId: [5],
    description:
      'Черный ежедневник от компании Вк — лаконичный и стильный аксессуар, излучающий элегантность и изысканность. Этот ежедневник с мягкой кожаной обложкой и гладкой матовой поверхностью — идеальный инструмент для поддержания порядка в жизни. Страницы четкие и чистые, на них достаточно места для всех ваших заметок, идей и списков дел. Черный ежедневник незаменим для всех, кто ценит качество и практичность в повседневной жизни. Являетесь ли вы занятым профессионалом или студентом в дороге, этот дневник поможет вам оставаться на вершине своей игры и достигать своих целей.',
    preview: '/imgs/9_preview.png',
    photos: ['/imgs/9_photo_1.png'],
  },
  {
    id: 10,
    name: 'Худи с капюшоном Vk sticker collection',
    maxAvailable: 5,
    price: 5000,
    categoryId: [3],
    description:
      'Представляем нашу стильную черную хлопковую толстовку с капюшоном, идеально подходящую для повседневного и комфортного образа. Толстовка классического кроя из мягкой дышащей хлопчатобумажной ткани с уютным капюшоном и удобными карманами для согрева рук. Отличительной особенностью является привлекающий внимание принт Дигги из стикеров ВКонтакте, который добавит образу веселья и индивидуальности. Бегаете ли вы по делам или проводите время с друзьями, эта толстовка согреет вас и будет выглядеть круто.',
    preview: '/imgs/10_preview.png',
    photos: [
      '/imgs/10_photo_1.png',
      '/imgs/10_photo_2.png',
      '/imgs/10_photo_3.png',
    ],
  },
  {
    id: 11,
    name: 'Футболка Vk sticker collection',
    maxAvailable: 5,
    price: 7000,
    categoryId: [2],
    description:
      'Розовая футболка с принтом Diggie sticker Vkontakte — стильное и удобное дополнение к любому гардеробу. Изготовленная из смеси лайкры, хлопка и полиэстера, она обеспечивает мягкость и эластичность для максимального комфорта. Привлекательный принт Diggie на передней части футболки с культовой наклейкой Вконтакте ярко-розового цвета создает игривый и веселый образ. Рубашка также имеет классический крой с короткими рукавами и круглым вырезом, благодаря чему ее легко носить с джинсами или шортами, создавая повседневный, но стильный образ. Тусуетесь ли вы с друзьями или выполняете поручения, эта футболка обязательно заявит о себе.',
    preview: '/imgs/11_preview.png',
    photos: [
      '/imgs/11_photo_1.png',
      '/imgs/11_photo_2.png',
      '/imgs/11_photo_3.png',
    ],
  },
  {
    id: 12,
    name: 'Худи Vk sticker collection',
    maxAvailable: 5,
    price: 4000,
    categoryId: [3],
    description:
      'Хлопковая худи антрацитового цвета с капюшоном и карманами и принтом хомяка Сеня из стикеров ВКонтакте — это стильный и уютный предмет одежды, который идеально согреет вас в холодную погоду. Эта толстовка из мягкого хлопкового материала с удобным капюшоном и вместительными карманами обеспечивает практичность и комфорт. Принт хомяка Сеня из стикеров ВКонтакте добавляет игривости общему дизайну, делая его забавным и уникальным дополнением к вашему гардеробу. Бегаете ли вы по делам или бездельничаете дома, эта толстовка с капюшоном обязательно обеспечит вам комфорт и стильный вид.',
    preview: '/imgs/12_preview.png',
    photos: [
      '/imgs/12_photo_1.png',
      '/imgs/12_photo_2.png',
    ],
  },
  {
    id: 13,
    name: 'Футболка Vk sticker collection',
    maxAvailable: 5,
    price: 6000,
    categoryId: [2],
    description:
      'Эта привлекательная розовая футболка от стикеров ВКонтакте украшена крупным принтом единорога Спарки, что делает ее идеальным выбором для тех, кто хочет продемонстрировать свою любовь к волшебным существам. Эта рубашка из смеси лайкры, хлопка и полиэстера обеспечивает удобную и эластичную посадку. Мягкая и дышащая ткань обеспечивает ощущение прохлады и свежести в течение всего дня. Ярко-розовый цвет и игривый дизайн единорога делают эту футболку забавным и стильным дополнением к любому гардеробу, идеально сочетающимся с чем угодно, от леггинсов до джинсов. Собираетесь ли вы на вечеринку или просто гуляете с друзьями, эта футболка с единорогом Sparky обязательно привлечет всеобщее внимание и заставит вас чувствовать себя уверенно и в тренде.',
    preview: '/imgs/13_preview.png',
    photos: [
      '/imgs/13_photo_1.png',
      '/imgs/13_photo_2.png',
      '/imgs/13_photo_3.png',
      '/imgs/13_photo_4.png',
      '/imgs/13_photo_5.png',
    ],
  },
  {
    id: 14,
    name: 'Футболка Vk sticker collection',
    maxAvailable: 5,
    price: 6000,
    categoryId: [2],
    description:
      'Эта синяя футболка оверсайз с принтом кота Персика от стикеров ВКонтакте — идеальное дополнение к вашему повседневному гардеробу. Футболка изготовлена ​​из смеси лайкры, хлопка и полиэстера, что обеспечивает удобную и эластичную посадку. Ярко-синий цвет футболки дополнен милым и причудливым принтом персикового кота, который добавляет образу веселья и игривости. Свободный крой футболки делает ее идеальной для наслоения или для простого ношения, создавая непринужденный образ. Отдыхаете ли вы дома или выполняете поручения, эта футболка обязательно станет вашим фаворитом.',
    preview: '/imgs/14_preview.png',
    photos: [
      '/imgs/14_photo_1.png',
      '/imgs/14_photo_2.png',
      '/imgs/14_photo_3.png',
      '/imgs/14_photo_4.png',
    ],
  },
  {
    id: 15,
    name: 'Футболка Vk sticker collection',
    maxAvailable: 5,
    price: 2000,
    categoryId: [2],
    description:
      'Эта черная мужская футболка оверсайз станет идеальным дополнением любого повседневного образа. Стильный горящий принт Дигги из стикеров ВКонтакте придает футболке неповторимый штрих и обязательно привлечет внимание. Рубашка, изготовленная из смеси лайкры, хлопка и полиэстера, удобна и долговечна, а значит, ее можно носить много раз. Свободный крой обеспечивает непринужденный внешний вид, что делает его идеальным выбором для отдыха дома или выполнения поручений по городу. Комбинация материалов, используемых в рубашке, также помогает отводить влагу, сохраняя прохладу и сухость в течение дня. В целом, эта черная мужская футболка оверсайз — универсальный и стильный выбор для любого гардероба.',
    preview: '/imgs/15_preview.png',
    photos: [
      '/imgs/15_photo_1.png',
      '/imgs/15_photo_2.png',
      '/imgs/15_photo_3.png',
    ],
  },
  {
    id: 16,
    name: 'Футболка Vk sticker collection',
    maxAvailable: 5,
    price: 2000,
    categoryId: [2],
    description:
      'Излучайте непринужденный шарм c нашей серой футболкой c принтом хомяка Сени из наборов стикеров Vk. Эта футболка является идеальным выбором для тех, кто ценит комфорт и стиль. Изготовленная из мягкого и дышащего материала, она обеспечивает свободу движений и ощущение легкости. Принт хомяка Сени придает этой футболке веселый и игривый вид, отражая вашу яркую и непринужденную личность. Сделайте уникальное высказывание о своей индивидуальности с серой футболкой от Vk, которая превратит вашу одежду в художественную палитру!',
    preview: '/imgs/16_preview.png',
    photos: [
      '/imgs/16_photo_1.png',
      '/imgs/16_photo_2.png',
      '/imgs/16_photo_3.png',
    ],
  },
  {
    id: 17,
    name: 'Худи Vk sticker collection',
    maxAvailable: 5,
    price: 4500,
    categoryId: [3],
    description:
      'Окунитесь в волшебный мир с нашим розовым худи с принтом Спаркси, очаровательного единорога из наборов стикеров Vk. Это худи является воплощением мечты и фантазии, принося радость и волшебство в вашу жизнь. Изготовленное из мягкого и прочного материала, оно обеспечивает комфорт и тепло в холодные дни. Принт единорога Спаркси сияет яркостью и красочностью, захватывая вас в мир магии и волшебства. Будьте уникальными и вдохновленными с розовым худи от Vk, которое перенесет вас в волшебную реальность!',
    preview: '/imgs/17_preview.png',
    photos: [
      '/imgs/17_photo_1.png',
      '/imgs/17_photo_2.png',
      '/imgs/17_photo_3.png',
      '/imgs/17_photo_4.png',
      '/imgs/17_photo_5.png',
      '/imgs/17_photo_6.png',
    ],
  },
  {
    id: 18,
    name: 'Худи Vk sticker collection',
    maxAvailable: 5,
    price: 6000,
    categoryId: [3],
    description:
      'Очаровательное и стильное розовое худи с принтом непревзойденно милой собаки Дигги из наборов стикеров Vk. Это худи станет вашим незаменимым спутником, добавляя нотку игривости и радости в вашу повседневную жизнь. Изготовленное из высококачественного материала, оно обеспечивает комфорт и тепло в любое время года. Принт собаки Дигги великолепно передает его жизнерадостный характер и создает яркий акцент. Будьте модными и при этом несравненно милыми с розовым худи от Vk',
    preview: '/imgs/18_preview.png',
    photos: [
      '/imgs/18_photo_1.png',
      '/imgs/18_photo_2.png',
    ],
  },
  {
    id: 19,
    name: 'Худи Vk sticker collection',
    maxAvailable: 5,
    price: 5000,
    categoryId: [3],
    description:
      'Погрузитесь в уют и игривость с нашим синим худи от компании Vk, украшенным принтом очаровательного кота персика. Это худи - идеальное сочетание стиля, комфорта и экспрессивности. Изготовленный из мягкого и прочного материала, он обеспечивает тепло и комфорт в холодные дни. Принт кота персика придаёт этому худи игривый и неповторимый шарм, отражая вашу любовь к животным и индивидуальный стиль. Отправляйтесь на прогулку или наслаждайтесь домашним уютом вместе с худи Vk - вашим надежным спутником в стиле и удобстве.',
    preview: '/imgs/19_preview.png',
    photos: [
      '/imgs/19_photo_1.png',
      '/imgs/19_photo_2.png',
      '/imgs/19_photo_3.png',
      '/imgs/19_photo_4.png',
    ],
  },
  {
    id: 20,
    name: 'Чехол для ноутбука Vk limited collection',
    maxAvailable: 5,
    price: 7500,
    categoryId: [5],
    description:
      'Сияющий и захватывающий чехол для ноутбука от Vk, окрашенный в яркий хромированный оттенок. Этот чехол с блестящей поверхностью станет неотъемлемым аксессуаром для вашего ноутбука, придавая ему стильный и модный вид. Кроме того, он обеспечивает превосходную защиту от повреждений, царапин и пыли, сохраняя ваш ноутбук в идеальном состоянии. Добавьте яркости и ослепительности к вашему рабочему столу с чехлом от Vk!',
    preview: '/imgs/20_preview.png',
    photos: [
      '/imgs/20_photo_1.png',
      '/imgs/20_photo_2.png',
    ],
  },
  {
    id: 21,
    name: 'Рюкзак vk limited collection',
    maxAvailable: 5,
    price: 10000,
    categoryId: [5],
    description:
      'Особенный рюкзак от Vk, который приковывает взгляды своим уникальным хромированным оттенком. Блеск и яркость этого рюкзака подчеркнут вашу индивидуальность и добавят нотку стиля к вашему образу. С просторным внутренним отделением и удобными карманами он обеспечит надежное хранение ваших вещей. Будьте центром внимания с рюкзаком от Vk!',
    preview: '/imgs/21_preview.png',
    photos: [
      '/imgs/21_photo_1.png',
      '/imgs/21_photo_2.png',
      '/imgs/21_photo_3.png',
    ],
  },
  {
    id: 22,
    name: 'Vk стеклянная бутылка со стикерами',
    maxAvailable: 5,
    price: 500,
    categoryId: [5],
    description:
      'Стильная и надежная стеклянная бутылка от компании Vk. Прекрасное сочетание элегантного дизайна, прочного стекла и удобства использования. Идеально подходит для вашего любимого напитка в любое время и в любом месте. Будьте стильными и экологически осознанными с Vk',
    preview: '/imgs/22_preview.png',
    photos: [
      '/imgs/22_photo_1.png',
      '/imgs/22_photo_2.png',
    ],
  },
  {
    id: 23,
    name: 'Стакан для воды Vk',
    maxAvailable: 5,
    price: 500,
    categoryId: [5],
    description:
      'Стильный и удобный силиконовый стакан для воды от Vk - ваш идеальный спутник для гидратации в любых ситуациях! Изготовленный из прочного и экологически безопасного силикона, он легко складывается и занимает минимум места в сумке. С удобным объемом и непревзойденной прочностью, этот стакан является идеальным выбором для активного образа жизни и поможет вам пить воду с комфортом и стилем.',
    preview: '/imgs/23_preview.png',
    photos: ['/imgs/23_photo_1.png'],
  },
  {
    id: 24,
    name: 'Мягкая игрушка Сеня',
    maxAvailable: 5,
    price: 1200,
    categoryId: [4],
    description:
      'Плюшевая игрушка хомяк Сеня от стикеров Вк — это мягкая и приятная игрушка, которая отлично подойдет любителям хомяков всех возрастов. Эта плюшевая игрушка с очаровательным круглым телом, милыми ушками и милым выражением лица обязательно станет любимым компаньоном для всех, кто любит хомячков. Изготовленная из высококачественных материалов, плюшевая игрушка хомяк Senya прослужит долго и выдержит много игр и объятий. Ищете ли вы подарок для любителя хомяков или просто хотите добавить немного милоты в свою собственную коллекцию, плюшевая игрушка хомяк Senya - отличный выбор.',
    preview: '/imgs/24_preview.png',
    photos: ['/imgs/24_photo_1.png'],
  },
  {
    id: 25,
    name: 'Мягкая игрушка Дигги',
    maxAvailable: 5,
    price: 1200,
    categoryId: [4],
    description:
      'Плюшевая игрушка Дигги станет идеальным компаньоном для любого любителя собак. Изготовленная из мягкого и высококачественного материала, эта плюшевая игрушка невероятно удобна и долговечна, что делает ее идеальной как для детей, так и для взрослых. Яркая и веселая расцветка, очаровательные черты лица и висячие уши — Дигги обязательно покорит сердца всех, кто любит собак. Если вы хотите добавить нового члена в свою коллекцию мягких игрушек или удивить близкого человека продуманным подарком, эта плюшевая игрушка Vk Stickers обязательно принесет радость и утешение каждому, кто ее получит.',
    preview: '/imgs/25_preview.png',
    photos: ['/imgs/25_photo_1.png'],
  },
  {
    id: 26,
    name: 'Брелок Vk team',
    maxAvailable: 5,
    price: 250,
    categoryId: [5],
    description:
      'Представляем фирменный брелок ВКонтакте - изящный и стильный аксессуар, практичный и модный. Этот брелок украшен культовым логотипом ВКонтакте на высококачественной металлической поверхности, что обеспечивает прочность и долговечность. Благодаря компактному и легкому дизайну он легко помещается в кармане или сумке, сохраняя ключи в порядке и под рукой. Этот брелок идеально подходит для любителей ВКонтакте или тех, кто ищет функциональный, но модный аксессуар. Заявите о себе и продемонстрируйте свою гордость ВКонтакте с помощью этого элегантного и стильного брелка.',
    preview: '/imgs/26_preview.png',
    photos: ['/imgs/26_photo_1.png'],
  },
  {
    id: 27,
    name: 'Брелок Vk вместе',
    maxAvailable: 5,
    price: 250,
    categoryId: [5],
    description:
      'Брелок с логотипом ВКонтакте - идеальный аксессуар для любого поклонника популярной социальной сети. Изготовленный из высококачественных материалов, этот брелок украшен узнаваемым логотипом ВКонтакте ярких цветов, который привлечет внимание любого зрителя. Прочная конструкция гарантирует, что ваши ключи останутся в целости и сохранности, а гладкая и компактная форма позволяет брать их с собой куда угодно. Продемонстрируйте свою любовь к ВКонтакте и держите ключи под рукой с помощью этого стильного и практичного брелка.',
    preview: '/imgs/27_preview.png',
    photos: ['/imgs/27_photo_1.png'],
  },
  {
    id: 28,
    name: 'Мягкая игрушка Персик',
    maxAvailable: 5,
    price: 1200,
    categoryId: [4],
    description:
      'Плюшевая игрушка кота Персика от стикеров Вк — очаровательная и приятная игрушка, которая идеально подойдет любителям кошек всех возрастов. Персик с его мягким, пушистым мехом и милыми округлыми чертами лица просто умоляет, чтобы его прижали и полюбили. Игрушка изготовлена ​​из высококачественных материалов, обеспечивающих долговечность и удобство, а ее яркий и привлекательный дизайн обязательно выделится в любой коллекции. Если вы ищете милый и приятный подарок для ребенка или просто хотите добавить немного кошачьего чутья в свой домашний декор, плюшевая игрушка кота Пич — отличный выбор.',
    preview: '/imgs/28_preview.png',
    photos: ['/imgs/28_photo_1.png'],
  },
  {
    id: 29,
    name: 'Мягкая игрушка Спаркс',
    maxAvailable: 5,
    price: 1200,
    categoryId: [4],
    description:
      'Плюшевая игрушка единорог Спаркси станет прекрасным дополнением к любой коллекции мягких игрушек. Эта очаровательная игрушка оформлена в яркой розово-фиолетовой цветовой гамме, а пушистая белая грива и хвост придают ей причудливый вид. Плюшевая игрушка изготовлена ​​из мягких высококачественных материалов, которые идеально подходят для того, чтобы прижиматься к ней перед сном или брать с собой в приключения. У него веселое выражение лица и игривая поза, что делает его идеальным подарком для детей или всех, кто любит единорогов. Благодаря очаровательному дизайну и высококачественной конструкции плюшевая игрушка-единорог Спаркси обязательно принесет радость и счастье всем, кто ею владеет.',
    preview: '/imgs/29_preview.png',
    photos: ['/imgs/29_photo_1.png'],
  },
  {
    id: 30,
    name: 'Брелок Vk stickers',
    maxAvailable: 5,
    price: 250,
    categoryId: [5],
    description:
      'Представляем брелок с логотипом VK — идеальный аксессуар для удобного хранения ключей. Этот гладкий и стильный брелок имеет прочную металлическую конструкцию, дополненную культовым логотипом ВКонтакте. С надежной застежкой вы можете быть уверены, что ваши ключи останутся на месте и никогда не потеряются. Брелок ВКонтакте должен быть у любого поклонника бренда или для тех, кто хочет добавить нотку изысканности в свою повседневную жизнь. Получите свой сегодня и поднимите свою ключевую игру!',
    preview: '/imgs/30_preview.png',
    photos: ['/imgs/30_photo_1.png'],
  },
  {
    id: 31,
    name: 'Станция Маруся мини',
    maxAvailable: 5,
    price: 8000,
    categoryId: [1],
    description:
      'Это невероятное устройство — ваш личный домашний помощник, готовый помочь вам во всем, что вам нужно, от установки напоминаний и будильников до ответов на ваши вопросы и управления вашими умными домашними устройствами. Благодаря интуитивно понятной технологии распознавания голоса VK Smart Speaker может быстро и точно понимать ваши команды и реагировать на них, делая вашу жизнь проще и удобнее. А с добавлением Maruses VK Smart Speaker — это больше, чем просто устройство; это компаньон, который может развлечь вас шутками, историями и музыкальными рекомендациями. Готовите ли вы на кухне, отдыхаете в гостиной или готовитесь в спальне, Умная колонка VK с Maruses поможет вам. Так зачем ждать? Получите свой сегодня и испытайте непревзойденную домашнюю автоматизацию и развлечения.',
    preview: '/imgs/31_preview.png',
    photos: ['/imgs/31_photo_1.png'],
  },
  {
    id: 32,
    name: 'Vk black hat',
    maxAvailable: 5,
    price: 1500,
    categoryId: [6],
    description:
      'Vk Black Panama — стильная и универсальная шапка от компании Вконтакте. Изготовленная из высококачественных материалов, эта шапка обеспечивает комфорт и долговечность. Черный цвет придает ему элегантный и утонченный вид, что делает его универсальным аксессуаром, который можно носить с самыми разными нарядами. Стиль панама предлагает классический и неподвластный времени завершающий штрих к шляпе. Независимо от того, хотите ли вы завершить повседневный или формальный образ, Vk Black Hat — отличный выбор и обязательное дополнение к любой коллекции головных уборов.',
    preview: '/imgs/32_preview.png',
    photos: [
      '/imgs/32_photo_1.png',
      '/imgs/32_photo_2.png',
    ],
  },
  {
    id: 33,
    name: 'Станция Маруся',
    maxAvailable: 5,
    price: 20000,
    categoryId: [1],
    description:
      'Маруся — голосовой помощник Вконтакте. Как станция, Маруся предлагает своим пользователям широкий спектр услуг, делая их работу на платформе более удобной и приятной. Одной из главных особенностей «Маруси» является ее способность отвечать на вопросы и предоставлять информацию на самые разные темы, от новостей и обновлений погоды до музыкальных и развлекательных рекомендаций. Пользователи могут просто задать Марусе вопрос, и она даст быстрый и точный ответ, что позволит пользователям быть в курсе последних тенденций и событий. Маруся также предлагает ряд практических инструментов и услуг. Например, пользователи могут использовать Марусю, чтобы устанавливать напоминания и будильники, создавать списки дел и даже заказывать еду из своих любимых ресторанов. Эта функциональность делает Marusya ценным инструментом для пользователей, которые хотят оставаться организованными и эффективными в своей повседневной жизни. Еще одной важной особенностью «Маруси» является ее интеграция с другими сервисами Вконтакте. Например, пользователи могут использовать Marusya для потоковой передачи музыки и подкастов или для общения со своими друзьями и семьей на платформе. Эта интеграция делает Марусю мощным инструментом для пользователей, которые хотят оставаться на связи и участвовать в сообществе Вконтакте.',
    preview: '/imgs/33_preview.png',
    photos: ['/imgs/33_photo_1.png'],
  },
  {
    id: 34,
    name: 'Носки Vk sticker collection',
    maxAvailable: 5,
    price: 400,
    categoryId: [5],
    description:
      'Усильте свой гардероб этими красочными носками с принтами наклеек из ВКонтакте! Эти носки изготовлены из высококачественных материалов и украшены разнообразными забавными и причудливыми наклейками. Яркие и привлекающие внимание принты делают эти носки идеальным дополнением любого наряда. Они также удобны в носке и будут держать ваши ноги в уюте в течение всего дня. Благодаря своему уникальному стилю и игривым принтам эти носки обязательно заявят о себе и добавят веселья в ваш ящик для носков. Приготовься продемонстрировать свой стиль с этими красочными носками от ВКонтакте!',
    preview: '/imgs/34_preview.png',
    photos: ['/imgs/34_photo_1.png'],
  },
  {
    id: 35,
    name: 'Обложка Vk sticker collection',
    maxAvailable: 5,
    price: 600,
    categoryId: [5],
    description:
      'Красочные обложки для паспорта с принтами наклеек от ВКонтакте — это веселый и яркий способ защитить и персонализировать свой паспорт. Эти обложки для паспорта, изготовленные из высококачественных материалов, представлены в различных ярких и смелых цветах, каждая из которых украшена уникальным и привлекательным принтом-наклейкой. Эти принты варьируются от игривых изображений животных и природы до абстрактных геометрических рисунков и броских фраз. Эти обложки для паспорта не только придают индивидуальность вашим проездным документам, но и позволяют легко найти ваш паспорт в море других простых обложек. С обложкой для паспорта ВКонтакте вы можете путешествовать стильно и сохранять свой паспорт в целости и сохранности на протяжении всего путешествия.',
    preview: '/imgs/35_preview.png',
    photos: ['/imgs/35_photo_1.png'],
  },
]

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Умный дом',
    productCount: 0,
  },
  {
    id: 2,
    name: 'Футболки',
    productCount: 0,
  },
  {
    id: 3,
    name: 'Худи и свитшоты',
    productCount: 0,
  },
  {
    id: 4,
    name: 'Игрушки',
    productCount: 0,
  },
  {
    id: 5,
    name: 'Аксессуары',
    productCount: 0,
  },
  {
    id: 6,
    name: 'Головные уборы',
    productCount: 0,
  },
]
