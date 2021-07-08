//Calculate the average year_1 return rate per fund house

  function average_year1(data){
    let a = {};
    a = data.reduce((acc, cur) => {
      if (!acc[cur.fund_house]) acc[cur.fund_house] = [];
      else {
        if (cur.returns.year_1) acc[cur.fund_house].push(cur.returns.year_1);
      }
      return acc;
    }, {});
    console.log(a);
    const averagePerHouse = Object.entries(a).reduce((acc, cur) => {
      const sum = cur[1].reduce((acc, cur) => {
        return acc + cur;
      });
      acc[cur[0]] = (sum / cur[1].length).toFixed(2);
      return acc;
    }, {});
    return averagePerHouse;

  }


  module.exports=average_year1