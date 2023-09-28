const kpiUtilityCronJobs = require('./kpi-utility')
const cron = require('node-cron');

exports.runScheduler = () => {
    kpiUtilityCronJobs.jobKpiUtility(cron);
}