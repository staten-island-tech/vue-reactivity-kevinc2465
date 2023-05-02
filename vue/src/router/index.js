import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatisticsView from '../views/StatisticsView.vue'
import DoughnutChartView from '../views/DoughnutChartView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/doughnutChart',
      name: 'doughnutChart',
      component: DoughnutChartView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    }
  ]
})

export default router
