const Router = require('express-promise-router');

const db = require('../db');

const router = Router();

module.exports = router;

router.get('/', async (req, res) => {
  // console.log(req.query);
  const page = req.query.page || 1;
  const count = req.query.count || 5;
  const offset = (page - 1) * count;
  try {
    const { rows } = await db.query('SELECT * FROM products OFFSET $1 ROWS LIMIT $2', [offset, count]);
    res.send(rows);
  } catch (err) {
    console.log(err.stack);
  }
});
