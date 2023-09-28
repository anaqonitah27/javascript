var table = "kpi_utility";

exports.findAllData = () => {
  const query = `SELECT * FROM ${table}`;
  return query;
};

exports.createData = (body) => {
  const query = `INSERT INTO ${table} 
    VALUES(
      null, 
      '${body.month}',
      0, 0, 0, 0, 0,
      '${body.create_date}',
      '${body.last_update}'
    )`;
  return query;
}
