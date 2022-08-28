<template>
  <main class="produit-page">
    <h1>Produits</h1>
    <div class="card">
      <router-link class="button" to="/bois/itauba">
        <img src="../assets/Produits/silicone.jpg" alt="">
        <span class="text">Silicone</span>
      </router-link>
      <router-link class="button" to="/bois/ipe">
        <img src="../assets/Produits/mastic.jpg" alt="">
        <span class="text">Mastic</span>
      </router-link>
      <router-link class="button" to="/bois/cumaru">
        <img src="../assets/Produits/hbs200.jpg" alt="">
        <span class="text">Caoutchouc <br> liquide</span>
      </router-link>
      <router-link class="button" to="/bois/structures">
        <img src="../assets/Produits/saturateur.jpg" alt="">
        <span class="text">Saturateur</span>
      </router-link>
    </div>
    <div class="card">
      <router-link class="button" to="/bois/structures">
        <img src="../assets/Produits/degriseur.jpg" alt="">
        <span class="text">Degriseur</span>
      </router-link>
      <router-link class="button" to="/bois/structures">
        <img src="../assets/Produits/tracage.jpg" alt="">
        <span class="text">Bombe de <br> traçage</span>
      </router-link>
      <router-link class="button" to="/bois/structures">
        <img src="../assets/Produits/craie.jpg" alt="">
        <span class="text">Craie <br> Cordex</span>
      </router-link>
    </div>
  </main>
</template>

<script>
</script>

<style lang="scss" scoped>
main {
  background: #f0f7ee;
  min-height: 100vh;
}

.produit-page {
  width: 50vw;

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
    transition: 0.3s;

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
  .produit-page {
    .card {
      display: flex;
      flex-direction: column;
      transition: 0.5s;
    }
  }
}
</style>