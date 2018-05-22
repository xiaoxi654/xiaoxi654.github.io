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

var precacheConfig = [["D:/Cmder/blog/public/2018/04/21/百度网盘下载神器-proxyee-down/index.html","aff71f29467ff440663e3ec6d738de4a"],["D:/Cmder/blog/public/2018/05/12/博客已迁移至Hexo/index.html","908af748c32bfc74bdfffb046f0b4b88"],["D:/Cmder/blog/public/2018/05/13/安装位于VHD的Windows操作系统/index.html","700288ba99db1e06d6b02803f07fb6f7"],["D:/Cmder/blog/public/2018/05/20/在树莓派上安装Windows-10-arm64版/index.html","5c186c66c4c48fe4429ba0de29f8e05a"],["D:/Cmder/blog/public/about/index.html","60a3d4e857c0e6146effa9b3e795da0a"],["D:/Cmder/blog/public/archives/2018/04/index.html","85f6f67b717c269ef1fca38beb536b88"],["D:/Cmder/blog/public/archives/2018/05/index.html","e91d7f6510381e3230b46916d7c52c5a"],["D:/Cmder/blog/public/archives/2018/index.html","0aa8a4cdcb4809c0b0556361cb7a9fc2"],["D:/Cmder/blog/public/archives/index.html","673d6e723516a55257046321e8afd500"],["D:/Cmder/blog/public/categories/index.html","17a2ed8f07218136177b059e4fe9a27a"],["D:/Cmder/blog/public/categories/日记/index.html","6f194362d620899cb7c42cef37f76627"],["D:/Cmder/blog/public/categories/树莓派/index.html","dd71ed8e78548726470ab8940f1bb9a0"],["D:/Cmder/blog/public/categories/软件/index.html","5a98ebeb8b7b4ae2fa11c60c746eaff8"],["D:/Cmder/blog/public/css/main.css","d4b481f35ec6a44884b2e5d0f1924bdb"],["D:/Cmder/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Cmder/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["D:/Cmder/blog/public/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["D:/Cmder/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["D:/Cmder/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["D:/Cmder/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["D:/Cmder/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["D:/Cmder/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["D:/Cmder/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["D:/Cmder/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["D:/Cmder/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["D:/Cmder/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["D:/Cmder/blog/public/images/favicon.png","9109adf87a7e1e2e05fdbf1de40cf614"],["D:/Cmder/blog/public/images/icons/icon-128x128.png","2c909769f254433630c34c06f8c4c3fe"],["D:/Cmder/blog/public/images/icons/icon-144x144.png","040474dd348fa43aac2dd6efd89547c1"],["D:/Cmder/blog/public/images/icons/icon-152x152.png","7f1dc5b3d5d5f174a387b9375d7ffc50"],["D:/Cmder/blog/public/images/icons/icon-192x192.png","72c3fdd0b97ed5f991707eb08641628e"],["D:/Cmder/blog/public/images/icons/icon-384x384.png","662984e4d3ef29b21b0362099529c54f"],["D:/Cmder/blog/public/images/icons/icon-512x512.png","bbff879364536d2f8693ea50f830e532"],["D:/Cmder/blog/public/images/icons/icon-72x72.png","d2effb4801cfdad9db7915cef3be8a16"],["D:/Cmder/blog/public/images/icons/icon-96x96.png","4d20d5f8a906260cdd062391a59e5582"],["D:/Cmder/blog/public/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Cmder/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["D:/Cmder/blog/public/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["D:/Cmder/blog/public/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["D:/Cmder/blog/public/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["D:/Cmder/blog/public/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["D:/Cmder/blog/public/index.html","b68c6d43e489db4d8817351d69935238"],["D:/Cmder/blog/public/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["D:/Cmder/blog/public/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["D:/Cmder/blog/public/js/src/bootstrap.js","87117606c2221466e24180903a59c6a3"],["D:/Cmder/blog/public/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["D:/Cmder/blog/public/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["D:/Cmder/blog/public/js/src/motion.js","902748b461786b60ebcaf181d490d702"],["D:/Cmder/blog/public/js/src/post-details.js","f4986086aceedc850d3790bb06e66065"],["D:/Cmder/blog/public/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["D:/Cmder/blog/public/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["D:/Cmder/blog/public/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["D:/Cmder/blog/public/js/src/utils.js","9dbd61090ab42a397a87c0ff2725cfbb"],["D:/Cmder/blog/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["D:/Cmder/blog/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["D:/Cmder/blog/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["D:/Cmder/blog/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["D:/Cmder/blog/public/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["D:/Cmder/blog/public/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["D:/Cmder/blog/public/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["D:/Cmder/blog/public/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["D:/Cmder/blog/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["D:/Cmder/blog/public/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["D:/Cmder/blog/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["D:/Cmder/blog/public/tags/Windows/index.html","dd439110030a4e7b44a63ced9e7c76b0"],["D:/Cmder/blog/public/tags/树莓派/index.html","d1848bb8e5e24969b1a7fd382a468a58"]];
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







