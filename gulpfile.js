const gulp = require("gulp");
const del = require("del");

const remoteDir = '../www/js-vue-ui';
gulp.task('copy', () => gulp.src(
  [
    './dist/**'
  ]
).pipe(gulp.dest(remoteDir)));
/**
 * 删除文件
 */
gulp.task('deleteFile', () => {
  (async () => {
    const deletedPaths = await del([
      `${remoteDir}/**/*`
    ]);

    console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
  })();
});

gulp.task('default', gulp.series('deleteFile', 'copy', () => {
  // Do something after a, b, and c are finished.
}));
