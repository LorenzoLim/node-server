const http = require('http');
const port = 3000;

let todos = [
	{task: 'Laundry', status: false},
	{task: 'Dishes', status: true}
]

function handleMyRequest(request, response) {
	if (request.url === '/api/todos' && request.method === 'GET') {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		})
		response.end(JSON.stringify(todos));
	} else if (request.url === '/api/teapot') {
		response.writeHead('418')
		response.end('I`m A Teapot')
	} else if (request.url === '/api/todos' && request.method === 'POST') {
	  let body = ''
		request.on('data', (chunk) => {
	    console.log(`BODY: ${chunk}`);
	    body += chunk
	  });
    request.on('end', () => {
      todos.push(JSON.parse(body));
    });
		response.writeHead('200')
		response.end();
	} else {
		response.writeHead('404')
		response.end();
	}
}

const server = http.createServer(handleMyRequest);

console.log(`Server is running on port ${port}`);
server.listen(port);
