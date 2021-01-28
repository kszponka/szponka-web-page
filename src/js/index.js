import '../scss/main.scss';

console.log('HELLO 🚀')

const urlList = [];
// pushed = myFish.push("bęben", "lew");

fetch('https://api.github.com/repos/kszponka/szponka-web-page/commits')
    .then(res => res.json())
    .then(res => {
        // console.log(res);
        const container = document.querySelector('commits-grid--js');
        for (let commit of res) {
            const { url } = commit;
            urlList.push(url)
            // console.log(url);
        }
    })
// console.log(length(urlList));
console.log(Array.isArray(urlList));

// var i;
// for (i = 0; i < 5; i++) {
//   console.log(urlList[0]);
// }


for (dupa of urlList){
    console.log(dupa);
}

// urlList.prototype.forEach(url => {
//     console.log(url)
// })

    // urlList.slice(0, 4).forEach( url => {
    //     console.log(url)
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //         const {list} = res;
    //         console.log(list);
    //     })
    // })