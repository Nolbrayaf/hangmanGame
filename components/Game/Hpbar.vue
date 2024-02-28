<template>
    <div class="hpbar">
        <span class="hpbar-fill" :style="{ width: `calc((100% / 8) * ${hpLeft})` }"></span>
    </div>
</template>
<script setup>

defineProps({
    hpLeft: Number
})

</script>

<style lang="scss" scoped>
    .hpbar{
        width: 24rem;
        border-radius: 96px;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0.9rem 1.1rem;
        height: fit-content;
    }
    .hpbar-fill{
        width: 100%;
        height: 1.3rem;
        border-radius: 9.6rem;
        background-color: $dark-navy;
        transition: width 0.5s ease;
    }

    @media screen and (max-width: $desktop-breakpoint) {
        .hpbar{
            width: 20rem;
        }
    }

    @media screen and (max-width: $tablet-breakpoint) {
        .hpbar{
            width: 13rem;
            padding: 0.7rem 0.9rem;
            .hpbar-fill{
            height: 1rem;
            }
        }
    }

    @media screen and (max-width: $sm-breakpoint) {
        .hpbar{
            width: 5.7rem;
        }
    }
</style>