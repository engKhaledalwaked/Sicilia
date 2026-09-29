<script setup>
import { t } from './i18n'
import { site } from './site'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StorySection from './components/StorySection.vue'
import DishesSection from './components/DishesSection.vue'
import MenuSection from './components/MenuSection.vue'
import CasaSection from './components/CasaSection.vue'
import ReserveSection from './components/ReserveSection.vue'
import VisitSection from './components/VisitSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="demo-ribbon">{{ t.ribbon }}</div>
  <NavBar />
  <main>
    <HeroSection />
    <StorySection />
    <DishesSection />
    <MenuSection />
    <CasaSection />
    <ReserveSection />
    <VisitSection />
  </main>
  <FooterSection />
  <div class="sticky-bar">
    <a :href="`tel:${site.phone.tel}`">{{ t.sticky.call }}</a>
    <a href="#reserve" class="primary">{{ t.sticky.book }}</a>
  </div>
</template>
