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
        width: 240px;
        border-radius: 96px;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 9px 11px;
        height: fit-content;
    }
    .hpbar-fill{
        width: 100%;
        height: 13px;
        border-radius: 96px;
        background-color: $dark-navy;
        transition: width 0.5s ease;
    }

    @media screen and (max-width: $tablet-breakpoint) {
        .hpbar{
            width: 160px;
        }
    }

    @media screen and (max-width: $sm-breakpoint) {
        .hpbar{
            width: 57px;
        }
    }
</style>