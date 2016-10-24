'use strict';

var page = require('webpage').create();
var url = "https://qiita.com";

page.viewportSize = {
    width: 1024,
    height: 768
};

// ID
// id="identity"
// PASSWORD
// id="password"

// settings
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;

page.open(url, function (status) {
    if (status === "success") {

        var id = document.getElementById('idenitty');
        var pw = document.getElementById('password');

        // do

        phantom.exit();
    }

});