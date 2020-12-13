// import our third party plugins
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import html from '@rollup/plugin-html'
import css from 'rollup-plugin-css-only'
import scss from 'rollup-plugin-scss'
import image from '@rollup/plugin-image'
import smartAsset from 'rollup-plugin-smart-asset'
// import copy from "rollup-plugin-copy-assets"
import VuePlugin from 'rollup-plugin-vue2'
import pkg from './package.json' // import our package.json file to re-use the naming

const smartAssetOpts = {
  url: 'inline',
  // publicPath: 'src/components/icon-module',
  // assetsPath: 'lib/assets',
  keepImport: true,
  // useHash: true,
  // keepName: true,
  // extensions: [".png"]
}

const vuePluginOpts = {
  css: false,
  // transformAssetUrls: true
}

export default {
  // this is the file containing all our exported components/functions
  input: 'src/index.js',
  // input: 'src/main.js',
  // this is an array of outputted formats
  output: [
    {
      file: pkg.module, // the name of our esm library
      format: 'esm', // the format of choice
      sourcemap: true, // ask rollup to include sourcemaps
    }
  ],
  // this is an array of the plugins that we are including
  plugins: [
    css(),
    VuePlugin(vuePluginOpts),
    smartAsset(smartAssetOpts),
    // copy({
    //   assets: [
    //     'src/components/icon-module',
    //   ],
    // }),
    json(),
    scss(),
    image(),
    html(),
    commonjs(),
  ],
  // ask rollup to not bundle Vue in the library
  external: ['vue'],

}
