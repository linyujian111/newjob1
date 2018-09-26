/* 
* @Author: Marte
* @Date:   2018-09-25 12:16:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-09-25 14:00:31
*/


    var gulp=require('gulp')  

    var cssmin= require('gulp-cssmin')

    gulp.task('cssmin',function(){

return 
    // 导入文件
    gulp .src ('../css/car.js')

    // 处理该文件——压缩css
    .pipe( cssmin( ) )

    // 处理该文件——导出路径
    .pipe(gulp.dest('./css/min') )

})

