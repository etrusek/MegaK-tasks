// tworzenie i zapisywanie plików
const {writeFile, readFile, appendFile} = require('fs').promises;


(async ()=>{
    try {
        const data = await readFile('./data/hello.txt', 'utf8')
        const lastValue = Number(data.split('\n')[data.split('\n').length - 1]);
        console.log(lastValue)
        await writeFile('./data/hello.txt', `\n${lastValue * 2}`, {flag: 'a'});
    } catch (e) {
        console.log('aaaa', e)
    }
})()



// 3# sposób
// const dns = require('dns').promises;
// (async ()=>{
// try {
//     const data = await  dns.lookup('google.com');
//     console.log(data.address);
// } catch (e) {console.log('aaa', e)}
// })()
// wyszło216.58.215.78


// 2# sposób
// const dns = require('dns');
// const {promisify} = require('util');
//
// const dnsPromised = promisify(dns.lookup)
//
// dnsPromised('google.com').then(data => console.log(data.address)).catch(err => console.log('aaa',err))
// wyszło 216.58.215.78


// 1# sposób
// const dns = require('dns');
//
// dns.lookup('google.com', (err, data)=> {
//     if(err){
//         console.log('aaaa', err)
//     }    else {
//         console.log(data);
//     }
// })
// wyszło 216.58.215.78