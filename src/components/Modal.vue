<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <i class="fa fa-x"></i>
      <button class="btn btn-danger" @click="closeModal">Close</button>
      <slot></slot>
    </div>
  </div>
</template>
  
<script lang="ts">
export default {
  props: {
    showModal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
  
<style scoped>
.modal {
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-content {
  background-color: var(--color-light);
  min-width: 700px;
  max-width: 1100px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
  