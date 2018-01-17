var path = require( 'path' ),
    SOURCE_DIR = 'app/assets/javascripts',
    mediaConfig = {},
    mediaBuilds = [ 'grid', 'models', 'views' ],
    webpack = require( 'webpack' );

mediaBuilds.forEach( function ( build ) {
    var path = SOURCE_DIR + '/media';
    mediaConfig[ build ] = './' + path + '/' + build + '.manifest.js';
} );

module.exports = {
    cache: true,
    watch: true,
    entry: mediaConfig,
    output: {
        path: path.join( __dirname, '../app/assets/javascripts' ),
        filename: 'media-[name].js'
    }
};
