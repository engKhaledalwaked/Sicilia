// ينزّل صور المطعم إلى public/img حتى تصبح جزءاً من المشروع
// التشغيل: npm run fetch-images   (Node 18+)
import { writeFile, mkdir } from 'node:fs/promises'
import { photos } from '../src/photos.js'

const dir = new URL('../public/img/', import.meta.url)
await mkdir(dir, { recursive: true })
let ok = 0
for (const [name, url] of Object.entries(photos)) {
  const w = name === 'hero.jpg' ? 2000 : 1400
  try {
    const res = await fetch(`${url}=w${w}`)
    if (!res.ok) throw new Error(res.status)
    await writeFile(new URL(name, dir), Buffer.from(await res.arrayBuffer()))
    console.log('✓', name); ok++
  } catch (e) { console.log('✗', name, e.message) }
}
console.log(`\n${ok}/${Object.keys(photos).length} صورة محفوظة في public/img`)
console.log('الآن غيّر USE_LOCAL_PHOTOS إلى true في src/site.js')
