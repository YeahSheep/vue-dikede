import Layout from '@/layout'
export default {
  path: '/oredr',
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'oredr',
      component: () => import('@/views/order/index'),
      meta: { title: '订单管理' }
    }
  ]
}
