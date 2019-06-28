<template>
  <div id="grid">
    <header :class="{'header-min-on': !toggle, 'header-min-off': toggle}">
      <Nav />
    </header>

    <div class="brand" :class="{'brand-min-on': !toggle, 'brand-min-off': toggle}">
      <a href="#" @click="test">WARD</a>
    </div>

    <aside :class="{'aside-min-on': !toggle, 'aside-min-off': toggle}">
      <Sidebar />
    </aside>
      
    <content :class="{'content-min-on': !toggle, 'content-min-off': toggle}">
      <nuxt />
    </content>
    
    
  </div>
</template>

<script>
import Nav from '@/components/layout/navbar';
import Sidebar from '@/components/layout/sidebar';
import Footer from '@/components/layout/footer';

import { mapGetters, mapMutations } from 'vuex';

export default {
  data () {
    return {
      
    }
  },
  computed: {
    toggle () {
      return this.$store.state.sidebarMinimize
    },
    ...mapGetters(['sidebar'])
  },
  mounted () {
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
@import 'bootstrap';

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
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

  .brand-min-on {
    grid-column: $minOnGrid;
  }

  .brand-min-off {
    grid-column: 1 / 4;
  }

  header {
    grid-row: 1 / 2;
    
    background-color: $navbarColor;
    border-bottom: 0.3px solid rgba(0,0,0,0.3);
  }

  .header-min-on {
    grid-column: 2 / 17;
  }

  .header-min-off {
    grid-column: 4 / 17;
  }
  
  aside {
    grid-row: 2 / 13;
    grid-column: 1 / 4;
    background-color: $sidebarColor;
    border-right: 0.3px solid rgba(0,0,0,0.5);
  }

  .aside-min-on {
    grid-column: 1 / 2;
  }

  .aside-min-off {
    grid-column: 1 / 4;
  }
  
  content {
    grid-row: 2 / 13;
    grid-column: 4 / 17;
    background-color: $contentColor;
  }

  .content-min-on {
    grid-column: 2 / 17;
  }

  .content-min-off {
    grid-column: 4 / 17;
  }

@media screen and (max-width: 960px) {
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

  .brand-min-on {
    grid-column: 1 / 2;
  }

  .brand-min-off {
    grid-column: 1 / 2;
  }

  header {
    grid-row: 1 / 2;
    background-color: $navbarColor;
    border-bottom: 0.4px solid rgba(0,0,0,0.3);
  }

  .header-min-on {
    grid-column: 2 / 17;
  }

  .header-min-off {
    grid-column: 2 / 17;
  }
  
  aside {
    grid-row: 2 / 13;
    background-color: $sidebarColor;
    border-right: 0.4px solid rgba(0,0,0,0.5);
  }

  .aside-min-on {
    grid-column: 1 / 2;
  }

  .aside-min-off {
    grid-column: 1 / 2;
  }
  
  
  content {
    grid-row: 2 / 13;
    grid-column: 2 / 17;
  }

  .content-min-on {
    grid-column: 2 / 17;
  }

  .content-min-off {
    grid-column: 2 / 17;
  }
}

// 아코 이런...겹치는 걸 생각 못했네
</style>
