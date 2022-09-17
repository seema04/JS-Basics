class emp{
  constructor(n){
    this.name = n;
  }
  msg(){
    console.log('hi' + " " +this.name);
  }
}

// manager class gets inheritance through emp class.
class manager extends emp{
  constructor(name,d){
    super(name);
    this.dept = d;
  }
  
  info(){
    super.msg();
    console.log(this.name + " is of " + 'dept = ' + this.dept);
  }
}

let mng1 = new manager("seema",'software developer');
console.log(mng1);
mng1.info();


// *********** mixing *************
let usefullMethod = {
  sayHie(){
    console.log('hie');
  },

  sayHeyo(){
    console.log('heyo');
  }
}

// now what if we want to use the object usefullMethod inside user class?

// we have to first assign the object to user class prototype.


class user{
  constructor(){
    this.name = 'seema!';
  }
}
Object.assign(user.prototype,usefullMethod);

const u1 = new user;
u1.sayHeyo();
u1.sayHie();
console.log(u1);

let number = [1,2,3,4,5];
for(let num of number)
console.log(num);