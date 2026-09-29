<script setup>
import { t } from '../i18n'
import { img } from '../site'
</script>

<template>
  <section class="section story" id="story">
    <div class="container story-grid">
      <div class="story-media" v-reveal>
        <img class="sm-1" :src="img('interior-1.jpg', 900)" alt="" loading="lazy" />
        <img class="sm-2" :src="img('majolica.jpg', 700)" alt="" loading="lazy" />
      </div>
      <div class="story-text">
        <p class="kicker" v-reveal>{{ t.story.kicker }}</p>
        <h2 class="h2" v-reveal>{{ t.story.title }}</h2>
        <p class="lead" v-reveal>{{ t.story.p }}</p>
        <div class="pillars">
          <div class="pillar" v-for="p in t.story.pillars" :key="p.t" v-reveal>
            <div class="pillar-num"><bdi>{{ p.n }}</bdi><small>{{ p.u }}</small></div>
            <div>
              <h3>{{ p.t }}</h3>
              <p>{{ p.d }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
