<style src="./Experience.scss" lang="scss" scoped></style>
<script src="./Experience.js"></script>

<template>
  <div class="experience">
    <div class="experience-inner">
      <div class="title">Experience</div>
      <div class="desktop-title">Currently</div>
      <div class="desktop-title">Previous</div>
      <div class="work-experience">
        <div
            v-for="(item, index) in items"
            :key="index"
            :class="['experience-item', {'empty': item.isEmpty}]"
        >
          <div v-if="!item.isEmpty" class="item-logo">
            <Icon class="logo-icon" :name="item.logo" />
          </div>
          <div :class="['item-status', item.status]" />
        </div>
      </div>
    </div>
  </div>
</template>
