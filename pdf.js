var page = require('webpage').create();

page.viewportSize = {
    width: 800,
    height: 600
};

page.paperSize = {
    format: 'Letter',
    orientation: 'portrait',
    border: '0.5in'
};

page.open('http://lalocespedes.github.io/', function () {

    page.render("lalocespedes.pdf");
    phantom.exit();

});
