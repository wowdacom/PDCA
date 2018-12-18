<template>
  <div class="todos">
    <ul class="paper">
      <li class="memo" :class="{'isDone': todo.isDone}" v-for="(todo, index) in todos" :key="todo.title" @touchstart="pressStart" @touchend="pressEnd(index)" >
        <div class="todo">
          {{ todo.title }}
        </div>  
      </li>
    </ul>
    <div class="addTodo">
      <input type="text" v-model="currentTodo">
      <span @click="postTodo">Go</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todos',
  data () {
    return {
      firebase: {
        url: 'https://gettingdone-6dd83.firebaseio.com/'
      },
      currentTodo: '',
      todos: [
        {
          title: 'Never start something you are not willing to finish...',
          isDone: false
        }
      ],
      timerID: 0,
      timer: 0
    }
  },
  mounted () {
    this.getTodo()
  },
  methods: {
    postTodo () {
      let vm = this
      let authUrl = `${vm.firebase.url}todos.json` 
      let todo = {
        title: vm.currentTodo,
        isDone: false
      }
      if(vm.currentTodo === ''){
        return
      }
      fetch(authUrl,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(todo)
        })
        .then(function(res){
            vm.currentTodo = ''
            vm.getTodo()
        })
        .catch(function(res){ console.log(res) })
        console.log("post")
    },
    getTodo () {
      let vm = this
      let authUrl = `${this.firebase.url}todos.json` 
      let url = this.firebase.url
      fetch(authUrl, {method: 'get'})
        .then(function(res) {
          return res.json();
        })
        .then(function(res) {
          let lists = []
          let keys = Object.keys(res)
          keys.forEach((key)=>{
            lists.push({ ...res[key], id: key })
          })
          vm.todos = lists
        });
    },
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
  position: relative;
  min-height: 100vh;
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
  .addTodo {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 1);
    input {
      width: 75%;
      line-height: 15px;
      padding: 10px;
      margin: 10px 5px;
      border: solid 1px rgba(black, 0.1);
      border-radius: 10px;
      padding-left: 5px;
      background-color: rgba(white, 0.1);
    }
    span {
      color: black;
    }
  }
}
</style>