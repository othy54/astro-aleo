<template>
  <div class="relative w-fit-content">
    <picture>
      <source :srcset="BeltAvif" type="image/avif" />
      <source :srcset="BeltWebp" type="image/webp" />
      <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" :src="Belt" alt="belt off"
        loading="lazy" :width="137" :height="27" />
    </picture>
    <!-- <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/img/belt.png" alt="belt off"
      :width="137" :height="27" loading="lazy" /> -->

    <picture>
      <source :srcset="BeltOnAvif" type="image/avif" />
      <source :srcset="BeltOnWebp" type="image/webp" />
      <img class="relative z-[2] belt-on opacity-0" :src="BeltOn" alt="belt off"
        loading="lazy" :width="169" :height="69" />
    </picture>
    <!-- <img class="relative z-[2] belt-on opacity-0" src="/img/belt-on.png" alt="belt on" :width="169" :height="69"
      loading="lazy" /> -->
  </div>
</template>

<script lang="ts" setup>
//@ts-nocheck
import { onMounted } from "vue";
import { inView, animate } from "motion"

import BeltAvif from '../assets/images/belt.png?w=137&format=avif&as=srcset'
import BeltWebp from '../assets/images/belt.png?w=137&format=webp&as=srcset'
import Belt from '../assets/images/belt.png?w=137'

import BeltOnAvif from '../assets/images/belt-on.png?w=169&format=avif&as=srcset'
import BeltOnWebp from '../assets/images/belt-on.png?w=169&format=webp&as=srcset'
import BeltOn from '../assets/images/belt-on.png?w=169'

onMounted(() => {
  inView(".belt-on", (info) => {
    animate(info.target, { opacity: 1 })
    return (_leaveInfo) => animate(info.target, { opacity: 0 })
  }, { margin: '-280px -80px -280px -80px' })
})

</script>