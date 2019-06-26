<template>
  <nav class="nav-grid">
    <div class="brand">
      <a class="navbar-brand" href="#">WARD</a>
    </div>
    <div class="nav-item">
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <a href="#">{{menu.title}}</a>
        </li>
      </ul>
    </div>
    
    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {title: "내 스터디 그룹", id: 0}
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.nav-grid {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(1fr, 10);
  border-bottom: 0.4px solid rgba(0,0,0,0.5);
}

.brand {
  grid-column: 1 / 2;
  background-color: $brandColor;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-brand {
  color: white;
  font-weight: bold;
  margin: 0;
}

.nav-item {
  grid-column: 2 / 11;
  background-color: $navbarColor;
  @include navList
}

.button-item {
  background-color: $navbarColor;
  @include btnList
}

</style>
