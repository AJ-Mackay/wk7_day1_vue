import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
  el: "#app",
  data: {
    items: [
      {name: "Buy shopping", priority:true, isDone: false},
      {name: "Clean bathroom", priority:false, isDone: false},
      {name: "Car's MOT", priority:true, isDone: false}
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
      document.getElementById("high").checked = false;
      document.getElementById("low").checked = false;
    },
    doTask: function (index){
      this.items[index].isDone = true;
    }
  }
});
});
