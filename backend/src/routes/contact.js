const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// POST /api/contact - Save contact form data
router.post('/', async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    // Basic validation
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: 'Nombre, email y mensaje son campos obligatorios'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato de email inválido'
      });
    }

    // Insert contact into database
    const [result] = await pool.execute(
      'INSERT INTO contacts (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)',
      [nombre, email, telefono || null, mensaje]
    );

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado exitosamente',
      contactId: result.insertId
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

module.exports = router;