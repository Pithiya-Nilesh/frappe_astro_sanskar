<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'admin_sanskar' );

/** MySQL database username */
define( 'DB_USER', 'admin_sanskar' );

/** MySQL database password */
define( 'DB_PASSWORD', '4h3*g0eE' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('FS_METHOD','direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Loo}=MXD|1q3:i$xoa4/3-g{q~}T{L+m3AYs$6jVC+dq@EGJ2]@dE~|mh+YS7xS,' );
define( 'SECURE_AUTH_KEY',  '2C_WsW&FS>&TlJFijA(AAZ?a}gzx.JcdI8)x5j]C}pEn5[LKMw1;6hR=S8NSoGY5' );
define( 'LOGGED_IN_KEY',    'O?QdAJN#w&/oU(*MQ-fBRvx*>!ke^c/YS,1W:r.Tn`siQkz2p3;VDoNvO:t{MV<g' );
define( 'NONCE_KEY',        'E_>/1umFgwWl=B97f}T[P-DH2Pry&eL1A};T?3E1B<-rs_$v.KC.Wog%x 1-rsk)' );
define( 'AUTH_SALT',        'HbM<FwhH@F#m;h8Z+aF{e=RjL,mx:Q%JRahX5:IYyjcXtTbQ%-,2tgf9> (0^dkI' );
define( 'SECURE_AUTH_SALT', '0$4Md79-kk&):K*;]?cU#Eya!fvn[Rs$`[*l;KCyo]H6r;b+uEy>S5rlq|V0<;gh' );
define( 'LOGGED_IN_SALT',   '(To_NI(9LucOS2;p9%e8|spg$Y1)n>%*`2bB9iniv{PmV#&gJ+:|4W0R66.g1j< ' );
define( 'NONCE_SALT',       'GJE[5-0de40R-f^N*qW>KB;dqHF;# ;]0 BB2*POHquWm@8k(ikLM^3p-&IK*VTD' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wps_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';