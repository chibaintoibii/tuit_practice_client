<template>
    <div class="login">
        <div class="wrapper">
            <form>
                <div class="image">
                    <img src="https://static.tuit.uz/crop/2/5/850__80_25403472.jpg" alt="">
                </div>
                <h3 class="title">TUIT Practice</h3>

                <form-label text="Username" forAttribute="username"></form-label>
                <form-input v-model="username" id="username" placeholder="Enter your username"/>

                <form-label text="Password" forAttribute="password"></form-label>
                <form-input 
                    inputType="password" 
                    id="password" 
                    v-model="password" 
                    placeholder="Enter your password"
                />
                <div class="submit">
                    <button class="btn btn-primary w-100" type="submit" @submit.prevent="">LOGIN</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    }
}
</script>
<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: var(--color-primary);
}

.login .wrapper {
    max-width: 400px;
    width: 400px;
    height: 500px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 30px;
}

.login .wrapper form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.login .wrapper form .title {
    align-self: center;
    color: var(--color-primary-dark);
    letter-spacing: 1px;
    font-weight: 600;
}

.login .wrapper form .image {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    align-self: center;
    margin-bottom: 10px;
}

.login .wrapper form .image img {
    width: 100%;
    height: 100%;
    background-size: cover;
}

.login .wrapper form .submit {
    margin-top: 40px;
}
</style>