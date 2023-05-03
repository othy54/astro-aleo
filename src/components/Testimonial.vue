<template>
  <div class="component">
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div class="lg:col-span-5 hidden lg:block">
        <div class="relative w-fit-content">
          <img
            class="rounded-2xl max-h-[656px]"
            :src="testimonials[glideInit.index]?.img"
            loading="lazy"
            alt="artisan"
          />
          <img
            class="absolute top-[-120px] right-[-9vw]"
            src="/img/double-fists.png"
            alt="double poings"
            loading="lazy"
          />
          <img
            class="absolute right-[-120px] bottom-[-30px]"
            src="/img/orbit-home.svg"
            alt="orbite"
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="lg:col-span-7 lg:col-start-6 lg:grid lg:grid-cols-7 overflow-hidden lg:pb-20 relative"
      >
        <img
          class="absolute top-[30%] right-16"
          src="/img/quotes.svg"
          alt="quotes"
          loading="lazy"
        />
        <div class="relative lg:col-span-6 xl:col-span-5">
          <div class="mt-10">
            <h2 v-if="surtitle" class="surtitle">{{ surtitle }}</h2>
            <h3 class="italic font-black title text-purple-brand">
              {{ title }}
            </h3>
            <p class="paragraph">
              {{ text }}
            </p>
          </div>
        </div>
        <div
          id="glide-testimonial"
          class="mt-8 lg:mt-16 relative lg:col-span-6 lg:col-start-2"
        >
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <div
                v-for="(testimonial, i) in testimonials"
                :key="'slider-testimonial-' + i"
                class="glide__slide lg:grid lg:grid-cols-7"
              >
                <div
                  class="rounded-t-2xl h-[188px] bg-cover bg-no-repeat bg-center lg:hidden"
                  :style="{
                    backgroundImage: 'url(' + testimonial.img + ')',
                  }"
                ></div>
                <div class="lg:col-span-6 xl:col-span-5 lg:col-start-2">
                  <div
                    class="ml-4 lg:ml-0 translate-y-[-14px] lg:transform-none flex flex-wrap gap-2"
                  >
                    <span
                      v-for="(tag, j) in testimonial.tags"
                      :key="'tag-' + j"
                      class="rounded-full font-bold text-sm leading-5"
                      :class="[tagsList[tag].color, tagsList[tag].bg]"
                    >
                      <div
                        class="px-3 py-1 inline-block"

                        >{{ tagsList[tag].tag }}</div
                      >
                    </span>
                  </div>
                  <p
                    class="font-medium text-2xl leading-9 text-purple-brand mt-2 xl:mt-4"
                  >
                    "{{ testimonial.text }}"
                  </p>
                  <div class="xl:flex lg:items-center lg:mt-6 gap-x-4">
                    <img
                      class="mt-6 lg:mt-0"
                      width="136"
                      height="24"
                      src="/img/testimonial-stars.svg"
                      loading="lazy"
                      alt="note cinq étoiles"
                    />
                    <p
                      class="font-extrabold leading-4 text-xs tracking-[0.08em] mt-4 xl:mt-0 uppercase text-purple-brand"
                    >
                      {{ testimonial.author }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="slider__bullets glide__bullets md:hidden w-1/3 flex gap-2 justify-between mx-auto mt-8"
              data-glide-el="controls[nav]"
            >
              <span
                v-for="n in testimonials.length"
                :key="'control' + n"
                class="glide__bullet slider__bullet"
                :data-glide-dir="'=' + (n - 1)"
              ></span>
            </div>
          </div>
          <div class="glide__arrows navigation" data-glide-el="controls">
            <button
              class="navigation-btn next-btn w-[120px] h-[120px] bg-accent-300 lg:flex justify-center items-center rounded-full absolute right-0 cursor-pointer -bottom-5 z-[2] hidden"
              aria-label="Suivant"
              type="button"
              data-glide-dir=">"
            >
              <img
                width="32"
                src="/img/arrow-right.svg"
                alt="bouton suivant"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide, {Breakpoints, Controls, Swipe} from "@glidejs/glide/dist/glide.modular.esm";


export default {

  props: {
    testimonials: {
      type: Array,
      default: () => [
        {
          img: "/img/testi-y-toitures.png",
          tags: [0],
          text: "Je suis très content de leurs services. Toujours à l’écoute et prêts à nous aider. Je recommande pour tout développement dans le domaine internet. Merci à toute l’équipe.",
          author: "Yves HUMMEL — Y Toitures",
        },
        {
          img: "/img/testi-atc-home.jpg",
          tags: [0, 2],
          text: "Merci à toute l’équipe pour votre réactivité et votre professionnalisme. Merci à Jamel pour son écoute et son accompagnement au sein de nos projets.",
          author: "Adrien ADAM - ATC Home",
        },
        {
          img: "/img/testi-gt-autos.jpg",
          tags: [3, 0, 2],
          text: "Cela fait 3 ans que notre société travaille avec ALEO et ils sont toujours aussi sympathiques et professionnels. Nous leur avons confié ce jour notre site internet ainsi que nos cartes de visite et je suis sûre du résultat, il sera parfait.",
          author: "Cindy TABTI - GT AUTOS MOTORCRAFT",
        },
        {
          img: "/img/testi-auto-ecole-notre-dame.jpg",
          tags: [1, 2],
          text: "Je suis très satisfait de ma collaboration avec cette agence : les visuels sont d'une grande qualité et la graphiste en charge de mon dossier est à l'écoute et réactive.",
          author: "Stéphane CRETIN - Auto école Notre Dame",
        },
      ],
    },
    buttonVisible: {
      type: Boolean,
      default: true,
    },
    surtitle: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "Des solutions adaptées à tous les corps de métier",
    },
    text: {
      type: String,
      default: "Prends part au voyage qui changera le cours de ton activité !",
    },
  },
  data() {
    return {
      tagsList: [
        {
          tag: "Site web & référencement",
          color: "text-accent-700",
          bg: "bg-accent-100",
          link: "web",
        },
        {
          tag: "Publicité sur Google",
          color: "text-warning-700",
          bg: "bg-warning-100",
          link: "seo",
        },
        {
          tag: "Réseaux sociaux",
          color: "text-primary-700",
          bg: "bg-primary-50",
          link: "facebook",
        },
        {
          tag: "Graphisme & identité",
          color: "text-success-700",
          bg: "bg-success-100",
          link: "graphism",
        },
      ],
      glideInit: "",
    };
  },

  mounted() {
    this.initGlide()
  },

  methods: {
    initGlide() {
      this.glideInit = new Glide("#glide-testimonial", {
          type: "carousel",
          perView: 1,
          gap: 25,
          breakpoints: {
            640: {
              perView: 1,
            },
            768: {
              perView: 1.2,
              gap: 45,
            },
            1024: {
              perView: 1,
            },
          },
        }).mount({ Controls, Swipe, Breakpoints });
    },
  },
};
</script>
<style lang="postcss" scoped>
.glide__bullet {
  @apply bg-gray-aleo-500;

  width: 10px;
  height: 10px;
  border-radius: 50px;

  &--active {
    @apply bg-gray-aleo-800;
  }
}

.surtitle {
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ff4235;
  margin-bottom: 16px;
}

.title {
    font-style: italic;
    font-weight: 900;
    font-size: 32px;
    line-height: 36px;
    color: #39073F;
    margin-bottom: 28px;

    @screen xl {
        font-size: 40px;
        line-height: 44px;
    }
}
</style>
