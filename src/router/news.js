import Index from '@/views/news/Index.vue'
import Show from '@/views/news/Show.vue'
import Create from '@/views/news/Create.vue'
import Edit from '@/views/news/Edit.vue'

const routes = [
  {
    path: '/news',
    name: 'news.index',
    component: Index,
  },
  {
    path: '/news/create',
    name: 'news.create',
    component: Create,
  },
  {
    path: '/news/:id/edit',
    name: 'news.edit',
    component: Edit,
  },
  {
    path: '/news/:id',
    name: 'news.show',
    component: Show,
  }
]

export default routes
