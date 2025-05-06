const { User } = require('../database/models');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;

    // Validación simple
    if (!name || !email || !age || !comments) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const user = await User.create({ name, email, age, comments });
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Error al crear usuario:', err);
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age, comments } = req.body;

    if (!name || !email || !age || !comments) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await user.update({ name, email, age, comments });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};

