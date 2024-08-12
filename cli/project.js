const name=require('./module')
console.log(name);
const https = require('https');
const fs=require('fs')
// https://api.github.com/users/USERNAME/repos

const options = {
    hostname: 'api.github.com',
    path: `/users/${name}/repos`,
    method: 'GET',
    headers: {
        'User-Agent': 'node.js'
    }
};


const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const repos = JSON.parse(data);
        repos.forEach(repo => {
            console.log(`Repo Name: ${repo.name}`);
            const fd = fs.openSync('./USERNAME.txt', 'a');
            fs.writeFileSync(fd,`Repo Name: ${repo.name}\n`)
            fs.closeSync(fd)
        });
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();



