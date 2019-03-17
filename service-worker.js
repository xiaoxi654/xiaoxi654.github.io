/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/04/21/百度网盘下载神器-proxyee-down/index.html","7b84677a7d642044ca12de2d7a563d43"],["/2018/05/12/博客已迁移至Hexo/index.html","e9e432cb862d1c2c69b36718d835a34f"],["/2018/05/13/安装位于VHD的Windows操作系统/index.html","c2a94ec36fcc1dae1d0e5383319a1a7a"],["/2018/05/20/在树莓派上安装Windows-10-arm64版/index.html","afb2b996960c2fd9f190c1c7d08616ba"],["/2018/05/22/博客已可以使用PWA/index.html","7bb9b726c17fb2ce055288bc8fdcc8b2"],["/2018/05/28/惊了，地震了还行/index.html","7f21969ce50657a22129068060a1f5f5"],["/2018/05/30/在Termux上部署Hexo/index.html","eaa33e9a07c77f5ffe9c05d94c0e9c2a"],["/2018/06/09/PS4游戏又打折了，好耶/index.html","02e9000a585c42002308054b19941b96"],["/2018/06/30/正在准备新的Minecraft服务器/index.html","55a2876faadd1cfd5c193acbcbec0506"],["/2018/07/07/PSV-3-65到3-68系统破解教程/index.html","4a0934f06bfbd02d44624e233143628b"],["/2018/07/22/PSV破解游戏安装方法/index.html","31ad7cc43143f06fd21180470b607d98"],["/2018/08/13/Wegame版猛汉下架了/index.html","3283e2c515731cbd884544a1fafa7608"],["/2018/12/28/如何在Windows版的Sourcetree上启用GPG签名/index.html","16a735d5cb1429b390a7f924ad5a29dd"],["/about/index.html","7db27eae14450aa98e8c4d49735dd4f8"],["/archives/2018/04/index.html","aeaadc4294008d955d273900f5d64141"],["/archives/2018/05/index.html","a9638fad5304dbadc10030b95f8f1dd7"],["/archives/2018/06/index.html","09511c99184bcc784fb0d21e8e30a16b"],["/archives/2018/07/index.html","9f7ebfcf3ac1cf2f606df49712153d24"],["/archives/2018/08/index.html","a33e2388174f8cbba6834b99ba2b131c"],["/archives/2018/12/index.html","960ba660d4381a84be803f84c0b562a9"],["/archives/2018/index.html","ff3b197dc0ad90394d33f6962dc734a7"],["/archives/2018/page/2/index.html","709e514578b0d54e8f5eba723497464b"],["/archives/index.html","2c5475a2c59fc70685f00b2cb2b97937"],["/archives/page/2/index.html","0fbc4e91ba30350d358d7dc37b8d5a4c"],["/categories/index.html","8f8ff2aae4fbdfa6b5170cc0bdd84ae0"],["/categories/日记/index.html","caf286afdfea9d8d11fed0bcd84c0b64"],["/categories/树莓派/index.html","f325d76e89f0fc9d6c495a3940498b59"],["/categories/游戏/index.html","6a12184147a7041266a72a61e1b85127"],["/categories/软件/index.html","65e3b1632083d5e96871b1ff0b6eac3e"],["/content.json","b3deca5ca2524263c9804b6e841eb6d3"],["/css/main.css","214569a2993f31f51a097eb57fb4839c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","9109adf87a7e1e2e05fdbf1de40cf614"],["/images/icons/icon-128x128.png","2c909769f254433630c34c06f8c4c3fe"],["/images/icons/icon-144x144.png","040474dd348fa43aac2dd6efd89547c1"],["/images/icons/icon-152x152.png","7f1dc5b3d5d5f174a387b9375d7ffc50"],["/images/icons/icon-192x192.png","72c3fdd0b97ed5f991707eb08641628e"],["/images/icons/icon-384x384.png","662984e4d3ef29b21b0362099529c54f"],["/images/icons/icon-512x512.png","bbff879364536d2f8693ea50f830e532"],["/images/icons/icon-72x72.png","d2effb4801cfdad9db7915cef3be8a16"],["/images/icons/icon-96x96.png","4d20d5f8a906260cdd062391a59e5582"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/pic/bg.png","ca7b1e1df2f0aacd8d97e2019b1408e9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ab0f4ff6fcc65c9d982c35e9ea11f867"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","87117606c2221466e24180903a59c6a3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","902748b461786b60ebcaf181d490d702"],["/js/src/post-details.js","f4986086aceedc850d3790bb06e66065"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","9dbd61090ab42a397a87c0ff2725cfbb"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","b64eb3237942a2471918c52b25addf35"],["/page/2/index.html","c64f13cb74127fca38e5633dfa988f36"],["/sitemap.xml","cc860edddb18d3326c2480b4b043e71a"],["/tags/Git/index.html","ac36931a807831cb6e5200d782c8bb88"],["/tags/Hexo/index.html","cdd396206f9c429ca0f46739afa53f6f"],["/tags/Minecraft/index.html","74bc380bbf6f6310032d775fa77ee236"],["/tags/PS4/index.html","0fd33457155c61e7db89f22fe8a23863"],["/tags/Termux/index.html","606e324d08ee25eb5a7d18095dac8e24"],["/tags/Windows/index.html","b69f0bf6d8fea2b1f8a08e6d545bb8e5"],["/tags/主机/index.html","4de9124a08b80e381e885b1ca92b98fb"],["/tags/博客/index.html","64747a24c6d06a11a4d38f78e50e3115"],["/tags/技术/index.html","d1820826c129faa818ba11e85dc30ba8"],["/tags/树莓派/index.html","ee8f9e9c8e893d384d702c2a940f7f0a"],["/tags/游戏/index.html","d6856bca9b692be4e3f9b8af3b32d8b0"],["/tags/破解/index.html","0d9c79968b3413df27f1bc87313ec592"],["/tags/腾讯/index.html","bc909593b27875ff138e3e1b5e4a9576"],["/tags/软件/index.html","67f2f7f054874ee05e79ef7d9a986510"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







