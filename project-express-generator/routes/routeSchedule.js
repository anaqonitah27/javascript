var express = require('express');
var router = express.Router();
var KpiUtilitySchedule = require('./../schedules/kpi-utility.schedules.test')

/* Schedule in table Kpi_Utility */
router.get('/insert-month', KpiUtilitySchedule.monthlyData);

module.exports = router;
