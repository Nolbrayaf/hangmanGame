<template >
    <article>
        <div class="title">
            <h3 class="headingL">{{ rule.id }}</h3>
            <h4 class="headingM">{{ rule.title }}</h4>
        </div>
        <div class="description">
            <h4 class="headingM">{{ rule.title }}</h4>
            <p class="body">{{ rule.description }}</p>
        </div>
    </article>
</template>



<script setup>
defineProps({
    rule: Object
})


</script>
<style lang="scss" scoped>
article {


    .title {
        h4 {
            display: none
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        width: 100%;
    }

    h3,
    h4,
    p {

        margin: 0;
    }

    h3 {
        color: $blue;
    }

    h4 {
        color: $dark-navy;
        text-transform: uppercase;
    }

    p {
        color: #887DC0;
        width: 100%;
        height: fit-content;
    }
}

@media screen and (max-width: $desktop-breakpoint) {
    h4 {
        font-size: 40px;
    }

    p {
        font-size: 20px;
    }

    article {
        .description {
            align-items: flex-start;
            text-align: start;
            gap: 10px
        }
    }
}

@media screen and (max-width: $tablet-breakpoint) {

    h3 {
        font-size: 40px;
    }

    h4 {
        font-size: 32px;
    }

    p {
        font-size: 16px;
    }

}

@media screen and (max-width: 640px) {
    article {

        gap: 20px;

        .title {
            display: flex;

            gap: 16px;
             h3 {
                align-self: start;
                font-size: 24px;
            }

            h4 {
                display: block;
                font-size: 24px;
            }
        }


        .description {



            h4 {

                display: none
            }

            p {
                font-size: 14px;
            }
        }
    }
}

@media screen and (max-width: $sm-breakpoint) {
    
}
</style>

