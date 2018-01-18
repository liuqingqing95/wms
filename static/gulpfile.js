var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var babel = require("gulp-babel");
var prefix = require("gulp-autoprefixer"); //css新属性加前缀
var rev = require('gulp-rev-append');
var pump = require('pump');
var replace = require('gulp-replace');

//错误处理
function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}


//单个js
gulp.task('minifyjs', function() {
    gulp.src('js/source/*.js')
		.pipe(babel())
		/*.pipe(uglify({
			mangle: true
		}))*///发布时进行压缩
		.on('error', swallowError) // 对task添加错误捕捉事件        
		.pipe(gulp.dest('js/build')); //输出
    gulp.src('js/source/**/*.js')
		.pipe(babel())
		/*.pipe(uglify({
			mangle: true
		}))*///发布时进行压缩
		.on('error', swallowError) // 对task添加错误捕捉事件        
		.pipe(gulp.dest('js/build')) //输出
});

//less定时任务
gulp.task('testLess', function() {
    gulp.src(['css/less/**/*.less'])
        .pipe(less())
        .pipe(prefix(["last 2 versions", "ie 9"], {
            cascade: true
        }))
        .pipe(cleanCss({rebase:false}))
        .pipe(gulp.dest('css/build'));

});

gulp.task('testWatch', function() {
    //先把所有的执行一下
    gulp.start('minifyjs','testLess','testRev');
    //当所有less文件发生改变时，调用testLess任务
    gulp.watch(['css/less/**/*.less'], ['testLess','testRev']);
    //js修改调用minifyjs
    gulp.watch(['js/source/**/*.js','js/source/**/*.js'], ['minifyjs','testRev']);
});

gulp.task('testRev', function () {
    pump([
        gulp.src('../../webapp/WEB-INF/views/**/*.jsp'),
        replace('${ctxStatic }','../../../resources/static'),
        rev(),
        replace('../../../resources/static','${ctxStatic }'),
        gulp.dest('../../webapp/WEB-INF/views/')
    ])
});


//默认任务
gulp.task('default', function() {
    gulp.start('testWatch');
});


