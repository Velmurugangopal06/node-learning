const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const headers = req.headers;

    if(url === '/' && method === 'GET') {
        res.setHeader('content-type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node - Home Page</title></head>');
        res.write('<body>');
        res.write('<div>');
        res.write('<form action="create-user" method="POST">');
        res.write('<input name="username" type="text" />');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</ul>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
        
    } else if (url === '/users' && method === 'GET') {
        res.setHeader('content-type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Node - User List</title></head>');
        res.write('<body>');
        res.write('<div>');
        res.write('<ul>');
        res.write('<li> User 1 </li>');
        res.write('<li> User 2 </li>');
        res.write('<li> User 3 </li>');
        res.write('</ul>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log("USername - ", username);

            res.statusCode = 302;
            res.setHeader('location', '/');
            res.end();
        })
    }
}

module.exports = requestHandler;