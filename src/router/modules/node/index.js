import Layout from '@/layout'
export default {
  path: '/node',
  component: Layout,
  meta: { title: '点位管理' },
  children: [
    {
      path: 'region',
      name: 'region',
      component: () => import('@/views/node/region'),
      meta: { title: '区域管理' }
    },
    {
      path: 'node',
      name: 'node',
      component: () => import('@/views/node/node'),
      meta: { title: '点位管理' }
    },
    {
      path: 'partner',
      name: 'partner',
      component: () => import('@/views/node/partner'),
      meta: { title: '合作商管理' }
    }
  ]
}
