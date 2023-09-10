const express = require('express');
const router = express.Router();
const db = require("../db");

const getCategories = async () => {
    try {
        const results = await db.query(`SELECT * FROM product_category`);

        return results.rows;

    } catch (error) {
        throw Error(error);
    }
};

/* GET prouduct categories. */
router.get('/', async (req, res, next) => {
    try {
        const categories = await getCategories();

        const responseResults = {
            categories,
        };

        return res.json(responseResults);
    } catch (err) {
        next(err);
    }
});

module.exports = router;