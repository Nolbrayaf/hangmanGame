<template>
    <div class="background">
        <div class="container">
            <header class="header">
                <h2 class="title" data-text="Paused">Paused</h2>
            </header>
            <main>
                <ButtonMain @resume="$emit('resume')" text="continue" />
                <ButtonMain @newCategory="$emit('newCategory')" text="new category" />
            </main>
        </div>
    </div>
</template>


<script setup>

const $emit = defineEmits(['resume', 'newCategory']);

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
            font-size: 13.4rem;
            width: fit-content;
            line-height: 120%;
            letter-spacing: -0.005em;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
        }

    }
}
</style>
