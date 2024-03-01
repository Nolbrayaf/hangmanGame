<template>
    <div class="background" >
        <div class="container">
            <header class="header">
                <h2 class="title" :data-text=" won ? 'You Win' : 'You Lose'">{{ won ? 'You Win' : 'You Lose' }}</h2>
            </header>
            <main>
                <ButtonMain @newGame="$emit('newGame')" text="continue" />
                <ButtonMain @newCategory="$emit('newCategory')" text="new category" />
                <ButtonSecondary @quit="$emit('quit')" text="quit game" />
            </main>
        </div>
    </div>
</template>


<script setup>

const $emit = defineEmits(['newGame', 'newCategory' , 'quit']);

const props = defineProps({
    won: Boolean
})

</script>
<style lang="scss" scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(25, 1, 49, 0.75) 0%, rgba(40, 43, 150, ) 100%);


    .container {
        position: relative;
        width: 59.2rem;
        height: 44.5rem;
        background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
        box-shadow: inset 0px -8px 0px 4px #140E66, inset 0px 6px 0px 8px #2463FF;
        border-radius: 72px;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;

        .header {
            position: absolute;
            font-size: 8rem;
            width: fit-content;
            line-height: 120%;
            letter-spacing: -0.005em;
            top: -10%;
            left: 50%;
            transform: translateX(-50%);
        }

        main {
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 3.4rem;
        }

    }
}

@media screen and (max-width: $tablet-breakpoint) {

    .background {
        
        .container {
            
            
            .header {
                top: -10%;
                font-size: 6rem;
            }
            main {
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2.6rem;
        }
        }
    }
    
}

@media screen and (max-width: $sm-breakpoint) {
    
    .background {
        
        .container {
            
            header{
                font-size: 6rem;
            }
        }
    }
}


</style>
