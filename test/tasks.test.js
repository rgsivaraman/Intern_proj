const request = require('supertest');
const app = require('../index');

describe('Task API', () => {
  it('should fetch all tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new task', async () => {
    const task = { title: 'Task 1', description: 'Description 1' };
    const response = await request(app).post('/tasks').send(task);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(task.title);
    expect(response.body.description).toBe(task.description);
  });

  // Add more tests for other API endpoints

});
