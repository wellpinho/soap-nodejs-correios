require('dotenv').config()

const soap = require('soap')
const url = process.env.SOAP_URL

soap.createClient(url, (error, client) => {
  if (error) {
    return console.log(error)
  }

  console.log('ok')
  client.consultaCEP({
    cep: '21040360'
  }, (error, result) => {
    if (error) {
      return console.log(error)
    }

    return console.log(result)
  })
})