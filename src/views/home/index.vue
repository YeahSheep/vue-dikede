<template>
  <div>
    <el-row type="flex" class="top" justify="space-between">
      <el-col :span="18" class="left">
        <el-row type="flex" justify="space-between">
          <el-col :span="13" class="box order">3</el-col>
          <el-col :span="11" class="box sales"> 2 </el-col>
        </el-row>
        <div class="box salesData">1</div>
      </el-col>

      <el-col :span="6" class="right">
        <div class="box hotshop" />
      </el-col>
    </el-row>
    <el-row type="flex" class="bottom" justify="space-between">
      <el-col :span="14">
        <div class="box cooperation">1</div>
      </el-col>

      <el-col :span="10" >
        <div class="box equipment">2</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box {
  padding: 20px;
  margin: 0 10px;
}
.top {
  margin-bottom: 20px;
  .left {
    .order {
      height: calc(20vh - 24px);
      min-height: 166px;
      background: #e9f3ff;
      border-radius: 20px;
    }
    .sales {
      height: calc(20vh - 24px);
      min-height: 166px;
      background: #e9f3ff;
      border-radius: 20px;
    }
    .salesData {
      height: calc(40vh - 68px);
      min-height: 352px;
      margin-top: 20px;
      background: #e9f3ff;
      border-radius: 20px;
    }
  }
  .right {
    .hotshop {
      height: calc(60vh - 72px);
      min-height: 538px;
      background: pink;
      border-radius: 20px;
    }
  }
}
.bottom {
  .cooperation {
    height: calc(40vh - 48px);
    min-height: 353px;
    background: #e9f3ff;
    border-radius: 20px;
  }
  .equipment {
    height: calc(40vh - 48px);
    min-height: 353px;
    background: #e9f3ff;
    border-radius: 20px;
  }
}
</style>
