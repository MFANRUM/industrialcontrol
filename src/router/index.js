import Vue from 'vue'
import VueRouter from 'vue-router'
import MonitoringSystem from "@/components/MonitoringSystem";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MonitoringSystem',
    component: MonitoringSystem
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
