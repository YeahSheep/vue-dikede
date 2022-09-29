import Layout from '@/layout'
export default {
  path: '/sku',
  component: Layout,
  meta: { title: '商品管理' },
  children: [
    {
      path: 'sku-class',
      name: 'sku-class',
      component: () => import('@/views/sku/sku-class'),
      meta: { title: '商品类型' }
    },
    {
      path: 'sku',
      name: 'sku',
      component: () => import('@/views/sku/sku'),
      meta: { title: '商品管理' }
    }
  ]
}
