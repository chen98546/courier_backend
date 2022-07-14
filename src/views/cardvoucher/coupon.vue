<template>
  <div>
    <div class="tableList">
      <Search :formData="formData"></Search>
      <ElTable :tabOptions='TabOptions'>
        <el-table-column slot="checkbox" type="selection" align="center"></el-table-column>
        <el-table-column slot="operation" fixed="right" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </ElTable>
    </div>
  </div>
</template>

<script>
import couponData from '@/analogData/cardvoucher/coupon.js'
export default {
  components: {
    'ElTable': () => import('@/components/elTable/ElTable.vue'),
    'Search': () => import('@/components/search/Search.vue')
  },
  data() {
    return {
      TabOptions: {
        //列表数据
        tableData: couponData.data,
        total: couponData.count,
        headerColumn: [
          { label: 'id', prop: 'id', width: '100', align: 'left' },
          { label: '标题', prop: 'title', width: '200', align: 'left' },
          { label: '类型', prop: 'couponText', width: '120', align: 'left' },
          { label: '优惠券券码', prop: 'couponCode', width: '150', align: 'left' },
          { label: '有效期', prop: 'startTime', width: '200', align: 'left' },
          { label: '结束时间', prop: 'endTime', width: '200', align: 'left' },
          { label: '创建时间', prop: 'createdTime', width: '200', align: 'left' },
          { label: '更新时间', prop: 'updatedTime', width: '200', align: 'left' },
        ]
      },
      formData: {
        title: '优惠券',
        searchArr: [
          {
            type:'input',
            searchCoupon: '',
            placeholder: '优惠券名称'
          }
        ]
      }
    }
  },
  mounted() {
    // 状态文本显示
    this.TabOptions.tableData.forEach(item => {
      item.couponType == 0 && (item.couponText = '满减');
      item.couponType == 1 && (item.couponText = '折扣');
      item.couponType == 2 && (item.couponText = '无首重');
      item.startTime ? item.startTime : item.startTime = '--';
      item.endTime ? item.endTime : item.endTime = '--';
      item.validDay ? (item.startTime = '领取后' + item.validDay + '天内有效') : item.startTime;
    })
  },

}
</script>


<style lang="scss" scoped>
</style>
