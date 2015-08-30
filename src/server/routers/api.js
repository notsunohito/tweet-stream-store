import express from 'express';

const router = express.Router();

router.get('/world', (req, res, next)=> {
    res.json({ greeting: 'Hello from API!' });
});

export default router;
