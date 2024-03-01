<template >
    <button @click="$emit('playSound')">
        <img v-if="playSound" src="~/assets/images/icons/soundOn.svg" alt="Sound">
        <img v-else  src="~/assets/images/icons/soundOff.svg" alt="Sound">
    </button>
</template>
<script setup>

defineProps({
    playSound: Boolean
})

defineEmits(['playSound'])

</script>
<style lang="scss" scoped>

button {
    position: relative;
    margin: 0;
    padding: 0.7rem;
    border: none;
    background: none;
    box-shadow: none;
    font-family: inherit;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    color: $white;
    border-radius: 10px;
    box-shadow: inset 0 -2px 0 3px #140E66, inset 0 1px 0 6px #3C74FF;
    background-color: $blue;
    text-align: center;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 1px;
        bottom: 3px;
        left: 1px;
        right: 1px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s ease;
    }

    &:hover::after {
        position: absolute;
        content: '';
        top: 1px;
        bottom: 3px;
        left: 1px;
        right: 1px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>