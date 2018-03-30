const expect  = require('chai').expect;
const request = require('request');
const URL = 'http://localhost:8000/api';

/**
 * Tests for Task model and controller.
 */

 // Search a task in a list of task
function findTask(tasks, targetTask){
    let found = false;
	tasks.array.forEach(element => { // check that the object we tried to insert is different to every object in the DB
		
		if (element.duration === targetTask && element.name === targetTask.name 
			&& element.completed === targetTask.completed && element.user_story_id === targetTask.user_story_id)
		{
			found = true;
			break;
		}     
    });

    return found;
}

describe('Task model', () => {

	//Create Tests
	describe('Create: #create(duration, name, completed, user_story_id) | body: duration, name, completed, user_story_id', () => {

		//Correct insertion
		it ('valid request', (done) => {

			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ duration: 5,name: 'Comprar churros', completed:  'true', user_story_id: 1})
			};

			//Make request
			request.post (postOptions, (error, response, body) => {
				expect (response.statusCode).to.be.equal(200);

				let newTask = JSON.parse(body);

				//Make get request to get inserted object
				request.get (URL + '/tasks/' + newTask.id, (error, response, body) => {

					//Check that the newly inserted object has the same info as that sent
					expect (response.statusCode).to.be.equal(200);
					expect (newTask).to.deep.equal (JSON.parse(body));

				});

				done();
			});
		});

		//Unsuccesful insertion due to null duration parameter
		it ('Null duration', (done) => {
			
			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ duration: null,name: 'Terminar  test de tasks', completed:  'false', user_story_id: 1})
			};

			//Make post request
			request.post (postOptions, (error, response, body) => {
				//Request should fail
				expect (response.statusCode).to.be.equal(400);

				let newTask = postOptions.body;

				//Verify it wasn't inserted
				request.get (URL + '/tasks', (error, response, body) => {
					//Should be able to get all tasks
					expect (response.statusCode).to.be.equal(200);

					//the new task shouldn't be present
					let list = JSON.parse(body);
					let found = findTask(list, newTask);
					expect (found).to.be.false;
				});
			});

			done();
		});

		//Unsuccesful insertion due to null name parameter
		it ('Null name', (done) => {
				
			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ duration: 6,name: null, completed:  'false', user_story_id: 3})
			};

			//Make post request
			request.post (postOptions, (error, response, body) => {
				//Request should fail
				expect (response.statusCode).to.be.equal(400);

				let newTask = postOptions.body;

				//Verify it wasn't inserted
				request.get (URL + '/tasks', (error, response, body) => {
					//Should be able to get all tasks
					expect (response.statusCode).to.be.equal(200);

					//the new task shouldn't be present
					let list = JSON.parse(body);
					let found = findTask(list, newTask);
					expect (found).to.be.false;
				});
			});

			done();
		});

		//Unsuccesful insertion due to null completed parameter
		it ('Null completed', (done) => {
				
			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ duration: 6,name: "End task", completed:  null, user_story_id: 2})
			};

			//Make post request
			request.post (postOptions, (error, response, body) => {
				//Request should fail
				expect (response.statusCode).to.be.equal(400);

				let newTask = postOptions.body;

				//Verify it wasn't inserted
				request.get (URL + '/tasks', (error, response, body) => {
					//Should be able to get all tasks
					expect (response.statusCode).to.be.equal(200);

					//the new task shouldn't be present
					let list = JSON.parse(body);
					let found = findTask(list, newTask);
					expect (found).to.be.false;
				});
			});

			done();
		});


		//Unsuccesful insertion due to null user_story_id parameter
		it ('Null user_story_id', (done) => {
				
			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ duration: 6,name: 
				'Close repos' , completed:  'true', user_story_id: null})
			};

			//Make post request
			request.post (postOptions, (error, response, body) => {
				//Request should fail
				expect (response.statusCode).to.be.equal(400);

				let newTask = postOptions.body;

				//Verify it wasn't inserted
				request.get (URL + '/tasks', (error, response, body) => {
					//Should be able to get all tasks
					expect (response.statusCode).to.be.equal(200);

					//the new task shouldn't be present
					let list = JSON.parse(body);
					let found = findTask(list, newTask);
					expect (found).to.be.false;
				});
			});

			done();
		});

	});
});
