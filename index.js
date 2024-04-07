const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    if (!!result) {return result.year;}
    else {return undefined;}
  }

const checkAnswer = superbowlWin(record);
console.log(checkAnswer)