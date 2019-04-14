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
    del([
        // 这里我们使用一个通配模式来匹配 `js-vue-ui` 文件夹中的所有东西
        `${remoteDir}/**/*`
        // 我们不希望删掉这个文件，所以我们取反这个匹配模式
        // '!dist/mobile/deploy.json'
    ]);
});

gulp.task('default', gulp.series('deleteFile', 'copy', () => {
  // Do something after a, b, and c are finished.
}));
