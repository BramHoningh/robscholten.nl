<style src="./Experience.scss" lang="scss" scoped></style>
<script src="./Experience.js"></script>

<template>
  <div class="experience">
    <div class="title">Experience</div>
    <div class="work-experience">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="experience-item"
      >
        <div class="item-logo">
          <img :src="item.logo">
        </div>
        <div :class="['item-status', item.status]" />
      </div>
    </div>
  </div>
</template>
