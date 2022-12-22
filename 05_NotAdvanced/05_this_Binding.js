const hitesh = {

  firstName : "Hitesh",
  lastName : "Choudhary",
  courseCount: 3,
  getInfo : function(){
    console.log(`
     First name is ${this.firstName}
     Last name is ${this.lastName}
     His role is ${this.role}
     and he is studying ${this.courseCount} courses`);
  },

}

// console.log(hitesh)
// hitesh.getInfo();

const dj = {
  firstName : "Rock",
  lastName : "DJ",
  role : "Sub - Admin",
  courseCount : 4,
};

// hitesh.getInfo.bind(dj)()

// var djInfo = hitesh.getInfo.bind(dj);
// djInfo(); 

hitesh.getInfo.call(dj)

