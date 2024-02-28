<template>
  <main>

    <transition name="fade" mode="out-in">

      <HowToPlayMain v-if="showRules" @back="showRules = false" key="rules" />

      <CategoriesMain v-else-if="showCategories" @back="showCategories = false" key="categories"
        @choose="handleCategoryChoose" />

      <GameMain v-else-if="showGame && gameWord" key="game" :category="choosenCategory" @newCategory="handleNewCategory"  :gameWord="gameWord.toLocaleUpperCase()" :alphabet="generateAlphabet()" />

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
const showGame = ref(false);
const gameWord = ref("The Lion king");
const choosenCategory = ref("Country");

const handleNewCategory = () => {
  showGame.value = false;
  showCategories.value = true;

  console.log(showCategories.value)
}
function handleCategoryChoose(category) {
  showCategories.value = false;
  showGame.value = true;
  choosenCategory.value = category;
  randomWord(category);

}

function wordsByCategory(data) {
  return categories[data]
}

function randomWord(data) {
  const words = wordsByCategory(data);
  gameWord.value = words[Math.floor(Math.random() * words.length)].name

}

function generateAlphabet() {
  const alphabet = [];
  const group = [];
  for (let i = 65; i <= 90; i++) {
    group.push(String.fromCharCode(i))
  }
  for (let i = 0; i < group.length; i += 9) {
    alphabet.push(group.slice(i, i + 9));
  }
  return alphabet;
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
    gap: 6.4rem;
    background: $blue-gradient;
    width: 59.2rem;
    height: 50rem;
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
      gap: 3.2rem;
      padding-bottom: 6.4rem;
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
      padding-top: 6.4rem;
      width: 32.4rem;
      height: 48.1rem;

      .buttons {
        gap: 6.4rem;
      }

      .logo {
        width: 20rem;
        top: -10%;

      }
    }
  }
}
</style>

