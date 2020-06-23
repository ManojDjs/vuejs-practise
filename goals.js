var app=new Vue({
  el:"#count",
  data:{
    value:['one goal'],
    goal:'newgoal of vuejs',
    count:0,
    color:'blue',
    yourhealth:100,
    monsterhealth:100,
    gamerun:false,
    moves:[],
    link:"<a href='https://www.google.com/search?q=google&rlz=1C1CHBF_enGB890GB890&oq=google&aqs=chrome..69i57j0l7.2725j0j8&sourceid=chrome&ie=UTF-8'>Google</a>"
  },
  methods:{
    startgame(){
      this.gamerun=true,
      this.yourhealth=100,
      this.monsterhealth=100,
      this.moves=[]
    },
    attack(){
        y_attack=Math.ceil(Math.random()*10);
        this.monsterhealth-=y_attack;
        this.moves.push('you attacked for '+y_attack+'points');
        m_attack=Math.ceil(Math.random()*10);
      this.yourhealth-=m_attack;
      this.moves.push('Monster attacked for '+m_attack+'points');
    },

    heal(){
      y_heal=Math.ceil(Math.random()*10);
        this.yourhealth+=y_heal;
        this.moves.push('you healed for '+y_attack+'points');
        m_attack=Math.ceil(Math.random()*10);
      this.yourhealth-=m_attack;
      this.moves.push('Monster attacked for '+m_attack+'points');
    },
    specialattack(){
      y_attack=Math.ceil(Math.random()*15);
      this.monsterhealth-=y_attack;
      this.moves.push('you attacked for '+y_attack+'points');
      m_attack=Math.ceil(Math.random()*10);
    this.yourhealth-=m_attack;
    this.moves.push('Monster attacked for '+m_attack+'points');
  },
    quitgame(){
      this.gamerun=false
    },
    // onadd(){
    //   console.log(goal),
    //   this.value.push(goal),
    //   this.goal=''
    // },
    methoddata(){
      return this.goal;
    },
    increase(){
      console.log('i was clicked');
      this.count++;
    }}
})
