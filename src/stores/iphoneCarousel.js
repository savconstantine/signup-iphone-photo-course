import { defineStore } from "pinia";

export const useIphoneCarousel = defineStore({
  id: "IphoneCarousel",
  state: () => ({
    timeoutId: null,
    currentSlide: 3,
    slides: [
      {
        id: 1,
        name: "carousel-photo-01",
        alt: "carousel-photo-01",
      },
      {
        id: 2,
        name: "carousel-photo-02",
        alt: "carousel-photo-02",
      },
      {
        id: 3,
        name: "carousel-photo-03",
        alt: "carousel-photo-03",
      },
      {
        id: 4,
        name: "carousel-photo-04",
        alt: "carousel-photo-04",
      },
    ],
  }),
  getters: {
    getSlides() {
      return this.slides;
    },
    getCurrentSlide() {
      return this.currentSlide;
    },
    getCurrentSlideObject() {
      return this.slides[this.getCurrentSlide];
    },
    getPreviousSlideObject() {
      return this.slides[
        this.getCurrentSlide - 1 < 0
          ? this.slides.length - 1
          : this.getCurrentSlide - 1
      ];
    },
  },
  actions: {
    rollTheSlides() {
      this.clearTimeoutId();
      const intervalFunction = () => {
        this.currentSlide =
          this.currentSlide === this.slides.length - 1
            ? 0
            : this.currentSlide + 1;

        this.timeoutId = setTimeout(() => {
          intervalFunction();
        }, 8000);
      };
      intervalFunction();
    },
    clearTimeoutId() {
      clearTimeout(this.timeoutId);
    },
  },
});
