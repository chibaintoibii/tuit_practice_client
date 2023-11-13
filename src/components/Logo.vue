<template>
    <div class="logo">
        <div class="image"><img src="https://static.tuit.uz/crop/2/5/850__80_25403472.jpg" alt=""></div>
        <div class="title"><span>TUIT Practice</span></div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Logo'
}
</script>
<style scoped>
.logo {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    cursor: pointer;
    /* border-bottom: 2px solid red; */
}

.logo.toggled {
    width: 60px;
}

.logo .image {
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
}

.logo .image img {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 50%;
}

.logo .title {
    margin-left: 20px;
    font-weight: 700;
}

.logo .title span {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
}
</style>