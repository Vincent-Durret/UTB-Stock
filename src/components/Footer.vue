<template>
    <footer ref="footer" class="footer">
        <div class="wrap">
            <p class="year" ref="year">© {{ currentYear }} Univers Terrasses Bois Stock</p>
        </div>
        <div class="wrap-title">
            <h3 class="title" ref="title"> Made by Vincent.D</h3>
        </div>
    </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
    setup() {
        const footer = ref(null);
        const year = ref(null)
        const title = ref(null)

        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 50) {
                footer.value.style.display = 'none';
                footer.value.style.padding = '0.3rem';
                year.value.style.padding = '0.2rem';

            } else {
                footer.value.style.display = 'flex'; // Réduire la hauteur ici

                footer.value.style.padding = '0.5rem';

                year.value.style.padding = '1rem';
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            footer,
            year,
            title
        };
    }

}
</script>

<style lang="scss">
.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: var(--black-alt);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in;


    .wrap {
        margin-left: 4rem;

        .year {
            background-color: var(--logo-letters);
            padding: 1rem;
            color: var(--black);
            border-radius: 5px;
            font-weight: bold;
            transition: all 0.3s ease-in;

            @media (max-width: 760px) {
                padding: 0.9rem;
            }

        }
    }

    .wrap-title {


        .title {
            color: var(--light);
            transition: all 0.3s ease-in;
            font-size: 1rem;
        }

        @media (max-width: 760px) {
            margin-left: 1rem;
            ;
        }
    }


}
</style>