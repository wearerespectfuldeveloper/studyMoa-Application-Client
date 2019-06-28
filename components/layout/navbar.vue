<template>
  <nav class="nav full-height">
    <div class="drawer full-height">
      <a href="#" @click="$store.commit('toggle_sidebar')"><i class="fas fa-bars"></i></a>
    </div>
    <ul class="nav-menu full-height">
      <li v-for="menu in menus" :key="menu.id">
        <a href="#" @click="test">{{menu.title}}</a>
      </li>
      <div class="nav-buttons">
        <div class="alarm-wrapper">
          <a href="#" class="nav-button">
            <i class="far fa-bell alarm">
              <span class="newAlarmCount">2</span>
            </i>
          </a>
          <ul class="dropdown">
            <DropdownList 
              v-for = "alarm in alarms" 
              :key = "alarm.id"
              :text = "alarm.text"
            />
          </ul>
        </div>
        
        <a href="" class="nav-button"><i class="fas fa-sign-in-alt"></i>로그인</a>
      </div>
    </ul>
    
  </nav>
</template>

<script>
import DropdownList from '@/components/layout/dropdown-list.vue'

export default {
  data() {
    return {
      menus: [
        {title: "내 스터디 그룹", id: 0}
        
      ],
      alarms: [
        {text: "swon3210님이 초대를 승낙하셨습니다", id: 0},
        {text: "프론트엔드 스터디에 초대 되었습니다", id: 1},
        {text: "프론트엔드 스터디에 초대 되었습니다", id: 2},
        {text: "프론트엔드 스터디에 초대 되었습니다", id: 3},
      ]
    }
  },
  components: {
    DropdownList
  },
  methods: {
    test () {
      console.log(this.$store.getters)
    }
  }
}
</script>

<style lang="scss" scoped>

.drawer {
  display: flex;
  align-items: center;
  a {
    font-size: 20px;
    color: white;
  }
  padding-left: 20px;
}

.nav {
  display: flex;
  flex: 1 0;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  display: flex;
  flex: 1 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;

  li {
    padding-left: 20px;
  }

  @include anchor-list-light;
}

.nav-buttons {
  flex: 1 0;
  display: flex;
  justify-content: flex-end;
  a {
    padding-right: 15px;
    text-decoration: none;
    color: white;
    font-weight: 800;
    &:hover {
      color: #e0f4fd;
    }
  }

  .nav-button {
    text-decoration: none;
    color: white;
    i {
      padding-right: 10px;
      font-size: 20px;
    }
    &:hover {
      color: #e0e6fd;
    }
  }
}
.alarm {
  position: relative;
  .newAlarmCount {
    background-color: rgb(240, 134, 134);
    padding: 2px 4px 2px 4px;
    border-radius: 50px;
    position: relative;
    font-size: 10px;
    left: -30%;
    top: -10px;
  }
}

.dropdown {
  display: flex;
  flex-flow: column;
  height: 30%;
  width: 200px;
  overflow-y: scroll;
  background-color: white;
  position: absolute;
  top: 50px;
  right: 50px;

  .dropdown-list {
    color: black;
  }
  @include container-scroll-y;
  @include right-and-left-shadow;
}

</style>
