<style src="./Hero.scss" lang="scss" scoped></style>
<script src="./Hero.js"></script>

<template>
  <div class="hero">
    <div class="hero-inner">
      <h1>I Love Pixels</h1>
      <p>Hey, I’m Rob Scholten. A screen designer from the Netherlands. Currently I’m a designer at Strakzat and running Pixeldenker in my free time.</p>
      <a href="https://dribbble.com/RobScholten" target="_blank" class="btn">View Portfolio</a>
    </div>

    <div class="hero-images">
      <div class="overlay"></div>
      <div class="row" v-for="(row, index) in rows" :key="index">
        <div class="image" v-for="(image, i) in row.images" :key="index + i">
          <picture>
            <source :srcset="require(`@/assets/images/db-assets/${image.webp}`)" type="image/webp">
            <img :src="require(`@/assets/images/db-assets/${image.png}`)">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>
