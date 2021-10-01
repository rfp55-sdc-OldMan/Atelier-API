const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/:product_id/styles', async (req, res) => {
  const id = req.params.product_id;
  const photos = "json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.url))";
  const text = `SELECT styles.id, name, original_price, sale_price, default_style, ${photos} FROM styles LEFT JOIN photos ON styles.id = photos.styleid WHERE styles.productid = $1 GROUP BY styles.id LIMIT 5`;
  const values = [id];

  try {
    const { rows } = await db.query(text, values);
    res.send(rows);
  } catch (err) {
    console.log(err.stack);
  }
});

// layout of each styles object
// top level: product_id: string id, results: []

// inside results array, each object contains:
// style_id,
// name,
// original_price,
// sale_price,
// default_style,
// photos: [] an array of objects, each object contains a thumbnail_url and a url
// skus: {} an object of objects
// each inner sku object contains: sku_num: {quantity: 3, size: xs}
