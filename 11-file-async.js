const {readFile, writeFile} = require('fs');
console.log('starting');
readFile('./content/subfolder/first.txt', 'utf8', (err, result) =>{
    if(err) {
        console.log(err);
        return;
    } 
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `${first}, ${second}`, (err, result) =>{
            if(err) {
                console.log(err);
                return;
            }
        })
    })
    console.log('done');
})
console.log('starting new task');