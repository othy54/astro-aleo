<template>
    <div class="grid grid-cols-12">
        <div class="rounded-3xl p-20 column-lottie aspect-square order-2 lg:order-1 mt-8 lg:mt-0"
            :class="props.invert ? 'lg:order-2 col-span-12 lg:col-span-5 lg:col-start-7' : 'lg:order-1 col-span-12 lg:col-span-4 lg:col-start-2'">
            <div :class="props.label"></div>
        </div>
        <div class="flex items-center order-1 lg:order-2 "
            :class="props.invert ? 'lg:order-1 col-span-12 lg:col-span-4 lg:col-start-2' : 'lg:order-2 col-span-12 lg:col-span-5 lg:col-start-7'">
            <div>
                <h2 class="italic font-black text-[32px] lg:text-[40px] text-accent-300">
                    {{ props.title }} </h2>
                <ul class="mt-6 flex flex-col gap-y-6">
                    <li v-for="(item, i) in props.list" :key="'visbility-' + i"
                        class="flex gap-x-4 item transition-all duration-300"
                        :class="props.label + '-item-' + i + ' ' + props.label + '-item'" @mouseenter="pause(i)"
                        @mouseleave="anim()">
                        <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10.5" transform="rotate(-90 12 12)" stroke="#280837"
                                stroke-width="3">
                            </circle>
                            <circle cx="12" cy="12" r="10.5" transform="rotate(-90 12 12)" stroke="#A2CCEE" stroke-width="3"
                                class="spin-progress" style="stroke-dashoffset: 66px; stroke-dasharray: 66px;"></circle>
                        </svg>
                        <div class="min-h-0">
                            <h3 class="italic font-black text-xl text-accent-500"> {{ item.title }} </h3>
                            <div class="wrapper-content">
                                <p class="mt-2 font-medium text-accent-500 overflow-hidden min-h-0"> {{
                                    item.content }}
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

interface List {
    title: string,
    content: string,
}

const props = defineProps({
    listLotties: {
        type: Array,
        default: [
            'ameliore-image',
            'multiplie-contacts',
            'notoriete',
            'fidelisation',
        ],
        required: false
    },

    label: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        default: 'Propulse tavisibilité et atteins tes objectifs',
    },

    list: {
        type: Array<List>,
        default: () => [
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

        ]
    },

    invert: {
        type: Boolean,
        default: false
    }
})


const step = ref(0)
const animationLottie = ref<any>(lottie.loadAnimation);
const animation = ref<any>(animate);

onMounted(() => {
    loadAnimation();
    anim();
    document.querySelector('.' + props.label + '-item-0')?.classList.add('item--active');
})

const loadAnimation = () => {
    animationLottie.value = lottie.loadAnimation({
        container: document.querySelector('.' + props.label + '')!,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: `/lotties/${props.listLotties[step.value]}.json`
    });
}

const anim = () => {
    animation.value = animate('.' + props.label + '-item-' + step.value + ' .spin-progress', { strokeDashoffset: 0 }, { duration: 5, easing: 'linear' });
    animation.value.finished.then(() => {
        if (document.querySelector<HTMLElement>('.' + props.label + '-item-' + step.value + ' .spin-progress')!.style.strokeDashoffset === '0') {
            document.querySelector<HTMLElement>('.' + props.label + '-item-' + step.value + ' .spin-progress')!.style.strokeDashoffset = '66px';
            document.querySelector<HTMLElement>('.' + props.label + '-item-' + step.value)!.classList.remove('item--active');
            step.value++;
            if (step.value > 3) {
                step.value = 0
            }
            document.querySelector<HTMLElement>('.' + props.label + '-item-' + step.value)!.classList.add('item--active');
            reloadAnimation();
            anim();
        }

    })
}

const pause = (arg: number) => {
    step.value = arg;
    animation.value.cancel();
    let items = document.querySelectorAll<HTMLElement>('.' + props.label + '-item');
    Array.from(items).forEach((item) => {
        item.classList.remove('item--active');
    })
    items[arg].classList.add('item--active');
    reloadAnimation();
}

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
