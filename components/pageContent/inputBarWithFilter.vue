<template>
  <div class="input-bar-with-filter" :style="{'width': width, 'height': height}">
    <div class="input-with-icon-and-label">
      <i :class="'fas fa-' + icon + ' ' + iconStyle" v-if="showIcon"></i>
      <label class="input-label" v-if="showLabel">{{labelText}}</label>
      <input :class="inputStyle" type="text">
    </div>
    
    <div class="selectbox-list" v-if="showSelectbox">
      <select v-for="selectbox in selectboxs" :key="selectbox.id" class="selectbox" >
        <option class="option" v-for="option in selectbox.options" :key="option.id">{{option.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '70%'
    },
    height: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: 'label'
    },
    icon: {
      type: String,
      default: 'search'
    },
    inputStyle: {
      type: String,
      default: 'input'
    },
    iconStyle: {
      type: String,
      default: 'input-icon-with-background-color'
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    showSelectbox: {
      type: Boolean,
      default: true
    },
    selectboxs: {
      type: Array,
      default: function () {
        return [
          {id: 'select1', options: [
            {id: 1, name: 'option1'},
            {id: 2, name: 'option2'},
            {id: 3, name: 'option3'},
            {id: 4, name: 'option4'},
            {id: 5, name: 'option5'},
          ]}
        ]
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.input-bar-with-filter {
  display: flex;

  .input-with-icon-and-label {
    width: 100%;
    display: flex;
    margin-right: 10px;
  
    .input-icon-with-background-color {
      @include inputIconWithBackgroundColor(skyblue);
    }

    .input-icon {
      @include inputIcon(skyblue);
    }

    .input-label {
      @include inputLabelBasic;
    }

    .input {
      @include inputBasic;
      flex-grow: 1;
    }

    .input-with-border-bottom {
      @include inputWithBottomBorder;
      flex-grow: 1;
    }
  }
  
  .selectbox-list {
    display: flex;

    .selectbox {
      @include selectboxBasic;      

    }
  }
}
</style>
