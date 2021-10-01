const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id/styles', async (req, res) => {
  const id = req.params.product_id;
  try {
    const { rows } = await db.query('SELECT * FROM styles WHERE styles.productid = $1', [id]);
    res.send(rows);
  } catch (err) {
    console.log(err.stack);
  }
});
