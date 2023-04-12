// const { task } = = require("gulp");
const gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  connect = require("gulp-connect"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  zip = require("gulp-zip"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  imageminJpegtran = require("imagemin-jpegtran"),
  imageminPngquant = require("pngquant"),
  sass = require("sass");
// gulp plumber
//live server with reload
gulp.task("connect", async function () {
  connect.server({
    root: "./dist/",
    livereload: true,
    port: 8000,
    browser: "Google Chrome",
  });
});
gulp.task("css", function () {
  return gulp
    .src(["css/homepage.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("css task is done"))
    .pipe(connect.reload());
});
// chnage language task
gulp.task("ch-lang", async function () {
  return gulp
    .src(["css/homepage-rtl.scss"], { allowEmpty: true })
    .pipe(prefix("last 2 versions"))
    .pipe(rename("main-rtl.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("ch-lang task is done"));
  // .pipe(connect.reload());
});
// html task
gulp.task("html", async function () {
  return gulp
    .src(["./index.pug"])
    .pipe(pug({ pretty: true }))
    .pipe(concat("index.html"))
    .pipe(gulp.dest("dist"))
    .pipe(notify("html task is done"))
    .pipe(connect.reload());
});
// js tadk
gulp.task("js", async function () {
  return gulp
    .src("./javascript/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("js task is done"))
    .pipe(connect.reload());
});
// compress new images
gulp.task("images", async function () {
  return gulp
    .src("./images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./dist/images"));
});

// compress files
gulp.task("compress", async function () {
  return gulp
    .src("dist/**/*.*")
    .pipe(zip("website.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("compress task is done"));
});

gulp.task("watch", async function () {
  gulp.watch("./index.pug", gulp.series("html"));
  gulp.watch("./**/*scss", gulp.series("css"));
  gulp.watch("/css/homepage-rtl.css", gulp.series("ch-lang"));
  gulp.watch("./javascript/*js", gulp.series("js"));
  gulp.watch("./images/**/*.*", gulp.series("images"));
  gulp.watch("dist/**/*.*", gulp.series("compress"));
});
// defalut
gulp.task("default", gulp.parallel("watch"));
