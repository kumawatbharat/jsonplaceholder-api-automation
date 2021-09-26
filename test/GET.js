const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET call of jsonplaceholder', () => {
  it('GET Call', async () => {
    const res = await chai.request('https://jsonplaceholder.typicode.com').get('/posts/1').set('Content-type', 'application/json; charset=UTF-8').send();
    expect(res.status).to.equal(200)
    expect(res.body.title).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(res.body.body).to.equal('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
    expect(res.body.userId).to.equal(1)
    expect(res.body.id).to.equal(1);
  })
})