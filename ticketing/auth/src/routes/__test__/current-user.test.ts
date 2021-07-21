import { currentUser } from './../../middlewares/current-user';
import request from 'supertest'
import { app } from '../../app'

it('response with the details of the current users', async () => {
 
  const cookie = await global.signin()
  expect(201)

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200)

  expect(response.body.currentUser.email).toEqual('test@test.com')

})