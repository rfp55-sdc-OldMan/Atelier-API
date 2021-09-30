const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const csvData = [];
fs.createReadStream(path.resolve(__dirname, 'assets', 'styles.csv'))
  .pipe(csv.parse({ maxRows: 10, headers: true }))
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    // console.log(row);
    csvData.push(row);
  })
  .on('end', () => {
    console.log(csvData);
  });
