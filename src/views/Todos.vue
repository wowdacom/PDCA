<template>
  <div class="todos">
    <ul>
      <li v-for="todo in todos" :key="todo.title">
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
      todos: [{
        title: 'Just Start...',
        isDone: false
      }]
    }
  }
};
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

.todos {
    border: solid 1px black;
}
</style>