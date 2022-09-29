import Layout from '@/layout'
export default {
  path: '/policy',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'policy',
      component: () => import('@/views/policy/index'),
      meta: { title: '对账系统' }
    }
  ]
}
