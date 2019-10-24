<template>
  <div class="product">
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="商品列表" name="first">
        <!-- 表格 -->
        <el-table
          class="tabOne"
          :data="tableData"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="商品 ID"
            prop="id">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="描述"
            prop="desc">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="分类管理" name="second">分类管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="用户管理" name="fourth">用户管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        id: '12987122',
        name: '2019秋冬新款长袖针织连衣裙宽松过膝长款毛衣裙连帽打底裙',
        category: '精品女装',
        desc: '街头风格 连帽 长袖 纯色',
        address: '上海市浦东新区',
        shop: '某某服装旗舰店',
        shopId: '10333'
      },
      {
        id: '12987123',
        name: '2019秋冬新款卫衣',
        category: '精品女装',
        desc: '街头风格 连帽 纯色',
        address: '上海市浦东新区',
        shop: '某某服装旗舰店',
        shopId: '10333'
      }]
    }
  }

}
</script>

<style lang="scss">
  .tab {
    margin: 20px
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #3e5679;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
