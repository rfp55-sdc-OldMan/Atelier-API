const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id/styles', async (req, res) => {
  const id = req.params.product_id;

  const text = `SELECT
  product_id, json_agg(json_build_object(
    'style_id', style_id,
    'name', name,
    'original_price', original_price,
    'sale_price', sale_price,
    'default?', "default?",
    'photos',
    (SELECT json_agg(json_build_object(
        'thumbnail_url', thumbnail_url,
        'url', url
      )) FROM photos WHERE style_id = styles.style_id),
  'skus',
    (SELECT
        json_object_agg(id,
            json_build_object(
              'quantity', quantity,
              'size', size
            )
        )
      FROM skus
      WHERE style_id = styles.style_id
          GROUP by style_id)
  )) as results FROM styles
      WHERE styles.product_id = $1
        GROUP BY product_id`;
  const values = [id];

  try {
    const { rows } = await db.query(text, values);
    res.send(rows[0]);
  } catch (err) {
    console.log(err.stack);
  }
});
