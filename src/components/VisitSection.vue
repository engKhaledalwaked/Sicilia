<script setup>
import { t } from '../i18n'
import { site } from '../site'
const { lat, lng } = site.coords
const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
const dirHref = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
</script>

<template>
  <section class="section visit" id="visit">
    <div class="container visit-grid">
      <div class="visit-info" v-reveal>
        <p class="kicker">{{ t.visit.kicker }}</p>
        <h2 class="h2">{{ t.visit.title }}</h2>
        <dl>
          <div><dt>{{ t.visit.addrL }}</dt><dd>{{ t.visit.addr }}</dd></div>
          <div><dt>{{ t.visit.hoursL }}</dt><dd>{{ t.visit.hours }}</dd></div>
          <div><dt>{{ t.visit.phoneL }}</dt><dd><a :href="`tel:${site.phone.tel}`" dir="ltr">{{ site.phone.label }}</a></dd></div>
        </dl>
        <div class="visit-cta">
          <a class="btn btn-green" :href="dirHref" target="_blank" rel="noopener">{{ t.visit.dir }}</a>
          <a class="btn btn-outline" :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener">{{ t.visit.wa }}</a>
        </div>
      </div>
      <div class="map-arch" v-reveal>
        <iframe title="Sicilia location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" :src="mapSrc"></iframe>
      </div>
    </div>
  </section>
</template>
