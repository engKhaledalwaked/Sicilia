<script setup>
import { ref, computed } from 'vue'
import { t, lang, menu } from '../i18n'

const active = ref(menu[0].id)
const cat = computed(() => menu.find((c) => c.id === active.value))
const fmt = (n) => n.toFixed(2)
</script>

<template>
  <section class="section menu" id="menu">
    <div class="container">
      <div class="menu-board" v-reveal>
        <div class="menu-head">
          <p class="kicker light">{{ t.menu.kicker }}</p>
          <h2 class="h2">{{ t.menu.title }}</h2>
          <p class="menu-sub">{{ t.menu.sub }}</p>
        </div>

        <div class="menu-tabs" role="tablist">
          <button v-for="c in menu" :key="c.id" type="button" role="tab"
            :aria-selected="active === c.id" :class="{ on: active === c.id }" @click="active = c.id">
            {{ c[lang] }}
          </button>
        </div>

        <div v-if="cat.sized" class="size-legend">
          <span><b>M</b> {{ t.menu.m }}</span><span><b>L</b> {{ t.menu.l }}</span>
        </div>

        <Transition name="fade" mode="out-in">
          <ul class="menu-list" :key="active">
            <li v-for="it in cat.items" :key="it.en" :class="{ sig: it.sig }">
              <div class="mi-top">
                <h3>{{ it[lang] }}</h3>
                <span class="mi-line"></span>
                <span class="mi-price" dir="ltr">
                  <template v-if="cat.sized">
                    <span v-if="it.m" class="sz"><b>M</b>{{ fmt(it.m) }}</span>
                    <span class="sz"><b>L</b>{{ fmt(it.l) }}</span>
                  </template>
                  <template v-else>{{ fmt(it.p) }}</template>
                  <small>{{ t.menu.jd }}</small>
                </span>
              </div>
              <p>{{ lang === 'ar' ? it.dar : it.den }}</p>
              <p v-if="it.extra" class="extra">+ {{ t.menu.chicken }} <bdi>{{ fmt(it.extra) }}</bdi> {{ t.menu.jd }}</p>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </section>
</template>
