<template>
    <div>
        <button @click="showConfirmationDialog" class="btn btn-danger">Delete Item</button>

        <!-- Confirmation Dialog -->
        <div v-if="confirmationVisible" class="confirmation-dialog">
            <p>Are you sure you want to delete this item?</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-outline-danger w-50 me-3" @click="confirmAction">Yes</button>
                <button class="btn btn-outline-danger w-50 ms-3" @click="cancelAction">No</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Settings',
    data() {
        return {
            confirmationVisible: false
        };
    },
    methods: {
        showConfirmationDialog() {
            this.confirmationVisible = true;
        },
        confirmAction() {
            // Execute the action (e.g., delete the item)
            // Once the action is completed, hide the confirmation dialog
            this.deleteItem();
            this.hideConfirmationDialog();
        },
        cancelAction() {
            // Cancel the action and hide the confirmation dialog
            this.hideConfirmationDialog();
        },
        hideConfirmationDialog() {
            this.confirmationVisible = false;
        },
        deleteItem() {
            // Your delete logic here
            console.log("Item deleted");
        }
    }
}
</script>
<style scoped>
.confirmation-dialog {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
</style>