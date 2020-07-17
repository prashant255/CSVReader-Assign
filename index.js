var Excel = require("exceljs");

var totalCost = '0'
var totalActualHrs = '0'
var status =[], priority=[], deadline=[], fixedCost=[], actualHrs=[]

async function myFunc() {
  var workbook = new Excel.Workbook();
  const worksheet = await workbook.csv.readFile("JavaProject (2) (1).csv");
    worksheet.eachRow(function(row, rowNumber) {
        if(rowNumber === 1)
            return
        else if(rowNumber === 2){
            totalCost = row.values[9];
            totalActualHrs = row.values[11];
        }
        else {
            status.push(row.values[1]);
            priority.push(row.values[2]);
            deadline.push(row.values[3]);
            fixedCost.push(row.values[9]); 
            actualHrs.push(row.values[11]);
        }
  });
    console.log("Status: " ,status)
    console.log("Priority: ", priority)     
    console.log("Deadline: " , deadline)
    console.log("Fixed Cost: " , fixedCost)
    console.log("Actual Hours: " , actualHrs)

    console.log();
    console.log("Total Fixed Cost: "+totalCost)
    console.log("total Actual hours: " + totalActualHrs);
}

myFunc().catch((e) => {
  console.error(e);
});