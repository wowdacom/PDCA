<template>
  <div class="Header">
    <div class="sub-header">
        <div class="sub-header-left">
            <div class="theme-title">{{ currentTitle.name }}</div>
        </div>
        <div class="sub-header-right">
            <ul class="options">
                <li class="option"
                    :key="option.id"
                    v-for="option in options[currentTitle.id]"
                >
                    <img :src="option.icon" alt="">
                </li>
            </ul>
        </div>
    </div> 
    <div class="titles-wrapper">
        <ul class="titles">
            <li class="title"
                @click="changeTitle(index)"
                v-for="(title, index) in titles"
                :class="{'active': title.isActive}"
                :key="title.id">
                <router-link :to="'/' + title.id">
                    <img :src="title.icon" alt="">
                </router-link>      
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
      return {
          titles: [
              {
                id: "todos",
                name: "待辦事項",
                icon: require("@/assets/images/icons/todo.svg"),
                isActive: true
              },
              {
                id: "projects",
                name: "專案管理",
                icon: require("@/assets/images/icons/manage.svg"),
                isActive: false
              },
              {
                id: "ideas",
                name: "集思廣益",
                icon: require("@/assets/images/icons/brainstone.svg"),
                isActive: false
              },
              {
                id: "moods",
                name: "心情急救包",
                icon: require("@/assets/images/icons/care.svg"),
                isActive: false
              },
              {
                id: "more",
                name: "更多",
                icon: require("@/assets/images/icons/more.svg"),
                isActive: false
              }
          ],
          options: {
              todos: [
                { 
                    id: "add-list",
                    name:'add-list',
                    icon: require("@/assets/images/icons/addtodo.svg")
                },
                {
                    id: 'sorting',
                    name: 'sorting',
                    icon: require("@/assets/images/icons/sorting.svg")
                },
                {
                    id: 'setting',
                    name: 'setting',
                    icon: require("@/assets/images/icons/settings.svg")
                }
            ],
            projects: [
                {
                    id: 'add-project',
                    name: 'add-project',
                    icon: require("@/assets/images/icons/addproject.svg")
                }
            ],
            ideas: [],
            moods: [],
            more: [
                {
                    id: 'setting',
                    name: 'setting',
                    icon: require("@/assets/images/icons/settings.svg")
                }
            ]
          },
          projects : [],
          currentTitle: {
             id: "todos",
             name: "待辦事項",
             icon: "" 
          }
      }
  },
  methods: {
      changeTitle(index) {
          let choosen = index
          this.titles.forEach((item, index)=>{
              item.isActive = false
              if(index === choosen) {
                item.isActive = true   
              }
          })
          this.currentTitle = { ...this.titles[index] }
      }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

.Header {
    width: 100%;
    font-family: 'Noto Sans TC', sans-serif;
    background-color: #fff;
    -webkit-box-shadow:0 1px 4px rgba(white, 0.3), 0 0 40px rgba(white, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(white, 0.3), 0 0 40px rgba(white, 0.1) inset;
            box-shadow:0 1px 4px rgba(white, 0.3), 0 0 40px rgba(white, 0.1) inset;
    .sub-header {
        padding: 0px 10px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        .sub-header-left {
            .theme-title {
                color: #006EF0;
            }      
        }
        .sub-header-right {
            .options {
               position: relative;
               display: flex;
               width: 100%;
               animation: slideIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) 1;
                .option {
                    
                    font-size: 18px;
                    color: black;
                    img {
                        width: 25px;
                        height: auto;
                        vertical-align: middle;
                        padding: 0 10px;
                    }
                }
                @keyframes slideIn {
                    from {right: -100%;}
                    to {right: 0;}
                }
            }
            
        }
    }
    
    .titles-wrapper {
      .titles {
          display: flex;
          .title {
            flex: 1;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            padding: 2.5% 5%;
            transform: all 1s ;
            img {
                width: 100%;
                height: auto;
            }
          }
          .title.active {
              border-bottom: solid 3px #006EF0;
          }
      }
    }
}
</style>
