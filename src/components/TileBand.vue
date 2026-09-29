<script setup>
// شريط بلاط مايوليكا (رسم أصلي بـ SVG) — أزرق كوبالت، أصفر ليموني، أخضر
defineProps({ height: { type: Number, default: 44 } })
const id = 'maj-' + Math.random().toString(36).slice(2, 8)
</script>

<template>
  <div class="tile-band" :style="{ height: height + 'px' }" aria-hidden="true">
    <svg width="100%" :height="height">
      <defs>
        <pattern :id="id" :width="height" :height="height" patternUnits="userSpaceOnUse" viewBox="0 0 60 60">
          <rect width="60" height="60" fill="#f8f2e6" />
          <!-- corners: quarter lemons -->
          <circle cx="0" cy="0" r="14" fill="#f0c43a" /><circle cx="60" cy="0" r="14" fill="#f0c43a" />
          <circle cx="0" cy="60" r="14" fill="#f0c43a" /><circle cx="60" cy="60" r="14" fill="#f0c43a" />
          <circle cx="0" cy="0" r="8" fill="#1d4f94" /><circle cx="60" cy="0" r="8" fill="#1d4f94" />
          <circle cx="0" cy="60" r="8" fill="#1d4f94" /><circle cx="60" cy="60" r="8" fill="#1d4f94" />
          <!-- center flower -->
          <g transform="translate(30 30)">
            <path v-for="r in [0, 90, 180, 270]" :key="r" :transform="`rotate(${r})`"
              d="M0 -4 C 7 -8, 8 -18, 0 -24 C -8 -18, -7 -8, 0 -4 Z" fill="#1d4f94" />
            <path v-for="r in [45, 135, 225, 315]" :key="'l' + r" :transform="`rotate(${r})`"
              d="M0 -6 C 4 -10, 4 -15, 0 -18 C -4 -15, -4 -10, 0 -6 Z" fill="#2f6b4f" />
            <circle r="5" fill="#f0c43a" /><circle r="2.2" fill="#1d4f94" />
          </g>
          <!-- frame lines -->
          <path d="M30 0 V6 M30 54 V60 M0 30 H6 M54 30 H60" stroke="#1d4f94" stroke-width="1.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${id})`" />
    </svg>
  </div>
</template>
