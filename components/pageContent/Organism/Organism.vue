<template>
  
</template>

<script>

class cell {
  constructor (slotName, componentName, _class, props) {
    // 일단은 난수로 넣었지만 나중에 바꿔야 함. 더 좋은 아이디 삽입법에는 뭐가 있으려나
    this.id = Math.floor(Math.random()*1000000)
    this.slotName = slotName;
    this.componentName = componentName;
    this.class = _class;
    this.props = props;
    this.on = function () {
      console.log('nothing happenend!')
    };
    this.nativeOn = function () {
      console.log('nothing happenend!')
    };
  }
  attach_on (method) {
    this.on = method;
  }

  attach_native_on (method) {
    this.nativeOn = method;
  }
  
  set_props (propName, propValue) {
    this.props[propName] = propValue;
  }

}

class organism {
  constructor (structureName) {
    this.structureName = structureName;
    this.slots = [];
  }

  set_props (propName, propValue) {
    this.props[propName] = propValue;
  }

  insert_slot(slot) {
    this.slots.push(slot);
  }

  delete_slot(slot) {
    this.slots.findIndex(x => x ==)
  }
}

export default {
  // 아 프랍이 아니라 라우트에서 받아야겠구나
  
}
</script>

<style lang="scss" scoped>

</style>
