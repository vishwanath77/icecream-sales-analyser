const data = require("./data/dataset");
const parseCSV = require("./parser/parseCSV");
const validateRecords = require("./services/validationService");
const generateReports = require("./services/reportService");
const calculateGrowth = require("./utils/growthCalculator");

const records = parseCSV(data);

const errors = validateRecords(records);

const reports = generateReports(records);

const growth = calculateGrowth(reports.revenueMap);


console.log("\n1. Total Store Sales");
console.log(reports.totalSales);


console.log("\n2. Month-wise Sales");

reports.monthSales.forEach((value,key)=>{
    console.log(key,"->",value);
});


console.log("\n4. Highest Revenue Item Each Month");

reports.revenueMap.forEach((items,month)=>{

    let topItem = "";
    let maxRevenue = 0;

    items.forEach((rev,item)=>{

        if(rev > maxRevenue){
            maxRevenue = rev;
            topItem = item;
        }

    });

    console.log(month,"->",topItem,maxRevenue);

});


console.log("\n5. Month-to-Month Growth");

growth.forEach(g=>{
    console.log(
        g.item,
        g.from,
        "->",
        g.to,
        g.growth + "%"
    );
});


console.log("\n6. Validation Errors");

console.log(errors);