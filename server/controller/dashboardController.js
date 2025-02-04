const Note = require('../models/Notes');
const mongoose = require('mongoose');

/**
 * GET Dashboard
 */

exports.dashboard = async (req, res) => {

    let perPage = 8;
    let page = req.query.page || 1;

    const locals = {
        title: "Dashboard",
        description: "JotNotes - A Note Taking App"
    };

    try {

        const notes = await Note.aggregate([
            { $sort: { createdAt: -1 }},
            { $match: { user: new mongoose.Types.ObjectId(req.user._id) }},
            { $project: {
                    title: { $substr: ['$title', 0, 30] },
                    body: { $substr: ['$body', 0, 200] },
                },
            }
        ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();
        
        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes, 
            layout: '../views/layouts/dashboard',
            current: page,
        });
    }
    catch (error) {
        console.log(error);
    }    
};

/**
 * GET 
 * View a Note
 */

exports.dashboardViewNote = async(req, res) => {
    const note = await Note.findById({ _id: req.params.id })
    .where({ user: req.user.id })
    .lean();

    if(note) {
        res.render('dashboard/view-note', {
            noteID: req.params.id,
            note,
            layout: '../views/layouts/dashboard'
        });
    }
    else {
        res.send("Oups! Sorry, Something went wrong")
    }
}

/**
 * PUT
 * Update a Note
 */

exports.dashboardUpdateNote = async(req, res) => {
        try {
            await Note.findOneAndUpdate (
                { _id: req.params.id },
                { title: req.body.title, body: req.body.body }
            ).where( { user: req.user.id });

            res.redirect('/dashboard');
        } 
        catch (error) {
            console.log(error);
        }
}

/**
 * DELETE
 * Delete a Note
 */

exports.dashboardDeleteNote = async (req, res) => {
    try {
        await Note.deleteOne({ _id: req.params.id})
        .where({ user: req.user.id});

        res.redirect('/dashboard');
    } 
    catch (error) {
        console.log(error);
    }
};

/**
 * GET
 * Add a Note
 */

exports.dashboardAddNote = async(req, res) => {
    res.render('dashboard/add', {
        layout: '../views/layouts/dashboard'
    });
};

/**
 * POST
 * Submit a Note
 */

exports.dashboardSubmitNote = async(req, res) => {
    try {
        req.body.user = req.user.id;
        await Note.create(req.body);
        res.redirect('/dashboard');
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * GET
 * Search a Note
 */

exports.dashboardSearch = async(req, res) => {
    try {
        res.render('dashboard/search', {
            searchResults: '',
            layout: '../views/layout/dashboard'
        })
    }
    catch(error) {
        console.log(error)
    }
}

/**
 * POST
 * Submit Search a Note
 */

exports.dashboardSubmitSearch = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerms;

        const searchResults = await Note.find({
            $or: [
                {title : {$regex: new RegExp(searchTerm, 'i')}},
                {body : {$regex: new RegExp(searchTerm, 'i')}},
            ]
        }).where( { user: req.user.id });

        res.render('dashboard/search', {
            searchResults,
            layout: '../views/layouts/dashboard'
        })
    }
    catch (error) {
        console.log(error);
    }
}
