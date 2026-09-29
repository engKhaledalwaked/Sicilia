<script setup>
import { t } from '../i18n'
import { site } from '../site'
import TileBand from './TileBand.vue'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <TileBand :height="36" />
    <div class="container footer-inner">
      <div class="f-brand">
        <span class="brand-ar">صِقِلِيَة</span>
        <span class="f-tag">{{ t.footer.tag }}</span>
      </div>
      <div class="socials">
        <a :href="site.instagram" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
        </a>
        <a :href="site.facebook" target="_blank" rel="noopener" aria-label="Facebook">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8Z"/></svg>
        </a>
        <a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8Z"/></svg>
        </a>
      </div>
      <p class="copy">© {{ year }} Sicilia · Irbid · {{ t.footer.demo }}</p>
    </div>
  </footer>
</template>
