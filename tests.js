var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/* 
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/
  

testCase('Test GET /posts?userId=<id>&title=<title>', () => {
	// test for GET	/posts by valid 'userId' and 'title'
    it('it should GET post userId and title', (done) => {
	const userId = 1;
	const title = 'qui est esse';
	chai.request('https://jsonplaceholder.typicode.com')
	    .get('/posts?userId=' + userId + '&title=' + title)
	    .end((err, res) => {
	        res.should.have.status(200);
	        res.body[0].userId.should.be.a('number');
	        res.body[0].id.should.be.a('number');
	        res.body[0].title.should.be.a('string');
	        res.body[0].body.should.be.a('string');
	        res.body.should.to.be.a('array').to.have.length(1)
	        done();
       	    });
    });

	// test for GET	/posts with wrong 'userId' and 'title'
    it('it should GET empty array by entering wrong userId and title', (done) => {
	const userId = '101';
	const title = '11wrong title11';
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=' + userId + '&title=' + title)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.to.be.empty;
                done();
            });
    });
	
	// test for GET	/posts with wrong 'userId' and valid 'title'
    it('it should GET empty array by entering wrong userId and valid title', (done) => {
		const userId = '101';
		const title = 'qui est esse';
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=' + userId + '&title=' + title)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.to.be.empty;
                done();
            });
    });
	
	// test for GET	/posts with valid 'userId' and wrong 'title'
    it('it should GET empty array by entering wrong userId and valid title', (done) => {
        const userId = '1';
        const title = '11wrong title11';
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=' + userId + '&title=' + title)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.to.be.empty;
                done();
            });
    });
	
	// test for GET	/posts only with 'userId'
    it('it should GET array with some posts by userId', (done) => {
        const userId = '1';
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=' + userId)
            .end((err, res) => {
                res.should.have.status(200);
	        res.body[0].should.have.property('userId');
	        res.body[0].should.have.property('body');
	        res.body[0].should.have.property('id');
	        res.body[0].should.have.property('title');
	        res.body.should.to.be.a('array').is.not.empty;
                done();
            });
    });
	
	// test for GET	/posts without 'userId' ant 'title'
    it('it should GET empty array without userId and title', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=''&title='')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.to.be.empty;
                done();
	    });
    });
});
