<template>
  <div class="app-container">
    <el-table :data="promoteData" style="width: 100%" height="530" :default-sort="{ prop: 'sort', order: 'asc' }">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column align="center" label="序号" width="90">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="活动名称" width="200">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="排序" sortable prop="sort" align="center" width="90">
        <template slot-scope="scope">{{ scope.row.sort }}</template>
      </el-table-column>
      <el-table-column label="开始时间" sortable prop="startTime" width="200">
        <template slot-scope="scope">{{ scope.row.startTime }}</template>
      </el-table-column>
      <el-table-column label="结束时间" sortable prop="endTime" width="200">
        <template slot-scope="scope">{{ scope.row.endTime }}</template>
      </el-table-column>
      <el-table-column label="发放方式" align="center"  width="150">
        <template slot-scope="scope">{{ scope.row.receiveType }}</template>
      </el-table-column>
      <el-table-column label="发放目标" align="center"  width="150">
        <template slot-scope="scope">{{ scope.row.receiveTarget }}</template>
      </el-table-column>
      <el-table-column label="状态" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.status }}</template>
      </el-table-column>
      <el-table-column label="创建时间" sortable prop="createdTime" width="200">
        <template slot-scope="scope">{{ scope.row.createdTime }}</template>
      </el-table-column>
      <el-table-column label="更新时间" sortable prop="updatedTime" width="200">
        <template slot-scope="scope">{{ scope.row.updatedTime }}</template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="300">
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


    </el-table>
  </div>
</template>

<script>
import promoteData from '@/analogData/cardvoucher/promote.js'
export default {
  data() {
    return {
      promoteData: promoteData.data
    }
  },
  created() {

  },
  mounted() {
    // 状态文本显示
    this.promoteData.forEach(item => {
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
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  font-weight: 500;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
