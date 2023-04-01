import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "IphoneCarousel",
  state: () => ({
    currentSlide: 0,
    slides: [
      {
        id: 1,
        src: "@/assets/iPhoneCarousel/carousel-photo-01.jpg",
        srcset: [
          "@/assets/iPhoneCarousel/carousel-photo-01@2x.jpg 2x",
          "@/assets/iPhoneCarousel/carousel-photo-01@3x.jpg 3x",
        ],
        alt: "carousel-photo-01",
      },
      {
        id: 2,
        src: "@/assets/iPhoneCarousel/carousel-photo-02.jpg",
        srcset: [
          "@/assets/iPhoneCarousel/carousel-photo-02@2x.jpg 2x",
          "@/assets/iPhoneCarousel/carousel-photo-02@3x.jpg 3x",
        ],
        alt: "carousel-photo-02",
      },
      {
        id: 3,
        src: "@/assets/iPhoneCarousel/carousel-photo-03.jpg",
        srcset: [
          "@/assets/iPhoneCarousel/carousel-photo-03@2x.jpg 2x",
          "@/assets/iPhoneCarousel/carousel-photo-03@3x.jpg 3x",
        ],
        alt: "carousel-photo-03",
      },
      {
        id: 4,
        src: "@/assets/iPhoneCarousel/carousel-photo-04.jpg",
        srcset: [
          "@/assets/iPhoneCarousel/carousel-photo-04@2x.jpg 2x",
          "@/assets/iPhoneCarousel/carousel-photo-04@3x.jpg 3x",
        ],
        alt: "carousel-photo-04",
      },
    ],
  }),
  getters: {
    getSlides() {
      return this.slides;
    },
  },
  actions: {},
});
