<template>
  <div class="specialCard">
    <Header />
    <div>
      <h1 class="greeting">Привет 👋 еще разок :D</h1>
      <p class="taskText">
        <span class="highlightedText">Задание со звездочкой:</span>
        <br />
        На самом деле самым крутым заданием для начинающих считал и считаю
        написание простенького калькулятора. Причина такого мнения проста -
        фактически, задание позволяет прочувствовать всю силу фронтенда, ведь
        оно включает в себя и работу с javascript, и работу с html, да и
        версткой, в целом, ну и главное включает взаимодействие с DOM'ом, что
        позволяет неплохо прокачать скиллы в программировании и уловить основные
        концепты работы.
      </p>
    </div>
  </div>
</template>

<script>
import "./theme/SpecialCard.css";

import Header from "../../components/Header/Header.component";

export default {
  name: "SpecialCard",
  components: {
    Header,
  },
};
</script>
