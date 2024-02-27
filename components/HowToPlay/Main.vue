<template>
    <div class="container-how-to-play">
        <div class="header-how-to-play">

            <ButtonBack class="backButton" @click="$emit('back')" />
            <h2 class="headingXL title">How to Play</h2>
            <div class="empty"></div>
        </div>
        <section class="rules">
            <HowToPlayRule v-for="rule in rules" :rule="rule" class="rule" />
        </section>
        <div class="degradBackground"></div>
    </div>
</template>
<script setup>

const rules = ref([
    {
        id: '01',
        title: 'Choose a category',
        description: `First, choose a word category, like animals or movies. 
  The computer then randomly selects a secret word from that 
  topic and shows you blanks for each letter of the word.`
    },
    {
        id: '02',
        title: 'Guess letters',
        description: `Take turns guessing letters. The computer fills in the 
  relevant blank spaces if your guess is correct. If it's 
  wrong, you lose some health, which empties after eight 
  incorrect guesses.`
    },
    {
        id: '03',
        title: 'Win or lose',
        description: `You win by guessing all the letters in the word before your 
  health runs out. If the health bar empties before you guess 
  the word, you lose.`
    }
]);


</script>
<style lang="scss" scoped>
.container-how-to-play {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: 40px;


    .header-how-to-play {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;


        .title {
            position: relative;
            background: linear-gradient(180deg, #67B6FF 16.42%, #FFFFFF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            text-align: center;
            margin: 0;

            &::before {
                content: 'How to Play';
                position: absolute;
                left: 0;
                -webkit-text-stroke: 18px #243041;
                z-index: -1;
            }

        }
    }

    .rules {
        display: flex;
        gap: 32px;
        height: fit-content;
        width: 100%;
        justify-content: center;

        .rule {
            display: flex;
            flex-direction: column;
            background-color: $white;
            border-radius: 40px;
            width: 384px;
            height: 550px;
            gap: 40px;
            padding: 12px 42px;
            text-align: center;
            justify-content: center;

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

}


@media screen and (max-width: $desktop-breakpoint) {
    .container-how-to-play {

        .rules {
            flex-direction: column;
            padding: 0 60px;
            max-height: 640px;

            .rule {
                flex-direction: row;
                width: 100%;
                height: 180px;
                justify-content: flex-start;
                align-items: center;
            }

        }
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    .container-how-to-play {

        .title {
            font-size: 104px;
        }
    }
}

@media screen and (max-width: 640px) {
    .container-how-to-play {

        padding-top: 12px;

        .header-how-to-play {

            .title {
                font-size: 64px;
            }

            .empty {
                display: none;
            }
        }

        .rules {

            .rule {
                flex-direction: column;
                align-items: start;
                gap: 16px;
                padding: 32px;
            }
        }
    }
}

@media screen and (max-width: $sm-breakpoint) {
    .container-how-to-play {
        .header-how-to-play {

            justify-content: space-between;
            padding: 0 24px;

            .title {
                font-size: 48px;

            }
        }

        .rules {
            justify-content: space-between;
            padding: 0 24px;
            height: 100%;

            .rule {
                border-radius: 20px;
                height: auto;
            }
        }
    }

}
</style>

