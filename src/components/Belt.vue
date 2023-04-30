<template>
  <div class="relative w-fit-content">
    <img class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" :src="beltOff" alt="belt off" :width="137" :height="27" loading="lazy" />
    <img class="relative z-[2] belt-on opacity-0" :src="beltOn" alt="belt on" :width="169" :height="69" loading="lazy" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { inView, animate } from "motion"

const beltOff = ref('');
const beltOn = ref('');

onMounted(() => {

    beltOff.value = '/img/belt.png';
    beltOn.value = '/img/belt-on.png';

    inView(".belt-on", (info) => {
        const controls = animate(info.target, {opacity: 1})
        return (_leaveInfo) => animate(info.target, {opacity: 0})
    }, {margin: '-280px -80px -280px -80px'}) 
})

</script>