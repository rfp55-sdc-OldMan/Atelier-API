const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id/related', async (req, res) => {
  const id = req.params.product_id;

  try {
    const { rows } = await db.query({
      text: 'SELECT related_product_id FROM related WHERE current_product_id = $1',
      values: [id],
      rowMode: 'array',
    });
    const processed = rows.map((row) => row[0]);
    res.send(processed);
  } catch (err) {
    console.log(err.stack);
  }
});
