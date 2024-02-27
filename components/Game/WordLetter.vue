
<template>
    <div class="letter headingL">
        {{ letter.toUpperCase() }}
    </div>
</template>
<script setup>

defineProps({
    letter: String
})

</script>

<style lang="scss" scoped>
    
.letter {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $blue;
    color: $white;
    border-radius: 40px;
    padding: 12px 64px;
    box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
    max-width: 112px;
    max-height: 128px ;
}



</style>

