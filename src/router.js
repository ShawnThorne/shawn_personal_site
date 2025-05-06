import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AboutMe from './views/AboutMe.vue'
import Experience from './views/Experience.vue'
import Education from './views/Education.vue'

const routes = [
  { path: '/', component: LandingPage, name: 'LandingPage' },
  { path: '/about', component: AboutMe, name: 'About' },
  { path: '/experience', component: Experience, name: 'Experience' },
  { path: '/education', component: Education, name: 'Education' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
