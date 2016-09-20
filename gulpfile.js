const browserSync = require('browser-sync').create(),
  gulp = require('gulp'),

  angularDir = 'angularjs/',
  angularGlob = 'angularjs/**/*.*';

gulp.task('default', ['server']);

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: angularDir,
      index: 'todo.html'
    }
  });
  browserSync.watch(angularGlob).on(
    'change',
    browserSync.reload 
  );
}); 