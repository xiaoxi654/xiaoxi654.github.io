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

var precacheConfig = [["/2018/04/21/百度网盘下载神器-proxyee-down/index.html","2a3d1a2b5124a699dc3d547ee5e1d949"],["/2018/05/12/博客已迁移至Hexo/index.html","acbb95255b0e70f1ad20f416170698ce"],["/2018/05/13/安装位于VHD的Windows操作系统/index.html","562f7966186b46a90be3288734259cbb"],["/2018/05/20/在树莓派上安装Windows-10-arm64版/index.html","ca4478c329b1cc861a38a961c04e4446"],["/2018/05/22/博客已可以使用PWA/index.html","05d42ae9d13240698c8205e3e9332129"],["/2018/05/28/惊了，地震了还行/index.html","45d1daa396e349bf43144ce8e767435b"],["/2018/05/30/在Termux上部署Hexo/index.html","15be96e30b354a5976a3ba94170c333c"],["/2018/06/09/PS4游戏又打折了，好耶/index.html","45f4bcb7e2363a4d0baf17fc301956f6"],["/2018/06/30/正在准备新的Minecraft服务器/index.html","a12e40b81a1861187594d04510014eac"],["/2018/07/07/PSV-3-65到3-68系统破解教程/index.html","885859103f7a1dd14882120a30250119"],["/2018/07/22/PSV破解游戏安装方法/index.html","b70656185b9e77d424caf6b4592718c8"],["/2018/08/13/Wegame版猛汉下架了/index.html","3d9c721f41002a11ce4bb357adddeee1"],["/2018/12/28/如何在Windows版的Sourcetree上启用GPG签名/index.html","d4fdcc3fe9e0997b08a102ab40ad0796"],["/2019/03/17/伸手党治理？/index.html","81f93fa2a6d5621d3b582e8ec2856823"],["/about/index.html","9c7a6915d296418229c4b8ffb623b07f"],["/archives/2018/04/index.html","7882fc7ef925216585f09e189ee0ffb3"],["/archives/2018/05/index.html","48fd5051eff3cb6843385515d572e63b"],["/archives/2018/06/index.html","4adb54eac6c1471de55306dd849785f8"],["/archives/2018/07/index.html","b1aebbc4764d2d7b4e9554c2e644fe63"],["/archives/2018/08/index.html","54db6910b1c3c72581210f83fd8e8fa6"],["/archives/2018/12/index.html","599a1e931373da95ac5e499e68ed29b1"],["/archives/2018/index.html","757fd15d1bdece2f0b557bbe352c07c2"],["/archives/2018/page/2/index.html","c83097ea1667a275ef223b494de32d30"],["/archives/2019/03/index.html","9d2be752b3c4342f47b87459beb8b1c1"],["/archives/2019/index.html","a66dd4cc6de25f71c920f338fe2a2bb9"],["/archives/index.html","d302705a47dfbb61e296ebdd99c4d9e5"],["/archives/page/2/index.html","fef1312cf058c2e9b725a647dabdf511"],["/categories/index.html","14cf307167b58d6efab2e08cc1c7ba3f"],["/categories/个人纪录/index.html","0617cb5d7b91c17acca5273b5e0bfb97"],["/categories/日记/index.html","136b8f2fda8088fd64d15072a8b96c8e"],["/categories/树莓派/index.html","b33e4bd6c3c6e96018fe224d504d5090"],["/categories/游戏/index.html","c4f834aa21cb38e0637009c6a26ac0ee"],["/categories/软件/index.html","ec37af7de96690cba77cd48e7a56e6f6"],["/content.json","1871dd79a08dff8a695222ea14d334cb"],["/css/main.css","3f47457c236789528da896736812324d"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","9109adf87a7e1e2e05fdbf1de40cf614"],["/images/icons/icon-128x128.png","2c909769f254433630c34c06f8c4c3fe"],["/images/icons/icon-144x144.png","040474dd348fa43aac2dd6efd89547c1"],["/images/icons/icon-152x152.png","7f1dc5b3d5d5f174a387b9375d7ffc50"],["/images/icons/icon-192x192.png","72c3fdd0b97ed5f991707eb08641628e"],["/images/icons/icon-384x384.png","662984e4d3ef29b21b0362099529c54f"],["/images/icons/icon-512x512.png","bbff879364536d2f8693ea50f830e532"],["/images/icons/icon-72x72.png","d2effb4801cfdad9db7915cef3be8a16"],["/images/icons/icon-96x96.png","4d20d5f8a906260cdd062391a59e5582"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/pic/bg.png","ca7b1e1df2f0aacd8d97e2019b1408e9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","76725189270ad5258dd2519e217cf2ce"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","87117606c2221466e24180903a59c6a3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","902748b461786b60ebcaf181d490d702"],["/js/src/post-details.js","f4986086aceedc850d3790bb06e66065"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","9dbd61090ab42a397a87c0ff2725cfbb"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","b64eb3237942a2471918c52b25addf35"],["/page/2/index.html","408d6ea7edf6150206ec1de3e7d1ad20"],["/sitemap.xml","ff71e39cd7a328d66ca4c342c428a707"],["/tags/Git/index.html","731cd386d9a24ee8a496e8e674852b4e"],["/tags/Hexo/index.html","a23eecac14d6c2cd2df312ad5c35db63"],["/tags/Minecraft/index.html","9cd27f6207ae7d39aa0493b9643b540d"],["/tags/PS4/index.html","751a33b2516322864ed7945ac1a77902"],["/tags/Termux/index.html","7593f4e4f2a15663df6865599f10ddc0"],["/tags/Windows/index.html","186e1b32a99df9ef3f2c2355e2e81192"],["/tags/主机/index.html","315cd7ab399bd5eb41eecb7603d2b212"],["/tags/博客/index.html","370e4b89280ee2a0c2e40e091e44bd2b"],["/tags/吐槽/index.html","6d44eb22ab4f11d3a3ad965d62d19b17"],["/tags/技术/index.html","7794c18743005092075d2931aa09f259"],["/tags/树莓派/index.html","46428af1c1a4de5dfe623aa3f5a5c9f0"],["/tags/游戏/index.html","a18eabeba4fb8bbd358605a94c43b8b8"],["/tags/破解/index.html","5f4ea25c3cd3ec50e1d82ec9f1d5e8c5"],["/tags/腾讯/index.html","985e8141dcaeecd1e12caaab5cb57b16"],["/tags/软件/index.html","4eb1bb51df5ea84f1d6e9d9928179cfd"]];
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







