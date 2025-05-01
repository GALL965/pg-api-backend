const express = require('express');
const cors = require('cors');
const { sequelize } = require('../database/models');
const routes = require('../routes');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Aquí defines la base para las rutas
app.use('/api', routes); // rutas disponibles desde /api

// Levantar el servidor
app.listen(PORT, async () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);

  try {
    // Conexión a la base de datos
    await sequelize.authenticate();
    console.log('✅ Conectado a PostgreSQL');

    // Muy importante: Sincronizar las tablas si no existen
    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas correctamente');

  } catch (err) {
    console.error('❌ Error conectando a la base de datos:', err.message);
  }
});
