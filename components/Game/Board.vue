<template>
    <div v-if="alphabet.length > 0" class="board">
        <div v-for="(group, index) in alphabet" :key="index" class="letter-group">
            <GameBoardLetter v-for="letter in group" :key="letter" :letter="letter" @clickLetter="$emit('clickLetter', letter)" :disabled="usedLetters.includes(letter)" />
        </div>
    </div>
</template>


<script setup>

defineProps({
    alphabet: Array,
    usedLetters: Array
})




</script>
<style lang="scss" scoped>
.board {
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    .letter-group {
        display: flex;
        gap: 2.4rem;
        width: 100%;
        justify-content: center;

    }


}

@media screen and (max-width: $desktop-breakpoint) {
    .board{
gap: 16px;
        .letter-group{
            gap: 1.6rem;
        }
    }
}
</style>