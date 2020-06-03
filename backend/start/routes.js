'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')



Route.post('/login', 'LoginController.store')


Route.group(() => {

  Route.post('/usuario', 'UserController.store')

}).middleware('auth')


