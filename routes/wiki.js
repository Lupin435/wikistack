const express = require('express');
const router = express.Router();
const wikiData = require('../models');
const views = require('../views');


router.get('/', async (req, res, next) => {
    try {
        const data = await wikiData.Page.findAll();
        res.send(data);
    }
    catch(err) {
        console.err(err);
    }
})

router.get('/add', async (req, res, next) => {
    try {
        const data = await views.addPage();

        res.send(data);
    }
    catch(err) {
        console.err(err);
    }
})
    
router.post('/', async (req, res, next) => {
    try {
    const title = req.body.title;
    

    }


    catch(err) {
        console.err(err);
    }
})



module.exports = router;