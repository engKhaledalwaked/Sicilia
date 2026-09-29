import { photos } from './photos'

// بيانات المطعم في مكان واحد
export const site = {
  whatsapp: '962793000393',
  phone: { tel: '+962793000393', label: '079 300 0393' },
  instagram: 'https://www.instagram.com/saqelia/',
  facebook: 'https://www.facebook.com/profile.php?id=61582381273509',
  coords: { lat: 32.5204342, lng: 35.8711556 },
  rating: '4.7',
  reviews: '1,073',
}

// false = الصور تُعرض من روابط Google مباشرة
// true  = بعد تشغيل npm run fetch-images تُعرض من public/img داخل المشروع
export const USE_LOCAL_PHOTOS = true

export const img = (name, w = 1400) =>
  USE_LOCAL_PHOTOS || !photos[name] ? `/img/${name}` : `${photos[name]}=w${w}`
