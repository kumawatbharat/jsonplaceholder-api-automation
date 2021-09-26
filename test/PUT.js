const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('PUT call of jsonplaceholder', () => {
  it('PUT Call', async () => {
    const payload = {
      id: 1,
      title: 'updating title',
      body: 'updating body',
      userId: 1,
    }
    const res = await chai.request('https://jsonplaceholder.typicode.com').put('/posts/1').set('Content-type', 'application/json; charset=UTF-8').send(payload);

    expect(res.status).to.equal(200)
    expect(res.body.title).to.equal(payload.title);
    expect(res.body.body).to.equal(payload.body)
    expect(res.body.userId).to.equal(payload.userId)
    expect(res.body.id).to.equal(payload.userId)
  })
})