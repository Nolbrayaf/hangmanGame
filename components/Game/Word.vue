<template>
    <div class="container-words">

        <div v-for="(word, wIndex) in gameWords" :key="'word-' + wIndex" class="word-group">
            <div class="container-word"  >
                <GameWordLetter v-for="(letter, lIndex) in word.split('')" :key="'letter-' + wIndex + '-' + lIndex"
                    :letter="letter" :isCorrect = "correctLetters.includes(letter)" :containsLongWord="containsLongWord" />
            </div>

            <GameWordLetter v-if="wIndex < gameWords.length - 1" :key="'space-' + wIndex" letter=" " />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    gameWord: String,
    correctLetters: Array
})

const gameWords = computed(() => props.gameWord.split(" "))

const containsLongWord = computed(() => {
  return gameWords.value.some(word => word.length >= 9);
});


</script>
<style lang="scss" scoped>
.container-words {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;


    .word-group {
        display: flex;

        .container-word {
            display: flex;
            gap: 1.6rem;
            align-items: center;

        }

    }
}

@media screen and (max-width: $desktop-breakpoint) {
    .container-words {

        .container-word {}

    }

    

}

@media screen and (max-width: 992px) {
    .container-words {
        .word-group {
            .container-word {
                gap: 0.8rem;
            }

        }
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    .container-words {




        .word-group {
            .container-word {
                gap: 0.2rem;
            }

        }
    }
}
</style>