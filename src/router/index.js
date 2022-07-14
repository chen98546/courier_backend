import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: {
        title: '首页',
        icon: 'table'
      }
    },

  ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'el-icon-setting'
    },
    children: [{
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role'),
        meta: {
          title: '角色管理',
          icon: 'table'
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/system/user'),
        meta: {
          title: '用户管理',
          icon: 'tree'
        }
      }
    ]
  },

  {
    path: '/basic',
    component: Layout,
    name: 'Basic',
    meta: {
      title: '基本信息',
      icon: 'el-icon-user'
    },
    children: [{
        path: 'customerdata',
        name: 'Customerdata',
        component: () => import('@/views/basic/customerdata'),
        meta: {
          title: '客户信息',
          icon: 'table'
        }
      },
      {
        path: 'warehousemaintain',
        name: 'Warehousemaintain',
        component: () => import('@/views/basic/warehousemaintain'),
        meta: {
          title: '仓库维护',
          icon: 'tree'
        }
      }
    ]
  },

  {
    path: '/cardvoucher',
    component: Layout,
    name: 'Cardvoucher',
    meta: {
      title: '卡券管理',
      icon: 'el-icon-wallet'
    },
    children: [{
        path: 'coupon',
        name: 'Coupon',
        component: () => import('@/views/cardvoucher/coupon'),
        meta: {
          title: '优惠券',
          icon: 'table'
        }
      },
      {
        path: 'promote',
        name: 'Promote',
        component: () => import('@/views/cardvoucher/promote'),
        meta: {
          title: '推广活动',
          icon: 'tree'
        }
      },
      {
        path: 'drawrecord',
        name: 'Drawrecord',
        component: () => import('@/views/cardvoucher/drawrecord'),
        meta: {
          title: '领取记录',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/courier',
    component: Layout,
    name: 'Courier',
    meta: {
      title: '快递管理',
      icon: 'el-icon-takeaway-box'
    },
    children: [{
        path: 'courierList',
        name: 'CourierList',
        component: () => import('@/views/courier/courierList'),
        meta: {
          title: '快递列表',
          icon: 'table'
        }
      },
      {
        path: 'bagging',
        name: 'Bagging',
        component: () => import('@/views/courier/bagging'),
        meta: {
          title: '装袋管理',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: 'Order',
    meta: {
      title: '订单管理',
      icon: 'el-icon-tickets'
    },
    children: [{
        path: 'staged',
        name: 'Staged',
        component: () => import('@/views/order/staged'),
        meta: {
          title: '已暂存',
          icon: 'table'
        }
      },
      {
        path: 'awaitfillin',
        name: 'Awaitfillin',
        component: () => import('@/views/order/awaitfillin'),
        meta: {
          title: '带填写',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/scan',
    component: Layout,
    name: 'Scan',
    meta: {
      title: '扫描操作',
      icon: 'el-icon-full-screen'
    },
    children: [{
      path: 'pickingcheck',
      name: 'Pickingcheck',
      component: () => import('@/views/scan/pickingcheck'),
      meta: {
        title: '拣货核对',
        icon: 'table'
      }
    }]
  },
  {
    path: '/report',
    component: Layout,
    name: 'Report',
    meta: {
      title: '报表管理',
      icon: 'el-icon-data-line'
    },
    children: [{
        path: 'databoard',
        name: 'Databoard',
        component: () => import('@/views/report/databoard'),
        meta: {
          title: '数据看板',
          icon: 'table'
        }
      },
      {
        path: 'storagestatistical',
        name: 'Storagestatistical',
        component: () => import('@/views/report/storagestatistical'),
        meta: {
          title: '入库报表统计',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/warehousing',
    component: Layout,
    name: 'Warehousing',
    meta: {
      title: '入仓管理',
      icon: 'el-icon-menu'
    },
    children: [{
        path: 'scanwarehousing',
        name: 'Scanwarehousing',
        component: () => import('@/views/warehousing/scanwarehousing'),
        meta: {
          title: '快递扫描入仓',
          icon: 'table'
        }
      },
      {
        path: 'courierquery',
        name: 'Courierquery',
        component: () => import('@/views/warehousing/courierquery'),
        meta: {
          title: '快递查询',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/aide',
    component: Layout,
    name: 'Aide',
    meta: {
      title: '操作助手',
      icon: 'el-icon-s-opportunity'
    },
    children: [{
      path: 'turnsingle',
      name: 'Turnsingle',
      component: () => import('@/views/aide/turnsingle'),
      meta: {
        title: '转单助手',
        icon: 'table'
      }
    }]
  },
  {
    path: '/workorder',
    component: Layout,
    name: 'Workorder',
    meta: {
      title: '工单管理',
      icon: 'el-icon-document-copy'
    },
    children: [{
        path: 'workordertype',
        name: 'Workordertype',
        component: () => import('@/views/workorder/workordertype'),
        meta: {
          title: '工单类型',
          icon: 'table'
        }
      },
      {
        path: 'replytemplate',
        name: 'Replytemplate',
        component: () => import('@/views/workorder/replytemplate'),
        meta: {
          title: '回复模板',
          icon: 'tree'
        }
      }
    ]
  },
  {
    path: '/packaging',
    component: Layout,
    name: 'Packaging',
    meta: {
      title: '打包管理',
      icon: 'el-icon-box'
    },
    children: [{
        path: 'ordersort',
        name: 'Ordersort',
        component: () => import('@/views/packaging/ordersort'),
        meta: {
          title: '订单分拣',
          icon: 'table'
        }
      },
      {
        path: 'orderpackage',
        name: 'Orderpackage',
        component: () => import('@/views/packaging/orderpackage'),
        meta: {
          title: '订单打包',
          icon: 'tree'
        }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [{
  //     path: '',
  //     meta: {
  //       title: '卡券管理',
  //       icon: 'link'
  //     }
  //   }]
  // },
  // {
  //   path: 'express',
  //   component: Layout,
  //   children: [{
  //     path: '/express',
  //     component: () => import('@/views/hm/index/ment.vue'),
  //     meta: {
  //       title: '转运首页',
  //       icon: 'link'
  //     }
  //   }]
  // },
  // {
  //   path: '/sys',
  //   component: Layout,
  //   children: [{
  //     path: '/express',
  //     component: () => import('@/views/hm/index/ment.vue'),
  //     meta: {
  //       title: '系统管理',
  //       icon: 'link'
  //     }
  //   }]
  // },
  // {
  //   path: '/baseinfo',
  //   component: Layout,
  //   children: [{
  //     path: '/express',
  //     component: () => import('@/views/hm/index/ment.vue'),
  //     meta: {
  //       title: '基本信息',
  //       icon: 'link'
  //     }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
