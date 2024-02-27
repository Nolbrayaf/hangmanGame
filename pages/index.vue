<template>
  <main>

    <transition name="fade" mode="out-in">

      <HowToPlayMain v-if="showRules" @back="showRules = false" key="rules" />

      <CategoriesMain v-else-if="showCategories" @back="showCategories = false" key="categories"
        @choose="handleCategoryChoose" />

      <GameMain v-else-if="showGame && gameWord" key="game" :category="choosenCategory" :gameWord="gameWord" />

      <div v-else class="main-container" key="main">
        <img class="logo" src="../assets/images/logo.svg" alt="Logo">
        <div class="buttons">
          <ButtonPlay @play="showCategories = true" />
          <ButtonMain text="how to play" @click="showRules = true" />
        </div>
      </div>
    </transition>

  </main>
</template>

<script setup>
import { categories } from '~/data.json'

const showRules = ref(false);
const showCategories = ref(false);
const showGame = ref(true);
const gameWord = ref("United Kingdom");
const choosenCategory = ref("Countries");


function handleCategoryChoose(category) {
  showCategories.value = false
  showGame.value = true
  choosenCategory.value = category
  randomWord(category)

}

function wordsByCategory(data) {
  return categories[data]
}

function randomWord(data) {
  const words = wordsByCategory(data);
  gameWord.value = words[Math.floor(Math.random() * words.length)].name

}



</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  //Main Menu
  .main-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 64px;
    background: $blue-gradient;
    width: 592px;
    height: 500px;
    border-radius: 72px;
    box-shadow: inset 0 -8px 0 4px #140E66, inset 0 6px 0 8px #2463FF;

    .logo {
      position: absolute;
      top: -20%;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      padding-bottom: 64px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}


@media screen and (max-width: $sm-breakpoint) {
  main {
    .main-container {

      justify-content: center;
      padding-top: 64px;
      width: 324px;
      height: 481px;

      .buttons {
        gap: 64px;
      }

      .logo {
        width: 200px;
        top: -10%;

      }
    }
  }
}
</style>

