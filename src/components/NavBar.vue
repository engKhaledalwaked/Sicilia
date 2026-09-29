<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t, lang, toggleLang } from '../i18n'

const scrolled = ref(false)
const open = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 30 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const links = ['story', 'dishes', 'menu', 'casa', 'visit']
</script>

<template>
  <header class="nav" :class="{ scrolled, open }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="open = false">
        <span class="brand-ar">صِقِلِيَة</span>
        <span class="brand-en">Sicilia</span>
      </a>
      <nav class="nav-links">
        <a v-for="l in links" :key="l" :href="`#${l}`" @click="open = false">{{ t.nav[l] }}</a>
      </nav>
      <div class="nav-actions">
        <button class="lang-btn" type="button" @click="toggleLang">{{ lang === 'ar' ? 'EN' : 'ع' }}</button>
        <a href="#reserve" class="btn btn-green btn-sm hide-sm">{{ t.nav.reserve }}</a>
        <button class="burger" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open"><span></span><span></span></button>
      </div>
    </div>
  </header>
</template>
