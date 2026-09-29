<script setup>
import { reactive, ref } from 'vue'
import { t } from '../i18n'
import { site } from '../site'
import TileBand from './TileBand.vue'

const today = new Date().toISOString().slice(0, 10)
const form = reactive({ name: '', phone: '', date: today, time: '20:00', guests: 2, type: 'dinner', notes: '' })
const error = ref('')
const sent = ref(false)

function submit() {
  const digits = form.phone.replace(/\D/g, '')
  if (!form.name.trim() || digits.length < 9) { error.value = t.value.reserve.f.err; sent.value = false; return }
  error.value = ''
  const m = t.value.reserve.msg, f = t.value.reserve.f
  const lines = [`*${m.head}*`, `${m.name}: ${form.name.trim()}`, `${m.phone}: ${form.phone}`, `${m.date}: ${form.date}`,
    `${m.time}: ${form.time}`, `${m.guests}: ${form.guests}`, `${m.type}: ${f.types[form.type]}`]
  if (form.notes.trim()) lines.push(`${m.notes}: ${form.notes.trim()}`)
  window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  sent.value = true
}
</script>

<template>
  <section class="section reserve" id="reserve">
    <div class="container">
      <div class="reserve-card" v-reveal>
        <TileBand :height="28" />
        <div class="reserve-inner">
          <div class="reserve-head">
            <p class="kicker">{{ t.reserve.kicker }}</p>
            <h2 class="h2">{{ t.reserve.title }}</h2>
            <p class="muted">{{ t.reserve.p }}</p>
          </div>
          <form class="res-form" novalidate @submit.prevent="submit">
            <label class="f f-name"><span>{{ t.reserve.f.name }}</span><input v-model="form.name" type="text" autocomplete="name" /></label>
            <label class="f f-phone"><span>{{ t.reserve.f.phone }}</span><input v-model="form.phone" type="tel" dir="ltr" inputmode="tel" placeholder="07X XXX XXXX" /></label>
            <label class="f"><span>{{ t.reserve.f.date }}</span><input v-model="form.date" type="date" :min="today" /></label>
            <label class="f"><span>{{ t.reserve.f.time }}</span><input v-model="form.time" type="time" /></label>
            <label class="f"><span>{{ t.reserve.f.guests }}</span><input v-model.number="form.guests" type="number" min="1" max="100" /></label>
            <label class="f"><span>{{ t.reserve.f.type }}</span>
              <select v-model="form.type"><option v-for="(l, k) in t.reserve.f.types" :key="k" :value="k">{{ l }}</option></select>
            </label>
            <label class="f f-notes"><span>{{ t.reserve.f.notes }}</span><input v-model="form.notes" type="text" /></label>
            <button type="submit" class="btn btn-green f-submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3a9 9 0 1 1 7.2 3.8Z"/></svg>
              {{ t.reserve.f.submit }}
            </button>
          </form>
          <p v-if="error" class="form-msg err" role="alert">{{ error }}</p>
          <p v-else-if="sent" class="form-msg ok" role="status">{{ t.reserve.f.sent }}</p>
          <p class="or-call">{{ t.reserve.or }} <a :href="`tel:${site.phone.tel}`" dir="ltr">{{ site.phone.label }}</a></p>
        </div>
      </div>
    </div>
  </section>
</template>
