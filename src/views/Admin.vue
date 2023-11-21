<template>
    <div class="admin">
        <div class="sidebar" :class="{ toggled }">
            <Logo :class="{ toggled }" />
            <menu-item 
                icon="fa-solid fa-home" 
                :text="this.$localeToText('dashboard')" 
                link="/admin/dashboard"
                :class="{ current: $route.path == '/admin/dashboard' }"
            />
            <menu-item 
                icon="fa fa-users" 
                :text="this.$localeToText('teachers')" 
                link="/admin/teachers" 
                :class="{ current: $route.path == '/admin/teachers' }"
            />
            <menu-item 
                icon="fa fa-user-graduate" 
                :text="this.$localeToText('students')" 
                link="/admin/students"
                :class="{ current: $route.path == '/admin/students' }"
            />
            <menu-item 
                icon="fa-solid fa-layer-group" 
                :text="this.$localeToText('groups')" 
                link="/admin/groups"
                :class="{ current: $route.path == '/admin/groups' }" 
            />
            <menu-item 
                icon="fa fa-file-pen" 
                :text="this.$localeToText('reports')" 
                link="/admin/reports"
                :class="{ current: $route.path == '/admin/reports' }" 
            />
            <menu-item 
                icon="fa-solid fa-gear" 
                :text="this.$localeToText('settings')" 
                link="/admin/settings" 
                :class="{ current: $route.path == '/admin/settins' }"
            />
            <menu-item 
                icon="fa fa-sign-out-alt" 
                :text="this.$localeToText('logout')" 
            />
        </div>
        <div class="main" :class="{ toggled }">
            <Navbar @toggled="toggled = !toggled" fullname="Islom Xamidjonov" role="ADMIN"
                
            imgURL="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
            />
            <router-view />
        </div>

    </div>
</template>
<script lang="ts">
import MenuItem from '@/components/MenuItem.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'AdminPage',
    components: {
        Navbar
    },
    data() {
        return {
            toggled: false,
        }
    }
}
</script>
<style scoped>
.admin {
    position: relative;
    /* background-color: #5e5d5d; */
    min-height: 100vh;
    width: 100%;
}

.admin .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 285px;
    height: 100vh;
    background-color: var(--color-primary);
    overflow-x: hidden;
    transition: 0.2s;
}

.admin .sidebar.toggled {
    width: 60px;
}

.admin .main {
    position: absolute;
    left: 285px;
    width: calc(100% - 285px);
    transition: 0.2s;
}

.admin .main.toggled {
    left: 60px;
    width: calc(100% - 60px);
}

.table tbody tr {
    cursor: pointer;
}
</style>