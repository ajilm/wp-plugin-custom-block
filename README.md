WP Plugin Custom Block

A simple WordPress plugin that demonstrates how to create and register a custom Gutenberg block for the WordPress block editor.

This project is intended as a learning example for developers who want to understand how to build and integrate custom blocks in WordPress.

Overview

WordPress introduced the Gutenberg block editor, which allows content to be built using reusable blocks.
This plugin adds a custom block that can be inserted directly inside the editor and customized by users.

The goal of this project is to show the basic structure and workflow of creating a custom block plugin.

Features

Custom Gutenberg block

Easy integration with WordPress block editor

Lightweight plugin structure

Example implementation for developers learning block development

Requirements

WordPress 5.0 or higher

PHP 7.0 or higher

Installation

Download or clone this repository.

git clone https://github.com/ajilm/wp-plugin-custom-block.git

Upload the plugin folder to:

/wp-content/plugins/

Log in to the WordPress admin dashboard.

Go to:

Plugins → Installed Plugins

Activate WP Plugin Custom Block.

Usage

Open any post or page in the WordPress editor.

Click Add Block (+).

Search for the custom block provided by this plugin.

Insert the block and customize its content.

The block will render both in the editor and on the front-end of the website.

Project Structure
wp-plugin-custom-block
│
├── build/            Compiled block assets
├── src/              Block source files
├── block.json        Block configuration
├── plugin.php        Main plugin file
└── README.md
Learning Purpose

This repository is useful for developers who want to learn:

WordPress block development

Gutenberg editor architecture

Creating reusable content blocks

Structuring a custom block plugin

Future Improvements

Add multiple custom blocks

Add block settings panel

Improve styling and customization options

Add dynamic block rendering

Contributing

Contributions and suggestions are welcome.
Feel free to open an issue or submit a pull request.

License

This project is open-source and available under the MIT License.
