// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
// 检查脚本
//gulp.task('lint', function() {
//    gulp.src('./js/*.js')
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'));
//});
//
//// 编译Sass
//gulp.task('sass', function() {
//    gulp.src('./scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./css'));
//});
//
//// 合并，压缩文件
//gulp.task('scripts', function() {
//    gulp.src('./js/*.js')
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./dist'))
//        .pipe(rename('all.min.js'))
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist'));
//});
//
//// 默认任务
//gulp.task('default', function(){
//    //gulp.run('lint', 'sass', 'scripts');
//
//    // 监听文件变化
//    gulp.watch('./js/*.js', function(){
//        gulp.run('lint', 'sass', 'scripts');
//    });
//});
//gulp.task('watch', function() {
//  livereload.listen();
//  gulp.watch('less/*.less', ['less']);
//});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function() {
  gulp.watch(['./app/*.html'], ['html']);
});

//使用connect启动一个Web服务器
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);