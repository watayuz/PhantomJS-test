var page = require('webpage').create();

// width height
page.viewportSize = {
    width: 1024,
    height: 768
};

page.open('https://google.com/', function(status){
    console.log("Status : " + status);

    if (status === "success") {
        page.render('google.png');
    }
    phantom.exit();
});