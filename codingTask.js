const {createServer} = require('http');
const url=require('url')

const server = createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    const operation = parsedUrl.pathname.slice(1); 
    
    const query = parsedUrl.query;
    console.log(query);

    const a = Number(query.a);
    const b = Number(query.b);

    let result;

    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b !== 0) {
                result = a / b;
            } else {
                result = 'Cannot divide by zero';
            }
            break;
        default:
            result = 'Unknown operation';
            break;
    }

   
    res.write(result.toString())
    res.end();
});

server.listen(3001);
