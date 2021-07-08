//. Calculate the top 10 mutual funds based on year_5 returns
function topTen(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        let returnFunds = data[i]["returns"].year_5
        arr.push(returnFunds)
    }
    arr.sort(function (a, b) {
        return b -a;
    });
    let result = arr.slice(0, 11);
  let finalResult={};
  for(let j=0;j<10;j++){
  for(let i=0;i<data.length;i++){
      if(result[j]===data[i]["returns"].year_5) {
         finalResult[data[i].name]=data[i]["returns"].year_5 
      }
    }
  }
  return finalResult
}
module.exports = topTen;