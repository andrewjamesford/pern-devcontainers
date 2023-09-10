const express = require('express');
const router = express.Router();
const db = require("../db");

const getProducts = async () => {
    try {
        const results = await db.query(`SELECT * FROM product`);

        return results.rows;

    } catch (error) {
        throw Error(error);
    }
};

/* GET prouducts listing. */
router.get('/', async (req, res, next) => {
    try {
        const products = await getProducts();

        const responseResults = {
            products,
        };

        return res.json(responseResults);
    } catch (err) {
        next(err);
    }
});

module.exports = router;