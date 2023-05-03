<template>
    <section class="section section-cta pt-40 pb-40 lg:pt-56 lg:pb-64 relative">
        <picture>
            <source :srcset="bgAvif" type="image/avif" />
            <source :srcset="bgWebp" type="image/webp" />
            <img class="object-cover w-full absolute top-0 left-0 h-full z-[-1] lg:object-right"
                src="../assets/images/bg-cta.png" alt="etapes" loading="lazy" width="1905" height="950" />
        </picture>
        <div class="row">
            <div class="container">
                <h2 class="italic font-black text-[40px] text-accent-500 text-center">
                    Choisir ALEO ?
                </h2>
                <p class="italic font-black text-[32px] text-accent-500 text-center mt-2">
                    Rien de plus simple :
                </p>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-11 lg:w-[80%] mx-auto mt-10">

                    <div v-for="(step, i) in ctaSteps" :keu="'step-' + i">
                        <!-- <Picture class="" :src="step.img" aspectRatio="80:97" widths={[80]} width={80} height={97}
                            sizes="80px" alt="mockup pc" /> -->
                        <picture>
                            <source :srcset="step.img.avif" type="image/avif" />
                            <source :srcset="step.img.webp" type="image/webp" />
                            <img class="mx-auto lg:ml-0" :src="step.img.fallback" alt="etapes" loading="lazy" width="80"
                                height="97" />
                        </picture>
                        <p class="italic text-primary-500 font-black text-xl mt-4 text-center lg:text-left">
                            {{ step.title }}
                        </p>
                        <p class="font-medium text-accent-500 mt-4 text-center lg:text-left">{{ step.content }}</p>
                    </div>

                </div>

                <button class="mx-auto block mt-8 btn-primary">
                    Je me lance
                </button>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
// @ts-nocheck

import { ref } from 'vue';

import stepOneAvif from '../assets/images/etape-1.png?w=80&format=avif&as=srcset';
import stepOneWebp from '../assets/images/etape-1.png?w=80&format=webp&as=srcset';
import stepOne from '../assets/images/etape-1.png?w=80as=srcset';

import stepSecAvif from '../assets/images/etape-2.png?w=80&format=avif&as=srcset';
import stepSecWebp from '../assets/images/etape-2.png?w=80&format=webp&as=srcset';
import stepSec from '../assets/images/etape-2.png?w=80as=srcset';

import stepThirdAvif from '../assets/images/etape-3.png?w=80&format=avif&as=srcset';
import stepThirdWebp from '../assets/images/etape-3.png?w=80&format=webp&as=srcset';
import stepThird from '../assets/images/etape-3.png?w=80as=srcset';

import stepForAvif from '../assets/images/etape-4.png?w=80&format=avif&as=srcset';
import stepForWebp from '../assets/images/etape-4.png?w=80&format=webp&as=srcset';
import stepFor from '../assets/images/etape-4.png?w=80as=srcset';

import bgAvif from '../assets/images/bg-cta.png?w=380;1920&format=avif&as=srcset';
import bgWebp from '../assets/images/bg-cta.png?w=380;1920&format=webp&as=srcset';

const ctaSteps = ref([
    {
        img: {
            avif: stepOneAvif,
            webp: stepOneWebp,
            fallback: stepOne,
        },
        title: "Découverte",
        content:
            "Obtiens un RDV téléphonique gratuit de 10 à 15 minutes pour parler de ton projet",
    },
    {
        img: {
            avif: stepSecAvif,
            webp: stepSecWebp,
            fallback: stepSec,
        },
        title: "Conseil",
        content: "Proposition des offres les plus adaptés",
    },
    {
        img: {
            avif: stepThirdAvif,
            webp: stepThirdWebp,
            fallback: stepThird,
        },
        title: "Lancement",
        content:
            "3, 2, 1… Deviens Aleonaute et attache ta ceinture ! C’est le moment de propulser ton activité",
    },
    {
        img: {
            avif: stepForAvif,
            webp: stepForWebp,
            fallback: stepFor,
        },
        title: "Suivi",
        content:
            "Bénéficie d’un accompagnement personnalisé tout au long de ton projet",
    },
])

</script>
