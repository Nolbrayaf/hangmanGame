<template>
    <div v-if="categoryNames" class="container-categories">
        <div class="header-categories">

            <ButtonBack class="backButton" @click="$emit('back')" />
            <h2 class="headingXL title" data-text="Pick a Categories">Pick a Categories</h2>
            <div class="empty"></div>
        </div>
        <section class="categories">
            <categoriesCategory v-for="category in categoryNames" :category="category" :key="category" class="category" @click="$emit('choose', category)" />
        </section>
        <div class="degradBackground"></div>
    </div>
</template>
<script setup>
import { categories } from '~/data.json'

const categoryNames = ref(Object.keys(categories))

</script>
<style lang="scss" scoped>
.container-categories {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap: 50px;
    padding: 40px;

    .header-categories {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;


    }

    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        gap: 40px;
        width: 100%;
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
    .container-categories {
        gap: 24px;

        .header-categories {

            .title {
                font-size: 104px;
            }
        }

        section {
            gap: 32px;
        }
    }
}

@media screen and (max-width: $tablet-breakpoint) {
    .container-categories {

        justify-content: space-evenly;
        .header-categories {

            .title {
                font-size: 48px;
            }
            

        }


        section {
            flex-direction: column;
            flex-wrap: nowrap;
        }
    }
}

// @media screen and (max-width: 640px) {
//     .container-categories {

//         padding-top: 12px;

//         .header-categories {

//             .title {
//                 font-size: 64px;
//             }

//             .empty {
//                 display: none;
//             }
//         }


//     }
// }

@media screen and (max-width: $sm-breakpoint) {
    .container-categories {


        .header-categories {

            justify-content: space-between;
            padding: 0 12px;
            gap: 16px;


            .backButton {
                height: 40px;
                width: 40px;
                justify-self: start;
            }
            .title {
                font-size: 36px;
                
            }

            .empty {
                display: none;
            }

        }

    }

}
</style>