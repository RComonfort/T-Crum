const expect  = require('chai').expect;
const request = require('request');
const URL = 'http://localhost:8000/api';

/**
 * Tests for Log model and controller.
 */

// Search a log in a list of logs
function findUserStory(user_stories, user_story){
    let found = false;
    user_stories.array.forEach(element => { // check that the object we tryed to insert is different to every object in the DB
        if(element.weight === user_story.weight 
            && element.scrum_board_status === user_story.scrum_board_status
            && element.description === user_story.description
            && element.priority === user_story.priority
            && element.sprint_id === user_story.sprint_id    
            && element.project_id=== user_story.project_id){
            found = true;
            break;
        }     
    });

    return found;
}

describe('User_story model', () => {

    // Create operation
    describe('Create: #create(weight, scrum_board_status, description, priority, sprint_id, project_id) | body: weight, scrum_board_status, description, priority, sprint_id, project_id', () => {
        
        // complete and correct parameters, expects successful insertion
        it('valid request', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: '1', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful
                let newUser_story = JSON.parse(body);

                // Make get request to get the inserted object
                request.get( URL + 'user-stories/' + newUser_story.id, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    expect(newUser_story).to.deep.equal(JSON.parse(body)); // check that the object we created and the one obtain are equal
                });

                done();
            });
        });

        // null weight parameter, expects unsuccessful insertion
        it('Null weight', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: null, scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: '1', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user_stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // null scrum_board_status, expects unsuccessful insertion
        it('Null scrum_board_status', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: null, description: 'This is a description', priority: '2', sprint_id: '1', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // null description, expects unsuccessful insertion
        it('Null description', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/description',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: null, priority: '2', sprint_id: '1', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findLog(list, newUser_story);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });


        // null priority, expects unsuccessful insertion
        it('Null priority', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: null, sprint_id: '1', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });


        // null sprint_id, expects unsuccessful insertion
        it('Null sprint_id', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: null, project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // Incorrect sprint_id parameter, expects unsuccessful insertion
        it('Incorrect sprint_id', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: 'one', project_id: '1'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // null project_id, expects unsuccessful insertion
        it('Null project_id', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: '1', project_id: null})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        // Incorrect project_id parameter, expects unsuccessful insertion
        it('Incorrect project_id', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ weight: '2', scrum_board_status: '1', description: 'This is a description', priority: '2', sprint_id: '1', project_id: 'one'})
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newUser_story = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + 'user-stories', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findUserStory(list, newUser_story);

                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });


    });

    //Retrieve opertion
    describe('Retrieve: #retrieve() | parameters: id', () => {

        // Retrieve an existent user_story , a successfull response conataining the user_story
        it('Retrieve existent user_story', (done) => {
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
