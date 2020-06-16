const { environment } = require('@rails/webpacker')

module.exports = environment

environment.loaders.append('expose', {
    test: require.resolve('jquery'),
    use: [
        {
            loader: 'expose-loader',
            options: 'jQuery',
        },
        {
            loader: 'expose-loader',
            options: '$',
        },
    ],
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
