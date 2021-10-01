const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

// 'SELECT * FROM styles WHERE styles.productid = $1'
router.get('/:product_id/styles', async (req, res) => {
  const id = req.params.product_id;
  try {
    const { rows } = await db.query({
      text: 'select productid as product_id, styles.id as style_id, name, original_price, sale_price, default_style from styles limit 20;',
      // values: [id],
    });
    res.send(rows);
  } catch (err) {
    console.log(err.stack);
  }
});
