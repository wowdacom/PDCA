<template>
  <div class="ideas">
    <!-- <textarea rows="4" cols="50" v-model="memos"></textarea> -->

      <textarea class="muji" v-model="message" placeholder="#What's On Your Mind?"></textarea>

    <vue-markdown :emoji="false" class="demo" style="text-align: left" :source="message"></vue-markdown>
  </div>
</template>

<script>
// @ is an alias to /src
import VueMarkdown from 'vue-markdown';

export default {
  name: 'ideas',
  data () {
    return {
      message: '<span style="color: blue">#What\'s On Your Mind?</span> 🎄🎄🎄'
    }
  },
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss" scoped>
.ideas {
  padding: 10px 15px;
  .muji {
    width: 100%;
    height: 40vh;
    font-size: 18px;
    background-color: inherit;
    color: inherit;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  }

  .demo {

  }
}
</style>
