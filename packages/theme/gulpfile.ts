import chalk from 'chalk'
import { src, dest, series, parallel } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import path from 'path'
const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(__dirname, 'theme-chalk')

const copyFont = function () { }
const copyThemeSource = function () { }
const buildTheme = function () {
    const sass = gulpSass(dartSass);
    const noElPrefixFile = /(index|base|display)/;

    return src(path.resolve(__dirname, 'src/*.scss'))
        .pipe(sass.sync())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(
            cleanCSS({}, details => {
                console.log(
                    `${chalk.cyan(details.name)}: ${chalk.yellow(
                        details.stats.originalSize / 1000
                    )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
                )
            })
        )
        .pipe(
            rename((path) => {
                if (!noElPrefixFile.test(path.basename)) {
                    path.basename = `fine-${path.basename}`
                }
            })
        )
        .pipe(dest(distFolder))
}
const copyThemeBundle = function () {
    return src(`${distFolder}/**`).pipe(dest(distBundle))
}

export const build = parallel(
    series(
        buildTheme,
        copyThemeBundle
    )
)

export default build