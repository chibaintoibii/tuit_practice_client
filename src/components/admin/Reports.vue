<template>
  <div>
    <button @click="openModal">Open Modal</button>
    <p>This is the content of the modal dialog.</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Report',
  components: {},
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
}
</script>

<style scoped>

</style>