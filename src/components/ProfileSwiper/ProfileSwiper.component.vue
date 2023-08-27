<template>
  <swiper
    class="slider"
    grabCursor
    @swiper="onSwiperInitialized"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :style="{
      '--swiper-navigation-color': 'var(--main-color)',
      '--swiper-pagination-color': 'var(--main-color)',
    }"
    :navigation="true"
    :modules="modules"
    :loop="true"
  >
    <swiper-slide class="slide" v-for="image in images" :key="image.id">
      <div
        class="container"
        :data-swiper-parallax="parallaxAmount"
        :data-swiper-parallax-opacity="0.5"
      >
        <img class="image" :src="image.imageUrl" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./theme/ProfileSwiper.css";

import SwiperCore from "swiper";
import { Navigation, Parallax, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Navigation, Parallax]);

export default {
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../../assets/images/school.jpg") },
        { id: 2, imageUrl: require("../../assets/images/now.jpg") },
      ],
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
  setup() {
    [Swiper, SwiperSlide, Pagination];
  },
};
</script>
