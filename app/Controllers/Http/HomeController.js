'use strict'

const Logger = use('Logger')
const Config = use('Config')

class HomeController {
  async index ({ request }) {
    // Log request
    Logger.info('Home request: %j', {
      url: request.url()
    })

    return {
      name: Config.get('app.name'),
      version: Config.get('app.version')
    }
  }
}

module.exports = HomeController
