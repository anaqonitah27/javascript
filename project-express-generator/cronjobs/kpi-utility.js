const KpiUtilitySchedule = require("./../schedules/kpi-utility.schedules");

exports.jobKpiUtility = (cron) => {
    cron.schedule('59 16 * * *', () => {
        KpiUtilitySchedule.monthlyData()
    },{
        schedule: true,
        timezone: "Asia/Jakarta"
    })
}