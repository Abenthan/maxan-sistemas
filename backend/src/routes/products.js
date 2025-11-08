const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET /api/products - Retrieve all products
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, nombre, categoria, descripcion, precio, imagenURL FROM products ORDER BY fecha_creacion DESC'
    );

    res.json({
      success: true,
      products: rows
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// GET /api/products/:id - Retrieve single product
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.execute(
      'SELECT id, nombre, categoria, descripcion, precio, imagenURL FROM products WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }

    res.json({
      success: true,
      product: rows[0]
    });

  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

module.exports = router;