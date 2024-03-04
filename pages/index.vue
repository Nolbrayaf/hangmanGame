<template>
  <main translate="no">

    <transition name="fade" mode="out-in"   @before-enter="onBeforeEnter"
  @after-enter="onAfterEnter">

      <HowToPlayMain v-if="showComponent === 'howToPlay'" @back="showComponent = ''" key="rules" />

      <CategoriesMain v-else-if="showComponent === 'categories'" @back="showComponent = ''" key="categories"
        @choose="handleCategoryChoose" />

      <GameMain v-else-if="showComponent === 'game' && gameWord" key="game" :category="choosenCategory"
        @newCategory="handleNewCategory" @quit="showComponent = ''" :gameWord="gameWord.toLocaleUpperCase()" :alphabet="generateAlphabet()" @newGame="handleNewGame"  />

      <Welcome v-else key="welcome" @howToPlay="showComponent = 'howToPlay'" @play="showComponent = 'categories'" />
    </transition>

  </main>
  <audio id="ambianceMusic" :src="ambianceMusic" loop></audio>

  <ButtonSound v-if="showComponent === ''" class="sound" @playSound="playSound" :playSound="isSoundPLaying" />

</template>

<script setup>

import ambianceMusic from '~/assets/sounds/ambiance.mp3';
import { categories } from '~/data.json'


const gameWord = ref("");
const choosenCategory = ref("");
const showComponent = ref("")
const isSoundPLaying = ref(false);

const playSound = () => {
  const audio = document.getElementById("ambianceMusic");
  isSoundPLaying.value = !isSoundPLaying.value
  if (isSoundPLaying.value) {
    audio.play();
  }else{
    audio.pause();
  }
}

const handleNewGame = () => {
  randomWord(choosenCategory.value)
  showComponent.value = "game"
}
const handleNewCategory = () => {
  choosenCategory.value = ""
  gameWord.value = ""
  showComponent.value = "categories"

}
function handleCategoryChoose(category) {
  choosenCategory.value = category;
  randomWord(category);
  showComponent.value = "game";

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
function onBeforeEnter(el) {
  console.log("Transition start for", el);
}

function onAfterEnter(el) {
  console.log("Transition end for", el);
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

.sound {
  position: absolute;
  top: 5%;
  right: 5%;
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

