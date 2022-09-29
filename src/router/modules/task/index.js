import Layout from '@/layout'
// 默认导出路由规则
export default {
  path: '/task',
  component: Layout,
  meta: { title: '工单管理' },
  children: [
    {
      path: 'businese',
      name: 'businese',
      component: () => import('@/views/task/businese'),
      meta: { title: '运营工单' }
    },
    {
      path: 'operation',
      name: 'operation',
      component: () => import('@/views/task/operation'),
      meta: { title: '运维工单' }
    }
  ]
}
