<template>
  <div class="pagination">
    <button class="btn btn-secondary" @click="goToPage(1)" :disabled="currentPage === 1"><i class="fa-solid fa-angles-left"></i></button>
    <button class="btn btn-secondary" @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-angle-left"></i></button>
    <span v-for="page in totalPageCount" :key="page" class="btn-group">

      <button @click="goToPage(page)" class="btn btn-secondary" :class="{ current: currentPage === page }">{{ page }}</button>

    </span>
    <button class="btn btn-secondary" @click="nextPage" :disabled="currentPage === totalPageCount"><i class="fa-solid fa-angle-right"></i></button>
    <button class="btn btn-secondary" @click="goToPage(totalPageCount)" :disabled="currentPage === totalPageCount"><i class="fa-solid fa-angles-right"></i></button>
  </div>
</template>
  
<script lang="ts">
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPageCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPageCount && page !== this.currentPage) {
        this.$emit('page-changed', page);
      }
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    },
  },

};
</script>
  
<style scoped>
.pagination {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button.current {
  background-color: #007bff;
}
</style>
  