<template>
    <div class="form-input" :style="{'position': inputType === 'password' ? 'relative': 'static'}">
        <input 
            :value="modelValue" 
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value);"
            :type="isHiddenPassword ? inputType: 'text'" 
            :placeholder="placeholder"
            :id="id"
        />
        <span v-if="inputType === 'password'" class="eye">
            <i 
                @click="isHiddenPassword = !isHiddenPassword" 
                class="fa-solid" 
                :class="[isHiddenPassword ? 'fa-eye-slash': 'fa-eye']"
            ></i>
        </span>
    </div>
</template>
<script lang="ts">
export default {
    name: 'form-input',
    emits: ['update:modelValue'],
    props: {
        modelValue: [String, Number],
        placeholder: {
            type: String,
            default: ''
        },
        inputType: {
            type: String,
            default: 'text'
        },
        id: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isHiddenPassword: true,
        }
    },
    methods: {}
}
</script>
<style scoped>
.form-input {
    max-width: 400px;
    margin-bottom: 10px;
}

.form-input input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 5px 10px;
    font-size: 16px;
}

.form-input span.eye {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    cursor: pointer;
}

.form-input span.eye i {
    color: #666;
}
</style>