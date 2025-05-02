const { User } = require('../database/models');

const postUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;

    if (!name || !email || !age || !comments) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newUser = await User.create({ name, email, age, comments });
    res.status(201).json(newUser);

  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

module.exports = {
  postUser,
  // ... otros controladores
};
