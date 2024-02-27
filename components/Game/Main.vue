
import type { start } from 'repl';

import type { GameWord } from '#build/components';

import type { GameWord } from '#build/components';
<template>
    <div v-if="hpLeft && category" class="container-game" >
    <header>
        <div class="header-left-section">
            <ButtonMenu/>
            <h2 class="headingL" :data-text="category">{{ category }}</h2>
        </div>
        <div class="header-right-section">
        <GameHpbar  :hpLeft="hpLeft" />
        <img src="~/assets/images/icons/heart.svg" alt="Logo">
        </div>

    </header>

    <GameWord v-if="gameWord" :gameWord="gameWord" />
</div>
    <div class="degradBackground"></div>
</template>
<script setup>
defineProps({
    category: String,
    gameWord: String


})
const hpLeft = ref(5);
</script>
<style lang="scss" scoped>

.container-game{
    width: 100%;
    height: 100%;
    padding: 60px 112px;
    display:flex;
    flex-direction: column;
    
    header {
    color: $white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .header-left-section {
        display: flex;
        align-items: center;
        gap: 57px;
    }

    .header-right-section {
        display: flex;
        align-items: center;
        gap: 40px;
    }
}}




.degradBackground {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, #1A043A 0%, #151278 70.31%, #2B1677 100%);
    opacity: 0.75;
    z-index: -1;
}
</style>