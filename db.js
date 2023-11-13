const fs = require('fs');
const mysql = require('mysql');
const parseString = require('xml2js').parseString;
const ExcelJS = require('exceljs');

// const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'zondy',
  password: 'Varshith1',
  database: 'cbit'
});


connection.connect();
// Create a new workbook instance
const workbook = new ExcelJS.Workbook();

// Read the Excel file
workbook.xlsx.readFile('students.xlsx')
  .then(() => {
    // Get the first worksheet
    const worksheet = workbook.worksheets[0];

    // Create an array to hold the data
    let data = [];

    // Iterate over the rows in the worksheet
    worksheet.eachRow((row, rowNumber) => {
      data.push(row.values);
    });

    // Remove the first row
    data = data.slice(1);

    // Remove the first column from each row
    data = data.map(row => row.slice(1));

    console.log(data);
  })
  .catch(err => console.log(err));