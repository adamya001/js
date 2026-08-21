class User{
    constructor(username){
        this.username = this.username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

// const adam = new User("adamya")
// console.log(adam.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iPhone = new Teacher("iphone", "i@phone.com")
console.log(iPhone.createId())