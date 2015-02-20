<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'manawynwood');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'cUTNk|^LGx<@+hS9I)Ld527r W}-fy=_=WGs:P[*w]LWl?+hBW51:G<1[`KunD+<');
define('SECURE_AUTH_KEY',  'ta%A{3IZbYw,{A|%D|{ 9<8L}Jxf1eDl pJ[|[PVI1SS?)ju/g+Cm=9!1]Y/?j k');
define('LOGGED_IN_KEY',    '#E,#yNj/WL-Bkz<tG8^pHJ-I4&|y*}]?F*e|B+b03^,cLYv.07dHR&4n9Sd6w=d]');
define('NONCE_KEY',        '0 RRA4p0P&.1j8h.pGg>[S9ns+-cT>.T|Q&A5/?hm;DJ7x)>Yw|EQ7S=M>~f1Nql');
define('AUTH_SALT',        '|8-R/|:+oG`/po!w4!HzU~OovYQ-q6qt7&@0sn2Ag`0*]`x0CE+If!+j^`Jok1Z#');
define('SECURE_AUTH_SALT', ',;+u`|!B1c?-rAfv^k{r+z&OLt=v/Y(ci`Yi2m$#J{K:#]T.{CJGT|5xoZG6x9^%');
define('LOGGED_IN_SALT',   '[>ra##1VA4s#T/:0XqIfu~6)ebEsW=e}SU|wCd_aq?Ad^H&~1 m`tzYLFRk?|IHh');
define('NONCE_SALT',       'oj[8pJ3B}*bZD7@td;I@^h%-SIoS=+9q~+r>w5nw!+5/}K1#Xv1W,@yK>u$`O`!L');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
