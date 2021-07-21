import { currentUser } from './../../middlewares/current-user';
import request from 'supertest'
import { app } from '../../app'

it('response with the details of the current users', async () => {
  const cookieAuthResponse = await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  const cookie = cookieAuthResponse.get('Set-Cookie')
  expect(201)

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200)

  expect(response.body.currentUser.email).toEqual('test@test.com')

})