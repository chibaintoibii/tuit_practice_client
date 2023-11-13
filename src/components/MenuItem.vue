<template>
    <router-link :to="link" class="menu-item">
        <div class="icon"><i :class="[icon]"></i></div>
        <div class="text"><span> {{ text }}</span></div>
    </router-link>
</template>
<script lang="ts">
export default {
    name: 'MenuItem',
    props: {
        link: {
            type: String,
            default: '/'
        },
        icon: {
            type: String,
            default: 'fa-solid fa-info'
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.menu-item {
    display: flex;
    align-items: center;
    height: 60px;
    margin-bottom: 1px;
    background-color: var(--color-primary);
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.menu-item:hover,
.menu-item.current {
    background: var(--color-primary-dark);
}

.menu-item .icon {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}

.menu-item .text {
    width: calc(100% - 60px);
    font-size: 12px;
    font-weight:500;
    letter-spacing: 1px;
}
.menu-item .text span {
    margin-left: 4px;
}
</style>