<template >
    <div class="container-words">
        <div v-if="gameWords" class="container-word" v-for="(word, wIndex) in gameWords" :key="wIndex">
            <GameWordLetter v-if="gameWord" v-for="(letter, index) in word" :key="index" :letter="letter" />
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    gameWord: String
})

const gameWords = computed(() => props.gameWord.split(" g"))

</script>
<style lang="scss" scoped>
.container.words {

    display: flex;

    .container-word {
        display: flex;
        
        gap: 16px;
    }
}
</style>