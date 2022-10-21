<template>
    <footer>
        <div class="wrap-title">
            <h3> Made by GareFunkle</h3>
        </div>
        <div class="wrap">
            <p>© {{currentYear}} Univers Terrasses Bois Stock</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear(), 
        };
    }

}
</script>

<style lang="scss">
footer {
    position: relative;
    bottom: 0%;
    background-color: var(--black-alt);
    padding: 1rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    .wrap-title {


        h3 {
            color: var(--light);
        }

        @media (max-width: 760px) {
            margin-left: 1rem;;
        }
    }

    .wrap {


        p {
            background-color: var(--logo-letters);
            padding: 1rem;
            color: var(--black);
            border-radius: 5px;
            font-weight: bold;

            @media (max-width: 760px) {
                padding: 0.5rem;
            }

        }
    }


}
</style>