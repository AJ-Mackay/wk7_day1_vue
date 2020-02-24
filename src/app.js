import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
  el: "#app",
  data: {
    items: [
      {name: "Buy shopping", isDone: false},
      {name: "Clean bathroom", isDone: false},
      {name: "Car's MOT", isDone: false}
    ],
    newItem: ""
  },
  methods: {
    addNewItem: function (){
      this.items.push({
        name: this.newItem,
        isDone: false
      });
      this.newItem = "";
    },
    doTask: function (index){
      this.items[index].isDone = true;
    }
  }
});
});
