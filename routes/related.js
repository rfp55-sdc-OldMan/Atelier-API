const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id/related', async (req, res) => {
  const id = req.params.product_id;
  try {
    const { rows } = await db.query('SELECT * FROM related WHERE id = $1', [id]);
    res.send(rows);
  } catch (err) {
    console.log(err.stack);
  }
});
