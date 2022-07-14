<template>
  <div class="elTableModule">
    <el-table :data="tabOptions.tableData" border height="600" style="width: 100%;"
      :default-sort="{ prop: 'id', order: 'descending' }">
      <slot name="checkbox"></slot>
      <el-table-column v-for="(item, index) in tabOptions.headerColumn" :key="index" :label="item.label" sortable
        :prop="item.prop" :width="item.width" :align="item.align">
        <template slot-scope="{ row }">
          <slot :name="item.slotName" :row="row">
            {{ row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
      <slot name="operation"></slot>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100, 200, 300, 400]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
      :total="tabOptions.total" hide-on-single-page>
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tabOptions: {
      // 表格数据
      tableData: [],
      // 表头的配置 包括：标题名，标题prop, width等，
      headerColumn: [],
      total: ''
    },
  },
  data() {
    return {
      currentPage: 1
    }
  },
  mounted() {
  },
  methods: {
    // 每页显示条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<style lang="scss" scoped>
.elTableModule {
  background-color: #fff;
}

.el-pagination {
  text-align: center;
  padding: 20px 0;
}
</style>
