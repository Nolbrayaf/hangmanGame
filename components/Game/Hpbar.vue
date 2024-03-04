<template>
    <div class="hpbar" :class="{ 'hp-damage-effect': showDamageEffect }">
        <span class="hpbar-fill" :style="{ width: `calc((100% / 8) * ${hpLeft})` }"></span>
    </div>
</template>
<script setup>

const props = defineProps({
    hpLeft: Number
})

const showDamageEffect = ref(false);

const previousHpLeft = ref(props.hpLeft);

watch(() => props.hpLeft, (newValue, oldValue) => {
    if (newValue < oldValue) {
        showDamageEffect.value = true;
        setTimeout(() => showDamageEffect.value = false, 500)
    }
    previousHpLeft.value = newValue;
});



</script>

<style lang="scss" scoped>
.hpbar {
    width: 24rem;
    border-radius: 96px;
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.9rem 1.1rem;
    height: fit-content;
    transition: box-shadow 0.5s ease;
}

.hpbar-fill {
    width: 100%;
    height: 1.3rem;
    border-radius: 9.6rem;
    background-color: $dark-navy;
    transition: width 0.5s ease;
}

.hp-damage-effect {
    box-shadow: 0 0 15px 2px rgba(255, 0, 0, 0.7);
}

@media screen and (max-width: $desktop-breakpoint) {
    .hpbar {
        width: 20rem;
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    .hpbar {
        width: 13rem;
        padding: 0.7rem 0.9rem;

        .hpbar-fill {
            height: 1rem;
        }
    }
}

@media screen and (max-width: $sm-breakpoint) {
    .hpbar {
        width: 5.7rem;
    }
}
</style>