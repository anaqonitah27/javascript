var table = "kpi_utility";

exports.findAllData = () => {
    const query = `SELECT * FROM ${table}`
    return query;
  };