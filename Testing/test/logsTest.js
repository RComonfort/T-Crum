const expect  = require('chai').expect;
const request = require('request');
const URL = 'http://localhost:8080/api';

/**
 * Tests for Log model and controller.
 */

// Search a log in a list of logs
function findLog(logs, log){
    let found = false;
    logs.array.forEach(element => { // check that the object we tryed to insert is different to every object in the DB
        if(element.query === newLog.query && element.date_time === newLog.date_time && element.miembro_matricula === newLog.miembro_matricula){
            found = true;
            break;
        }     
    });

    return found;
}

describe('Log model', () => {

    // Create operation
    describe('Create: #create(query, date_time, miembro_matricula) | body: query, date_time, miembro_matricula', () => {
        
        // complete and correct parameters, expects successful insertion
        it('valid request', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/logs',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: 'INSERT INTO logs', date_time: '2018-03-27 19:31:00', miembro_matricula: 'A01329447'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(201); // if response is successful
                let newLog = JSON.parse(body);

                // Make get request to get the inserted object
                request.get( URL + 'logs/' + newLog.id, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    expect(newLog).to.deep.equal(JSON.parse(body)); // check that the object we created and the one obtain are equal
                });

                done();
            });
        });

        // null query parameter, expects unsuccessful insertion
        it('Null query', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/logs',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: null, date_time: '2018-03-27 19:31:00', miembro_matricula: 'A01329447'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newLog = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'logs', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findLog(list, newLog);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // null date_time parameter, expects unsuccessful insertion
        it('Null date_time', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/logs',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: 'INSERT INTO LOGS ...', date_time: '2018-03-27 19:31:00', miembro_matricula: null})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newLog = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'logs', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findLog(list, newLog);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // Incorrect miembro_matricula parameter, expects unsuccessful insertion
        it('Incorrect miembro matricula', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/logs',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: 'INSERT INTO LOGS ...', date_time: '2018-03-27 19:31:00', miembro_matricula: 'B01324568'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newLog = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'logs', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findLog(list, newLog);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // null miembro_matricula parameter, expects unsuccessful insertion
        it('Null miembro_matricula', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/logs',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: 'INSERT INTO LOGS ...', date_time: null, miembro_matricula: 'A01329447'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newLog = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'logs', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findLog(list, newLog);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });
    });

    //Retrieve opertion
    describe('Retrieve: #retrieve() | parameters: id', () => {

        // Retrieve an existent log , a successfull response conataining the log
        it('Retrieve existent log', (done) => {
            let log = { id: 1, query: 'INSERT INTO logs', date_time: '2017-03-27 19:31:00', miembro_matricula: 'A01329447' };

            request.get(URL + '/logs/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                expect(JSON.parse(body)).to.be.deep.equal(log);
            });
            done();
        });

        // Retrieve an existent log , a successfull response conataining the log
        it('Retrieve non existent log', (done) => {
            request.get(URL + '/logs/50', (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
            });
            done();
        });
    });
});
