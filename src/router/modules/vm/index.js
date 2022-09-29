import Layout from '@/layout'
export default {
  path: '/vm',
  component: Layout,
  meta: { title: '设备管理' },
  children: [
    {
      path: 'index',
      name: 'index',

      component: () => import('@/views/vm/index'),
      meta: { title: '设备管理' }
    },
    {
      path: 'status',
      name: 'status',
      component: () => import('@/views/vm/status'),
      meta: { title: '设备状态' }
    },
    {
      path: 'type',
      name: 'type',

      component: () => import('@/views/vm/type'),
      meta: { title: '设备管理类型' }
    }
  ]
}
