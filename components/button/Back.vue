
<template>
    <button>
        <img src="~/assets/images/icons/back.svg" alt="Play">
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
    border-radius: 999px;
    width: 9.4rem;
    height: 9.4rem;
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
        background-color: rgba(255, 255, 255, 0.20);
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    button{
        width: 6.4rem;
        height: 6.4rem;
        img{
            width: 2.7rem;
            height: 2.5rem;
        }
    }
}

@media screen and (max-width: $sm-breakpoint) {
    button{
        width: 4rem;
        height: 4rem;
        img{
            width: 1.7rem;
            height: 1.6rem;
        }
    }
    
}
</style>




