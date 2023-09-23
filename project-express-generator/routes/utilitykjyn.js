var express = require('express');
var router = express.Router();
var KpiUtilityController = require('../controllers/KpiUtilityController.js')

/* GET Data Kpi_Utility */
router.get('/test-data', KpiUtilityController.testData);
router.get('/kpi-utility', KpiUtilityController.getKpiUtility);

module.exports = router;
