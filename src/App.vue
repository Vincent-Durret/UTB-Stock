<template>
  <div  class="app">
    <SideBar />
    <router-view :key="$route.fullPath">
    </router-view>
  </div>


</template>

<script>
import SideBar from '../src/components/SideBar.vue';
export default {
  components: {
    SideBar,
  },
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

:root {
  --primary: #ddcdba;
  --primary-alt: #22c55e;
  --grey: #64748b;
  // COLOR
  --background: #ddcdba;
  --logo-color: black;
  --black: #000000;
  --black-alt: rgba(0, 0, 0, 0.9);
  --brown: #863A12;
  --or: rgb(206, 172, 103);
  --or-alt: #E3CD8B;
  --light: #F0F7EE;
  --white: #FFF;
  --logo-letters: #D08B00;
  // DIMENTION
  --sidebar-width: 300px;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Fira sans', sans-serif;
  // font-family: Geomanist, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  background: var(--light);
}


h1 {
  font-size: 5rem;
  color: var(--logo-letters);
  background-color: var(--black);
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem;
  opacity: 0.95;
  filter: drop-shadow(0px 0px 10px var(--logo-letters));

  @media (max-width: 760px) {
    font-size: 2.5rem;
    filter: drop-shadow(0px 0px 3px var(--logo-letters));

  }
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;


  main {
    flex: 1 1 0;
    padding-left: 4rem;
    padding-top: 2rem;


    @media (max-width: 760px) {
      padding-left: 3.8rem;
      padding-top: 2rem;
    }

    .app__forms-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(9, 10, 17, 0.76);
      z-index: 14;

      .app__forms {
        position: fixed;
        border: 3px solid var(--logo-letters);
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // padding: 1rem;
        background: var(--black);
        z-index: 15;
        border-radius: 5px;
        width: 400px;

        @media (max-width: 760px) {
          left: 57%;
        }

        .app__forms-close {

          // margin-top: 1rem;
          .close {
            position: relative;
            float: right;
            background: var(--light);
            color: var(--logo-letters);
            padding: 0.3rem;
            border-radius: 5px;
            transition: color 0.2s, transform 0.3s;
            cursor: pointer;

            &:hover {
              color: red;
              // transform: scale(1.1, 1.1);

              transition: 0.2s ease-out;
            }
          }
        }

        .app__forms-title {
          display: flex;
          justify-content: center;
          color: var(--light);
          margin-top: 1rem;
        }


        select {
          margin-top: 1rem;
          margin: 1rem;
          padding: 8px;
          border: none;
          color: black;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1rem;
        }

        input {
          margin-top: 1rem;
          margin: 1rem;
          padding: 8px;
          border: none;
          color: black;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1rem;
        }

        .app__btn {
          margin: 1rem;
          background: var(--light);
          padding: 1rem;
          font-size: 1.3rem;
          font-weight: bold;
          transition: background 0.3s;
          border-radius: 5px;

          &:hover {
            background: var(--logo-letters);
            color: white;
          }
        }


      }

    }
  }





}
</style>
