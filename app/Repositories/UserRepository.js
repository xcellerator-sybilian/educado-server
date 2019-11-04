'use strict'

const { ioc } = require('@adonisjs/fold')

class UserRepository {

  constructor (user) {
    this.user = user
  }

  async create (requestBody) {
    let newUser = new this.user

    newUser.username = requestBody.username
    newUser.password = requestBody.password
    newUser.type = requestBody.type

    await newUser.save()

    return newUser
  }
}

ioc.singleton ('App/Repositories/UserRepository', function (app) {
  return new UserRepository(app.use('App/Models/User'))
})

module.exports = ioc.use('App/Repositories/UserRepository')
