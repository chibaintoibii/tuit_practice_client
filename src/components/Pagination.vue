<template>
    <div class="pagination">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button @click="currentPage = i" type="button" class="btn btn-custom-primary" :class="{current: currentPage == i}"
                v-for="i in 10">
                {{ i }}
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    data() {
        return {
            currentPage: 1
        }
    }

};
</script>
  
<style scoped>
.pagination {
    margin-top: 20px;
    display: flex;
    align-items: center;
    /* max-width: 300px; */
}
</style>
  