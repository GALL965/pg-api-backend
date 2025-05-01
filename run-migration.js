const { sequelize } = require('./database/models');

sequelize.authenticate()
  .then(() => {
    console.log(' Conexión exitosa con PostgreSQL');
    return sequelize.sync({ force: false }); // Usa alter: true si quieres adaptar sin perder datos
  })
  .then(() => {
    console.log(' Migraciones ejecutadas correctamente');
    process.exit(0);
  })
  .catch(err => {
    console.error(' Error ejecutando migraciones:', err.message);
    process.exit(1);
  });
