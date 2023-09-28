var moment = require("moment/moment");
var utilitykjyn = require("./../models/utilitykjyn")
var modelKpiUtility = require("./../models/utilitykjyn/kpi_utility")
var apiResponse = require('./../traits/api-response');

exports.monthlyData = async (req, res) => {
  try {
    const response = {
      month: moment().format("YYYY-MM-DD HH:mm:ss"),
      create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      last_update: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    await utilitykjyn.insert(
        modelKpiUtility.createData(response)
    );
    apiResponse.success(res, response, 200);
  }catch(e){
    apiResponse.errors(res, e.message, 500);
  }
};
