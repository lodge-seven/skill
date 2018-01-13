/* 
    小七批量简化代码任务:
    1 使用一个命令做到；文件合并之后压缩检查文件有没有报错
    2 再懒一点，文件变动自动执行代码，不用自己去整


    scss需要下载ruby，用ruby的下载工具gem来安装sass compress还是什么
    ruby安装不对下载镜像时可能出现ssl错误，这个可以去掉https为http来下载镜像
*/
module.exports = function(grunt) {
    console.log('hi~');
    var sassStyle = 'expanded';
    // 1 grunt的一些配置参数 不能放最上面 虽然是预处理了 但是预处理是给值赋予undefined
    var gruntConfig = { pkg: grunt.file.readJSON('package.json') }
    
    // 2.1 sass解析成css：配置grunt-contrib-sass插件所需参数sass
    var sassConfig = {}; 
    sassConfig.output = {
        options: { style: sassStyle },
        files: { './style.css': './scss/style.scss' }
    };

    // 2.2 合并两个文件：配置grunt-contrib-concat参数
    var concatConfig = {};
    concatConfig.options = { separator: ' ' }; // 合并两个文件用空格进行分割
    concatConfig.dist = { 
        src: ['./src/plugin.js', './src/plugin2.js'],
        dest: './src/global.js'
    };

    // 2.3 检查文件：配置grunt-contrib-jshint参数
    var jshintConfig = {};
    jshintConfig.all = ['./src/global.js'];

    // 2.4 压缩文件：配置grunt-contrib-uglify参数
    var uglifyConfig = {};
    uglifyConfig.compressjs = {
        files: { './src/global.min.js': ['./src/global.js'] }
    };

    // 2.5 监听文件变动：配置grunt-contrib-watch参数
    var watchConfig = {};
	// 这里是脚本的配置，意思是只要这两个文件变动，就执行合并检查和压缩
    watchConfig.script = {
        files: ['./src/plugin.js', './src/plugin2.js'],
        tasks: ['concat', 'jshint', 'uglify']
    };
    watchConfig.sass = {
        files: ['./scss/style.scss'],
        tasks: ['sass']
    };
    // 监听三个文件，如果变动，自动刷新
    watchConfig.livereload = {
        options: { livereload: '<%= connect.options.livereload %>' },
        files: [ '**/*.html', '**/*.css', 'js/global.min.js' ]
    };

    // 2.6 建立本地服务器：配置grunt-contrib-connect参数
    var connectConfig = {};
    connectConfig.options = {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: 'localhost',
    };
    connectConfig.server = {
        port: 9001,
        base: './'
    }

    // 2.7 通过postcss中插件加工你的css：配置grunt-postcss参数
    var postcssConfig = {};
    // 配置postcss所需插件
    /* 
        postcss常用插件
        autoprefixer（处理浏览器私有前缀）
        cssnext（css未来的语法）
        precss（Sass） 
        processors: [ require('autoprefixer')(), require('precss')() ]
    */
    postcssConfig.options = {
        map: false, // 目前不用map，又没有压缩
        processors: [ require('autoprefixer')()]
    };
    // 设置源文件和用postcss编译后的文件
    postcssConfig.dist = {
        src: './new_profile/css/*.css'
    };

    // 3 加入到grunt配置参数中
    gruntConfig.sass = sassConfig;
    gruntConfig.concat = concatConfig;
    gruntConfig.jshint = jshintConfig;
    gruntConfig.uglify = uglifyConfig;
    gruntConfig.watch = watchConfig;
    gruntConfig.connect = connectConfig;
    gruntConfig.postcss = postcssConfig;
    // console.log(gruntConfig)

    // 4 初始化参数配置    
    grunt.initConfig(gruntConfig);

    // 5 加载依赖
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-postcss');
    // 6 注册任务
    /* 
        第一个参数是任务命名，第二个参数是调用的参数 
    */
    grunt.registerTask('outputcss', ['sass']);
    grunt.registerTask('concatjs', ['concat']);
    grunt.registerTask('compressjs', ['concat', 'uglify', 'jshint']);
    // 终极任务：之前的所有操作执行一遍，之后连接到本地服务器，实时监听文件变化
    grunt.registerTask('watchit', ['concat', 'jshint', 'uglify', 'connect', 'watch']);
	grunt.registerTask('lq-css', ['connect', 'watch']);
    grunt.registerTask('postCss', ['postcss']);
    grunt.registerTask('default');
}

// 调用sass相关参数 这里找不到方法 是要死了哦
var sassTask = function(grunt) {
    var sassConfig = {}; 
    sassConfig.output = {
        option: { style: sassStyle},
        file: { './style.css': './scss/style.scss' }
    };
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        sass: sassConfig
    }
    return gruntConfig;
}