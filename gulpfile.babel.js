/**
 *
 *  Web Starter Kit
 *  Copyright 2016 Beuhner-Fry Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import gulp from 'gulp';
import gutil from 'gulp-util';
import del from 'del';
import runSequence from 'run-sequence';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';
import stylelint from 'stylelint';
import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssApply from 'postcss-apply';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomSelectors from 'postcss-custom-selectors';
import postcssNested from 'postcss-Nested';
import postcssCssVariables from 'postcss-css-variables';
import postcssSelectorNot from 'postcss-selector-not';
import postcssCalc from 'postcss-calc';
import postcssLogicalProps from 'postcss-logical-props';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssReporter from 'postcss-reporter';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const AUTOPREFIXER_BROWSERS = ['last 2 versions'];


// Compile everything and test
gulp.task('styles', () => {
  const PROCESSORS = [
    postcssImport({ glob: true }),
    stylelint,
    postcssEach,
    postcssApply,
    postcssSimpleVars,
    postcssCustomMedia,
    postcssCustomSelectors,
    postcssNested,
    postcssCssVariables,
    postcssSelectorNot,
    postcssCalc,
    postcssLogicalProps,
    postcssFlexbugsFixes,
    autoprefixer({browsers: AUTOPREFIXER_BROWSERS}),
    mqpacker,
    cssnano,
    postcssReporter({clearMessages: true})
  ];
// For best performance, don't add Sass partials to `gulp.src`
return gulp.src(['src/main/css/*.css'])
  .pipe($.sourcemaps.init())
  .pipe($.postcss(PROCESSORS)).on('error', gutil.log)
  .pipe($.sourcemaps.write('./'))
  .pipe(gulp.dest('resources/public/css'));
});

// Compile CSS
gulp.task('dist', () => {
  const PROCESSORS = [
    postcssImport({ glob: true }),
    postcssEach,
    postcssApply,
    postcssSimpleVars,
    postcssCustomMedia,
    postcssCustomSelectors,
    postcssNested,
    postcssCssVariables,
    postcssSelectorNot,
    postcssCalc,
    postcssLogicalProps,
    postcssFlexbugsFixes,
    autoprefixer({browsers: AUTOPREFIXER_BROWSERS}),
    mqpacker,
    cssnano,
    postcssReporter({clearMessages: true})
  ];
return gulp.src(['src/main/css/*.css'])
  .pipe($.postcss(PROCESSORS)).on('error', gutil.log)
  .pipe(gulp.dest('dist'));
})


// Clean output directory
gulp.task('clean', () => del(['.tmp', 'resources/public/*', '!resources/public/.git', '!resources/public/js'], {dot: true}));


// Watch files for changes & recompile
gulp.task('watch', ['styles'], () => {
  gulp.watch(['src/main/css/**/*.css', 'src/main/css/stylekit.css'], ['styles']);
});


// Build production files, the default task
gulp.task('default', cb =>
runSequence(
  'styles',
  cb
)
);


// Load custom tasks from the `tasks` directory
// Run: `npm install --save-dev require-dir` from the command-line
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
