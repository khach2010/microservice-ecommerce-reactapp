import { Password } from './../../services/password';
import request from "supertest";
import { app } from '../../app'

it('fails when an email does not exist is supplied', async () => {
  await request(app) 
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
  expect(400)
})

it('fails when the incorrect password is applied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    expect(201)

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'sdjhadjk'
    })
    expect(400)
})

it('response with a cookie when signin with valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    expect(201)

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    expect(200)
  expect(response.get('Set-Cookie')).toBeDefined()
})