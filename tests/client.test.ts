// tests/client.test.ts
import request from 'supertest';
import app from '../src/index';

describe('Client API', () => {
  it('should create a new client', async () => {
    const res = await request(app)
      .post('/clients')
      . send({
        name: 'Test Client',
        email: 'test@example.com',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});