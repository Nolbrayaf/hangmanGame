
<template>
    <div :class="letter !== ' ' ? 'letter headingL' : 'space'">
        {{ letter.toUpperCase() }}
    </div>
</template>
<script setup>

defineProps({
    letter: String
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


@media screen and (max-width: $desktop-breakpoint) {

    .letter {

        padding: 1.2rem 4.8rem;
        max-width: 8.8rem;
        max-height: 11.2rem;
        font-size: 6.4rem;

    }

    .space{
        width: 6.4rem;
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
}

@media screen and (max-width: $sm-breakpoint) {
    .letter {
        font-size: 2.4rem;
        width: 3.2rem;
        height: 4.8rem;
        
    }
    
}
</style>

