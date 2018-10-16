let mix = require('laravel-mix').mix;

mix.js('app.js', 'core')
    .sass('app.scss', 'core')
    .setPublicPath('./');//by adding this line will solve stuck at the 95% emitting issue.

