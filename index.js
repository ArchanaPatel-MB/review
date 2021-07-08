const fetch = require('node-fetch');
const fs = require('fs');
const mutualFunds = require('./topTen');
const path = './writingfile/output'
const path2 = './writingfile/writeFiles'

fetch('https://api.kuvera.in/api/v3/funds.json')
    .then(res => res.json())
    .then((body) => {

        // console.log(body);

       



        const result = mutualFunds(body);
        console.log(result)
        // fs.writeFile(path, JSON.stringify(result), function (err) {
        //     if (err) return console.log(err)
        //     console.log('file is written')
        // })




    })

// fs.readFile(path2, 'utf8',function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     var content = JSON.parse(data)
  
//     // console.log(content);  
//     const result = mutualFunds(content);
//          console.log(result)
   
// });



    // Read the data from the file
    // 2. Calculate the number of mutual funds of each fund_type for each fund_house. 
    // 3. Write the result to a new file