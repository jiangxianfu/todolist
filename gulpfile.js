// 引入 gulp
var gulp = require("gulp");

// 引入组件
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var connect = require("gulp-connect");

// 将bower的库文件对应到指定位置
gulp.task("full_bower_components", function() {
    // js
    gulp.src("./bower_components/angular/angular.js")
        .pipe(gulp.dest("./app/js/"));
    
    gulp.src("./bower_components/angular-route/angular-route.js")
        .pipe(gulp.dest("./app/js/"));
 
    gulp.src("./bower_components/angular-bootstrap/ui-bootstrap.js")
        .pipe(gulp.dest("./app/js/"));
 

    gulp.src("./bower_components/jquery/dist/jquery.js")
        .pipe(gulp.dest("./app/js/"));  
    // css
    gulp.src("./bower_components/bootstrap/dist/css/*.css")
        .pipe(gulp.dest("./app/css/"));
    // fonts
    gulp.src("./bower_components/bootstrap/dist/fonts/*")
        .pipe(gulp.dest("./app/fonts/"));
});
// 检查脚本
gulp.task("lint", function() {
    gulp.src("./app/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});
// 编译Sass
gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css/"));
});

// 合并，压缩文件
gulp.task("minjs", function() {
    gulp.src("./scripts/*.js")
        .pipe(concat("all.js"))
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./app/js/"));
});
gulp.task("fulljs", function() {
    gulp.src("./scripts/*.js")
        .pipe(gulp.dest("./app/js/"));
});


gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
    gulp.src('./app/views/*.html')
        .pipe(connect.reload());
});
// 默认任务
gulp.task("default", function() {

    //初始化
    gulp.run("full_bower_components");
    //使用connect启动一个Web服务器
    connect.server({
        root: "app",
        livereload: true
    });
    // 监听文件变化
    gulp.watch("./scripts/*.js", function() {
        //gulp.run("minjs");
        gulp.run("fulljs");
    });
    gulp.watch("./scss/*.scss", function() {
        gulp.run("sass");
    });
    gulp.watch(["./app/*.html", "./app/views/*.html"], ["html"]);
});