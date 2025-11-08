const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET /api/blog - Retrieve all blog posts
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, titulo, contenido, fecha_publicacion FROM blog ORDER BY fecha_publicacion DESC'
    );

    res.json({
      success: true,
      posts: rows
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// GET /api/blog/:id - Retrieve single blog post
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.execute(
      'SELECT id, titulo, contenido, fecha_publicacion FROM blog WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Artículo no encontrado'
      });
    }

    res.json({
      success: true,
      post: rows[0]
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

module.exports = router;