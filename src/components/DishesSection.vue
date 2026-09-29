<script setup>
import { ref } from 'vue'
import { t, lang, dishes } from '../i18n'
import { img } from '../site'

const track = ref(null)
const scrollBy = (dir) => {
  const el = track.value
  if (!el) return
  const card = el.querySelector('.dish-card')
  const step = (card ? card.offsetWidth + 20 : 300) * dir * (lang.value === 'ar' ? -1 : 1)
  el.scrollBy({ left: step, behavior: 'smooth' })
}
</script>

<template>
  <section class="section dishes" id="dishes">
    <div class="container">
      <div class="dishes-head">
        <div v-reveal>
          <p class="kicker">{{ t.dishes.kicker }}</p>
          <h2 class="h2">{{ t.dishes.title }}</h2>
        </div>
        <div class="arrows" v-reveal>
          <button type="button" aria-label="Previous" @click="scrollBy(-1)">‹</button>
          <button type="button" aria-label="Next" @click="scrollBy(1)">›</button>
        </div>
      </div>
    </div>
    <div class="dish-track" ref="track">
      <article class="dish-card" v-for="d in dishes" :key="d.en">
        <div class="dish-arch"><img :src="img(d.img, 800)" :alt="d[lang]" loading="lazy" /></div>
        <h3>{{ d[lang] }}</h3>
        <p>{{ lang === 'ar' ? d.dar : d.den }}</p>
      </article>
    </div>
    <p class="swipe-hint">{{ t.dishes.hint }} →</p>
  </section>
</template>
