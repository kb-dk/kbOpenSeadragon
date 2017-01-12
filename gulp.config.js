// File to keep our configuration settings

module.exports = function() {
    return config = {

        // the js source code
        JSSRC: 'http-pub/js/*.js',
        // all the js to validate
        alljs: ['http-pub/js/*.js', './*.js'],
        //external libraries
        externalJSSRC: ['http-pub/3rdparty/openseadragon.js', 'http-pub/3rdparty/native.history.js'],
        // the CSS files
        CSSSRC: 'http-pub/css/*.css',
        // the images
        IMGSRC: 'http-pub/images/*',
        // HTML source files
        HTMLSRC: 'http-pub/*.html',
        // name of the production destination folder
        DEST: 'production',
        // development folder
        DEVDEST: 'development',
        // test folder
        TEST_IE_DEST: 'testIE',
        // dist folder
        DISTDEST: 'dist',
        // localhost URL
        LOCALHOSTURL: 'http://localhost:8002/',
        // local IP address
        IP_LOCALHOSTURL: 'http://192.168.109.128:8001/' // TO BE CHANGED BY DEVELOPERS

    };
};