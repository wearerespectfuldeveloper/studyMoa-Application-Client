<template>

  <div id="grid">
    
    <div class="brand" :class="{'side-min-on': !toggle, 'side-min-off': toggle}">
      <nuxt-link to="/" @click="test">WARD</nuxt-link>
    </div>

    <header :class="{'main-min-on': !toggle, 'main-min-off': toggle}">
      <Nav />
    </header>
    
    <aside :class="{'side-min-on': !toggle, 'side-min-off': toggle}">
      <Sidebar />
    </aside>
      
    <content :class="{'main-min-on': !toggle, 'main-min-off': toggle}">
      <transition name="fade">
        <nuxt />
      </transition>
      
    </content>

  </div>
</template>

<script>
import Nav from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import Footer from '@/components/layout/footer';

import { mapState } from "vuex";

export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState('layout', {
      toggle: state => state.sidebarMinimize
    })
  },
  components: {
    Nav,
    Sidebar,
    Footer
  },
  methods: {
    test () {
      console.log(this.toggle);
      console.log(this.$store.state.sidebarMinimize);
    }
  }
}


</script>

<style>

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-move {
  transition: transform 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.transform-enter-active, .transform-leave-active {
  transition: transform 1s;
}



</style>

<style lang="scss">

  #grid {
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(16, 1fr);
    grid-auto-columns: minmax(100vw / 16, auto);
    grid-auto-rows: minmax(100vh / 12, auto);
  }
  
  .brand {
    grid-row: 1 / 2;
    background-color: $brandColor;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
      font-weight: 800;
    }
  }

  header {
    grid-row: 1 / 2;
    background-color: $navbarColor;
    @include thin-border-bottom;
  }
  
  aside {
    grid-row: 2 / 13;
    background-color: $sidebarColor;
    @include thin-border-right;
  }

  content {
    grid-row: 2 / 13;
    background-color: $contentColor;
  }

  .side-min-on {
    @include sideMinOnGrid;
  }

  .side-min-off {
    @include sideMinOffGrid;
  }

  .main-min-on {
    @include mainMinOnGrid;
  }

  .main-min-off {
    @include mainMinOffGrid;
  }

@media screen and (max-width: 960px) {

  .side-min-on {
    @include mobileSideMinOnGrid;
  }

  .side-min-off {
    @include mobileSideMinOffGrid;
  }

  .main-min-on {
    @include mobileMainMinOnGrid;
  }

  .main-min-off {
    @include mobileMainMinOffGrid;
  }

}

</style>
