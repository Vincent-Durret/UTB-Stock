<template>
  <main class="ipe-page">
    <h1>Ipé</h1>
    <div class="card">
      <div class="wrap">
        <p>95 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de lames restants
          = </p>
      </div>
      <div class="wrap">

        <p>125 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de lames restants
          = </p>
      </div>
      <div class="wrap">

        <p>155 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de lames restants
          = </p>
      </div>
      <div class="wrap">

        <p>185 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de lames restants
          = </p>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  background: #f0f7ee;
  min-height: 100vh;
}

.ipe-page {

  h1 {
    font-size: 3rem;
  }

  .card {
    display: flex;
    // justify-content: space-between;
  }

  .wrap {
    margin: 15px;
    box-sizing: border-box;
    width: 250px;
    height: 150px;
    background: white;

  }

  p {
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-size: 1.2rem;

  }

}

@media (max-width: 760px) {
  .ipe-page {
    .card {
      display: flex;
      flex-direction: column;
      transition: 0.5s;
    }

    .wrap {
      margin: 10px;
    }
  }
}
</style>