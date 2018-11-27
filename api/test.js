const express = require('express');
const router = express.Router();

const corsRouter = require('../action/cors/cors-router');

// 跨域设置
corsRouter(router);

router.get('/', (req, res) => {
    res.send('test home');
});

router.get('/test', (req, res) => {
    res.send(JSON.stringify({
        name: 'test-get-pelli',
        age: 18
    }));
});

router.post('/test', (req, res) => {
    res.send(JSON.stringify({
        name: 'test-post-pelli',
        age: 100
    }));
});

module.exports = router;