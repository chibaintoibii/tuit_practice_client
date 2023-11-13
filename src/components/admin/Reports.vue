<template>
    <div>
    <button @click="openModal">Open Modal</button>
    <Modal :showModal="isModalOpen" @close="closeModal">
      <p>This is the content of the modal dialog.</p>
    </Modal>
  </div>
</template>
<script lang="ts">
import Modal from '../Modal.vue';
export default {
    name: 'Report',
    components: {
    Modal,
  },
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