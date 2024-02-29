
<template>
    <button class="headingS" @click="emitEvents">{{ props.text.toUpperCase() }}</button>
</template>
<script setup>

const props = defineProps({
    text: String
})

const $emit = defineEmits(['resume', 'newCategory' , 'howToPlay']);
const emitEvents = () => {
  $emit('resume');
  $emit('newCategory');
  $emit('howToPlay');
};

</script>


<style lang="scss" scoped>
button {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-shadow: none;
    font-family: inherit;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 6.4rem;
    color: $white;
    border-radius: 40px;
    box-shadow: inset 0 -2px 0 3px #140E66, inset 0 1px 0 6px #3C74FF;
    background-color: $blue;
    text-align: center;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        border-radius: inherit;
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 0.3s ease;
    }

    &:hover::after {
        position: absolute;
        content: '';
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        border-radius: 40px;
        background-color: rgba(255, 255, 255, 0.15);
    }
}
</style>