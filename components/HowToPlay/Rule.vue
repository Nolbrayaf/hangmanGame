<template >
    <article>
        <div class="titleNb">
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


    .titleNb {
        h4 {
            display: none
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;
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
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
    }

    article {
        .description {
            align-items: flex-start;
            text-align: start;
            gap: 1rem;
        }
    }
}

@media screen and (max-width: $tablet-breakpoint) {

    h3 {
        font-size: 4rem;
    }

    h4 {
        font-size: 3.2rem;
    }

    p {
        font-size: 1.6rem;
    }

}

@media screen and (max-width: 640px) {
    article {

        gap: 2rem;

        .titleNb {
            display: flex;

            gap: 1.6rem;
             h3 {
                align-self: start;
                font-size: 2.4rem;
            }

            h4 {
                display: block;
                font-size: 2.4rem;
            }
        }


        .description {



            h4 {

                display: none
            }

            p {
                font-size: 1.4rem;
            }
        }
    }
}

@media screen and (max-width: $sm-breakpoint) {
    
}
</style>

