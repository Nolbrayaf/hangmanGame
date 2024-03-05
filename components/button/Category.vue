
<template>
    <button class="headingM">
        {{ category }}
    </button>
</template>

<script setup>

defineProps({
    category: String
})



</script>

<style lang="scss" scoped>
button {
    position:relative;
    margin: 0;
    padding: 0;
    border: none;
    background-color: $blue;
    box-shadow: inset 0 -2px 0 3px #140E86, inset 0 4px 0 6px #3C74FF;
    font-family: inherit;
    color: $white;
    border-radius: 40px;
    height: 190px;
    max-width: 384px;
    width: calc((100% - 32px)/3);
    padding: 12px 64px;
    cursor: pointer;
    text-align: center;

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
        border-radius: 40px;
    }

    &:hover::after {
        position: absolute;
        content: '';
        top: 0px;
        bottom: 7px;
        left: 5px;
        right: 5px;
        background-color: rgba(255, 255, 255, 0.20);
    }
}


@media screen and (max-width: $desktop-breakpoint) {

    button {
        min-width: 324px;

    }
}

@media screen and (max-width: $tablet-breakpoint) {
    button {
        width: 100%;
        max-width: unset;
        min-width: unset;
        height: fit-content;
        font-size: 24px;
        min-height: 64px;
    }
}
</style>