const expect  = require('chai').expect;
const request = require('request');
const URL = 'http://localhost:8000/api';



// Search a Project in a list of projectss
function findProject(projects, project){
    let found = false;
    projects.array.forEach(element => { // check that the object we tryed to insert is different to every object in the DB
        if(element.vision === project.vision
                && element.name === project.name
                && element.begin_date === project.end_date
                && element.background === project.background
                && element.risks === project.risks
                && element.reach === project.reach){
            found = true;
            break;
        }     
    });

    return found;
}

/**
 * Tests for Project model and controller.
 */

describe('Projectos model', () => {

    // Create operation
    describe('Create: #create(vision, name, begin_date, end_date, background, risks, reach) | body: vision, name, begin_date, end_date, background, risks, reach', () => {
        
        // complete and correct parameters, expects successful insertion
        it('Valid request', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2018-01-01 01:01:01',
                    end_date: '2019-01-01 01:01:01',
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful
                let newProyecto = JSON.parse(body);

                // Make get request to get the inserted object
                request.get( URL + '/projects/' + newProyecto.id, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    expect(newProyecto).to.deep.equal(JSON.parse(body)); // check that the object we created and the one obtain are equal
                });

                done();
            });
        });

        //Invalid begin_date and end_date parameter, expects unsuccessful insertion
        it('Invalid begin_date and end_date', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2019-01-01 01:01:01', //Invalid begin
                    end_date: '2018-01-01 01:01:01', //Invalid end
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });
        
        //Null vision parameter, expects unsuccessful insertion
        it('Null vision', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: null,
                    name: 'Test name',
                    begin_date: '2018-01-01 01:01:01',
                    end_date: '2019-01-01 01:01:01',
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        //Null name parameter, expects unsuccessful insertion
        it('Null name', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: null,
                    begin_date: '2018-01-01 01:01:01',
                    end_date: '2019-01-01 01:01:01',
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        //Null background, expects unsuccessful insertion
        it('Null background', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2019-01-01 01:01:01',
                    end_date: '2018-01-01 01:01:01',
                    background: null,
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        //Null risks, expects unsuccessful insertion
        it('Null risks', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2019-01-01 01:01:01',
                    end_date: '2018-01-01 01:01:01',
                    background: 'Test background',
                    risks: null,
                    reach: 'Test reach'
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });

        //Null reach, expects unsuccessful insertion
        it('Null reach', (done) => {
            // Define POST request parameters and body
            let postOptions = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2019-01-01 01:01:01',
                    end_date: '2018-01-01 01:01:01',
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: null
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
                let newProject = postOptions.body;

                // Make get request to check that the object was not inserted
                request.get( URL + '/projects', (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    
                    let list = JSON.parse(body);
                    let found = findProject(list, newProyecto);
                    expect(found).to.be.false; // check that no coincidence is found
                });

                done();
            });
        });
    });

    //Retrieve opertion
    describe('Retrieve: #retrieve() | parameters: id', () => {

        // Retrieve an existent project, a successfull response conataining the project
        it('Retrieve existent project', (done) => {
            let project = { 
                id: 1, 
                vision: 'Test vision',
                name: 'Test name',
                begin_date: '2018-01-01 01:01:01',
                end_date: '2019-01-01 01:01:01',
                background: 'Test background',
                risks: 'Test risks',
                reach: 'Test reach'
            };

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                expect(JSON.parse(body)).to.be.deep.equal(project);
            });
            done();
        });

        // Retrieve a non-existent project , an unsuccessfull response
        it('Retrieve non existent project', (done) => {
            request.get(URL + '/projects/0', (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); // response should be error 400
            });
            done();
        });
    });

    //Update opertion
    describe('Update: #retrieve(vision, name, begin_date, end_date, background, risks, reach) | parameters: id, body: vision, name, begin_date, end_date, background, risks, reach', () => {

        // Update with wrong begin_date 
        it('Update with wrong dates', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.end_date, //Begin_date is now end_date
                    end_date: body.begin_date, //End_date is now begin_date
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });

        });

        // Update with no vision
        it('Update with no vision', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: null, //NUll vision 
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });
        });

        // Update with no name
        it('Update with no name', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: null, //NUll name
                    begin_date: body.end_date,
                    end_date: body.begin_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });
        });

        // Update with no background
        it('Update with no background', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.end_date,
                    end_date: body.begin_date,
                    background: null, //Null background
                    risks: body.risks,
                    reach: body.reach
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });
        });

        // Update with no risk
        it('Update with no risk', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.end_date,
                    end_date: body.begin_date,
                    background: body.background,
                    risks: null,//Null risk
                    reach: body.reach
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });
        });

        // Update with no reach
        it('Update with no risk', (done) => {

            request.get(URL + '/projects/1', (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful

                let oldProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.begin_date,
                    end_date: body.end_date,
                    background: body.background,
                    risks: body.risks,
                    reach: body.reach
                };

                let newProject = { 
                    id: body.id, 
                    vision: body.vision,
                    name: body.name,
                    begin_date: body.end_date,
                    end_date: body.begin_date,
                    background: body.background,
                    risks: body.risks,
                    reach: null
                };

                let putOptions = {
                    url: URL + '/projects',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newProject)
                };

                // Make put request
                request.put(putOptions, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(400); // response should be 400

                    // Make get request to check that the object was not inserted
                    request.get( URL + '/projects', (error, response, body) => {
                        expect(response.statusCode).to.be.equal(200); // if response is successful
                        
                        let list = JSON.parse(body);
                        let found1 = findProject(list, newProyecto);
                        expect(found1).to.be.false; // check that no coincidence is found

                        let found2 = findProject(list, oldProyecto);
                        expect(found2).to.be.true; // check that a coincidence is found
                    });

                    done();
                });
            });
        });
    });

    //Delete opertion
    describe('Delete: #delete() | parameters: id', () => {

        // Delete a non-existent project, response: unsuccesfull 
        it('Delete non existent project', (done) => {
            request.delete(URL + '/projects/0', (error, response, body) => {
                expect(response.statusCode).to.be.equal(400); //response should be unsuccesfull
            });
            done();
        });

        // Retrieve an existent project , request succesfull
        it('Retrieve non existent project', (done) => {
            // Define POST request parameters and body
            let postOptionsProject = {
                url: URL + '/projects',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    vision: 'Test vision',
                    name: 'Test name',
                    begin_date: '2018-01-01 01:01:01',
                    end_date: '2019-01-01 01:01:01',
                    background: 'Test background',
                    risks: 'Test risks',
                    reach: 'Test reach'
                })
            };

            // Define POST request parameters and body
            let postOptionsUser_stories = {
                url: URL + '/user-stories',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    weight: 1,
                    scrum_board_status: 1,
                    description: 'Test description',
                    priority: 1,
                    sprint_id: ,
                    project_id: 
                })
            };

            // Make post request
            request.post(postOptions, (error, response, body) => {
                expect(response.statusCode).to.be.equal(200); // if response is successful
                let newProyecto = JSON.parse(body);

                // Make get request to get the inserted object
                request.get( URL + '/projects/' + newProyecto.id, (error, response, body) => {
                    expect(response.statusCode).to.be.equal(200); // if response is successful
                    expect(newProyecto).to.deep.equal(JSON.parse(body)); // check that the object we created and the one obtain are equal
                });

                done();
            });
        });
    });
});
