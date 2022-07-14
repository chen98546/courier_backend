<template>
  <div class="tableList">
    <Search :formData="formData"></Search>
    <ElTable :tabOptions="tabOptions">
      <el-table-column slot="checkbox" type="selection" align="center"></el-table-column>
      <el-table-column slot="operation" label="操作" fixed="right" width="300">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <template v-if="scope.row.status == '进行中'">
            <el-button size="mini">小程序码</el-button>
            <el-button size="mini">暂停</el-button>
            <el-button size="mini">结束</el-button>
          </template>
          <el-button v-else-if="scope.row.status == '已结束'" size="mini" type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </ElTable>



  </div>
</template>

<script>
import promoteData from '@/analogData/cardvoucher/promote.js'
export default {
  components: {
    'ElTable': () => import('@/components/elTable/ElTable.vue'),
    'Search': () => import('@/components/search/Search.vue')
  },
  data() {
    return {
      tabOptions: {
        //列表数据
        tableData: promoteData.data,
        total: promoteData.count,
        headerColumn: [
          { label: 'id', prop: 'id', width: '100' },
          { label: '活动名称', prop: 'name', width: '200' },
          { label: '排序', prop: 'sort', width: '100' },
          { label: '开始时间', prop: 'startTime', width: '200' },
          { label: '结束时间', prop: 'endTime', width: '200' },
          { label: '发放方式', prop: 'receiveType', width: '150' },
          { label: '发放目标', prop: 'receiveTarget', width: '150' },
          { label: '状态', prop: 'status', width: '120' },
          { label: '创建时间', prop: 'createdTime', width: '200' },
          { label: '更新时间', prop: 'updatedTime', width: '200' },
        ]
      },
      formData: {
        title: '卡券维护',
        searchArr: [
          {
            type: 'input',
            searchCoupon: '',
            placeholder: '活动名称'
          },
          {
            type: 'select',
            searchCoupon: '',
            placeholder: '全部状态',
            options: [{
              value: '选项1',
              label: '全部状态'
            }, {
              value: '选项2',
              label: '未开始'
            }, {
              value: '选项3',
              label: '已开始'
            }, {
              value: '选项4',
              label: '进行中'
            }, {
              value: '选项5',
              label: '中途暂停'
            }, {
              value: '选项6',
              label: '已结束'
            }
            ],
          },
        ],

      }
    }
  },
  created() {

  },
  mounted() {
    // 状态文本显示
    promoteData.data.forEach(item => {
      item.receiveType == 0 && (item.receiveType = '自动发放')
      item.receiveType == 2 && (item.receiveType = '扫码发放')
      item.receiveType == 4 && (item.receiveType = '兑换码领取')
      item.receiveTarget == 3 && (item.receiveTarget = '全部用户')
      item.status == 1 && (item.status = '进行中')
      item.status == 3 && (item.status = '已结束')
    })

  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
  }
}
</script>


<style>
</style>
