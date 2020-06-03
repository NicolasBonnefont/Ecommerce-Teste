'use strict'

const User = use('App/Models/User')

class UserController {
  async store({request, response}){

   try{
    const data = request.all()

    const user = await User.create(data)

    return user

   }
   catch(err){

    return response.status(200).send({error: { message: 'Algo não deu certo!' }, err } )

   }

  }
}
module.exports = UserController
