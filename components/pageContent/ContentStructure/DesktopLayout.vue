<template>
  <div class="basic-container">
    <div class="pageHeader">
      <slot name=""></slot>
    </div>
    <div class="mainArticle">
      <slot name=""></slot>
    </div>
    <div class="mainNav">
      <slot name=""></slot>
    </div>
    <div class="siteAds">
      <slot name=""></slot>
    </div>
    <div class="pageFooter">
      <slot name=""></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.basic-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "nav article ads"
    "nav footer footer";
  grid-template-rows: 80px 1fr 70px;  
  grid-template-columns: 20% 1fr 15%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px;
  height: 100%;
  @media all and (max-width: 960px) {
    grid-template-areas: 
      "header"
      "article"
      "ads"
      "nav"
      "footer";
    grid-template-rows: 80px 1fr 70px 1fr 70px;  
    grid-template-columns: 1fr;
  }
}

.pageHeader, .pageFooter, .mainArticle, .mainNav, .siteAds {
  padding: 1.2em;
  background: white;
  @include block-shadow;
  }
.pageHeader {
  grid-area: header;
  }
.pageFooter {
  grid-area: footer;
  }
.mainArticle { 
  grid-area: article;      
  }
.mainNav { 
  grid-area: nav; 
  }
.siteAds { 
  grid-area: ads; 
  } 
  
/* Stack the layout on small devices/viewports. */

</style>
