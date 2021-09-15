// setTimeout(() => {
//     console.log('Waited 1 second');
// }, 1000);

const fs = require('fs');

fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) =>{
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log('GOT DATA! :)');
        console.log(data);
    }
})