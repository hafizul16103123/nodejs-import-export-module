import User,{getName as printName,getAge as printAge} from './users/user'
const user = new User('Piyash',25)
console.log(user)
console.log(printName(user.name))
console.log(printAge(user.age))