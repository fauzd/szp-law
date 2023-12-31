const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const svgSprite = require("gulp-svg-sprite");
const include = require("gulp-include");

function pages() {
  return src("app/pages/*.html")
    .pipe(
      include({
        includePaths: "app/components",
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function fonts() {
  return src("app/fonts/src/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"));
}

function sprite() {
  return src("app/images/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest("app/images/"));
}

function images() {
  return src(["app/images/src/*.*", "!app/images/src/*.svg"])
    .pipe(newer("app/images"))
    .pipe(avif({ quality: 80 }))

    .pipe(src("app/images/src/*.*"))
    .pipe(newer("app/images"))
    .pipe(webp({ quality: 80 }))

    .pipe(src("app/images/src/*.*"))
    .pipe(newer("app/images"))
    .pipe(imagemin([]))

    .pipe(dest("app/images"));
}

function scripts() {
  return (
    src([
      "node_modules/swiper/swiper-bundle.min.js",
      "node_modules/vivus/dist/vivus.js",
      "app/js/main.js",
      "app/js/animations.js",
    ])
      .pipe(concat("main.min.js"))
      // .pipe(uglify())
      .pipe(dest("app/js"))
      .pipe(browserSync.stream())
  );
}

function styles() {
  return src([
    "app/scss/style.scss",
    "app/scss/about.scss",
    "app/scss/practice.scss",
    "app/scss/services.scss",
    "app/scss/services-details.scss",
    "app/scss/contacts.scss",
    "app/scss/lawyer-details.scss",
    "app/scss/lawyers-main.scss",
    "app/scss/blog-post.scss",
    "app/scss/blog.scss",
    "app/scss/policy.scss",
  ])
    .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function swiperCSS() {
  return src("node_modules/swiper/swiper-bundle.min.css").pipe(dest("app/css"));
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    browser: "firefox",
  });
  watch(["app/scss/*.scss"], styles);
  watch(["app/images/src"], images);
  watch(["app/js/main.js", "app/js/animations.js"], scripts);
  watch(["app/components/*", "app/pages/*"], pages);
  watch(["app/*.html"]).on("change", browserSync.reload);
}

function cleanDist() {
  return src("dist").pipe(clean());
}

function building() {
  return src(
    [
      "app/css/*.*",
      "app/images/*.*",
      // "!app/images/*.svg",
      // "!app/images/stack",
      // "app/images/sprite.svg",
      "app/fonts/*.*",
      "app/js/main.min.js",
      "app/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

exports.swiperCSS = swiperCSS;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.pages = pages;
exports.building = building;
exports.sprite = sprite;
exports.scripts = scripts;
exports.watching = watching;

exports.build = series(swiperCSS, styles, scripts, pages, cleanDist, building);
exports.default = parallel(swiperCSS, styles, scripts, pages, watching);
