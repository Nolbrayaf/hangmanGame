
<template>
    <button class="headingS" @click="emitEvents">{{ props.text.toUpperCase() }}</button>
</template>
<script setup>
import clickSound from '@/assets/sounds/clickBubble.wav';

const props = defineProps({
    text: String
})

const $emit = defineEmits(['quit']);
const emitEvents = () => {


    if (typeof window !== "undefined" && typeof Audio !== "undefined") {
        const clickAudio = new Audio(clickSound);
        clickAudio.volume = 0.2;
        clickAudio.play().catch(e => console.error("Erreur lors de la lecture de l'audio:", e));
    }
    $emit('quit');

};

</script>


<style lang="scss" scoped>
button {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    background: $pink-gradient;
    box-shadow: none;
    font-family: inherit;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 6.4rem;
    color: $white;
    border-radius: 40px;
    box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #C642FB;
    text-align: center;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s ease;
    }

    &:hover::after {
        position: absolute;
        content: '';
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        border-radius: 40px;
        background-color: rgba(255, 255, 255, 0.15);
    }
}

@media screen and (max-width: $sm-breakpoint) {

    button {

        padding: 1.2rem 4.8rem;
        font-size: 2.4rem;
    }

}
</style>

