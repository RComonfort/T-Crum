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
		it ('null duration', (done) => {
			//Declare post request
			let postOptions = {
				url: URL + '/tasks',
				headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ duration: 5,name: 'Comprar churros', completed:  'true', user_story_id: 1})
			};
		});


	});

});