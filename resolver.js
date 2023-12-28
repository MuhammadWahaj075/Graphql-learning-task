import {quotes,users} from './fakeData.js'
import {randomBytes} from 'crypto'
const resolvers = {
    Query:{
       users:()=>users,
       user:(_,{id})=>users.find(user=>user.id == id),
       quotes:()=>quotes,
       iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur.id)
    },
    Mutation:{
      createDummyUser:(_,{newUser})=>{
             const id = randomBytes(5).toString("hex")
             const newUserData =  {
              id,
              ...newUser
          }
             users.push(newUserData)
            // return users.find(user=>user.id == id)
            return newUserData
        }
    }
}

export default resolvers