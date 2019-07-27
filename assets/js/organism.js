
class Cell {

  constructor (componentName, _class, props) {
    // 일단은 난수로 넣었지만 나중에 바꿔야 함. 더 좋은 아이디 삽입법에는 뭐가 있으려나
    this.id = Math.floor(Math.random()*1000000)
    this.class = _class;
    this.componentName = componentName;
    this.props = props;
  }
  attach_on (eventType, method) {
    this.on[eventType] = method;
  }

  attach_native_on (eventType, method) {
    this.nativeOn[eventType] = method;
  }
  
  set_props (propName, prop) {
    this.props[propName] = prop;
  }

  test () {
    console.log(this)
  }

}

class Organism {
  constructor (structureName, _class) {
    this.structureName = structureName;
    this.class = _class
    this.slots = [];
  }

  set_props (propName, prop) {
    this.props[propName] = prop;
  }

  push_slot (cell, position) {
    const slot = {
      slotName: position,
      ...cell
    }
    this.slots.push(slot);
  }

  pop_slot () {
    this.slots.pop()
  }

  start_rendering (createElement, organism) {

    const slotList = [];

    for (let slot of organism.slots) {
      slotList.push(createElement(slot.componentName, {
        class: slot.class,
        slot: slot.slotName,
        props: slot.props
      }))
    }

    return createElement(organism.structureName, {
      class: organism.class
    }, slotList)
  }
}

export default {
  Cell,
  Organism
}