const {readFile, writeFile} = require('fs').promises;

const start = async() => {
    try{
        const first = await readFile('./content/subfolder/first.txt', 'utf8');
        const second = await readFile('./content/subfolder/second.txt', 'utf8');
        await writeFile(
            './content/result-mind-granade.txt',
            `This is fucking hard: ${first}, ${second}\n`,
            {flag: "a"}
        )
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
}

start();