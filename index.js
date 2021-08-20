// sprawdzanie czy istnieje
const {access} = require('fs').promises;
const {W_OK} = require('fs').constants;
const FILE_NAME = './src/basket.js';

(async () => {
    const fileExist = await access(FILE_NAME, W_OK)
    console.log(fileExist) // NIEDZIAla bo ma niedziałać. Nie sprawdzać czy plik istnieje. Bo po pewnym czasie przy próbie odczytu lub zapisu może już nie istnieć.
})()


// odczytywanie statystyk plików
// const {stat, readdir} = require('fs').promises;
// (async () => {
//     try {
//         const files = await readdir('./src');
//         for (const file of files) {
//             const fileStat = await stat(`./src/${file}`)
//             console.log(fileStat);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// })()

// odczytywanie zawartości folderów
// const {readdir} = require('fs').promises;
// (async () => {
//     try {
//         const files = await readdir('./src', {withFileTypes : true});
//         for (const file of files) {
//             console.log(file);
//         }
//
//     } catch (err) {
//         console.error(err);
//     }
// })()


// tworzenie i zapisywanie plików
// const {writeFile, readFile, appendFile} = require('fs').promises;
//
//
// (async ()=>{
//     try {
//         const data = await readFile('./data/hello.txt', 'utf8')
//         const lastValue = Number(data.split('\n')[data.split('\n').length - 1]);
//         console.log(lastValue)
//         await writeFile('./data/hello.txt', `\n${lastValue * 2}`, {flag: 'a'});
//     } catch (e) {
//         console.log('aaaa', e)
//     }
// })()


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