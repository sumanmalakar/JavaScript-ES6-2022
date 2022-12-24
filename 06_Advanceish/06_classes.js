class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  login(){
    return "You are logged in";
  }
}

class subAdmin extends User{
  getAdminInfo(){
    return "I am subAdmin";
  }
}


module.exports = User;

// const rock = new User("rock", "rock@gmail.com")

// console.log(rock.getInfo());
// rock.enrollCourse("React Bootcamp")
// console.log(rock.getCourseList())
// console.log(rock.courseList)


const tom = new subAdmin("suman","suman@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login())

console.log(tom.getInfo())