import { ref, computed, watchEffect } from 'vue'

const saved = (() => { try { return localStorage.getItem('sicilia-lang') } catch { return null } })()
export const lang = ref(saved === 'en' ? 'en' : 'ar')
watchEffect(() => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
  try { localStorage.setItem('sicilia-lang', lang.value) } catch {}
})
export const toggleLang = () => { lang.value = lang.value === 'ar' ? 'en' : 'ar' }

const dict = {
  ar: {
    ribbon: 'نسخة عرض تجريبية — مُعدّة لـ صقلية',
    sub: 'مطبخ إيطالي · إربد',
    nav: { story: 'حكايتنا', dishes: 'أطباقنا', menu: 'القائمة', casa: 'المكان', visit: 'زورونا', reserve: 'احجز طاولة' },
    hero: {
      kicker: 'Sapori d’Italia',
      title1: 'طعم إيطاليا',
      title2: 'على طاولتك في إربد',
      lead: 'عجينة تتخمّر ٧٢ ساعة، باستا تُحضَّر بأيدينا، ومقبلات إيطالية كلاسيكية. طاولة من الوقت، والنار، والنكهة.',
      cta1: 'احجز طاولتك', cta2: 'تصفّح القائمة',
      rating: 'على Google', reviews: 'مراجعة',
    },
    story: {
      kicker: 'حكايتنا', title: 'صقلية، من الفرن إلى الطاولة',
      p: 'زاوية إيطالية في قلب إربد: جدران بيضاء، بلاط مايوليكا أزرق بلون البحر، ليمون صقلية، وفرن بيتزا مشتعل. نطبخ الأطباق الإيطالية كما يجب أن تكون، ببساطة ومكوّنات طازجة.',
      pillars: [
        { n: '72', u: 'ساعة', t: 'تخمير العجينة', d: 'عجينة بيتزا خفيفة وهشّة، تُخبز على نار عالية.' },
        { n: 'Fresca', u: '', t: 'عجينة باستا طازجة', d: 'رافيولي، تورتليني، نيوكي وفيتوتشيني بعجينة طازجة.' },
        { n: '9', u: 'ص', t: 'من الفطور حتى العشاء', d: 'نفتح أبوابنا من الصباح، ونسهر معك حتى المساء.' },
      ],
    },
    dishes: { kicker: 'I nostri piatti', title: 'أطباق يطلبها الجميع', hint: 'اسحب للمزيد' },
    menu: {
      kicker: 'Il Menù', title: 'القائمة',
      sub: 'الأسعار بالدينار الأردني حسب قائمة المطعم.',
      m: 'وسط', l: 'كبير', jd: 'د.أ', chicken: 'إضافة دجاج',
    },
    casa: { kicker: 'La Casa', title: 'المكان', sub: 'اضغط على أي صورة لتكبيرها' },
    day: [
      { t: 'فطور', d: 'صباحات إيطالية من ٩ صباحاً' },
      { t: 'غداء وعشاء', d: 'بيتزا، باستا وريزوتو' },
      { t: 'مناسبات', d: 'أعياد ميلاد ولقاءات عائلية' },
      { t: 'توصيل', d: 'اطلب ونوصلك في إربد' },
    ],
    reserve: {
      kicker: 'Prenota', title: 'احجز طاولتك',
      p: 'املأ التفاصيل ويصلنا طلبك على واتساب مباشرة. نؤكد الحجز خلال دقائق.',
      f: {
        name: 'الاسم', phone: 'رقم الهاتف', date: 'التاريخ', time: 'الوقت', guests: 'الأشخاص', type: 'المناسبة', notes: 'ملاحظات',
        types: { dinner: 'غداء / عشاء', breakfast: 'فطور', birthday: 'عيد ميلاد', family: 'عزومة عائلية' },
        submit: 'أرسل عبر واتساب', err: 'يرجى تعبئة الاسم ورقم هاتف صحيح.', sent: 'تم فتح واتساب — أرسل الرسالة لتأكيد الحجز.',
      },
      msg: { head: 'طلب حجز — مطعم صقلية', name: 'الاسم', phone: 'الهاتف', date: 'التاريخ', time: 'الوقت', guests: 'الأشخاص', type: 'المناسبة', notes: 'ملاحظات' },
      or: 'أو اتصل',
    },
    visit: {
      kicker: 'Vieni a trovarci', title: 'زورونا',
      addrL: 'العنوان', addr: 'إربد — مجمع لوسيل',
      hoursL: 'ساعات العمل', hours: 'يومياً من ٩ صباحاً',
      phoneL: 'الهاتف', dir: 'الاتجاهات', wa: 'واتساب',
    },
    footer: { demo: 'تصميم تجريبي مقترح', tag: 'Sapori d’Italia' },
    sticky: { call: 'اتصال', book: 'احجز' },
  },
  en: {
    ribbon: 'Demo preview — prepared for Sicilia',
    sub: 'Italian kitchen · Irbid',
    nav: { story: 'Our story', dishes: 'Dishes', menu: 'Menu', casa: 'The place', visit: 'Visit', reserve: 'Book a table' },
    hero: {
      kicker: 'Sapori d’Italia',
      title1: 'The taste of Italy',
      title2: 'at your table in Irbid',
      lead: '72-hour dough, handmade pasta and classic Italian antipasti. A table of time, fire and taste.',
      cta1: 'Book your table', cta2: 'See the menu',
      rating: 'on Google', reviews: 'reviews',
    },
    story: {
      kicker: 'Our story', title: 'Sicilia, from oven to table',
      p: 'An Italian corner in the heart of Irbid: white walls, sea-blue majolica tiles, Sicilian lemons and a blazing pizza oven. We cook Italian dishes the way they should be — simply, with fresh ingredients.',
      pillars: [
        { n: '72', u: 'h', t: 'Dough fermentation', d: 'A light, airy pizza base, baked over high heat.' },
        { n: 'Fresca', u: '', t: 'Fresh pasta dough', d: 'Ravioli, tortellini, gnocchi and fettuccine made with fresh dough.' },
        { n: '9', u: 'am', t: 'Breakfast to dinner', d: 'We open in the morning and stay with you into the evening.' },
      ],
    },
    dishes: { kicker: 'I nostri piatti', title: 'Everyone’s favourites', hint: 'Swipe for more' },
    menu: {
      kicker: 'Il Menù', title: 'Menu',
      sub: 'Prices in Jordanian Dinar, as per the restaurant menu.',
      m: 'M', l: 'L', jd: 'JD', chicken: 'Add chicken',
    },
    casa: { kicker: 'La Casa', title: 'The place', sub: 'Tap any photo to enlarge' },
    day: [
      { t: 'Breakfast', d: 'Italian mornings from 9 AM' },
      { t: 'Lunch & dinner', d: 'Pizza, pasta and risotto' },
      { t: 'Celebrations', d: 'Birthdays and family gatherings' },
      { t: 'Delivery', d: 'Order in, anywhere in Irbid' },
    ],
    reserve: {
      kicker: 'Prenota', title: 'Book your table',
      p: 'Fill in the details and your request reaches us on WhatsApp. We confirm within minutes.',
      f: {
        name: 'Name', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Guests', type: 'Occasion', notes: 'Notes',
        types: { dinner: 'Lunch / dinner', breakfast: 'Breakfast', birthday: 'Birthday', family: 'Family gathering' },
        submit: 'Send via WhatsApp', err: 'Please enter your name and a valid phone number.', sent: 'WhatsApp opened — send the message to confirm.',
      },
      msg: { head: 'Booking request — Sicilia', name: 'Name', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Guests', type: 'Occasion', notes: 'Notes' },
      or: 'Or call',
    },
    visit: {
      kicker: 'Vieni a trovarci', title: 'Visit us',
      addrL: 'Address', addr: 'Irbid — Lusail Complex',
      hoursL: 'Hours', hours: 'Daily from 9 AM',
      phoneL: 'Phone', dir: 'Directions', wa: 'WhatsApp',
    },
    footer: { demo: 'Proposed demo design', tag: 'Sapori d’Italia' },
    sticky: { call: 'Call', book: 'Book' },
  },
}
export const t = computed(() => dict[lang.value])

// أطباق مميزة — صور حقيقية من المطعم
export const dishes = [
  { img: 'pizza-pepperoni.jpg', ar: 'بيتزا بيبروني', en: 'Pepperoni Pizza', dar: 'عجينة مخمّرة ٧٢ ساعة', den: '72-hour fermented dough' },
  { img: 'spaghetti.jpg', ar: 'سباغيتي بومودورو', en: 'Spaghetti Pomodoro', dar: 'صلصة بومودورو، ريحان وبارميزان', den: 'Pomodoro, basil, parmesan' },
  { img: 'pasta-rosa.jpg', ar: 'باستا طازجة', en: 'Fresh Pasta', dar: 'رافيولي وباستا روزيه على صحون المايوليكا', den: 'Ravioli and rosé pasta on majolica plates' },
  { img: 'alfredo.jpg', ar: 'ريزوتو بالفطر', en: 'Mushroom Risotto', dar: 'فطر طازج وبورسيني وزيت كمأة', den: 'Fresh & porcini mushroom, truffle oil' },
  { img: 'pizzas.jpg', ar: 'تشكيلة البيتزا', en: 'Pizza for the table', dar: 'اطلب أكثر من نوع وشارك الطاولة', den: 'Order a few and share' },
  { img: 'pasta-plate.jpg', ar: 'باستا بالكرات', en: 'Pasta & Polpette', dar: 'تُقدَّم على صحون المايوليكا الصقلية', den: 'Served on Sicilian majolica' },
  { img: 'salad.jpg', ar: 'سلطة إيطالية', en: 'Italian Salad', dar: 'خضار طازجة وبارميزان', den: 'Fresh greens & parmesan' },
  { img: 'pizza-close.jpg', ar: 'بيتزا صقلية', en: 'Sicilia Pizza', dar: 'سجق إيطالي، بيف بيبروني وفليفلة', den: 'Italian sausage, beef pepperoni, peppers' },
]

// القائمة — من قائمة مطعم صقلية مع الأسعار
export const menu = [
  { id: 'pizza', ar: 'البيتزا', en: 'Pizza', sized: true, items: [
    { ar: 'بيتزا صقلية', en: 'Sicilia', m: 9, l: 11, dar: 'طماطم، موزاريلا، سجق إيطالي، بيف بيبروني، فليفلة مشكلة، بارميزان', den: 'Tomato, mozzarella, Italian sausage, beef pepperoni, mixed peppers, parmesan', sig: true },
    { ar: 'بيتزا بوراتا', en: 'Burrata', m: 8.5, l: 10, dar: 'طماطم، جرجير، زيتون كالاماتا، بوراتا، طماطم كرزية', den: 'Tomato, rocket, kalamata olives, burrata, cherry tomatoes' },
    { ar: 'بيتزا سي فود', en: 'Seafood', m: 7.5, l: 9, dar: 'روبيان، محار، كالاماري، كبر، موزاريلا، ريحان', den: 'Shrimp, mussels, calamari, capers, mozzarella, basil' },
    { ar: 'بلاك ترافل', en: 'Black Truffle', m: 8.5, l: 10, dar: 'صلصة بيضاء، فطر مشكل، كمأة سوداء، جبنة بلو، جرجير', den: 'White sauce, mixed mushrooms, black truffle, blue cheese, rocket' },
    { ar: 'ترافل ماشروم', en: 'Truffle Mushroom', m: 6, l: 7.5, dar: 'صلصة بيضاء، موزاريلا، فطر، زيت كمأة', den: 'White sauce, mozzarella, mushroom, truffle oil' },
    { ar: 'بيتزا أبولو', en: 'Apollo', m: 7, l: 8.5, dar: 'باربكيو أو بيستو، دجاج، موزاريلا، طماطم مجففة', den: 'BBQ or pesto, chicken, mozzarella, sun-dried tomato' },
    { ar: 'بيتزا ألفريدو', en: 'Alfredo', m: 6.5, l: 8, dar: 'صلصة بيضاء، صدر دجاج، موزاريلا، بارميزان', den: 'White sauce, chicken breast, mozzarella, parmesan' },
    { ar: 'بيتزا أربع أجبان', en: 'Quattro Formaggi', m: 6, l: 8, dar: 'موزاريلا، بارميزان، جبنة مدخنة، جبنة بلو', den: 'Mozzarella, parmesan, smoked cheese, blue cheese' },
    { ar: 'بيتزا بيبروني', en: 'Pepperoni', m: 6.5, l: 8, dar: 'طماطم، موزاريلا، بيبروني، أوريغانو', den: 'Tomato, mozzarella, pepperoni, oregano' },
    { ar: 'بيتزا نابوليتانا', en: 'Napoletana', m: 6.5, l: 8, dar: 'موزاريلا طازجة، ريحان طازج، زيت زيتون', den: 'Fresh mozzarella, fresh basil, olive oil' },
    { ar: 'خضار المواسم', en: 'Seasonal Veggie', m: 6.5, l: 8, dar: 'فليفلة مشوية، فطر، خرشوف، زيتون، كوسا', den: 'Roasted peppers, mushroom, artichoke, olives, zucchini' },
    { ar: 'مارجريتا', en: 'Margherita', m: 5, l: 6.5, dar: 'طماطم، ريحان طازج، موزاريلا، بارميزان', den: 'Tomato, fresh basil, mozzarella, parmesan' },
    { ar: 'بيتزا نصف × نصف', en: 'Half × Half', l: 10, dar: 'اختر نوعين في بيتزا واحدة لارج', den: 'Any two pizzas in one large' },
  ]},
  { id: 'pasta', ar: 'الباستا', en: 'Pasta', items: [
    { ar: 'باستا بوراتا', en: 'Pasta Burrata', p: 7.5, dar: 'بومودورو، زيتون كالاماتا، فلفل حار، بوراتا، ريحان', den: 'Pomodoro, kalamata, chili flakes, burrata, basil', sig: true },
    { ar: 'ريكوتا ليمون', en: 'Ricotta Limone', p: 7, dar: 'صلصة كريمية، سبانخ، ريكوتا، قشر ليمون، عسل', den: 'Cream, spinach, ricotta, lemon zest, honey' },
    { ar: 'سي فود باستا', en: 'Seafood Pasta', p: 7.5, dar: 'لينغويني بصلصة بيسك، روبيان، كالاماري، محار', den: 'Linguine in bisque, shrimp, calamari, mussels' },
    { ar: 'ترافل رافيولي', en: 'Truffle Ravioli', p: 7.5, dar: 'عجينة طازجة، صلصة بيضاء، كمأة سوداء، فطر', den: 'Fresh pasta, white sauce, black truffle, mushroom' },
    { ar: 'تريانغولي بيف', en: 'Triangoli Beef', p: 7, dar: 'محشية ريكوتا ولحم، زبدة ومرمية، ديمي غلاس', den: 'Filled with ricotta & beef, butter-sage, demi-glace' },
    { ar: 'كلاسيك لازانيا', en: 'Classic Lasagna', p: 7.5, dar: 'بولونيز، بشاميل، بارميزان', den: 'Bolognese, béchamel, parmesan' },
    { ar: 'نيوكي', en: 'Gnocchi', p: 7, dar: 'طماطم / غورغونزولا / بيستو / كمأة كريمية', den: 'Tomato / gorgonzola / pesto / creamy truffle' },
    { ar: 'سباغيتي بولونيز', en: 'Spaghetti Bolognese', p: 7, dar: 'صلصة بولونيز، طماطم كرزية، بارميزان', den: 'Bolognese, cherry tomatoes, parmesan' },
    { ar: 'سباغيتي بوتانيسكا', en: 'Spaghetti Puttanesca', p: 7, dar: 'طماطم كرزية، ثوم، زيتون أسود، كبر، أنشوفة', den: 'Cherry tomatoes, garlic, black olives, capers, anchovy' },
    { ar: 'لينغويني أليو أوليو شرمب', en: 'Aglio e Olio Shrimp', p: 7.5, dar: 'شرمب، ثوم، طماطم مجففة، فلفل حار', den: 'Shrimp, garlic, sun-dried tomato, chili' },
    { ar: 'سباغيتي كاربونارا', en: 'Spaghetti Carbonara', p: 6.5, dar: 'بيف بيكون، صفار بيض، بارميزان، بيكورينو', den: 'Beef bacon, egg yolk, parmesan, pecorino' },
    { ar: 'بيني روزيه', en: 'Penne Rosé', p: 6.5, dar: 'طماطم، صلصة بيضاء، بارميزان', den: 'Tomato, white sauce, parmesan' },
    { ar: 'لينغويني بيستو', en: 'Linguine Pesto', p: 6.5, dar: 'بيستو، كريمة، فاصولياء خضراء، صنوبر', den: 'Pesto, cream, green beans, pine nuts' },
    { ar: 'رافيولي سبانخ', en: 'Spinach Ravioli', p: 6.5, dar: 'عجينة طازجة، طماطم كرزية، ريحان', den: 'Fresh pasta, cherry tomatoes, basil' },
    { ar: 'ماشروم تورتليني', en: 'Mushroom Tortellini', p: 6.5, dar: 'كريمة، بيستو، فطر سوتيه', den: 'Cream, pesto, sautéed mushroom' },
    { ar: 'فيتوتشيني ألفريدو', en: 'Fettuccine Alfredo', p: 6, extra: 1.5, dar: 'عجينة طازجة، ألفريدو، فطر، بارميزان', den: 'Fresh pasta, alfredo, mushroom, parmesan' },
    { ar: 'بيني أرابياتا', en: 'Penne Arrabbiata', p: 5, dar: 'طماطم، فلفل أحمر حار، ثوم، بقدونس', den: 'Tomato, red chili, garlic, parsley' },
    { ar: 'سباغيتي بومودورو', en: 'Spaghetti Pomodoro', p: 5, dar: 'بومودورو، ريحان طازج، بارميزان', den: 'Pomodoro, fresh basil, parmesan' },
    { ar: 'لينغويني أليو أوليو', en: 'Linguine Aglio e Olio', p: 5, dar: 'ثوم، فلفل حار، بقدونس', den: 'Garlic, chili, parsley' },
  ]},
  { id: 'risotto', ar: 'الريزوتو', en: 'Risotto', items: [
    { ar: 'ريزوتو سي فود', en: 'Seafood Risotto', p: 9, dar: 'بيسك وطماطم، روبيان، كالاماري، محار أسود، فلفل حار', den: 'Bisque & tomato, shrimp, calamari, black mussels, chili', sig: true },
    { ar: 'ريزوتو بالفطر', en: 'Mushroom Risotto', p: 7, dar: 'فطر طازج وبورسيني، ثوم، زيت كمأة، بارميزان', den: 'Fresh & porcini mushroom, garlic, truffle oil, parmesan' },
  ]},
  { id: 'bruschetta', ar: 'البروسكيتا', en: 'Bruschetta', items: [
    { ar: 'بروسكيتا بوراتا', en: 'Burrata Bruschetta', p: 4, dar: 'بوراتا طازجة، طماطم كرزية، بيستو، بلسميك', den: 'Fresh burrata, cherry tomatoes, pesto, balsamic', sig: true },
    { ar: 'بروسكيتا بالفطر', en: 'Mushroom Bruschetta', p: 3.5, dar: 'فطر طازج وبورسيني، زيت كمأة، جرجير', den: 'Fresh & porcini mushroom, truffle oil, rocket' },
    { ar: 'بروسكيتا كلاسيكية', en: 'Classic Bruschetta', p: 3, dar: 'طماطم، بارميزان، بيستو، ريحان، بلسميك', den: 'Tomato, parmesan, pesto, basil, balsamic' },
    { ar: 'خبز بالثوم', en: 'Garlic Bread', p: 2.5, dar: 'خبز ساوردو، ثوم، بقدونس، زبدة', den: 'Sourdough, garlic, parsley, butter' },
  ]},
]
