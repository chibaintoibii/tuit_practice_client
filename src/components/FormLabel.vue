<template>
    <div class="form-label">
        <label :for="forAttribute">{{ text }}</label>
    </div>
</template>
<script lang="ts">
export default {
    name: 'form-label',
    props: {
        forAttribute: {
            type: String,
        },
        text: {
            type: String,
        }
    }
}
</script>
<style scoped>
.form-label {
    padding: 0;
    margin-top: 5px;
}

.form-label label {
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
</style>