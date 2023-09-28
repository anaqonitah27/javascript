var moment = require("moment/moment");
var utilitykjyn = require("./../models/utilitykjyn");
var modelKpiUtility = require("./../models/utilitykjyn/kpi_utility");

exports.monthlyData = async (req, res) => {
  try {
    const response = {
      month: moment().format("YYYY-MM-DD HH:mm:ss"),
      create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      last_update: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    await utilitykjyn.insert(modelKpiUtility.createData(response));
    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
};
