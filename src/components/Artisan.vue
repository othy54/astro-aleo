<template>
    <div></div>
</template>
<script setup lang="ts">
import { animate, scroll } from "motion"
import { onMounted } from "vue";

onMounted(() => {
    const container = document.querySelector<HTMLElement>('.artisan-picture');
    scroll(animate('.artisan-picture', { scale: [1, 0.95] }, { target: container, offset: [0.5, 1] }))
    console.log('hey')
})
</script>