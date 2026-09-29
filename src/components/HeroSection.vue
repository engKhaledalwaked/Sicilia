<script setup>
import { t } from '../i18n'
import { img, site } from '../site'
import TileBand from './TileBand.vue'
</script>

<template>
  <section class="hero" id="top">
    <div class="container hero-grid">
      <div class="hero-text">
        <p class="kicker" v-reveal>{{ t.hero.kicker }}</p>
        <h1 class="hero-title" v-reveal>
          <span>{{ t.hero.title1 }}</span>
          <em>{{ t.hero.title2 }}</em>
        </h1>
        <p class="hero-lead" v-reveal>{{ t.hero.lead }}</p>
        <div class="hero-cta" v-reveal>
          <a href="#reserve" class="btn btn-green">{{ t.hero.cta1 }}</a>
          <a href="#menu" class="btn btn-outline">{{ t.hero.cta2 }}</a>
        </div>
        <div class="hero-rating" v-reveal>
          <span class="stars" aria-hidden="true">★★★★★</span>
          <strong>{{ site.rating }}</strong>
          <span>{{ t.hero.rating }} · <bdi>{{ site.reviews }}</bdi> {{ t.hero.reviews }}</span>
        </div>
      </div>

      <div class="hero-visual" v-reveal>
        <div class="arch arch-main"><img :src="img('hero.jpg', 1600)" alt="" /></div>
        <div class="arch arch-small"><img :src="img('logo-plate.jpg', 700)" alt="" /></div>
        <div class="lemon" aria-hidden="true">
          <svg viewBox="0 0 80 64"><ellipse cx="40" cy="34" rx="30" ry="24" fill="#f0c43a"/><ellipse cx="40" cy="34" rx="30" ry="24" fill="none" stroke="#d9a51c" stroke-width="2"/><path d="M40 10 C 48 2, 62 2, 66 8 C 58 12, 48 13, 40 10 Z" fill="#2f6b4f"/><circle cx="68" cy="30" r="3" fill="#d9a51c"/></svg>
        </div>
      </div>
    </div>
    <TileBand :height="40" />
  </section>
</template>
