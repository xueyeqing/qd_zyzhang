<template>
  <div class="page">
      <ul>
        <li><div class="selectmain selectmain_left selectbg_red">选项A</div>
            <div class="selectmain selectmain_right">
                <el-progress :percentage="20" class="progress_style" color="#f895a0" :show-text="false"></el-progress>
                <span style="color: #666666;">2人占比20%</span>
            </div>
        </li>
        <li><div class="selectmain selectmain_left selectbg_red">选项B</div>
            <div class="selectmain selectmain_right">
                <el-progress :percentage="0" class="progress_style" color="#f895a0" :show-text="false"></el-progress>
                <span style="color: #666666;">0人占比0%</span>
            </div>
        </li>
        <li><div class="selectmain selectmain_left selectbg_green">选项C</div>
            <div class="selectmain selectmain_right">
                <el-progress :percentage="50" class="progress_style" color="#0CB65C" :show-text="false"></el-progress>
                <span style="color: #666666;">5人占比50%</span>
            </div>
        </li>
        <li><div class="selectmain selectmain_left selectbg_red">选项D</div>
            <div class="selectmain selectmain_right">
                <el-progress :percentage="30" class="progress_style" color="#f895a0" :show-text="false"></el-progress>
                <span style="color: #666666;">3人占比30%</span>
            </div>
        </li>
        
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  /*完成了data数据的初始化,el没有*/
    created:function() {

  },
  /*完成挂载 el被新创建的vm.el替换*/
  mounted:function() {

  },
  /*实例销毁之前调用*/
  beforeDestroy:function() {

  },
  components: {

  }
}
</script>

<style scoped>
.page {
    width: 90%;
    font-size: 16px;
}

ul li {list-style-type: none;height: 28px;line-height: 28px;padding: 6px 0;}
ul li .selectmain {display: inline-block;height: 26px;line-height: 26px;color: #fff;font-size: 12px}
ul li .selectmain.selectbg_red {background-color: #f895a0}
ul li .selectmain.selectbg_green {background-color:#0CB65C}
ul li .selectmain_left{float: left;width: 60px;border: 1px solid #ddd;border-radius: 4px;padding: 0 6px;}
ul li .selectmain_right{float: left;width: 70%;margin-left: -1px;border-top: 1px solid #ddd;border-right: 1px solid #ddd;border-bottom: 1px solid #ddd;
    border-radius: 0 4px 4px 0;}
ul li .selectmain .progress_style {width:40%;display: inline-block;margin-right: 5px}    

</style>
