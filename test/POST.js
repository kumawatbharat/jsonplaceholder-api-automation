const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('POST call of jsonplaceholder', () => {
  it('POST Call', async () => {
    const payload = {
      title: 'Demo Project',
      body: 'Sample project to showcase jsonplaceholder API Automation',
      userId: 1
    }
    const res = await chai.request('https://jsonplaceholder.typicode.com').post('/posts').set('Content-type', 'application/json; charset=UTF-8').send(payload);
    expect(res.status).to.equal(201)
    expect(res.body.title).to.equal(payload.title);
    expect(res.body.body).to.equal(payload.body)
    expect(res.body.userId).to.equal(payload.userId)
    expect(res.body).to.have.property('id')
  })
})