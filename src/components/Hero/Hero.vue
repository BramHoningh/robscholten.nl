<style src="./Hero.scss" lang="scss" scoped></style>
<script src="./Hero.js"></script>

<template>
  <div class="hero">
    <div class="hero-inner">
      <h1>I Love Pixels</h1>
      <p>Hey, I’m Rob Scholten. A screen designer from the Netherlands. Currently I’m a designer at Strakzat and running Pixeldenker in my free time.</p>
      <a href="#" class="btn">View Portfolio</a>
    </div>

    <div class="hero-images">
      <div class="overlay"></div>
      <div class="row" v-for="i in 5" :key="i">
        <div class="image" v-for="index in 5" :key="index">
          <img src="../../assets/images/db-assets/db-asset-1.png">
        </div>
      </div>
    </div>
  </div>
</template>
