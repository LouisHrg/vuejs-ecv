import Index from '@/views/news/Index.vue'
import Show from '@/views/news/Show.vue'

const routes = [
  {
    path: '/news',
    name: 'news.index',
    component: Index,
  },
  {
    path: '/news/:id',
    name: 'news.show',
    component: Show,
  }
]

export default routes
