const http = require('http');
const port = 3000;

// let todos = new Object();
// todos['Task1'] = 'Dishes';
// todos['Task2'] = 'Laundry';
// todos['Task3'] = 'Pay Bills';

let todos = ['Dishes', 'Laundry', 'Pay Bills']

function handleMyRequest (request, response){
  if (request.url === '/todos') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(todos));
  } else if (request.url == '/bye') {
    response.end('Bye');
  } else {
    response.writeHead(404)
    response.end();
  }
}

const server = http.createServer(handleMyRequest)

console.log(`Server is running on port ${port}`)
server.listen(port);
