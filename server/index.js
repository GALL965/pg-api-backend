app.listen(PORT, async () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a PostgreSQL');

    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas correctamente');

  } catch (err) {
    console.error('❌ Error conectando a la base de datos:', err.message);
    console.error(err); // 👈 esto muestra todo el detalle en los logs de Render
  }
});
