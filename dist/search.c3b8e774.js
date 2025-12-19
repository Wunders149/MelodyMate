// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"ckN9Z":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "51d8e89dc3b8e774";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"cNjRp":[function(require,module,exports,__globalThis) {
// Karaoke Engine - Interactive Lyrics with Audio Synchronization
class KaraokeEngine {
    constructor(audioElement, lyricsContainer, progressBar, controls){
        this.audio = audioElement;
        this.lyricsContainer = lyricsContainer;
        this.progressBar = progressBar;
        this.controls = controls;
        this.currentSong = null;
        this.currentLyricIndex = -1;
        this.lyrics = [];
        this.isPlaying = false;
        this.animationFrame = null;
        this.audioContext = null;
        this.demoOscillator = null;
        this.init();
    }
    init() {
        // Create audio context for demo sounds
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
        // Audio event listeners
        this.audio.addEventListener('loadedmetadata', ()=>{
            this.progressBar.max = this.audio.duration;
            this.updateDuration();
        });
        this.audio.addEventListener('timeupdate', ()=>{
            this.updateProgress();
            this.updateLyrics();
        });
        this.audio.addEventListener('ended', ()=>{
            this.pause();
            this.resetLyrics();
            this.stopDemoSound();
        });
        this.audio.addEventListener('error', ()=>{
            console.log('Audio file not available, using demo sound');
            this.startDemoSound();
        });
        // Progress bar interaction
        this.progressBar.addEventListener('input', (e)=>{
            this.audio.currentTime = e.target.value;
            this.updateLyrics();
        });
        // Control buttons
        this.controls.playPause.addEventListener('click', ()=>this.togglePlayPause());
        this.controls.volume.addEventListener('input', (e)=>{
            this.audio.volume = e.target.value / 100;
            if (this.demoOscillator) this.demoOscillator.volume = e.target.value / 100;
        });
        // Keyboard controls
        document.addEventListener('keydown', (e)=>{
            switch(e.code){
                case 'Space':
                    e.preventDefault();
                    this.togglePlayPause();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.audio.currentTime = Math.max(0, this.audio.currentTime - 5);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.audio.currentTime = Math.min(this.audio.duration || this.currentSong?.duration || 60, this.audio.currentTime + 5);
                    break;
            }
        });
    }
    loadSong(songData) {
        this.currentSong = songData;
        this.lyrics = songData.lyrics;
        this.currentLyricIndex = -1;
        // Stop any existing demo sound
        this.stopDemoSound();
        // Try to load audio
        this.audio.src = songData.instrumental;
        this.audio.load();
        // Display lyrics
        this.renderLyrics();
        // Update UI
        document.getElementById('songTitle').textContent = `${songData.title} - ${songData.artist}`;
        // Set progress bar max for demo
        this.progressBar.max = songData.duration;
    }
    renderLyrics() {
        this.lyricsContainer.innerHTML = '';
        this.lyrics.forEach((lyric, index)=>{
            const lyricElement = document.createElement('div');
            lyricElement.className = 'lyric-line text-center py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-purple-100';
            lyricElement.textContent = lyric.text;
            lyricElement.dataset.index = index;
            lyricElement.dataset.time = lyric.time;
            lyricElement.addEventListener('click', ()=>{
                this.audio.currentTime = lyric.time;
                this.updateLyrics();
            });
            this.lyricsContainer.appendChild(lyricElement);
        });
    }
    updateLyrics() {
        if (!this.lyrics.length) return;
        const currentTime = this.audio.currentTime || this.demoTime || 0;
        let newIndex = -1;
        // Find the current lyric line
        for(let i = 0; i < this.lyrics.length; i++){
            if (currentTime >= this.lyrics[i].time) newIndex = i;
            else break;
        }
        if (newIndex !== this.currentLyricIndex) {
            // Remove previous active class
            if (this.currentLyricIndex >= 0) {
                const prevElement = this.lyricsContainer.children[this.currentLyricIndex];
                if (prevElement) prevElement.classList.remove('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
            }
            // Add active class to current line
            this.currentLyricIndex = newIndex;
            if (newIndex >= 0) {
                const currentElement = this.lyricsContainer.children[newIndex];
                if (currentElement) {
                    currentElement.classList.add('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
                    currentElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }
        }
    }
    updateProgress() {
        const currentTime = this.audio.currentTime || this.demoTime || 0;
        this.progressBar.value = currentTime;
        this.updateTimeDisplay();
    }
    updateTimeDisplay() {
        const current = this.formatTime(this.audio.currentTime || this.demoTime || 0);
        const duration = this.formatTime(this.audio.duration || this.currentSong?.duration || 60);
        document.getElementById('currentTime').textContent = current;
        document.getElementById('totalTime').textContent = duration;
    }
    updateDuration() {
        this.updateTimeDisplay();
    }
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    play() {
        // Try to play audio file first
        const playPromise = this.audio.play();
        if (playPromise !== undefined) playPromise.then(()=>{
            this.isPlaying = true;
            this.controls.playPause.innerHTML = '<i class="fas fa-pause"></i>';
            this.controls.playPause.classList.add('playing');
        }).catch(()=>{
            // Audio file failed, start demo sound
            this.startDemoSound();
        });
        else // Fallback for older browsers
        this.startDemoSound();
    }
    pause() {
        this.audio.pause();
        this.stopDemoSound();
        this.isPlaying = false;
        this.controls.playPause.innerHTML = '<i class="fas fa-play"></i>';
        this.controls.playPause.classList.remove('playing');
    }
    togglePlayPause() {
        if (this.isPlaying) this.pause();
        else this.play();
    }
    startDemoSound() {
        if (!this.audioContext) return;
        this.isPlaying = true;
        this.controls.playPause.innerHTML = '<i class="fas fa-pause"></i>';
        this.controls.playPause.classList.add('playing');
        // Create a simple demo melody using oscillators
        this.demoTime = 0;
        this.demoStartTime = Date.now();
        const playNote = (frequency, duration, delay = 0)=>{
            setTimeout(()=>{
                if (!this.isPlaying) return;
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + duration);
            }, delay);
        };
        // Simple melody for demo (Twinkle Twinkle)
        const melody = [
            {
                freq: 261.63,
                duration: 0.5,
                delay: 0
            },
            {
                freq: 261.63,
                duration: 0.5,
                delay: 500
            },
            {
                freq: 293.66,
                duration: 0.5,
                delay: 1000
            },
            {
                freq: 293.66,
                duration: 0.5,
                delay: 1500
            },
            {
                freq: 329.63,
                duration: 0.5,
                delay: 2000
            },
            {
                freq: 329.63,
                duration: 0.5,
                delay: 2500
            },
            {
                freq: 293.66,
                duration: 1,
                delay: 3000
            }
        ];
        // Play the melody and loop it
        const playMelody = ()=>{
            if (!this.isPlaying) return;
            melody.forEach((note)=>playNote(note.freq, note.duration, note.delay));
            // Update progress
            this.demoInterval = setInterval(()=>{
                if (!this.isPlaying) {
                    clearInterval(this.demoInterval);
                    return;
                }
                this.demoTime = (Date.now() - this.demoStartTime) / 1000;
                this.updateProgress();
                this.updateLyrics();
                // Loop every 4 seconds
                if (this.demoTime > 4) {
                    this.demoStartTime = Date.now();
                    this.demoTime = 0;
                }
            }, 100);
            // Loop the melody
            setTimeout(playMelody, 4000);
        };
        playMelody();
    }
    stopDemoSound() {
        this.isPlaying = false;
        if (this.demoInterval) {
            clearInterval(this.demoInterval);
            this.demoInterval = null;
        }
    }
    resetLyrics() {
        this.currentLyricIndex = -1;
        Array.from(this.lyricsContainer.children).forEach((child)=>{
            child.classList.remove('active', 'bg-gradient-to-r', 'from-pink-400', 'to-purple-600', 'text-white', 'scale-105', 'shadow-lg');
        });
    }
    destroy() {
        if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
        this.audio.pause();
        this.audio.src = '';
        this.stopDemoSound();
    }
}
// Karaoke Interface with API Integration
document.addEventListener('DOMContentLoaded', async function() {
    // Import the navbar loader
    const { loadNavBar } = await require("566758b50efe1b67");
    loadNavBar();
    // Import the API
    const { karaokeAPI, demoSongs } = await require("d3afdc61827a6");
    // Create karaoke interface elements
    const karaokeContainer = document.createElement('div');
    karaokeContainer.id = 'karaokeContainer';
    karaokeContainer.className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16';
    karaokeContainer.innerHTML = `
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <div class="text-center mb-6">
        <h2 id="songTitle" class="text-2xl font-bold text-gray-900 mb-2">Search for a Song to Start Karaoke</h2>
        <p class="text-gray-600">Find any song with synchronized lyrics</p>
      </div>

      <!-- Search Form -->
      <div class="bg-gray-50 rounded-xl p-6 mb-6">
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div class="flex-1">
            <input type="text" id="songSearch" placeholder="Enter song title..." class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200">
          </div>
          <div class="flex-1">
            <input type="text" id="artistSearch" placeholder="Enter artist name (optional)..." class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200">
          </div>
          <button id="searchBtn" class="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i class="fas fa-search mr-2"></i>Search
          </button>
        </div>
        <div id="searchResults" class="hidden space-y-2 max-h-60 overflow-y-auto"></div>
      </div>

      <!-- Audio Controls -->
      <div id="audioControls" class="bg-gray-50 rounded-xl p-6 mb-6 hidden">
        <div class="flex items-center justify-center space-x-4 mb-4">
          <button id="playPauseBtn" class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
            <i class="fas fa-play"></i>
          </button>
          <div class="flex-1 max-w-md">
            <input type="range" id="progressBar" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider" value="0" min="0" max="100">
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas fa-volume-up text-gray-600"></i>
            <input type="range" id="volumeControl" class="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider" value="70" min="0" max="100">
          </div>
        </div>
        <div class="text-center text-sm text-gray-600">
          <span id="currentTime">0:00</span> / <span id="totalTime">0:00</span>
        </div>
      </div>

      <!-- Lyrics Display -->
      <div id="lyricsDisplay" class="bg-gradient-to-b from-purple-50 to-pink-50 rounded-xl p-8 min-h-96 flex-col justify-center space-y-2 hidden">
        <div class="text-center text-gray-500">
          <i class="fas fa-music text-4xl mb-4"></i>
          <p>Search for a song above to start your karaoke session!</p>
        </div>
      </div>

      <!-- Demo Songs -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Demo Songs (No Search Required)</h3>
        <div id="demoSongs" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Demo songs will be populated here -->
        </div>
      </div>
    </div>
  `;
    // Insert karaoke container after the instructions
    const instructions = document.querySelector('.bg-white.rounded-2xl.shadow-xl.p-6');
    if (instructions) instructions.parentNode.insertBefore(karaokeContainer, instructions.nextSibling);
    // Initialize karaoke engine
    const audio = new Audio();
    const lyricsContainer = document.getElementById('lyricsDisplay');
    const progressBar = document.getElementById('progressBar');
    const controls = {
        playPause: document.getElementById('playPauseBtn'),
        volume: document.getElementById('volumeControl')
    };
    const karaoke = new KaraokeEngine(audio, lyricsContainer, progressBar, controls);
    // Load demo songs
    const demoSongsContainer = document.getElementById('demoSongs');
    Object.entries(demoSongs).forEach(([id, song])=>{
        const songCard = document.createElement('div');
        songCard.className = 'bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105';
        songCard.innerHTML = `
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
          <i class="fas fa-music text-white"></i>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900">${song.title}</h4>
          <p class="text-sm text-gray-600">${song.artist}</p>
        </div>
      </div>
    `;
        songCard.addEventListener('click', ()=>{
            karaoke.loadSong(song);
            karaokeContainer.classList.remove('hidden');
            document.getElementById('audioControls').classList.remove('hidden');
            lyricsContainer.classList.remove('hidden');
            karaokeContainer.scrollIntoView({
                behavior: 'smooth'
            });
        });
        demoSongsContainer.appendChild(songCard);
    });
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const songSearch = document.getElementById('songSearch');
    const artistSearch = document.getElementById('artistSearch');
    const searchResults = document.getElementById('searchResults');
    searchBtn.addEventListener('click', async ()=>{
        const songQuery = songSearch.value.trim();
        const artistQuery = artistSearch.value.trim();
        if (!songQuery) {
            showNotification('Please enter a song title', 'error');
            return;
        }
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Searching...';
        try {
            const results = await karaokeAPI.searchSongs(songQuery, artistQuery);
            if (results.length === 0) {
                searchResults.innerHTML = '<p class="text-gray-500 text-center py-4">No songs found. Try different search terms.</p>';
                searchResults.classList.remove('hidden');
                return;
            }
            displaySearchResults(results);
            searchResults.classList.remove('hidden');
        } catch (error) {
            console.error('Search error:', error);
            showNotification('Search failed. Please try again.', 'error');
        } finally{
            searchBtn.disabled = false;
            searchBtn.innerHTML = '<i class="fas fa-search mr-2"></i>Search';
        }
    });
    // Allow Enter key to search
    [
        songSearch,
        artistSearch
    ].forEach((input)=>{
        input.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') searchBtn.click();
        });
    });
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        results.forEach((song)=>{
            const resultItem = document.createElement('div');
            resultItem.className = 'bg-white p-4 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-all duration-200 hover:shadow-md';
            const originalContent = `
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h4 class="font-semibold text-gray-900">${song.name}</h4>
            <p class="text-sm text-gray-600">by ${song.artistName}</p>
            ${song.albumName ? `<p class="text-xs text-gray-500">Album: ${song.albumName}</p>` : ''}
          </div>
          <div class="text-right">
            <span class="text-xs text-gray-500">${formatDuration(song.duration)}</span>
          </div>
        </div>
      `;
            resultItem.innerHTML = originalContent;
            const clickHandler = async ()=>{
                resultItem.innerHTML = '<div class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>Loading lyrics...</div>';
                resultItem.removeEventListener('click', clickHandler); // Disable click during load
                try {
                    const songData = await karaokeAPI.searchAndGetSong(song.name, song.artistName);
                    if (songData) {
                        karaoke.loadSong(songData);
                        karaokeContainer.classList.remove('hidden');
                        document.getElementById('audioControls').classList.remove('hidden');
                        lyricsContainer.classList.remove('hidden');
                        karaokeContainer.scrollIntoView({
                            behavior: 'smooth'
                        });
                        showNotification(`Loaded "${songData.title}" by ${songData.artist}`, 'success');
                    } else {
                        showNotification('Lyrics not available for this song', 'error');
                        resultItem.innerHTML = '<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Lyrics not found</div>';
                        setTimeout(()=>{
                            resultItem.innerHTML = originalContent;
                            resultItem.addEventListener('click', clickHandler);
                        }, 2000);
                    }
                } catch (error) {
                    console.error('Load song error:', error);
                    showNotification('Failed to load song', 'error');
                    resultItem.innerHTML = '<div class="text-center py-4 text-red-500"><i class="fas fa-exclamation-triangle mr-2"></i>Failed to load</div>';
                    setTimeout(()=>{
                        resultItem.innerHTML = originalContent;
                        resultItem.addEventListener('click', clickHandler);
                    }, 2000);
                }
            };
            resultItem.addEventListener('click', clickHandler);
            searchResults.appendChild(resultItem);
        });
    }
    function formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach((notification)=>notification.remove());
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${type === 'success' ? 'bg-green-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`;
        notification.innerHTML = `
      <div class="flex items-center">
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
        ${message}
      </div>
    `;
        document.body.appendChild(notification);
        // Animate in
        setTimeout(()=>{
            notification.classList.remove('translate-x-full');
        }, 100);
        // Auto remove
        setTimeout(()=>{
            notification.classList.add('translate-x-full');
            setTimeout(()=>{
                if (notification.parentNode) notification.parentNode.removeChild(notification);
            }, 300);
        }, 3000);
    }
    // Add custom styles for sliders
    const style = document.createElement('style');
    style.textContent = `
    .slider::-webkit-slider-thumb {
      appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .slider::-moz-range-thumb {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
    document.head.appendChild(style);
});

},{"566758b50efe1b67":"h1z07","d3afdc61827a6":"Nhj45"}],"h1z07":[function(require,module,exports,__globalThis) {
module.exports = import("./navbar-loader.1b626801.js").then(()=>module.bundle.root('8gcSL'));

},{"8gcSL":"8gcSL"}],"Nhj45":[function(require,module,exports,__globalThis) {
module.exports = import("./karaoke-data.7e6b71c1.js").then(()=>module.bundle.root('3EPtN'));

},{"3EPtN":"3EPtN"}]},["ckN9Z","cNjRp"], "cNjRp", "parcelRequireb585", {})

//# sourceMappingURL=search.c3b8e774.js.map
