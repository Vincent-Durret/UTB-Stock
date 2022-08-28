<template>
    <main class="quicailleries-page">
        <h1>Quincailleries</h1>
        <div class="card">
            <router-link class="button" to="/bois/itauba">
                <img src="../assets/Quincaillerie/Vis/vis-terrasse.jpg" alt="">
                <span class="text">Terrasses</span>
            </router-link>
            <router-link class="button" to="/bois/ipe">
                <img src="../assets/Quincaillerie/Vis/vis.jpg" alt="">
                <span class="text">Structure</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Plot Béton</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Lames de Scie</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/cheville.jpg" alt="">
                <span class="text">Chevilles</span>
            </router-link>

            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/boulon-charpente.jpg" alt="">
                <span class="text">Boulon <br> Charpente</span>
            </router-link>
        </div>
        <div class="card">
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Equerre de <br> fixation</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">tige Filete</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">ecrou m14</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Rondelle <br> plate</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Pied de <br> poteau</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Vis de <br> Fondtation</span>
            </router-link>
        </div>
        <div class="card">
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Feutre <br> geotextile</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Disque a <br> tronçonner</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">disque a <br> ebarbe</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Disque de <br> pollissage</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Agraffe</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">Sangle <br> d'arrimage</span>
            </router-link>
        </div>

                <div class="card">
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">masque ffp3</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">crayon</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">gant de <br> protection</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">ruban <br> signaletique</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">lingette main</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Quincaillerie/Plot-béton/plot-beton.jpg" alt="">
                <span class="text">degripant <br> universel</span>
            </router-link>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background: #f0f7ee;
    min-height: 100vh;
}

.quicailleries-page {

    .card {
        display: flex;
        flex-direction: row;
        transition: 0.5s;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 250px;
        height: 250px;
        border-radius: 25px;
        transition: 0.2s;

    }

    img {
        position: absolute;
        width: 200px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }


    .text {
        background: var(--dark);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--light);
    }

}

.button:hover {
    background: var(--primary);
    transform: scale(0.9, 0.9);
}

@media (max-width: 760px) {
    .quicailleries-page {
        .card {
            display: flex;
            flex-direction: column;
            transition: 0.5s;
        }
    }
}
</style>