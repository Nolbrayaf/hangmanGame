<template>
    <button @click="emitEvent">
        <img src="~/assets/images/icons/play.svg" alt="Play">
    </button>
</template>

<script setup>

import { useAudio } from '~/useAudio';

const $emit = defineEmits(['play']);

function emitEvent() {
    useAudio()

    $emit('play')
}

</script>

<style lang="scss" scoped>
button {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none;
    font-family: inherit;
    color: inherit;
    background: $pink-gradient;
    box-shadow: inset 0 -4px 0 5px #243041, inset 0 -12px 0 11px #9D2DF5;
    border-radius: 999px;
    width: 20rem;
    height: 20rem;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0px;
        bottom: 7px;
        left: 5px;
        right: 5px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s ease;
        border-radius: 999px;
    }

    &:hover::after {
        position: absolute;
        content: '';
        top: 0px;
        bottom: 7px;
        left: 5px;
        right: 5px;
        background-color: rgba(255, 255, 255, 0.15);
    }
}

@media screen and (max-width: $sm-breakpoint) {
    button {
        width: 16rem;
        height: 16rem;
    }
}
</style>