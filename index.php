<?php 
/**
* Plugin Name: Gutenberg Notice Block
* Author: Ajil
* Description: Simple text input.
* Version: 1.0
*/

// Load assets for wp-admin when editor is active
function ajil_gutenberg_notice_block_admin() {
   wp_enqueue_script(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );

   wp_enqueue_style(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}

add_action( 'enqueue_block_editor_assets', 'ajil_gutenberg_notice_block_admin' );

// Load assets for frontend
function ajil_gutenberg_notice_block_frontend() {

   wp_enqueue_style(
      'gutenberg-notice-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}
add_action( 'wp_enqueue_scripts', 'ajil_gutenberg_notice_block_frontend' );