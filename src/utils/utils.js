const csvtojson = require("csvtojson");

const readCSV = async (PATH) => {
  try {
    return await csvtojson().fromFile(PATH);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  readCSV,
};
