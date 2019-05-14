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

var precacheConfig = [["/2018/04/21/百度网盘下载神器-proxyee-down/index.html","26836399f0f3d1ae4301642f004c4eff"],["/2018/05/12/博客已迁移至Hexo/index.html","5e7225c4ee1dee45f06628444b53b466"],["/2018/05/13/安装位于VHD的Windows操作系统/index.html","2bb0a8ea1a4878c258693f14ec7119df"],["/2018/05/20/在树莓派上安装Windows-10-arm64版/index.html","cd4bdde53559573966006bacbb0cc62c"],["/2018/05/22/博客已可以使用PWA/index.html","4fb1923a443f74b492adf52c6799ef84"],["/2018/05/28/惊了，地震了还行/index.html","b72cf736d51905baac23cac8c42f5d78"],["/2018/05/30/在Termux上部署Hexo/index.html","3829ef567a4f8db8a38456ccc4f44f92"],["/2018/06/09/PS4游戏又打折了，好耶/index.html","c1e94bdd966579eb9b4e23a16bbf813a"],["/2018/06/30/正在准备新的Minecraft服务器/index.html","97e9b690d8c8e29672f2eaf4d7eb7c69"],["/2018/07/07/PSV-3-65到3-68系统破解教程/index.html","056e005760722bec4bf39b46422fd01d"],["/2018/07/22/PSV破解游戏安装方法/index.html","1dda25007d9097bbdcea5c5ee3ad5172"],["/2018/08/13/Wegame版猛汉下架了/index.html","a4615e4b5186c0032cf659d51d242b5d"],["/2018/12/28/如何在Windows版的Sourcetree上启用GPG签名/index.html","e27c1644844256231ad0ec97ca71ea36"],["/2019/03/17/伸手党治理？/index.html","3b1e6384a033d069a20e41f56b1f2faa"],["/2019/05/14/psv-3-69-3-70破解教程/index.html","45206383eebda9748c10e5057ba94527"],["/about/index.html","b580e5db6ba63393040c74027331a749"],["/archives/2018/04/index.html","a568fb87b37489e989e0002e38808c5a"],["/archives/2018/05/index.html","a4db0045bde3d8572bdd9d854265701c"],["/archives/2018/06/index.html","8d4d316ddf43d14f282fa9678ab8bfad"],["/archives/2018/07/index.html","d3df62758e03cc5da535ad9b3558fda8"],["/archives/2018/08/index.html","b48fa2a1ffbedb41eb5a35e3fa5881c9"],["/archives/2018/12/index.html","4d49a99283dcf7c704ce32cf17a877c7"],["/archives/2018/index.html","033e54246ae71749eb777560f9df5d19"],["/archives/2018/page/2/index.html","1623c92cd0bb8d3f0bc49e7cb7aac0db"],["/archives/2019/03/index.html","07d3249e9a25ae9983f3358b4748148c"],["/archives/2019/05/index.html","ceafc2f54164bd6812ef8718f61eb8da"],["/archives/2019/index.html","e374635b9dc5d013804500b1fc0f4683"],["/archives/index.html","c813a2dd8a4837c5cdef204bf0bb1e01"],["/archives/page/2/index.html","40fc7c5bf76069bdde536da5ab9ec67b"],["/categories/index.html","b5881b77b9425074f28748e5fc269d7f"],["/categories/个人纪录/index.html","e7370743783b5355cf128e3676a61ce1"],["/categories/日记/index.html","1928ec3169b0723057547506b828433b"],["/categories/树莓派/index.html","8c632dc5e5f715edc9e4f27f0caa0b1d"],["/categories/游戏/index.html","462a19502f6abe7785e9da3f2583c441"],["/categories/软件/index.html","bb97b7b8fea969f12001b9c160081ee7"],["/content.json","3b4edc8d6675cc32eec12773327c3e85"],["/css/main.css","2ce6b9ded1a17a54636b9c58241f046a"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","9109adf87a7e1e2e05fdbf1de40cf614"],["/images/icons/icon-128x128.png","2c909769f254433630c34c06f8c4c3fe"],["/images/icons/icon-144x144.png","040474dd348fa43aac2dd6efd89547c1"],["/images/icons/icon-152x152.png","7f1dc5b3d5d5f174a387b9375d7ffc50"],["/images/icons/icon-192x192.png","72c3fdd0b97ed5f991707eb08641628e"],["/images/icons/icon-384x384.png","662984e4d3ef29b21b0362099529c54f"],["/images/icons/icon-512x512.png","bbff879364536d2f8693ea50f830e532"],["/images/icons/icon-72x72.png","d2effb4801cfdad9db7915cef3be8a16"],["/images/icons/icon-96x96.png","4d20d5f8a906260cdd062391a59e5582"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/pic/bg.png","ca7b1e1df2f0aacd8d97e2019b1408e9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","cb710d0bd56ff6a88a8da3495bc24e7c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","87117606c2221466e24180903a59c6a3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","902748b461786b60ebcaf181d490d702"],["/js/src/post-details.js","f4986086aceedc850d3790bb06e66065"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","9dbd61090ab42a397a87c0ff2725cfbb"],["/lib/font-awesome/bower.json","188dd1a7583ffab4da32757242993f36"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/manifest.json","b64eb3237942a2471918c52b25addf35"],["/page/2/index.html","0a424af6dd6b139e8be872f2ed505397"],["/sitemap.xml","9b06cd0d5892b27461ce5749eb5d354d"],["/tags/Git/index.html","8be226a6884e961f1e1764fbbab4f907"],["/tags/Hexo/index.html","dac0cd0d95fc5ed9c94ea9862c296e85"],["/tags/Minecraft/index.html","184b4b77e3f078153f607acba35cdd31"],["/tags/PS4/index.html","f7c5ef57a71d8fd120ad0dd364223e5e"],["/tags/Termux/index.html","e9fe009f6b4b0e2a3be6fada5659af8b"],["/tags/Windows/index.html","0e94040e339b23f595cf19fd455c2927"],["/tags/主机/index.html","0e6970e6248a50e8c64b07c96ebeb95e"],["/tags/博客/index.html","f75a471f8c4d0dcd8c3a9f1d22cf7b99"],["/tags/吐槽/index.html","c1f3cf57181b1e5aae8b2a0bbbeda281"],["/tags/技术/index.html","70c17af3a825cec39fa286256b67beda"],["/tags/树莓派/index.html","0b0a3ae756a3dfd763f4ddc65411bf87"],["/tags/游戏/index.html","6e0f5839b2c1034a4842509839e11bce"],["/tags/破解/index.html","7ec62ce858b5566febcb8ae0c9c530e7"],["/tags/腾讯/index.html","36e5273ce08869ed3d133a76149d49b4"],["/tags/软件/index.html","80f0d39c8be5d6c72a8091c4fcf9b857"]];
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







