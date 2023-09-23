const { utilKjyn } = require("./../models/utilitykjyn");
const { modelUtilityKjyn } = require("./../models/utilitykjyn/kpi_utility");
const { apiResponse } = require("./../traits/api-response");
const { QueryTypes } = require("sequelize");
const { connectUtilityKjyn } = require("./../config/connection");

exports.testData = async (req, res) => {
  const response = await connectUtilityKjyn.query(
    `SELECT 
        *
      FROM kpi_utility`,
    { type: QueryTypes.SELECT }
  );

  return res.json(response);
};

exports.getKpiUtility = async (req, res) => {
  try {
    const response = await utilKjyn.select(
        modelUtilityKjyn.findAllData()
    );
    
    apiResponse.success(res, response, 200);
  } catch (error) {
    apiResponse.error(res, error.message, 500);
  }
};
