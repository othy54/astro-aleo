<template>
  <div class="relative w-fit-content">
    <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/img/belt.png" alt="belt off"
      :width="137" :height="27" loading="lazy" />
    <img class="relative z-[2] belt-on opacity-0" src="/img/belt-on.png" alt="belt on" :width="169" :height="69"
      loading="lazy" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { inView, animate } from "motion"

onMounted(() => {


  inView(".belt-on", (info) => {
    const controls = animate(info.target, { opacity: 1 })
    return (_leaveInfo) => animate(info.target, { opacity: 0 })
  }, { margin: '-280px -80px -280px -80px' })
})

</script>