
<template>
    <div v-if="isCorrect || letter === ' '"
        :class="`${letter !== ' ' ? 'letter headingL' : 'space'} ${containsLongWord ? 'long-word' : ''}`">
        {{ letter.toUpperCase() }}
    </div>

    <div v-else class="letter headingL transparent" :class="`${containsLongWord ? 'long-word' : ''}`">
        #
    </div>
</template>
<script setup>

defineProps({
    letter: String,
    isCorrect: Boolean,
    containsLongWord: Boolean

})

</script>

<style lang="scss" scoped>
.letter {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $blue;
    color: $white;
    border-radius: 40px;
    padding: 1.2rem 6.4rem;
    box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
    max-width: 11.2rem;
    max-height: 11.8rem;

}



.space {
    background-color: transparent;
    box-shadow: none;
    width: 10rem;

}

.transparent {
    color: transparent;
    opacity: 25%;
}

.long-word {
    padding: 2rem 6.4rem;
    font-size: 6.4rem;
}


@media screen and (max-width: $desktop-breakpoint) {

    .letter {

        padding: 1.2rem 4.8rem;
        max-width: 8.8rem;
        max-height: 11.2rem;
        font-size: 6.4rem;

    }

    .space {
        width: 6.4rem;
    }

    .long-word {
        padding: 1.8rem 3rem;
        font-size: 5.6rem;
    }
}


@media screen and (max-width: 992px) {
    .letter {
        padding: unset;
        width: 7rem;
        height: 8.8rem;
        font-size: 4.8rem;
    }

    .space {
        width: 4.8rem;
    }

    .long-word {
        font-size: 4rem;
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    .letter {
        font-size: 3.2rem;
        width: 4.5rem;
        height: 5.6rem;

    }

    .space {
        background-color: transparent;
        box-shadow: none;
        width: 2rem;
    }

    .long-word {
        font-size: 3.0rem;
        width: 3.5rem;
        height: 4.8rem;
    }
}

@media screen and (max-width: $sm-breakpoint) {
    .letter {
        font-size: 2.4rem;
        width: 3.2rem;
        height: 4.8rem;

    }

    .long-word {
        font-size: 3.0rem;
        width: 3rem;
        height: 4rem;
    }

}
</style>

