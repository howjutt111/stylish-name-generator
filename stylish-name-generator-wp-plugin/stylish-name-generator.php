<?php
/**
 * Plugin Name: Stylish Name Generator
 * Plugin URI: https://github.com/howjutt111/stylish-name-generator
 * Description: A premium self-contained Stylish Name Generator tool with interactive UI, language selectors, copy-on-click, custom styling sliders, and favoriting logic. Use the shortcode [stylish_name_generator] on any page/post to display the tool.
 * Version: 1.2.0
 * Author: Antigravity AI
 * Author URI: https://deepmind.google/
 * License: GPL2
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Track whether the shortcode is used on the current page.
 */
global $sng_shortcode_active;
$sng_shortcode_active = false;

/**
 * Register CSS and JS assets to WordPress enqueuing system.
 */
function sng_register_assets() {
    wp_register_style(
        'stylish-name-generator-style',
        plugins_url( 'assets/css/stylish-name-generator.css', __FILE__ ),
        array(),
        '1.2.0'
    );

    wp_register_script(
        'stylish-name-generator-script',
        plugins_url( 'assets/js/stylish-name-generator.js', __FILE__ ),
        array(),
        '1.2.0',
        true // Load in footer for better performance and DOM safety
    );
}
add_action( 'wp_enqueue_scripts', 'sng_register_assets' );

/**
 * Add 'sng-has-tool' and 'sng-body-light' body classes when shortcode is active.
 * These classes drive the Kadence/WP theme override CSS rules.
 */
function sng_body_class( $classes ) {
    global $sng_shortcode_active;
    if ( $sng_shortcode_active ) {
        $classes[] = 'sng-has-tool';
        $classes[] = 'sng-body-light'; // Default to light theme to match tool default
    }
    return $classes;
}
add_filter( 'body_class', 'sng_body_class' );

/**
 * Pre-check: detect shortcode in post content early so body_class filter can work.
 */
function sng_detect_shortcode() {
    global $sng_shortcode_active, $post;
    if ( is_singular() && is_a( $post, 'WP_Post' ) ) {
        if ( has_shortcode( $post->post_content, 'stylish_name_generator' ) ) {
            $sng_shortcode_active = true;
        }
    }
}
add_action( 'wp', 'sng_detect_shortcode' );

/**
 * Shortcode handler for [stylish_name_generator].
 * Conditionally loads CSS/JS assets only when shortcode is active on the page.
 */
