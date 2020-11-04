<template functional>
  <div class="fishbone-badge text-muted">
    powered by
    <a href="https://github.com/ddeniz" target="_blank">
      <img src="/images/fishbonelogo.jpg" alt="Fishbone logo">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'FishboneBadge'
  }
</script>

<style lang="scss" scoped>
  .fishbone-badge {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: normal;
    img {
      margin-left: 8px;
      width: 60px;
      vertical-align: middle;
    }
  }
</style>
