var
    _ = require('lodash'),

    src         = './src',
    build       = './build',
    dist        = './dist'
;

var config = {
    $: (require('gulp-load-plugins'))(),

    clean: [build],

    banner: {
        src: [
            build+'/**/*.js',
            build+'/**/*.css'
        ],
        dest: build
    },

    dist: {
        src: build+'/**/*',
        dest: dist
    },

    script: {
        watch: src+'/js/**/*.js',
        entry: [
            src+'/js/quasar.js'
        ],
        dest: build+'/js',
        depsName: 'quasar-dependencies',
        deps: [
            'jquery/dist/jquery',
            'lodash/index',
            'vue/dist/vue',
            'fastclick/lib/fastclick',
            'quasar-semantic/semantic'
            //'touchswipe/index.js',
            //gsap
        ],
        webpack: {
            dev: {
                devtool: '#inline-source-map'
                //devtool: '#cheap-module-eval-source-map'
            },
            prod: {}
        }
    },

    style: {
        watch: src+'/style/**/*.scss',
        entry: [
            src+'/style/quasar.scss'
        ],
        dest: build+'/style',
        depsName: 'quasar-dependencies',
        deps: [
            'quasar-semantic/semantic'
        ],
        autoprefixer: {browsers: ['last 3 versions']}
    }
};

config.script.deps = _.map(config.script.deps, function(item) {
    if (item.indexOf('!') === 0) {
        return item.substr(1)+'.js';
    }
    return 'node_modules/'+item+'.js';
});
config.style.deps = _.map(config.style.deps, function(item) {
    if (item.indexOf('!') === 0) {
        return item.substr(1)+'.css';
    }
    return 'node_modules/'+item+'.css';
});

module.exports = config;