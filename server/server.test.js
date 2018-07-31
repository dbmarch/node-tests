const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', ()=> {

    describe ('Main', () => {
        it ('should return hello world response', (done) => {
            request(app)
               .get("/")
               .expect(200)
               .expect('Hello World!')
               .end(done);
        });
        
        it ('should return page not found', (done) => {
            request(app)
               .get("/empty")
               .expect(404)
               .expect((res) => {
                  expect(res.body).toInclude({
                    error: 'Page not found'
                  });
               })
               .end(done);
        });
    });
    
    describe ('/users', () => {
        it ('should verify a name in a user array exists', (done) => {
            request(app)
               .get("/users")
               .expect(200)
               .expect((res) => {
                  expect(res.body).toInclude({
                    name: 'Dave', age: 50
                  });
               })
               .end(done);
        });
    })
    
    })
    