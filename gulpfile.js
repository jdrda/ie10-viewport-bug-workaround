/**
 * Elixir asset management
 * 
 * Rules for mixing styles and scripts
 * 
 * @category Mixing
 * @subpackage General
 * @package ie10-viewport-bug-workaround
 * @author Jan Drda <jdrda@outlook.com>
 * @copyright Jan Drda
 * @license https://opensource.org/licenses/MIT MIT
 */

var elixir = require('laravel-elixir');

elixir(function (mix) {

    /**
     * Mix just only for minification
     */
    mix
            .styles([
                './dist/ie10-viewport-bug-workaround.css'
            ], 'dist/ie10-viewport-bug-workaround.min.css')
            .scripts([
                './dist/ie10-viewport-bug-workaround.js'
            ], 'dist/ie10-viewport-bug-workaround.min.js')

}); 