import request from 'supertest'
import { app } from '../../app'

it('response with the details of the current users', async () => {
 
  const cookie = await global.signin()

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200)

  expect(response.body.currentUser.email).toEqual('test@test.com')

})

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});

// it('response with null if not authenticated', async () => {
//   const response = await request(app)
//   .get('/api/users/currentuser')
//   .send()
//   .expect(200)

//   expect(response.body.currentUser).toEqual(null)
// })
// it('responds with null if not authenticated', async () => {
//   const response = await request(app)
//     .get('/api/users/currentuser')
//     .send()
//     .expect(200);

//   expect(response.body.currentUser).toEqual(null);
