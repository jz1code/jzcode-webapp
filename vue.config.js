const path = require("path")

var oj_routes = require('./src/router/oj-routes.json')

// routes.forEach(function (route) {
//     if (!route.redirect) {
//         entry[route.name] = `./src/views/${route.view}.jsx`;
//     }
// });
pages = {
    admin: {
        entry: 'src/pages/admin/index.js',
        template: 'public/index.html',
        filename: 'admin.html'
    }
}
oj_routes.forEach(route => {
    pages[route.name] = {
        entry: 'src/pages/oj/'+ route.view + '.js',
        template: 'public/index.html',
        filename: route.name + '.html'
    }
});

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: true,
    pages: pages,
    devServer: {
        open: true,
        host: '0.0.0.0',
        https: false,
        overlay: {
            warning: false,
            error: true
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081',
                ws: false,
                secure: false,
                pathRewrite: {
                    '^/api*': ''
                }
            }
        }
    }
}


