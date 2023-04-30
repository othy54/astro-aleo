<template>
    <div class="grid grid-cols-12">
        <div class="col-span-4 col-start-2 rounded-3xl p-20 column-lottie aspect-square">
            <div class="lottie"></div>
        </div>
        <div class="col-span-5 col-start-7 flex items-center">
            <div>
                <h2 class="italic font-black text-[40px] text-accent-300">
                    Propulse ta
                    visibilité
                    et atteins tes objectifs</h2>
                <ul class="mt-6 flex flex-col gap-y-6">
                    <li v-for="(visbility, i) in visibilities" :key="'visbility-' + i"
                        class="flex gap-x-4 item transition-all duration-300" :class="'item-' + i">
                        <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10.5" transform="rotate(-90 12 12)" stroke="#280837"
                                stroke-width="3">
                            </circle>
                            <circle cx="12" cy="12" r="10.5" transform="rotate(-90 12 12)" stroke="#A2CCEE" stroke-width="3"
                                class="spin-progress" style="stroke-dashoffset: 66px; stroke-dasharray: 66px;"></circle>
                        </svg>
                        <div class="min-h-0">
                            <h3 class="italic font-black text-xl text-accent-500"> {{ visbility.title }} </h3>
                            <div class="wrapper-content">
                                <p class="mt-2 font-medium text-accent-500 overflow-hidden min-h-0"> {{
                                    visbility.content }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import lottie from 'lottie-web'
import { animate } from 'motion';
import { ref, onMounted, nextTick } from 'vue';


const step = ref(0)
const animationLottie = ref<any>(lottie.loadAnimation);
const animation = ref<any>(animate);

const visibilities = ref([
    {
        title: 'Améliore ton image',
        content: 'Améliorer la manière dont tes clients te perçoivent te permettra de sortir du lot et de dépasser la concurrence.'
    },
    {
        title: 'Multiplie tes contacts',
        content: 'Les demandes de devis sont le moteur du développement commercial de ton entreprise. Avec ALEO, génère un maximum d’opportunités.'
    },
    {
        title: 'Augmente ta notoriété',
        content: 'Une bonne notoriété est indispensable pour ton business. Alors sois présent et actif pour marquer les esprits de tes futurs clients !'
    },
    {
        title: 'Fidélise tes clients',
        content: 'Loin des yeux, loin du cœur… Noue une relation durable et de confiance avec ta clientèle grâce à une communication régulière et des actions ciblées.'
    },

]);

const listLotties = [
    'ameliore-image',
    'multiplie-contacts',
    'notoriete',
    'fidelisation',
]

onMounted(() => {
    loadAnimation();
    anim();
    document.querySelector('.item-0')?.classList.add('item--active');
})

const loadAnimation = () => {
    animationLottie.value = lottie.loadAnimation({
        container: document.querySelector('.lottie')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lotties/${listLotties[step.value]}.json`
    });
}

const anim = () => {
    animation.value = animate(document.querySelector('.item-' + step.value + ' .spin-progress')!, { strokeDashoffset: 0 }, { duration: 2, easing: 'linear' });
    animation.value.finished.then(() => {
        document.querySelector<HTMLElement>('.item-' + step.value + ' .spin-progress')!.style.strokeDashoffset = '66px';
        document.querySelector<HTMLElement>('.item-' + step.value)!.classList.remove('item--active');
        step.value++;
        if (step.value > 3) {
            step.value = 0
        }
        document.querySelector<HTMLElement>('.item-' + step.value)!.classList.add('item--active');
        reloadAnimation();
        anim();
    })
}

// const pause = (arg: number) => {
//     step.value = arg;
//     animation.value.currentTime = 0;
//     animation.value.finish();
//     let items = document.querySelectorAll<HTMLElement>('.item');
//     Array.from(items).forEach((item) => {
//         item.classList.remove('item--active');
//     })
//     items[arg].classList.add('item--active');
// }

const reloadAnimation = () => {
    animationLottie.value.destroy()
    nextTick(() => {
        loadAnimation()
    })
}

</script>
<style lang="postcss">
.wrapper-content {
    grid-template-rows: 0;
    display: grid;
    overflow: hidden;
    transition: height 0.3s;
}

.item--active .wrapper-content {
    grid-template-rows: 1fr;
}

.column-lottie {
    background: rgba(162, 204, 238, .1);
    box-shadow: inset 1px 1px 4px rgba(162, 204, 238, .4);
}
</style>
