const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: '35.202.245.48',
  database: 'demo_catastro',
  password: 'buenaventura2023',
  port: 5432,
});

app.post('/insertar', async (req, res) => {
  try {
    const { dato1, dato2 } = req.body;
    const result = await pool.query('INSERT INTO marcas (t_id_lc_predio, numero_predial) VALUES ($1, $2)', [dato1, dato2]);
    res.json({ success: true, message: 'Datos insertados correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
