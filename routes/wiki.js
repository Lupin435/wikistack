const express = require('express');
const router = express.Router();
const {Page} = require('../models');
const views = require('../views');


router.get('/', async (req, res, next) => {
    try {
        const data = await Page.findAll();
        res.send(data);
    }
    catch(error) { next(error)}
})

router.get('/add', async (req, res, next) => {
    try {
        const data = await views.addPage();
        res.send(data);
    }
    catch (error) { next(error)}
})

router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {slug: req.params.slug}
        });
        res.send(views.wikiPage(page));

    } catch (error) { next(error)}
    });

router.post('/', async (req, res, next) => {

    const page = new Page({
        title: req.body.title,
        content: req.body.content,
    })

    try {
        await page.save();
        res.redirect('/');
        console.log(page.dataValues);
    } catch (error) { next(error)}
})



module.exports = router;
