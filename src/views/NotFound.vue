<template>
  <div class="not-found">
    <h1 class="_404">404</h1>
    <h2>PAGE NOT FOUND</h2>
    <button class="btn btn-secondary">Go back!</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  background: #eee;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

._404 {
  font-size: 70px;
}
</style>