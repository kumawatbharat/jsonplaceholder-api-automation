const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('DELETE call of jsonplaceholder', () => {
  it('DELETE Call', async () => {
    const res = await chai.request('https://jsonplaceholder.typicode.com').delete('/posts/1').send();
    expect(res.status).to.equal(200)
  })
})