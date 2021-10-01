const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id', async (req, res) => {
  const id = req.params.product_id;
  try {
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    res.send(rows[0]);
  } catch (err) {
    console.log(err.stack);
  }
});
