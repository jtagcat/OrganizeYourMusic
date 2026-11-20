"use strict";

var SPOTIFY_CLIENT_ID = 'a7b44a3926144ba1ad1ea2b5207ab495';
var SPOTIFY_REDIRECT_URI = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? window.location.origin + '/'
    : 'https://oym.c7.ee/';