function sng_shortcode_handler() {
    global $sng_shortcode_active;
    $sng_shortcode_active = true;

    // Enqueue registered styles and scripts
    wp_enqueue_style( 'stylish-name-generator-style' );
    wp_enqueue_script( 'stylish-name-generator-script' );

    // Capture the HTML output — wrapped in .sng-wp-wrapper for full-width breakout
    ob_start();
    ?>
    <div class="sng-wp-wrapper" id="stylish-name-generator-wrapper">
    <div class="sng-tool sng-light-theme" id="sng-tool-root">

      <!-- Background Decorations -->
      <div class="sng-bg-orb sng-bg-orb-1"></div>
      <div class="sng-bg-orb sng-bg-orb-2"></div>
      <div class="sng-bg-orb sng-bg-orb-3"></div>

      <!-- Header -->
      <div class="sng-header">
        <div class="sng-header-top">
          <h1 class="sng-title" id="sng-page-title">✨ Stylish Name Generator</h1>
          <button class="sng-theme-btn" id="sng-theme-btn" title="Toggle Light/Dark Theme">
            <svg class="sng-theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
        <p class="sng-subtitle" id="sng-page-subtitle">Transform your name into stunning stylish text — Copy & Use Anywhere!</p>
      </div>

      <!-- Input Section -->
      <div class="sng-input-section">
        <div class="sng-input-wrap">
          <input type="text" class="sng-input" id="sng-name-input" placeholder="Enter your name" maxlength="30" autocomplete="off" />
          <button class="sng-input-clear" id="sng-clear-btn" title="Clear">&times;</button>
        </div>
        <div class="sng-preview" id="sng-preview">Your Stylish Name</div>
      </div>

      <!-- Controls Row -->
      <div class="sng-controls-row">
        <!-- Left Panel: Language -->
        <div class="sng-panel sng-panel-lang">
          <div class="sng-panel-title">🌐 Language</div>
          <div class="sng-lang-btns" id="sng-lang-btns">
            <button class="sng-lang-btn sng-lang-active" data-lang="en">English</button>
            <button class="sng-lang-btn" data-lang="hi">Hindi</button>
            <button class="sng-lang-btn" data-lang="ur">Urdu</button>
            <button class="sng-lang-btn" data-lang="bn">Bangla</button>
            <button class="sng-lang-btn" data-lang="ar">Arabic</button>
          </div>
        </div>
        <!-- Right Panel: Color & Size -->
        <div class="sng-panel sng-panel-style">
          <div class="sng-panel-title">🎨 Customize</div>
          <div class="sng-color-row" id="sng-color-row">
            <span class="sng-color-circle" data-color="#111111" style="background:#111111" title="Black"></span>
            <span class="sng-color-circle" data-color="#7c3aed" style="background:#7c3aed" title="Purple"></span>
            <span class="sng-color-circle" data-color="#ef4444" style="background:#ef4444" title="Red"></span>
            <span class="sng-color-circle" data-color="#f97316" style="background:#f97316" title="Orange"></span>
            <span class="sng-color-circle" data-color="#3b82f6" style="background:#3b82f6" title="Blue"></span>
            <span class="sng-color-circle" data-color="#22c55e" style="background:#22c55e" title="Green"></span>
            <span class="sng-color-circle" data-color="#ec4899" style="background:#ec4899" title="Pink"></span>
            <span class="sng-color-circle sng-color-white sng-color-active" data-color="#ffffff" style="background:#ffffff" title="White"></span>
          </div>
          <div class="sng-size-row">
            <span class="sng-size-label">Small</span>
            <input type="range" class="sng-size-slider" id="sng-size-slider" min="14" max="36" value="18" />
            <span class="sng-size-label">Large</span>
          </div>
        </div>
      </div>

      <!-- Category Bar -->
      <div class="sng-cat-section" id="sng-cat-section">
        <button class="sng-cat-arrow sng-cat-arrow-left" id="sng-cat-arrow-left" aria-label="Scroll categories left">‹</button>
        <div class="sng-cat-scroll" id="sng-cat-scroll"></div>
        <button class="sng-cat-arrow sng-cat-arrow-right" id="sng-cat-arrow-right" aria-label="Scroll categories right">›</button>
      </div>

      <!-- Favorites Section -->
      <div class="sng-favorites-section" id="sng-favorites-section" style="display:none;"></div>

      <!-- All Categories Output -->
      <div class="sng-all-sections" id="sng-all-sections"></div>

      <!-- Toast -->
      <div class="sng-toast" id="sng-toast">✓ Copied!</div>

      <!-- Scroll to Top Button -->
      <button class="sng-scroll-top" id="sng-scroll-top" title="Back to top">↑</button>
    </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode( 'stylish_name_generator', 'sng_shortcode_handler' );

/**
 * Add inline JS in footer to ensure body class is set and syncs with theme toggle.
 * This is a fallback in case the PHP body_class filter doesn't fire early enough
 * (e.g., with some page builders or caching plugins).
 */
function sng_footer_body_class_sync() {
    global $sng_shortcode_active;
    if ( ! $sng_shortcode_active ) {
        return;
    }
    ?>
    <script>
    (function() {
      var b = document.body;
      if (!b.classList.contains('sng-has-tool')) {
        b.classList.add('sng-has-tool');
      }
      // Sync sng-body-light class based on tool's current theme
      var root = document.getElementById('sng-tool-root');
      if (root) {
        if (root.classList.contains('sng-light-theme')) {
          b.classList.add('sng-body-light');
        } else {
          b.classList.remove('sng-body-light');
        }
      }
    })();
    </script>
    <?php
}
add_action( 'wp_footer', 'sng_footer_body_class_sync', 99 );

