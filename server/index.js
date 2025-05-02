const cors = require('cors');
const routes = require('../routes');
const { sequelize } = require('../database/models');
require('dotenv').config();

const app = express(); // 👈 DEFINICIÓN DE APP
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, async () => {
  console.log(✅ Servidor corriendo en http://localhost:${PORT});

  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a PostgreSQL');

    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas correctamente');

  } catch (err) {
    console.error('❌ Error conectando a la base de datos:');
    console.error(err.stack || err);
  }
});
