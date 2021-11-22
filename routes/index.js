
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Export and Import file .csv MongoDB and Node",
        version: "0.0.1"
    });
});

module.exports = router;
