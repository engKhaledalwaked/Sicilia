<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../i18n'
import { img } from '../site'

const shots = ['exterior.jpg', 'oven.jpg', 'table-spread.jpg', 'hall.jpg', 'corner.jpg', 'majolica.jpg', 'pasta-table.jpg']
const open = ref(null)
const onKey = (e) => {
  if (open.value === null) return
  if (e.key === 'Escape') open.value = null
  if (e.key === 'ArrowRight') open.value = (open.value + 1) % shots.length
  if (e.key === 'ArrowLeft') open.value = (open.value - 1 + shots.length) % shots.length
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="section casa" id="casa">
    <div class="container">
      <div class="sec-head" v-reveal>
        <p class="kicker">{{ t.casa.kicker }}</p>
        <h2 class="h2">{{ t.casa.title }}</h2>
        <p class="muted">{{ t.casa.sub }}</p>
      </div>
      <div class="masonry">
        <button v-for="(s, i) in shots" :key="s" type="button" class="m-item" :class="'m' + i" @click="open = i" v-reveal>
          <img :src="img(s, 900)" alt="" loading="lazy" />
        </button>
      </div>

      <div class="day-strip">
        <div class="day" v-for="(d, i) in t.day" :key="i" v-reveal>
          <span class="day-dot" aria-hidden="true"></span>
          <h3>{{ d.t }}</h3>
          <p>{{ d.d }}</p>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="open !== null" class="lightbox" role="dialog" aria-modal="true" @click.self="open = null">
        <button class="lb-close" type="button" aria-label="Close" @click="open = null">✕</button>
        <button class="lb-nav prev" type="button" aria-label="Previous" @click="open = (open - 1 + shots.length) % shots.length">‹</button>
        <img :src="img(shots[open], 1800)" alt="" />
        <button class="lb-nav next" type="button" aria-label="Next" @click="open = (open + 1) % shots.length">›</button>
      </div>
    </Transition>
  </section>
</template>
