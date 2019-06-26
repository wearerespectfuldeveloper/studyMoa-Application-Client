<template>
  <div id="grid" class="full-height">
    <header>
      <Nav />
    </header>

    <main>
      <aside>
        <Sidebar />
      </aside>
      
      <content>
        <nuxt />
        <footer>
          <Footer />
        </footer>
      </content>
      
    </main>

    
    
  </div>
</template>

<script>
import Nav from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import Footer from '@/components/layout/footer'

export default {
  components: {
    Nav,
    Sidebar,
    Footer
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
    grid-template-rows: repeat(1fr, 10)
  }
  
  header {
    position: fixed;
    width: 100%;
    grid-row: 1 / 2;
  }
  
  main {
    grid-row: 2 / 11;
    display: grid;
    
    grid-template-columns: repeat(1fr, 10);
  
    aside {
      grid-column: 1 / 2;
      position: fixed;
      height: 100%;
    }
    
    content {
      grid-column: 2 / 11;
    }
  }
  
  footer {
    @include footer;
  }



</style>
