var app=new Vue({
  el: '#app',
  data:
  {
    message : "my new vue.js learning",
    counter:0,
    users:['manoj','sony','ammu','binny']
  },
  methods:
  {
    incrementCounter(){
      this.counter+=1;
    }
  }
})
