<template>
    <button class="headingM" @click="$emit('clickLetter', letter)">{{ letter }}</button>
</template>
<script setup>

defineProps({
    letter: String
})


</script>
<style lang="scss" scoped>
button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: $white;
    box-shadow: none;
    font-family: inherit;
    color: $dark-navy;
    width: 10.9rem;
    height: 8.4rem;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: $blue;
        color: $white;

    }

    &:disabled {
        opacity: 0.25;
        cursor: unset;

        &:hover {
            background-color: $white;
            color: $dark-navy;
        }
    }
}

@media screen and (max-width: $desktop-breakpoint) {
    button {
        width: 8.8rem;
        height: 7.2rem;
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    
    button {
        width: 5.2rem;
        height: 6.8rem;
        font-size: 3.2rem;
    }
}

@media screen and (max-width: $sm-breakpoint) {
    button {
        width: 4rem;
        height: 5.6rem;
        font-size: 3rem;
    }
}
</style>