<template>
  <div class="moods">
    <ul class="sub-nav">
      <li v-for="strategy in strategies" :key="strategy.id" :class="{'active': strategy.isActive}">{{ strategy.name }}</li>
    </ul>
    <div class="moods-content">
      <div class="WOOP-wrapper">
        <h1>WOOP 四步驟技巧</h1>
        <div class="WOOP">
          <ul class="flex-container">
            <li class="flex-item">
              <div class="WOOP-title ">今天的健康飲食願望：</div>
              <div class="WOOP-content"><span class="underscore">吃三份水果</span></div>
            </li>
            <li class="flex-item">
              <div class="WOOP-title">最佳結果：</div>
              <div class="WOOP-content"><span class="underscore">健康</span></div>
            </li>
            <li class="flex-item">
              <div class="WOOP-title">障礙：</div>
              <div class="WOOP-content"><span class="underscore">家裡沒有水果</span></div>
            </li>
            <li class="flex-item">
              <div class="WOOP-title">計畫：</div>
              <div class="WOOP-content plan">若 <span class="plan-underscore">我晚上八點離開辦公室</span>則 <span class="plan-underscore">我將到超市選購水果</span></div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'moods',
  data () {
    return {
      strategies: [
      {
        id: 1,
        name: 'WOOP',
        isActive: true
      },
      {
        id: 2,
        name: 'PDCA',
        isActive: false
      }]
    }
  }
};
</script>
<style lang="scss" scoped>
.moods {
  .sub-nav {
    height: 40px;
    text-align: left;
    li {
      
      display: inline-block;
      line-height: 40px;
      padding: 0px 10px;
    }
    li.active {
      border-bottom: solid 5px white;
    }
  }
  .moods-content {
    margin-top: 5px;
    min-height: 500px;
    border: solid 1px white;
    .WOOP-wrapper {
      h1 {
        margin: 25px;
      }
      .WOOP {
        margin: 0 auto;
        width: 80%;
        border-radius: 5px;
        border: solid 1px;
        .flex-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          .flex-item {
            flex: 1;
            padding: 15px;
            text-align: left;
            .WOOP-title {
              display: inline-block;
              width: 30%;
              vertical-align: top;
              height: 100%;
            }
            .WOOP-content {
              display: inline-block;
              height: 100%;
              width: 70%;
              vertical-align: bottom;
              .underscore {
                display: inline-block;
                width: 90%;
                border-bottom: solid 1px white;
                padding-left: 10px;
              }
              .plan-underscore {
                display: inline-block;
                border-bottom: solid 1px white;
                width: 175px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
