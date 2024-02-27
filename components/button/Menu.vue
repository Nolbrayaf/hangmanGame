
<template>
    <button @click="$emit('play')">
        <img src="~/assets/images/icons/menu.svg" alt="Play">
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
    position:relative;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none;
    font-family: inherit;
    color: inherit;
    background: $pink-gradient;
    box-shadow:  inset 0 -6px 0 7px rgba(157,45,245,0.25);
    border-radius: 999px;
    width: 94px;
    height: 94px;
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
    button{
        width: 160px;
        height: 160px;
    }
}
</style>