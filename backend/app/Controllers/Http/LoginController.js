'use strict'
const User = use('App/Models/User')

class LoginController {

  async store({ request, response, auth }) {

    const { email, password } = await request.all()

    console.log(password)

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = LoginController
