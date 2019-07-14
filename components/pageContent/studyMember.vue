<template>
  <div class="study-member-container">
    <component :is="'ContentHeader'"
      :title = "headerTitle"
      :subTitle = "headerSubTitle"
      :buttonText = "headerButtonText"
    ></component>
    <div class="blocks">
      <div
        class="member-block"
        v-for = "member in members" 
        :key = "member.id"
      > 
        <img class="user-avatar" src="@/assets/img/avatar.png" alt="">
        <h5>{{member.name}}</h5>
        <h6>{{member.role}}</h6>
        <a href="#" class="profile-button">프로필 보기</a>
      </div>
    </div>
  </div>
</template>

<script>
import { molecule, withContentHeader} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule, withContentHeader],
  props: {
    members: {
      type: Array,
      default: () => []
    }
  },
  components: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.study-member-container {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 20px;

  .meta {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    .title {
      padding: 10px 0 10px 0;
      
    }
    .study-host {
      display: flex;
      flex-flow: row;
      align-items: center;
      .study-host-name {
        padding: 10px 0 10px 0;
        font-size: 12px;
        margin-right: 20px;
      }
      .study-host-button {
        @include text-anchor-button($studyMemberProfileButton)
      }
    }

  }

  .blocks {
    display: flex;
    flex-flow: row;
    .member-block {
      @include square-block(150px);
      margin-right: 10px;
      padding: 10px;
      .user-avatar {
        @include avatar(50%);
      }
      box-shadow: 2px 3px 5px -3px rgba(0,0,0,0.75);

      .profile-button {
        @include text-anchor-button($studyMemberProfileButton);
      }
    }
  }

  
}

</style>
