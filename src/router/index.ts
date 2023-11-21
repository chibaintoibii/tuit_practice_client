import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import AdminPage from '../views/Admin.vue'
import AdminDashboard from '../components/admin/Dashboard.vue'
import AdminTeachers from '../components/admin/TeachersList.vue'
import Teacher from '../components/admin/Teacher.vue'
import AdminStudents from '../components/admin/StudentsList.vue'
import AdminGroups from '../components/admin/GroupsList.vue'
import AdminReports from '../components/admin/Reports.vue'
import AdminSettings from '../components/Settings.vue'
import Test from '../components/Test.vue'
import NotFound from "@/views/NotFound.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {requiresAuth: false}
  },
  {
    path: '/',
    redirect: '/admin/dashboard',
    meta: {requiresAuth: true, requiresRole: 'admin'}
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    meta: {requiresAuth: true, requiresRole: 'admin'}
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {requiresAuth: true, requiresRole: 'admin'},
    children: [
      {
        component: AdminDashboard,
        path: 'dashboard',
        name: 'Dashboard',
      },
      {
        component: AdminTeachers,
        path: 'teachers'
      },
      {
        component: Teacher,
        path: 'teachers/:username'
      },
      {
        component: AdminStudents,
        path: 'students'
      },
      {
        component: AdminGroups,
        path: 'groups'
      },
      {
        component: AdminReports,
        path: 'reports'
      },
      {
        component: AdminSettings,
        path: 'settings'
      }
    ]
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);
})

export default router
