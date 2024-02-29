<template >
    <div class="main-container" key="main">
        <img class="logo" src="../assets/images/logo.svg" alt="Logo">
        <div class="buttons">
            <ButtonPlay @play="$emit('play')" />
            <ButtonMain text="how to play" @howToPlay="$emit('howToPlay')" />
        </div>
    </div>
</template>
<script setup>
const $emit = defineEmits(['play', 'howToPlay'])

</script>
<style lang="scss" scoped>
.main-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 6.4rem;
    background: $blue-gradient;
    width: 59.2rem;
    height: 50rem;
    border-radius: 72px;
    box-shadow: inset 0 -8px 0 4px #140E66, inset 0 6px 0 8px #2463FF;

    .logo {
        position: absolute;
        top: -20%;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.2rem;
        padding-bottom: 6.4rem;
    }
}

@media screen and (max-width: $sm-breakpoint) {

    .main-container {

      justify-content: center;
      padding-top: 6.4rem;
      width: 32.4rem;
      height: 48.1rem;

      .buttons {
        gap: 6.4rem;
      }

      .logo {
        width: 20rem;
        top: -10%;

      }
    }
  }

</style>