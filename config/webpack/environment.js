const { environment } = require('@rails/webpacker')

module.exports = environment

// https://github.com/webpack-contrib/expose-loader/blob/master/README.md
environment.loaders.append('expose', {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: ['jquery', '$', 'jQuery']
        }
});

        // needed?
// https://www.vic-l.com/setup-bootstrap-in-rails-6-with-webpacker-for-development-and-production/
//const webpack = require('webpack')
//environment.plugins.append('Provide',
//  new webpack.ProvidePlugin({
//    $: 'jquery',
//    jQuery: 'jquery',
//    Popper: ['popper.js', 'default']
//  })
//)

module.exports = environment
