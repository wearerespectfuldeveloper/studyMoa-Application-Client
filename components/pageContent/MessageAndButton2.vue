<template>
  <div 
    class="alarm-container"
    :style="{'width': width, 'height': height}"  
  >
    <div class="message">
      <h5 class="message">{{message}}</h5>
    </div>
    <div class="label-box" v-if= "buttonLabel1.length > 0">
      <h6 class="label">{{buttonLabel1}}</h6>
      <div class="editBox">
        <input type="text"/>
      </div>
    </div>
    <div class="label-box" v-if= "buttonLabel2.length > 0">
      <h6 class="label">{{buttonLabel2}}</h6>
      <div class="editBox">
        <input type="text"/>
      </div>
    </div>
    <div class="buttons">
      <nuxt-link to="/myInfo/changePwdConfirm" class="nav-button"  >
        <button class="button1">{{buttonText1}}</button>
      </nuxt-link>
    </div>
    
  </div>
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    message: {
      type: String,
      default: '탈퇴를 원하시면 비밀번호를 입력해주시기 바랍니다. 탈퇴 시 계정은 복구할 수 없습니다.'
    },

    buttonLabel1:{
      type: String,
      default: ''
    },

    buttonLabel2:{
      type: String,
      default: ''
    },

    buttonText1: {
      type: String,
      default: '확인'
    }
  }
}
</script>

<style lang="scss" scoped>
.alarm-container {
  display: flex;
  flex-flow: column;
  height: 200px;
  width: 250px;
  justify-content: center;

  .message  {
    margin-bottom: 10px;
  }

  .editBox input{
    width: 100%;
  }

  .buttons .button1{
    margin-top: 10px;
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 100%;
    height: 35px;
    background: darkblue;
    text-align: center;
    color: white;
    border: 1px  gray ;
    border-radius: 10px;
  }
  
}
</style>