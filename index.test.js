const request = require('supertest');
const app = require('./index');

describe('GET /api/status', () => {
  it('should return 200 OK and correct message', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
    expect(res.body).toHaveProperty('message', 'CI/CD pipeline is working!');
  });
});
