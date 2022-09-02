<template>
  <main class="autres-page">
    <h1>Autres</h1>
    <div class="container">

      <div class="container__progressbars">

        <div class="progressbar">
          <svg class="progressbar__svg">

            <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html">

            </circle>
          </svg>
          <img class="image" src="../assets/Bois/itauba.jpg" alt="">

          <span class="progressbar__text shadow-html">Itauba</span>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
</script>

<style lang="scss">
$color-black: hsl(0, 0%, 5%);
$color-color: hsl(0, 0%, 100%);

$color-html: hsl(129, 94%, 54%);

$porcent-html: 70;


@function strokeDashoffset($num) {
  @return 440 - (440 * $num) / 100;
}

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  // background-color: $color-black;
}

.container__progressbars {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-width: 270px;
  // width: 100%;
  min-height: 100%;
  transition: 0.2s ease-out;
  transform: scale(2, 2);

  &:hover {
    transform: scale(1.5, 1.5);
    transition: 0.2s ease-in;
  }
}

.progressbar {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 1em;
  transform: rotate(-90deg);
  z-index: 1;

}

.progressbar__svg {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.progressbar__svg-circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke: hsl(0, 0%, 100%);
  stroke-linecap: round;
  transform: translate(5px, 5px); // stroke-width / 2
}

.shadow {

  &-html {
    filter: drop-shadow(0 0 3px $color-html);
  }
}

.circle {

  &-html {
    animation: anim_circle-html 1s ease-in-out forwards;

  }



}

.image {
  position: absolute;
  top: 20%;
  left: 20%;
  z-index: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: scale(1.29, 1.29) rotate(90deg);

}

.progressbar__text {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.25em 0.5em;
  color: hsl(0, 0%, 100%);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0.25em;
  transform: translate(-50%, -50%) rotate(90deg);
}

//  @keyframes

@keyframes anim_circle-html {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-html);
  }
}
</style>