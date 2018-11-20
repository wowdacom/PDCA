<template>
  <div class="todos">
    <ul class="paper">
      <li class="memo" :class="{'isDone': todo.isDone}" v-for="(todo, index) in todos" :key="todo.title" @touchstart="pressStart" @touchend="pressEnd(index)" >
        <div class="todo">
          {{ todo.title }}
        </div>  
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todos',
  data () {
    return {
      todos: [
        {
          title: 'Just Start...',
          isDone: false
        },
        {
          title: '接 Firebase 存 todo 資料',
          isDone: false
        },
        {
          title: '<無印良品>買筆記本寫開發筆記跟做卡片材料',
          isDone: false
        },
        {
          title: '專案管理介面設計，進度條',
          isDone: false
        },
        {
          title: 'Vue 讀書會章節準備',
          isDone: false
        },
        {
          title: 'Science of Well Being 第七章計畫',
          isDone: false
        },
        {
          title: 'Long Press Cancel It',
          isDone: true
        },
        {
          title: 'Mindset with MarkDown https://github.com/miaolz123/vue-markdown',
          isDone: true
        }
      ],
      timerID: 0,
      timer: 0
    }
  },
  methods: {
    pressStart (value) {
      let vm = this
      this.timer = 0
      this.timerID = setInterval(function(){
        vm.timer += 1;
      }, 100)
      
    },
    pressEnd (value) {
      if(this.timer > 1) {
        this.$set(this.todos[value], 'isDone', true)
      } else {
        this.$set(this.todos[value], 'isDone', false)
      }  
      this.timer = 0
      clearInterval(this.timerID)
    }
  }
};
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

.todos {    
    .paper {
      .memo {
        border: solid 1px white;
        line-height: 50px;
        background-color: #006EF0;
      }
      .isDone {
        background-color: black;
      }
    }
}
</style>