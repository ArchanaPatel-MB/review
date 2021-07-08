const mutualFunds = (data) => {


    if (data === 'undefind') return [];



    let mutualFund =data.reduce((accumulator,currentdata) =>{
        if (currentdata.fund_house in accumulator) {
            house = accumulator[currentdata.fund_house]
            if (currentdata.fund_type in house) {
                accumulator[currentdata.fund_house][currentdata.fund_type]++
            }
            else {
                accumulator[currentdata.fund_house][currentdata.fund_type]=1
               
            }
        }
        else {
            accumulator[currentdata.fund_house] = {}
            accumulator[currentdata.fund_house][currentdata.fund_type]=1
            
        }
      return accumulator
    },{})
    return mutualFund;
}

module.exports=mutualFunds