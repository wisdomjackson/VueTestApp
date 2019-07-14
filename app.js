var one = new Vue({
  el: '#vue-app-one',
data: {
    title:'Vue Instance One',
    name:'Jackson'
  },
  methods:{
  },
  computed:{
  greet: function (){
    return 'Hello From App One';

  }}
});

var two = new Vue({
el: '#vue-app-two',
data: {
    title: 'Vue Instance Two',
    Sname: 'Wisdom'
  },
  methods:{
    changeTitle: function(){
      one.title = "Title Changed!";
    }
  },
  computed:{
    greet: function (){
      return 'Yo! This is From App Two :-)';
  }
}
});
