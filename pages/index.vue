<template>
  <main>

    <transition name="fade" mode="out-in">

      <component :is="getComponent(currentComponent)" v-bind="componentData" />

    </transition>

  </main>
</template>

<script setup>
import { categories } from '~/data.json'
import HowToPlayMain from '~/components/HowToPlay/Main.vue';
import CategoriesMain from '~/components/Categories/Main.vue';
import GameMain from '~/components/Game/Main.vue';
import Welcome from '~/components/Welcome.vue';

const currentComponent = ref(Welcome);

const componentData = ref({
  onPlay: switchToCategories,
  onHowToPlay: switchToRules
});

const gameWord = ref("The Lion king");
const choosenCategory = ref("Country");


const handleNewCategory = () => {
  currentComponent.value = 'CategoriesMain';
  componentData.value = {
    key: 'categories',
    onBack: () => currentComponent.value = 'Welcome',
    onChoose: handleCategoryChoose,
  };
};

function handleCategoryChoose(category) {
  choosenCategory.value = category;
  randomWord(category);
  currentComponent.value = 'GameMain';
  componentData.value = {
    key: 'game',
    category: choosenCategory.value,
    gameWord: gameWord.value.toLocaleUpperCase(),
    alphabet: generateAlphabet(),
    onNewCategory: handleNewCategory,
  };
}

function switchToCategories() {
  currentComponent.value = CategoriesMain;
  componentData.value = { key: 'categories' };
}

function switchToRules() {
  currentComponent.value = HowToPlayMain;
  componentData.value = { key: 'rules' };
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

const getComponent = (componentName) => {
  switch (componentName) {
    case 'HowToPlayMain': return HowToPlayMain;
    case 'CategoriesMain': return CategoriesMain;
    case 'GameMain': return GameMain;
    default: return Welcome;
  }
};


</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>

