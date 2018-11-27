const express = require('express');
const router = express.Router();

const corsRouter = require('../action/cors/cors-router');

// 跨域设置
corsRouter(router);

router.get('/', (req, res) => {
    res.send('API home');
});

module.exports = router;