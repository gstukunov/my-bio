<template>
  <div class="card">
    <Header />
    <div>
      <h1 class="greeting">Привет 👋,</h1>
      <p class="greetingText">
        я Гриша,
        <span class="highlightedText"
          >Frontend Developer из Ростова-на-Дону,</span
        >
        <br />
        мне 20 лет, поэтому фотография со времен старшей школы и моя последняя
        фотография не будут сильно отличаться :D
        <br />
        <br />
        <span class="highlightedText">Страничка без адаптива,</span> поэтому
        убедительная просьба смотреть страничку только с десктопных экранов.
      </p>
    </div>
    <ProfileSwiper />
    <BiographyEssay />
  </div>
</template>

<script>
import "./theme/BioCard.css";

import ProfileSwiper from "../../components/ProfileSwiper/ProfileSwiper.component";
import BiographyEssay from "../../components/BiographyEssay/BiographyEssay.component";
import Header from "../../components/Header/Header.component";

export default {
  name: "BioCard",
  components: {
    ProfileSwiper,
    BiographyEssay,
    Header,
  },
};
</script>
