/**
 * GET Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "JotNote",
        description: "JotNotes - A Note Taking App"
    }
    res.render('index', {
        locals, 
        layout: '../views/layouts/front_page'
    });
};

/**
 * GET About
 */

exports.about = async (req, res) => {
    const locals = {
        title: "About JotNote",
        description: "JotNotes - A Note Taking App"
    }
    res.render('about', locals);
};