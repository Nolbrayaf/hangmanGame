
<template>
    <div v-if="gameWord && category && alphabet" class="container-game">
        <header>
            <div class="header-left-section">
                <ButtonMenu @pause="showPauseMenu = true" />
                <h2 class="headingL" :data-text="category">{{ category }}</h2>
            </div>
            <div class="header-right-section">
                <GameHpbar :hpLeft="hpLeft" />
                <img src="~/assets/images/icons/heart.svg" alt="Heart">
            </div>

        </header>

        <GameWord v-if="gameWord" :gameWord="gameWord" :correctLetters="correctLetters" />

        <GameBoard :alphabet="alphabet" @clickLetter="handleClickLetter" />
    </div>
    <div class="degradBackground"></div>
<transition name="fade">
    <GamePauseMenu v-if="showPauseMenu" @newCategory="handleNewCategory"  @resume="handleResume" class="pause-menu" />

</transition>
</template>
<script setup>
const props = defineProps({
    category: String,
    gameWord: String,
    alphabet: Array


})

const $emit = defineEmits(['newCategory']);

const showPauseMenu = ref(false);
const hpLeft = ref(8);
const correctLetters = ref([]);

function handleClickLetter(letter) {
    if (props.gameWord.includes(letter) && !correctLetters.value.includes(letter)) {
        correctLetters.value.push(letter);
    } else {
        if (!correctLetters.value.includes(letter)) {

            hpLeft.value -= 1
        }
    }
    console.log(correctLetters.value)
}

const handleNewCategory = () => {
  showPauseMenu.value = false;
  $emit('newCategory');
};

const handleResume = () => {
  showPauseMenu.value = false;
};


</script>
<style lang="scss" scoped>
.container-game {
    width: 100%;
    height: 100%;
    padding: 2.4rem 11.2rem 0 11.2rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    header {
        color: $white;
        display: flex;
        justify-content: space-between;
        width: 100%;


        .header-left-section {
            display: flex;
            align-items: center;
            gap: 5.7rem;

            h2 {
                margin: 0;
            }

        }

        .header-right-section {
            display: flex;
            align-items: center;
            gap: 4rem;

        }
    }
}




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

.pause-menu {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}



@media screen and (max-width: $desktop-breakpoint) {
    .container-game {
        padding: 2.4rem 5rem;
        justify-content: space-between;

        header {
            .header-left-section {
                gap: 4rem;

                h2 {
                    font-size: 4.8rem;
                }
            }
        }
    }
}

@media screen and (max-width: 992px) {
    .container-game {
        padding: 2.4rem;

        header {
            .header-left-section {
                gap: 3.2rem;

                h2 {
                    font-size: 4.8rem;
                }
            }
        }
    }

}

@media screen and (max-width: $tablet-breakpoint) {
    .container-game {

        padding: 1.2rem;

        header {
            .header-left-section {
                gap: 1.6rem;

                h2 {
                    font-size: 3.2rem;
                }
            }

            .header-right-section {
                gap: 1.6rem;

                img {
                    width: 4.8rem;
                    height: 4.8rem;
                }
            }
        }
    }
}
</style>