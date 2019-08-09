import request from 'supertest'
import app from '../app'

describe('Probar nuestro mini servidor de express', () => {
  test('Debe responder al método GET', done => {
    request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
