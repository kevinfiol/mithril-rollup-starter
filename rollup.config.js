import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/index.js',
  output: {
    file: './dist/app.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    production && terser(), // minify bundle in production,
    !production && serve('dist'),
    !production && livereload('dist')
  ]
};