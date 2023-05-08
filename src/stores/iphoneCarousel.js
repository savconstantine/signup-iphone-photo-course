import { defineStore } from "pinia";

export const useIphoneCarousel = defineStore({
  id: "IphoneCarousel",
  state: () => ({
    timeoutId: null,
    currentSlide: 3,
    iphoneMockupFilename: "iPhone-mokup",
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
    pictureLoadStatus: {
      iphoneMockup: false,
      mainSlides: false,
      gallerySlides: false,
    },
  }),
  getters: {
    getIphoneMockupFilename: (state) => state.iphoneMockupFilename,
    getSlides: (state) => state.slides,
    getCurrentSlide: (state) => state.currentSlide,
    getPreviousSlide: (state) =>
      state.currentSlide - 1 < 0
        ? state.slides.length - 1
        : state.currentSlide - 1,
    isAllPicturesLoaded: (state) =>
      Object.values(state.pictureLoadStatus).every((value) => value === true),
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
    setIphoneMockupLoadStatus(status) {
      this.pictureLoadStatus.iphoneMockup = status;
    },
    setMainSlidesLoadStatus(status) {
      this.pictureLoadStatus.mainSlides = status;
    },
    setGallerySlidesLoadStatus(status) {
      this.pictureLoadStatus.gallerySlides = status;
    },
  },
});
