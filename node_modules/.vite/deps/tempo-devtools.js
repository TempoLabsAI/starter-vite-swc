import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global2, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global2.document ? factory(global2, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global2);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      };
      jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "�";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
          var high = "0x" + escape.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare2 = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare2) {
              return compare2;
            }
            compare2 = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare2 & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare2) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare2 & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery.fn.uniqueSort = function() {
          return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery.filter(qualifier, elements, not);
      }
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self2 = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery.contains(self2[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery.find(selector, self2[i], ret);
          }
          return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery)
          );
        }
        return jQuery.makeArray(selector, this);
      };
      init.prototype = jQuery.fn;
      rootjQuery = jQuery(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery.fn.extend({
        has: function(target) {
          var targets = jQuery(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery.uniqueSort(
              jQuery.merge(this.get(), jQuery(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self2 = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self2.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self2.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self2;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery.Callbacks("memory"),
              jQuery.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery.Callbacks("once memory"),
              jQuery.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getErrorHook) {
                      process.error = jQuery.Deferred.getErrorHook();
                    } else if (jQuery.Deferred.getStackHook) {
                      process.error = jQuery.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      jQuery.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery.readyException(error);
        });
        return this;
      };
      jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
            return;
          }
          jQuery.isReady = true;
          if (wait !== true && --jQuery.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery]);
        }
      });
      jQuery.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
            jQuery.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery.event.special[type] || {};
            handleObj = jQuery.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery.event.addProp);
      jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery.event.fix(nativeEvent)
            );
          }
        }
        jQuery.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self2 = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self2.html());
            }
            domManip(self2, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery.clone(node, true, true);
                if (hasScripts) {
                  jQuery.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery._evalUrl && !node.noModule) {
                      jQuery._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery.each(["height", "width"], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          }
        }
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(
          jQuery.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) {
              opt.duration = jQuery.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery.timers = [];
      jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
      };
      jQuery.fx.interval = 13;
      jQuery.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery.fx.stop = function() {
        inProgress = null;
      };
      jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
            name = jQuery.propFix[name] || name;
            hooks = jQuery.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self2 = jQuery(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self2.hasClass(className)) {
                  self2.removeClass(className);
                } else {
                  self2.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery.makeArray(data, [event]);
          special = jQuery.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery.extend(
            new jQuery.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery.fn.extend({
        serialize: function() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery.event && s.global;
          if (fireGlobals && jQuery.active++ === 0) {
            jQuery.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery.active) {
                jQuery.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery.ajax(jQuery.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery.globalEval(response, options, doc);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self2 = jQuery(this), contents = self2.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self2.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
      };
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery.globalEval(text);
            return text;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery(scripts).remove();
        }
        return jQuery.merge([], parsed.childNodes);
      };
      jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self2 = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self2.length > 0) {
          jQuery.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self2.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self2.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery(offsetParent).offset();
              parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
      };
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      jQuery.isArray = Array.isArray;
      jQuery.parseJSON = JSON.parse;
      jQuery.nodeName = nodeName;
      jQuery.isFunction = isFunction;
      jQuery.isWindow = isWindow;
      jQuery.camelCase = camelCase;
      jQuery.type = toType;
      jQuery.now = Date.now;
      jQuery.isNumeric = function(obj) {
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery.noConflict = function(deep) {
        if (window2.$ === jQuery) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery) {
          window2.jQuery = _jQuery;
        }
        return jQuery;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery;
      }
      return jQuery;
    });
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/tempoElement.js
var require_tempoElement = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/tempoElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TempoElement = void 0;
    var STORYBOARD_TOP_CONSTANT = "STORYBOARD-TOP-CONSTANT";
    var TempoElement = class _TempoElement {
      /**
       * If codebase ID is undefined then it doesn't exist in our codebase, but is still a valid lookup
       */
      constructor(codebaseId, storyboardId, uniquePath) {
        if (codebaseId && /[^0-9a-zA-Z-_]/.test(codebaseId)) {
          throw new Error("Codebase ID contains invalid chars :" + codebaseId);
        }
        if (storyboardId && /[^0-9a-zA-Z-_]/.test(storyboardId)) {
          throw new Error("Storyboard ID contains invalid chars :" + codebaseId);
        }
        this.codebaseId = codebaseId || "";
        this.storyboardId = storyboardId;
        this.uniquePath = uniquePath;
        this.cachedKey = null;
      }
      isEqual(other) {
        return this.codebaseId === other.codebaseId && this.storyboardId === other.storyboardId && this.uniquePath === other.uniquePath;
      }
      getKey() {
        if (this.cachedKey) {
          return this.cachedKey;
        }
        this.cachedKey = `TE_${this.codebaseId}_${this.storyboardId}_${this.uniquePath}`;
        return this.cachedKey;
      }
      /**
       * Note, codebase ID is allowed to be empty but not the storyboard ID or unique path
       */
      isEmpty() {
        if (this.storyboardId && this.uniquePath) {
          return false;
        }
        return true;
      }
      static fromKey(key) {
        if (!key) {
          return _TempoElement.empty();
        }
        const [_, codebaseId, storyboardId, uniquePath] = key.split("_");
        if (!storyboardId || !uniquePath) {
          return _TempoElement.empty();
        }
        return new _TempoElement(codebaseId, storyboardId, uniquePath);
      }
      static fromOtherElement(other) {
        return new _TempoElement(other.codebaseId, other.storyboardId, other.uniquePath);
      }
      static empty() {
        return new _TempoElement("", "", "");
      }
      /**
       * Returns a tempo element that can be used to represent the storyboard itself
       */
      static forStoryboard(storyboardId) {
        return new _TempoElement(STORYBOARD_TOP_CONSTANT, storyboardId, "0");
      }
      /**
       * If the storyboardId is passed in it checks if it is equal to this particular storyboard
       */
      isStoryboard(storyboardId) {
        return this.codebaseId === STORYBOARD_TOP_CONSTANT && (!storyboardId || this.storyboardId === storyboardId);
      }
      /**
       * @returns if this element is inside a storyboard and known in the codebase
       */
      isKnownElement() {
        return !this.isEmpty() && Boolean(this.codebaseId) && this.codebaseId !== STORYBOARD_TOP_CONSTANT;
      }
      isParentOf(other) {
        if (!other) {
          return false;
        }
        if (this.isStoryboard()) {
          return this.storyboardId === other.storyboardId && this.uniquePath !== other.uniquePath;
        }
        return this.storyboardId === other.storyboardId && this.uniquePath !== other.uniquePath && Boolean(this.uniquePath) && Boolean(other.uniquePath) && other.uniquePath.startsWith(this.uniquePath);
      }
      isSiblingOf(other) {
        if (!other || !this.uniquePath || !other.uniquePath) {
          return false;
        }
        if (this.isEqual(other)) {
          return false;
        }
        if (this.isStoryboard()) {
          return other.isStoryboard();
        }
        const pathUntilLastSegment = this.uniquePath.split("-").slice(0, -1).join("-");
        const otherPathUntilLastSegment = other.uniquePath.split("-").slice(0, -1).join("-");
        return this.storyboardId === other.storyboardId && this.uniquePath !== other.uniquePath && Boolean(pathUntilLastSegment) && Boolean(otherPathUntilLastSegment) && pathUntilLastSegment === otherPathUntilLastSegment;
      }
    };
    exports.TempoElement = TempoElement;
  }
});

// node_modules/uuid/dist/commonjs-browser/rng.js
var require_rng = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/rng.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/regex.js
var require_regex = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/validate.js
var require_validate = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/stringify.js
var require_stringify = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.unsafeStringify = unsafeStringify;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function unsafeStringify(arr, offset = 0) {
      return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
    }
    function stringify(arr, offset = 0) {
      const uuid = unsafeStringify(arr, offset);
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v1.js
var require_v1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.unsafeStringify)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/parse.js
var require_parse = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v35.js
var require_v35 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URL = exports.DNS = void 0;
    exports.default = v35;
    var _stringify = require_stringify();
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL;
    function v35(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.unsafeStringify)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  }
});

// node_modules/uuid/dist/commonjs-browser/md5.js
var require_md5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/md5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (x & 65535) + (y & 65535);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v3.js
var require_v3 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/native.js
var require_native = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/native.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var _default = {
      randomUUID
    };
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v4.js
var require_v4 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _native = _interopRequireDefault(require_native());
    var _rng = _interopRequireDefault(require_rng());
    var _stringify = require_stringify();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function v4(options, buf, offset) {
      if (_native.default.randomUUID && !buf && !options) {
        return _native.default.randomUUID();
      }
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.unsafeStringify)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/sha1.js
var require_sha1 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/sha1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [1518500249, 1859775393, 2400959708, 3395469782];
      const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/v5.js
var require_v5 = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/nil.js
var require_nil = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/version.js
var require_version = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.slice(14, 15), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/commonjs-browser/index.js
var require_commonjs_browser = __commonJS({
  "node_modules/uuid/dist/commonjs-browser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function get() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _parse.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function get() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function get() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function get() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function get() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function get() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function get() {
        return _version.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/changeLedgerTypes.js
var require_changeLedgerTypes = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/changeLedgerTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reconstructChangeLedgerClass = exports.UnknownChange = exports.RedoChange = exports.UndoChange = exports.EditTextChange = exports.RemoveClassChange = exports.AddClassChange = exports.ChangeTagChange = exports.DuplicateChange = exports.WrapDivChange = exports.ChangePropChange = exports.RemoveJsxChange = exports.MoveJsxChange = exports.AddJsxChange = exports.StylingChange = exports.ChangeLedgerItem = exports.CHANGE_TYPES_WITH_INSTANT_UNDO = exports.ChangeType = exports.StylingFramework = void 0;
    var tempoElement_1 = require_tempoElement();
    var uuid_1 = require_commonjs_browser();
    var StylingFramework;
    (function(StylingFramework2) {
      StylingFramework2["INLINE"] = "Inline";
      StylingFramework2["CSS"] = "CSS";
      StylingFramework2["TAILWIND"] = "Tailwind";
    })(StylingFramework || (exports.StylingFramework = StylingFramework = {}));
    var ChangeType;
    (function(ChangeType2) {
      ChangeType2["STYLING"] = "STYLING";
      ChangeType2["ADD_JSX"] = "ADD_JSX";
      ChangeType2["MOVE_JSX"] = "MOVE_JSX";
      ChangeType2["REMOVE_JSX"] = "REMOVE_JSX";
      ChangeType2["CHANGE_PROP"] = "CHANGE_PROP";
      ChangeType2["ADD_CLASS"] = "ADD_CLASS";
      ChangeType2["REMOVE_CLASS"] = "REMOVE_CLASS";
      ChangeType2["EDIT_TEXT"] = "EDIT_TEXT";
      ChangeType2["WRAP_DIV"] = "WRAP_DIV";
      ChangeType2["CHANGE_TAG"] = "CHANGE_TAG";
      ChangeType2["DUPLICATE"] = "DUPLICATE";
      ChangeType2["UNDO"] = "UNDO";
      ChangeType2["REDO"] = "REDO";
      ChangeType2["UNKNOWN"] = "UNKNOWN";
    })(ChangeType || (exports.ChangeType = ChangeType = {}));
    exports.CHANGE_TYPES_WITH_INSTANT_UNDO = [
      ChangeType.REMOVE_JSX,
      ChangeType.ADD_CLASS,
      ChangeType.STYLING
    ];
    var ChangeLedgerItem = class {
      constructor(type, changeName, changeFields, id) {
        this.prevIdToNewIdMap = {};
        this.id = id || (0, uuid_1.v4)();
        this.type = type;
        this.changeFields = changeFields;
        this.changeName = changeName;
        this._consumed = false;
        this._failed = false;
        this._instantUpdateSent = false;
        this._instantUpdateFinished = false;
        this._instantUpdateSuccessful = false;
        this._sendInstantUpdate = true;
        this.canInstantUpdateWhileFlushing = false;
        this._apiPromise = new Promise((resolve, reject) => {
          this._resolveApi = resolve;
          this._rejectApi = reject;
        });
      }
      resolveApi(data) {
        var _a;
        (_a = this._resolveApi) === null || _a === void 0 ? void 0 : _a.call(this, data);
      }
      rejectApi(reason) {
        var _a;
        if (this._apiRejectionAdded) {
          (_a = this._rejectApi) === null || _a === void 0 ? void 0 : _a.call(this, reason);
        }
      }
      needsToSendInstantUpdate() {
        return !this._instantUpdateSent && this._sendInstantUpdate;
      }
      markInstantUpdateSent() {
        this._instantUpdateSent = true;
      }
      markInstantUpdateFinished(instantUpdateData, instantUpdateSuccessful) {
        this._instantUpdateFinished = true;
        this._instantUpdateSuccessful = instantUpdateSuccessful;
        this._instantUpdateData = instantUpdateData;
      }
      getInstantUpdateData() {
        return this._instantUpdateData;
      }
      wasInstantUpdateSuccessful() {
        return this._instantUpdateSuccessful;
      }
      isInstantUpdateFinished() {
        return this._instantUpdateFinished;
      }
      markProcessedSucceeded() {
        this._consumed = true;
      }
      markProcessedFailed() {
        this._failed = true;
        this._consumed = true;
      }
      isFailed() {
        return this._failed;
      }
      needToProcessChange() {
        return !this._consumed;
      }
      onApiResolve(onFulfilled) {
        return this._apiPromise.then(onFulfilled);
      }
      onApiReject(onRejected) {
        this._apiRejectionAdded = true;
        return this._apiPromise.catch(onRejected);
      }
      doNotSendInstantUpdate() {
        this._sendInstantUpdate = false;
      }
      // For selecting/deslecting new elements after instant updates
      clearSelectedElementsAfterInstantUpdate() {
        this.elementKeyToSelectAfterInstantUpdate = null;
        this.elementKeysToMultiselectAfterInstantUpdate = null;
      }
      setSelectedElementsAfterInstantUpdate(selectedElementKey, multiselectedElementKeys) {
        this.elementKeyToSelectAfterInstantUpdate = selectedElementKey;
        this.elementKeysToMultiselectAfterInstantUpdate = multiselectedElementKeys;
      }
      clearSelectedElementsAfterUndoInstantUpdate() {
        this.elementKeyToSelectAfterUndoInstantUpdate = null;
        this.elementKeysToMultiselectAfterUndoInstantUpdate = null;
      }
      setSelectedElementsAfterUndoInstantUpdate(selectedElementKey, multiselectedElementKeys) {
        this.elementKeyToSelectAfterUndoInstantUpdate = selectedElementKey;
        this.elementKeysToMultiselectAfterUndoInstantUpdate = multiselectedElementKeys;
      }
      getElementKeyToSelectAfterInstantUpdate() {
        return this.elementKeyToSelectAfterInstantUpdate;
      }
      getElementKeysToMultiselectAfterInstantUpdate() {
        return this.elementKeysToMultiselectAfterInstantUpdate;
      }
      getElementKeyToSelectAfterUndoInstantUpdate() {
        return this.elementKeyToSelectAfterUndoInstantUpdate;
      }
      getElementKeysToMultiselectAfterUndoInstantUpdate() {
        return this.elementKeysToMultiselectAfterUndoInstantUpdate;
      }
      applyAllCodebaseIdChanges(prevIdToNewIdMap) {
        var _a, _b;
        const getNewKey = (prevKey) => {
          if (!prevKey) {
            return null;
          }
          const tempoElement = tempoElement_1.TempoElement.fromKey(prevKey);
          const codebaseId = tempoElement.codebaseId;
          const newCodebaseId = prevIdToNewIdMap[codebaseId];
          if (newCodebaseId) {
            return new tempoElement_1.TempoElement(newCodebaseId, tempoElement.storyboardId, tempoElement.uniquePath).getKey();
          }
          return null;
        };
        if (this.elementKeyToSelectAfterInstantUpdate) {
          const newElementKey = getNewKey(this.elementKeyToSelectAfterInstantUpdate);
          this.elementKeyToSelectAfterInstantUpdate = newElementKey || this.elementKeyToSelectAfterInstantUpdate;
        }
        if (this.elementKeysToMultiselectAfterInstantUpdate) {
          this.elementKeysToMultiselectAfterInstantUpdate = (_a = this.elementKeysToMultiselectAfterInstantUpdate) === null || _a === void 0 ? void 0 : _a.map((key) => {
            const newKey = getNewKey(key);
            return newKey || key;
          });
        }
        if (this.elementKeyToSelectAfterUndoInstantUpdate) {
          const newElementKey = getNewKey(this.elementKeyToSelectAfterUndoInstantUpdate);
          this.elementKeyToSelectAfterUndoInstantUpdate = newElementKey || this.elementKeyToSelectAfterUndoInstantUpdate;
        }
        if (this.elementKeysToMultiselectAfterUndoInstantUpdate) {
          this.elementKeysToMultiselectAfterUndoInstantUpdate = (_b = this.elementKeysToMultiselectAfterUndoInstantUpdate) === null || _b === void 0 ? void 0 : _b.map((key) => {
            const newKey = getNewKey(key);
            return newKey || key;
          });
        }
        this.applyCodebaseIdChanges(prevIdToNewIdMap);
      }
    };
    exports.ChangeLedgerItem = ChangeLedgerItem;
    var StylingChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.STYLING, "Styling", changeFields, id);
        this.canInstantUpdateWhileFlushing = true;
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseId, stylingChanges, stylingFramework, modifiers, customProperties } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/styling`,
          body: {
            reactElement: treeElementLookup[codebaseId],
            styling: stylingChanges,
            stylingFramework,
            modifiers,
            customProperties
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseId];
        if (newCodebaseId) {
          this.changeFields.codebaseId = newCodebaseId;
        }
      }
    };
    exports.StylingChange = StylingChange;
    var AddJsxChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.ADD_JSX, "Add Element", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToAddTo, beforeCodebaseId, afterCodebaseId, addCodebaseId, addNativeTag, fileContentsToSourceFrom, fileContentsSourceFilename, propsToSet, deletedStoryboardId, htmlForInstantUpdate } = this.changeFields;
        const body = {
          destinationElement: treeElementLookup[codebaseIdToAddTo],
          beforeElement: treeElementLookup[beforeCodebaseId || ""],
          afterElement: treeElementLookup[afterCodebaseId || ""],
          newElement: {},
          canvasId: activeCanvas.id,
          deletedStoryboardId,
          fileContentsToSourceFrom,
          fileContentsSourceFilename
        };
        if (addCodebaseId) {
          body.newElement = Object.assign({}, treeElementLookup[addCodebaseId]);
        } else if (addNativeTag) {
          body.newElement["type"] = "native";
          body.newElement["nativeTag"] = addNativeTag;
          body.newElement["componentName"] = addNativeTag;
        }
        if (propsToSet) {
          body.newElement["propsToSet"] = propsToSet;
        }
        if (!Object.keys(body.newElement).length) {
          delete body.newElement;
        }
        const hasInstantUpdate = Boolean(htmlForInstantUpdate);
        body["hasInstantUpdate"] = hasInstantUpdate;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/addJsxElement`,
          body,
          // Only show the success message if we do not have instant updates
          successToastMessage: hasInstantUpdate ? void 0 : "Successfully added"
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const fieldsToApply = [
          "codebaseIdToAddTo",
          "beforeCodebaseId",
          "afterCodebaseId",
          "addCodebaseId"
        ];
        fieldsToApply.forEach((field) => {
          const newCodebaseId = prevIdToNewIdMap[this.changeFields[field]];
          if (newCodebaseId) {
            this.changeFields[field] = newCodebaseId;
          }
        });
      }
    };
    exports.AddJsxChange = AddJsxChange;
    var MoveJsxChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.MOVE_JSX, "Move Element", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToMoveTo, codebaseIdToMove, afterCodebaseId, beforeCodebaseId, expectedCurrentParentCodebaseId } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/moveJsxElement`,
          body: {
            elementToMove: treeElementLookup[codebaseIdToMove],
            newContainerElement: treeElementLookup[codebaseIdToMoveTo],
            afterElement: treeElementLookup[afterCodebaseId || ""],
            beforeElement: treeElementLookup[beforeCodebaseId || ""],
            expectedCurrentParent: treeElementLookup[expectedCurrentParentCodebaseId || ""]
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const fieldsToApply = [
          "codebaseIdToMoveTo",
          "codebaseIdToMove",
          "afterCodebaseId",
          "beforeCodebaseId",
          "expectedCurrentParentCodebaseId"
        ];
        fieldsToApply.forEach((field) => {
          const newCodebaseId = prevIdToNewIdMap[this.changeFields[field]];
          if (newCodebaseId) {
            this.changeFields[field] = newCodebaseId;
          }
        });
      }
    };
    exports.MoveJsxChange = MoveJsxChange;
    var RemoveJsxChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        changeFields.codebaseIdsToRemove = Array.from(new Set(changeFields.codebaseIdsToRemove));
        super(ChangeType.REMOVE_JSX, "Delete Element", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdsToRemove } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/removeJsxElement`,
          body: {
            elementsToRemove: codebaseIdsToRemove.map((codebaseId) => treeElementLookup[codebaseId]).filter((element) => element)
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        this.changeFields.codebaseIdsToRemove = this.changeFields.codebaseIdsToRemove.map((codebaseId) => {
          const newCodebaseId = prevIdToNewIdMap[codebaseId];
          if (newCodebaseId) {
            return newCodebaseId;
          }
          return codebaseId;
        });
      }
    };
    exports.RemoveJsxChange = RemoveJsxChange;
    var ChangePropChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.CHANGE_PROP, "Change Prop", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToChange, propName, propValue } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/changePropValue`,
          body: {
            elementToModify: treeElementLookup[codebaseIdToChange],
            propName,
            propValue
          },
          successToastMessage: "Prop changed"
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseIdToChange];
        if (newCodebaseId) {
          this.changeFields.codebaseIdToChange = newCodebaseId;
        }
      }
    };
    exports.ChangePropChange = ChangePropChange;
    var WrapDivChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        changeFields.codebaseIdsToWrap = Array.from(new Set(changeFields.codebaseIdsToWrap));
        super(ChangeType.WRAP_DIV, "Wrap In Div", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdsToWrap } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/wrapInDiv`,
          body: {
            reactElements: codebaseIdsToWrap.map((codebaseId) => treeElementLookup[codebaseId])
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        this.changeFields.codebaseIdsToWrap = this.changeFields.codebaseIdsToWrap.map((codebaseId) => {
          const newCodebaseId = prevIdToNewIdMap[codebaseId];
          if (newCodebaseId) {
            return newCodebaseId;
          }
          return codebaseId;
        });
      }
    };
    exports.WrapDivChange = WrapDivChange;
    var DuplicateChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        changeFields.codebaseIdsToDuplicate = Array.from(new Set(changeFields.codebaseIdsToDuplicate));
        super(ChangeType.DUPLICATE, "Duplicate", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdsToDuplicate } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/duplicate`,
          body: {
            reactElements: codebaseIdsToDuplicate.map((codebaseId) => treeElementLookup[codebaseId])
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        this.changeFields.codebaseIdsToDuplicate = this.changeFields.codebaseIdsToDuplicate.map((codebaseId) => {
          const newCodebaseId = prevIdToNewIdMap[codebaseId];
          if (newCodebaseId) {
            return newCodebaseId;
          }
          return codebaseId;
        });
      }
    };
    exports.DuplicateChange = DuplicateChange;
    var ChangeTagChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.CHANGE_TAG, "Change Tag Name", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToChange, newTagName } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/changeElementTag`,
          body: {
            elementToModify: treeElementLookup[codebaseIdToChange],
            newTag: newTagName
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseIdToChange];
        if (newCodebaseId) {
          this.changeFields.codebaseIdToChange = newCodebaseId;
        }
      }
    };
    exports.ChangeTagChange = ChangeTagChange;
    var AddClassChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.ADD_CLASS, "Add Class", changeFields, id);
        this.canInstantUpdateWhileFlushing = true;
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToAddClass, className, addingTailwindClass, modifiers, customProperties } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/addClass`,
          body: {
            reactElement: treeElementLookup[codebaseIdToAddClass],
            className,
            stylingFramework: addingTailwindClass ? StylingFramework.TAILWIND : null,
            modifiers,
            customProperties
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseIdToAddClass];
        if (newCodebaseId) {
          this.changeFields.codebaseIdToAddClass = newCodebaseId;
        }
      }
    };
    exports.AddClassChange = AddClassChange;
    var RemoveClassChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.REMOVE_CLASS, "Remove Class", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToRemoveClass, className } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/removeClass`,
          body: {
            reactElement: treeElementLookup[codebaseIdToRemoveClass],
            className
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseIdToRemoveClass];
        if (newCodebaseId) {
          this.changeFields.codebaseIdToRemoveClass = newCodebaseId;
        }
      }
    };
    exports.RemoveClassChange = RemoveClassChange;
    var EditTextChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.EDIT_TEXT, "Edit Text", changeFields, id);
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { codebaseIdToEditText, newText, oldText } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/mutate/editText`,
          body: {
            element: treeElementLookup[codebaseIdToEditText],
            newText,
            oldText
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
        const newCodebaseId = prevIdToNewIdMap[this.changeFields.codebaseIdToEditText];
        if (newCodebaseId) {
          this.changeFields.codebaseIdToEditText = newCodebaseId;
        }
      }
    };
    exports.EditTextChange = EditTextChange;
    var UndoChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        var _a;
        super(ChangeType.UNDO, "Undo", changeFields, id);
        if ((_a = changeFields.changeToUndo) === null || _a === void 0 ? void 0 : _a.canInstantUpdateWhileFlushing) {
          this.canInstantUpdateWhileFlushing = true;
        }
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { changeToUndo } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/activities/undoChangeToFiles`,
          body: {
            latestUuid: changeToUndo.activityId
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
      }
    };
    exports.UndoChange = UndoChange;
    var RedoChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        var _a;
        super(ChangeType.REDO, "Redo", changeFields, id);
        if ((_a = changeFields.changeToRedo) === null || _a === void 0 ? void 0 : _a.canInstantUpdateWhileFlushing) {
          this.canInstantUpdateWhileFlushing = true;
        }
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        const { changeToRedo } = this.changeFields;
        return {
          urlPath: `canvases/${canvasId}/parseAndMutate/activities/redoChangeToFiles`,
          body: {
            changeToRedoId: changeToRedo.activityId
          }
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
      }
    };
    exports.RedoChange = RedoChange;
    var UnknownChange = class extends ChangeLedgerItem {
      constructor(changeFields, id) {
        super(ChangeType.UNKNOWN, "", changeFields, id);
        this.markProcessedSucceeded();
        this.doNotSendInstantUpdate();
      }
      prepareApiRequest(canvasId, treeElementLookup, activeCanvas) {
        throw Error("Unsupported operation");
        return {
          urlPath: ``,
          body: {}
        };
      }
      applyCodebaseIdChanges(prevIdToNewIdMap) {
      }
    };
    exports.UnknownChange = UnknownChange;
    var reconstructChangeLedgerClass = (plainJsObject) => {
      if (!plainJsObject || !plainJsObject.type) {
        return null;
      }
      const changeType = plainJsObject.type;
      const changeFields = plainJsObject.changeFields;
      const id = plainJsObject.id;
      const getChangeForType = () => {
        switch (changeType) {
          case ChangeType.STYLING:
            return new StylingChange(changeFields, id);
          case ChangeType.ADD_JSX:
            return new AddJsxChange(changeFields, id);
          case ChangeType.REMOVE_JSX:
            return new RemoveJsxChange(changeFields, id);
          case ChangeType.MOVE_JSX:
            return new MoveJsxChange(changeFields, id);
          case ChangeType.CHANGE_PROP:
            return new ChangePropChange(changeFields, id);
          case ChangeType.ADD_CLASS:
            return new AddClassChange(changeFields, id);
          case ChangeType.REMOVE_CLASS:
            return new RemoveClassChange(changeFields, id);
          case ChangeType.WRAP_DIV:
            return new WrapDivChange(changeFields, id);
          case ChangeType.CHANGE_TAG:
            return new ChangeTagChange(changeFields, id);
          case ChangeType.DUPLICATE:
            return new DuplicateChange(changeFields, id);
          case ChangeType.EDIT_TEXT:
            return new EditTextChange(changeFields, id);
          case ChangeType.UNDO:
            changeFields.changeToUndo = (0, exports.reconstructChangeLedgerClass)(changeFields.changeToUndo);
            return new UndoChange(changeFields, id);
          case ChangeType.REDO:
            changeFields.changeToRedo = (0, exports.reconstructChangeLedgerClass)(changeFields.changeToRedo);
            return new RedoChange(changeFields, id);
          case ChangeType.UNKNOWN:
            return new UnknownChange(changeFields, id);
          default:
            throw new Error(`Unknown change type: ${changeType}`);
        }
      };
      const change = getChangeForType();
      Object.keys(plainJsObject).forEach((key) => {
        if (["type", "changeFields", "id"].includes(key)) {
          return;
        }
        change[key] = plainJsObject[key];
      });
      return change;
    };
    exports.reconstructChangeLedgerClass = reconstructChangeLedgerClass;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/constantsAndTypes.js
var require_constantsAndTypes = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/constantsAndTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.STORYBOARD_HYDRATION_STATUS = exports.SELECT_OR_HOVER_STORYBOARD = exports.DELETE_STYLE_CONSTANT = exports.FIXED_IFRAME_MESSAGE_IDS = exports.INHERITABLE_CSS_PROPS = exports.CSS_VALUES_TO_COLLECT_FOR_PARENT = exports.CSS_VALUES_TO_COLLECT = void 0;
    exports.CSS_VALUES_TO_COLLECT = /* @__PURE__ */ new Set([
      "display",
      "flex-direction",
      "flex-grow",
      "flex-shrink",
      "font-family",
      "align-items",
      "justify-content",
      "column-gap",
      "row-gap",
      "flex-wrap",
      "align-content",
      "overflow",
      "text-align",
      "width",
      "max-width",
      "min-width",
      "height",
      "max-height",
      "min-height",
      "font-size",
      "line-height",
      "padding",
      "padding-top",
      "padding-left",
      "padding-right",
      "padding-bottom",
      "margin",
      "margin-top",
      "margin-left",
      "margin-right",
      "margin-bottom",
      "border-radius",
      "font-family",
      "font-weight",
      "object-fit",
      "background-clip",
      "border-left-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "background-color",
      "color",
      "transform",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "letter-spacing",
      "opacity",
      "font-style",
      "text-decoration-line",
      "top",
      "left",
      "right",
      "bottom",
      "position",
      "background-image"
    ]);
    exports.CSS_VALUES_TO_COLLECT_FOR_PARENT = /* @__PURE__ */ new Set([
      "display",
      "flex-direction"
    ]);
    exports.INHERITABLE_CSS_PROPS = {
      azimuth: true,
      "border-collapse": true,
      "border-spacing": true,
      "caption-side": true,
      color: true,
      cursor: true,
      direction: true,
      "empty-cells": true,
      "font-family": true,
      "font-size": true,
      "font-style": true,
      "font-variant": true,
      "font-weight": true,
      font: true,
      "letter-spacing": true,
      "line-height": true,
      "list-style-image": true,
      "list-style-position": true,
      "list-style-type": true,
      "list-style": true,
      orphans: true,
      quotes: true,
      "text-align": true,
      "text-indent": true,
      "text-transform": true,
      visibility: true,
      "white-space": true,
      widows: true,
      "word-spacing": true
    };
    var FIXED_IFRAME_MESSAGE_IDS;
    (function(FIXED_IFRAME_MESSAGE_IDS2) {
      FIXED_IFRAME_MESSAGE_IDS2["HOVERED_ELEMENT_KEY"] = "HOVERED_ELEMENT_KEY";
      FIXED_IFRAME_MESSAGE_IDS2["SELECTED_ELEMENT_KEY"] = "SELECTED_ELEMENT_KEY";
      FIXED_IFRAME_MESSAGE_IDS2["MULTI_SELECTED_ELEMENT_KEYS"] = "MULTI_SELECTED_ELEMENT_KEYS";
      FIXED_IFRAME_MESSAGE_IDS2["CONTEXT_REQUESTED"] = "CONTEXT_REQUESTED";
      FIXED_IFRAME_MESSAGE_IDS2["WHEEL_EVENT"] = "WHEEL_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["NAV_TREE"] = "NAV_TREE";
      FIXED_IFRAME_MESSAGE_IDS2["PROCESSED_CSS_RULES_FOR_ELEMENT"] = "PROCESSED_CSS_RULES_FOR_ELEMENT";
      FIXED_IFRAME_MESSAGE_IDS2["CSS_EVALS_FOR_ELEMENT"] = "CSS_EVALS_FOR_ELEMENT";
      FIXED_IFRAME_MESSAGE_IDS2["ELEMENT_CLASS_LIST"] = "ELEMENT_CLASS_LIST";
      FIXED_IFRAME_MESSAGE_IDS2["KEY_DOWN_EVENT"] = "KEY_DOWN_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["KEY_UP_EVENT"] = "KEY_UP_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["MOUSE_MOVE_EVENT"] = "MOUSE_MOVE_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["DRAG_START_EVENT"] = "DRAG_START_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["DRAG_END_EVENT"] = "DRAG_END_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["DRAG_CANCEL_EVENT"] = "DRAG_CANCEL_EVENT";
      FIXED_IFRAME_MESSAGE_IDS2["LATEST_HREF"] = "LATEST_HREF";
      FIXED_IFRAME_MESSAGE_IDS2["LATEST_HYDRATION_ERROR_STATUS"] = "LATEST_HYDRATION_ERROR_STATUS";
      FIXED_IFRAME_MESSAGE_IDS2["START_EDITING_TEXT"] = "START_EDITING_TEXT";
      FIXED_IFRAME_MESSAGE_IDS2["EDITED_TEXT"] = "EDITED_TEXT";
      FIXED_IFRAME_MESSAGE_IDS2["INSTANT_UPDATE_DONE"] = "INSTANT_UPDATE_DONE";
      FIXED_IFRAME_MESSAGE_IDS2["EDIT_DYNAMIC_TEXT"] = "EDIT_DYNAMIC_TEXT";
    })(FIXED_IFRAME_MESSAGE_IDS || (exports.FIXED_IFRAME_MESSAGE_IDS = FIXED_IFRAME_MESSAGE_IDS = {}));
    exports.DELETE_STYLE_CONSTANT = null;
    exports.SELECT_OR_HOVER_STORYBOARD = "SELECT_OR_HOVER_STORYBOARD";
    var STORYBOARD_HYDRATION_STATUS;
    (function(STORYBOARD_HYDRATION_STATUS2) {
      STORYBOARD_HYDRATION_STATUS2["OTHER_ERROR"] = "other_error";
      STORYBOARD_HYDRATION_STATUS2["ERROR"] = "error";
      STORYBOARD_HYDRATION_STATUS2["NO_ERROR"] = "no_error";
    })(STORYBOARD_HYDRATION_STATUS || (exports.STORYBOARD_HYDRATION_STATUS = STORYBOARD_HYDRATION_STATUS = {}));
  }
});

// node_modules/specificity/dist/specificity.mjs
var specificity_exports = {};
__export(specificity_exports, {
  calculate: () => calculate,
  compare: () => compare
});
var calculate, calculateSingle, compare;
var init_specificity = __esm({
  "node_modules/specificity/dist/specificity.mjs"() {
    calculate = function(input) {
      var selectors, selector, i, len, results = [];
      selectors = input.split(",");
      for (i = 0, len = selectors.length; i < len; i += 1) {
        selector = selectors[i];
        if (selector.length > 0) {
          results.push(calculateSingle(selector));
        }
      }
      return results;
    };
    calculateSingle = function(input) {
      var selector = input, findMatch, typeCount = {
        "a": 0,
        "b": 0,
        "c": 0
      }, parts = [], attributeRegex = /(\[[^\]]+\])/g, idRegex = /(#[^\#\s\+>~\.\[:\)]+)/g, classRegex = /(\.[^\s\+>~\.\[:\)]+)/g, pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, pseudoClassWithBracketsRegex = /(:(?!not|global|local)[\w-]+\([^\)]*\))/gi, pseudoClassRegex = /(:(?!not|global|local)[^\s\+>~\.\[:]+)/g, elementRegex = /([^\s\+>~\.\[:]+)/g;
      findMatch = function(regex, type) {
        var matches, i, len, match, index, length;
        if (regex.test(selector)) {
          matches = selector.match(regex);
          for (i = 0, len = matches.length; i < len; i += 1) {
            typeCount[type] += 1;
            match = matches[i];
            index = selector.indexOf(match);
            length = match.length;
            parts.push({
              selector: input.substr(index, length),
              type,
              index,
              length
            });
            selector = selector.replace(match, Array(length + 1).join(" "));
          }
        }
      };
      (function() {
        var replaceWithPlainText = function(regex) {
          var matches, i, len, match;
          if (regex.test(selector)) {
            matches = selector.match(regex);
            for (i = 0, len = matches.length; i < len; i += 1) {
              match = matches[i];
              selector = selector.replace(match, Array(match.length + 1).join("A"));
            }
          }
        }, escapeHexadecimalRegex = /\\[0-9A-Fa-f]{6}\s?/g, escapeHexadecimalRegex2 = /\\[0-9A-Fa-f]{1,5}\s/g, escapeSpecialCharacter = /\\./g;
        replaceWithPlainText(escapeHexadecimalRegex);
        replaceWithPlainText(escapeHexadecimalRegex2);
        replaceWithPlainText(escapeSpecialCharacter);
      })();
      (function() {
        var regex = /{[^]*/gm, matches, i, len, match;
        if (regex.test(selector)) {
          matches = selector.match(regex);
          for (i = 0, len = matches.length; i < len; i += 1) {
            match = matches[i];
            selector = selector.replace(match, Array(match.length + 1).join(" "));
          }
        }
      })();
      findMatch(attributeRegex, "b");
      findMatch(idRegex, "a");
      findMatch(classRegex, "b");
      findMatch(pseudoElementRegex, "c");
      findMatch(pseudoClassWithBracketsRegex, "b");
      findMatch(pseudoClassRegex, "b");
      selector = selector.replace(/[\*\s\+>~]/g, " ");
      selector = selector.replace(/[#\.]/g, " ");
      selector = selector.replace(/:not/g, "    ");
      selector = selector.replace(/:local/g, "      ");
      selector = selector.replace(/:global/g, "       ");
      selector = selector.replace(/[\(\)]/g, " ");
      findMatch(elementRegex, "c");
      parts.sort(function(a, b) {
        return a.index - b.index;
      });
      return {
        selector: input,
        specificity: "0," + typeCount.a.toString() + "," + typeCount.b.toString() + "," + typeCount.c.toString(),
        specificityArray: [0, typeCount.a, typeCount.b, typeCount.c],
        parts
      };
    };
    compare = function(a, b) {
      var aSpecificity, bSpecificity, i;
      if (typeof a === "string") {
        if (a.indexOf(",") !== -1) {
          throw "Invalid CSS selector";
        } else {
          aSpecificity = calculateSingle(a)["specificityArray"];
        }
      } else if (Array.isArray(a)) {
        if (a.filter(function(e) {
          return typeof e === "number";
        }).length !== 4) {
          throw "Invalid specificity array";
        } else {
          aSpecificity = a;
        }
      } else {
        throw "Invalid CSS selector or specificity array";
      }
      if (typeof b === "string") {
        if (b.indexOf(",") !== -1) {
          throw "Invalid CSS selector";
        } else {
          bSpecificity = calculateSingle(b)["specificityArray"];
        }
      } else if (Array.isArray(b)) {
        if (b.filter(function(e) {
          return typeof e === "number";
        }).length !== 4) {
          throw "Invalid specificity array";
        } else {
          bSpecificity = b;
        }
      } else {
        throw "Invalid CSS selector or specificity array";
      }
      for (i = 0; i < 4; i += 1) {
        if (aSpecificity[i] < bSpecificity[i]) {
          return -1;
        } else if (aSpecificity[i] > bSpecificity[i]) {
          return 1;
        }
      }
      return 0;
    };
  }
});

// node_modules/css-selector-parser/dist/cjs/indexes.js
var require_indexes = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/indexes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createRegularIndex = exports.createMulticharIndex = exports.emptyRegularIndex = exports.emptyMulticharIndex = void 0;
    exports.emptyMulticharIndex = {};
    exports.emptyRegularIndex = {};
    function extendIndex(item, index) {
      var currentIndex = index;
      for (var pos = 0; pos < item.length; pos++) {
        var isLast = pos === item.length - 1;
        var char = item.charAt(pos);
        var charIndex = currentIndex[char] || (currentIndex[char] = { chars: {} });
        if (isLast) {
          charIndex.self = item;
        }
        currentIndex = charIndex.chars;
      }
    }
    function createMulticharIndex(items) {
      if (items.length === 0) {
        return exports.emptyMulticharIndex;
      }
      var index = {};
      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        extendIndex(item, index);
      }
      return index;
    }
    exports.createMulticharIndex = createMulticharIndex;
    function createRegularIndex(items) {
      if (items.length === 0) {
        return exports.emptyRegularIndex;
      }
      var result = {};
      for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        result[item] = true;
      }
      return result;
    }
    exports.createRegularIndex = createRegularIndex;
  }
});

// node_modules/css-selector-parser/dist/cjs/pseudo-signatures.js
var require_pseudo_signatures = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/pseudo-signatures.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculatePseudoSignatures = exports.inverseCategories = exports.defaultPseudoSignature = exports.emptyPseudoSignatures = void 0;
    exports.emptyPseudoSignatures = {};
    exports.defaultPseudoSignature = {
      type: "String",
      optional: true
    };
    function calculatePseudoSignature(types) {
      var result = {
        type: "NoArgument",
        optional: false
      };
      function setResultType(type2) {
        if (result.type && result.type !== type2 && result.type !== "NoArgument") {
          throw new Error('Conflicting pseudo-class argument type: "'.concat(result.type, '" vs "').concat(type2, '".'));
        }
        result.type = type2;
      }
      for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        if (type === "NoArgument") {
          result.optional = true;
        }
        if (type === "Formula") {
          setResultType("Formula");
        }
        if (type === "FormulaOfSelector") {
          setResultType("Formula");
          result.ofSelector = true;
        }
        if (type === "String") {
          setResultType("String");
        }
        if (type === "Selector") {
          setResultType("Selector");
        }
      }
      return result;
    }
    function inverseCategories(obj) {
      var result = {};
      for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var category = _a[_i];
        var items = obj[category];
        if (items) {
          for (var _b = 0, _c = items; _b < _c.length; _b++) {
            var item = _c[_b];
            (result[item] || (result[item] = [])).push(category);
          }
        }
      }
      return result;
    }
    exports.inverseCategories = inverseCategories;
    function calculatePseudoSignatures(definitions) {
      var pseudoClassesToArgumentTypes = inverseCategories(definitions);
      var result = {};
      for (var _i = 0, _a = Object.keys(pseudoClassesToArgumentTypes); _i < _a.length; _i++) {
        var pseudoClass = _a[_i];
        var argumentTypes = pseudoClassesToArgumentTypes[pseudoClass];
        if (argumentTypes) {
          result[pseudoClass] = calculatePseudoSignature(argumentTypes);
        }
      }
      return result;
    }
    exports.calculatePseudoSignatures = calculatePseudoSignatures;
  }
});

// node_modules/css-selector-parser/dist/cjs/syntax-definitions.js
var require_syntax_definitions = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/syntax-definitions.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssSyntaxDefinitions = exports.extendSyntaxDefinition = exports.getXmlOptions = void 0;
    var emptyXmlOptions = {};
    var defaultXmlOptions = { wildcard: true };
    function getXmlOptions(param) {
      if (param) {
        if (typeof param === "boolean") {
          return defaultXmlOptions;
        } else {
          return param;
        }
      } else {
        return emptyXmlOptions;
      }
    }
    exports.getXmlOptions = getXmlOptions;
    function withMigration(migration, merge) {
      return function(base, extension) {
        return merge(migration(base), migration(extension));
      };
    }
    function withNoNegative(merge) {
      return function(base, extension) {
        var result = merge(base, extension);
        if (!result) {
          throw new Error("Syntax definition cannot be null or undefined.");
        }
        return result;
      };
    }
    function withPositive(positive, merge) {
      return function(base, extension) {
        if (extension === true) {
          return positive;
        }
        return merge(base === true ? positive : base, extension);
      };
    }
    function mergeSection(values) {
      return function(base, extension) {
        if (!extension || !base) {
          return extension;
        }
        if (typeof extension !== "object" || extension === null) {
          throw new Error("Unexpected syntax definition extension type: ".concat(extension, "."));
        }
        var result = __assign({}, base);
        for (var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          var mergeSchema = values[key];
          result[key] = mergeSchema(base[key], value);
        }
        return result;
      };
    }
    function replaceValueIfSpecified(base, extension) {
      if (extension !== void 0) {
        return extension;
      }
      return base;
    }
    function concatArray(base, extension) {
      if (!extension) {
        return base;
      }
      if (!base) {
        return extension;
      }
      return base.concat(extension);
    }
    function mergeDefinitions(base, extension) {
      if (!extension) {
        return base;
      }
      if (!base) {
        return extension;
      }
      var result = __assign({}, base);
      for (var _i = 0, _a = Object.entries(extension); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (!value) {
          delete result[key];
          continue;
        }
        var baseValue = base[key];
        if (!baseValue) {
          result[key] = value;
          continue;
        }
        result[key] = baseValue.concat(value);
      }
      return result;
    }
    exports.extendSyntaxDefinition = withNoNegative(mergeSection({
      baseSyntax: replaceValueIfSpecified,
      tag: withPositive(defaultXmlOptions, mergeSection({
        wildcard: replaceValueIfSpecified
      })),
      ids: replaceValueIfSpecified,
      classNames: replaceValueIfSpecified,
      namespace: withPositive(defaultXmlOptions, mergeSection({
        wildcard: replaceValueIfSpecified
      })),
      combinators: concatArray,
      attributes: mergeSection({
        operators: concatArray,
        caseSensitivityModifiers: concatArray,
        unknownCaseSensitivityModifiers: replaceValueIfSpecified
      }),
      pseudoClasses: mergeSection({
        unknown: replaceValueIfSpecified,
        definitions: mergeDefinitions
      }),
      pseudoElements: mergeSection({
        unknown: replaceValueIfSpecified,
        notation: replaceValueIfSpecified,
        definitions: withMigration(function(definitions) {
          return Array.isArray(definitions) ? { NoArgument: definitions } : definitions;
        }, mergeDefinitions)
      })
    }));
    var css1SyntaxDefinition = {
      tag: {},
      ids: true,
      classNames: true,
      combinators: [],
      pseudoElements: {
        unknown: "reject",
        notation: "singleColon",
        definitions: ["first-letter", "first-line"]
      },
      pseudoClasses: {
        unknown: "reject",
        definitions: {
          NoArgument: ["link", "visited", "active"]
        }
      }
    };
    var css2SyntaxDefinition = (0, exports.extendSyntaxDefinition)(css1SyntaxDefinition, {
      tag: { wildcard: true },
      combinators: [">", "+"],
      attributes: {
        unknownCaseSensitivityModifiers: "reject",
        operators: ["=", "~=", "|="]
      },
      pseudoElements: {
        definitions: ["before", "after"]
      },
      pseudoClasses: {
        unknown: "reject",
        definitions: {
          NoArgument: ["hover", "focus", "first-child"],
          String: ["lang"]
        }
      }
    });
    var selectors3SyntaxDefinition = (0, exports.extendSyntaxDefinition)(css2SyntaxDefinition, {
      namespace: {
        wildcard: true
      },
      combinators: ["~"],
      attributes: {
        operators: ["^=", "$=", "*="]
      },
      pseudoElements: {
        notation: "both"
      },
      pseudoClasses: {
        definitions: {
          NoArgument: [
            "root",
            "last-child",
            "first-of-type",
            "last-of-type",
            "only-child",
            "only-of-type",
            "empty",
            "target",
            "enabled",
            "disabled",
            "checked",
            "indeterminate"
          ],
          Formula: ["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"],
          Selector: ["not"]
        }
      }
    });
    var selectors4SyntaxDefinition = (0, exports.extendSyntaxDefinition)(selectors3SyntaxDefinition, {
      combinators: ["||"],
      attributes: {
        caseSensitivityModifiers: ["i", "I", "s", "S"]
      },
      pseudoClasses: {
        definitions: {
          NoArgument: [
            "any-link",
            "local-link",
            "target-within",
            "scope",
            "current",
            "past",
            "future",
            "focus-within",
            "focus-visible",
            "read-write",
            "read-only",
            "placeholder-shown",
            "default",
            "valid",
            "invalid",
            "in-range",
            "out-of-range",
            "required",
            "optional",
            "blank",
            "user-invalid"
          ],
          Formula: ["nth-col", "nth-last-col"],
          String: ["dir"],
          FormulaOfSelector: ["nth-child", "nth-last-child"],
          Selector: ["current", "is", "where", "has"]
        }
      }
    });
    var progressiveSyntaxDefinition = (0, exports.extendSyntaxDefinition)(selectors4SyntaxDefinition, {
      pseudoElements: {
        unknown: "accept"
      },
      pseudoClasses: {
        unknown: "accept"
      },
      attributes: {
        unknownCaseSensitivityModifiers: "accept"
      }
    });
    exports.cssSyntaxDefinitions = {
      css1: css1SyntaxDefinition,
      css2: css2SyntaxDefinition,
      css3: selectors3SyntaxDefinition,
      "selectors-3": selectors3SyntaxDefinition,
      "selectors-4": selectors4SyntaxDefinition,
      latest: selectors4SyntaxDefinition,
      progressive: progressiveSyntaxDefinition
    };
  }
});

// node_modules/css-selector-parser/dist/cjs/utils.js
var require_utils = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.escapeString = exports.escapeIdentifier = exports.maxHexLength = exports.digitsChars = exports.quoteChars = exports.whitespaceChars = exports.stringRenderEscapeChars = exports.identEscapeChars = exports.isHex = exports.isIdent = exports.isIdentStart = void 0;
    function isIdentStart(c) {
      return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "-" || c === "_" || c === "\\" || c >= " ";
    }
    exports.isIdentStart = isIdentStart;
    function isIdent(c) {
      return c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "-" || c === "_" || c >= " ";
    }
    exports.isIdent = isIdent;
    function isHex(c) {
      return c >= "a" && c <= "f" || c >= "A" && c <= "F" || c >= "0" && c <= "9";
    }
    exports.isHex = isHex;
    exports.identEscapeChars = {
      "!": true,
      '"': true,
      "#": true,
      $: true,
      "%": true,
      "&": true,
      "'": true,
      "(": true,
      ")": true,
      "*": true,
      "+": true,
      ",": true,
      ".": true,
      "/": true,
      ";": true,
      "<": true,
      "=": true,
      ">": true,
      "?": true,
      "@": true,
      "[": true,
      "\\": true,
      "]": true,
      "^": true,
      "`": true,
      "{": true,
      "|": true,
      "}": true,
      "~": true
    };
    exports.stringRenderEscapeChars = {
      "\n": true,
      "\r": true,
      "	": true,
      "\f": true,
      "\v": true
    };
    exports.whitespaceChars = {
      " ": true,
      "	": true,
      "\n": true,
      "\r": true,
      "\f": true
    };
    exports.quoteChars = {
      '"': true,
      "'": true
    };
    exports.digitsChars = {
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true
    };
    exports.maxHexLength = 6;
    function escapeIdentifier(s) {
      var len = s.length;
      var result = "";
      var i = 0;
      while (i < len) {
        var chr = s.charAt(i);
        if (exports.identEscapeChars[chr] || chr === "-" && i === 1 && s.charAt(0) === "-") {
          result += "\\" + chr;
        } else {
          if (chr === "-" || chr === "_" || chr >= "A" && chr <= "Z" || chr >= "a" && chr <= "z" || chr >= "0" && chr <= "9" && i !== 0 && !(i === 1 && s.charAt(0) === "-")) {
            result += chr;
          } else {
            var charCode = chr.charCodeAt(0);
            if ((charCode & 63488) === 55296) {
              var extraCharCode = s.charCodeAt(i++);
              if ((charCode & 64512) !== 55296 || (extraCharCode & 64512) !== 56320) {
                throw Error("UCS-2(decode): illegal sequence");
              }
              charCode = ((charCode & 1023) << 10) + (extraCharCode & 1023) + 65536;
            }
            result += "\\" + charCode.toString(16) + " ";
          }
        }
        i++;
      }
      return result.trim();
    }
    exports.escapeIdentifier = escapeIdentifier;
    function escapeString(s) {
      var len = s.length;
      var result = "";
      var i = 0;
      while (i < len) {
        var chr = s.charAt(i);
        if (chr === '"') {
          chr = '\\"';
        } else if (chr === "\\") {
          chr = "\\\\";
        } else if (exports.stringRenderEscapeChars[chr]) {
          chr = "\\" + chr.charCodeAt(0).toString(16) + (i === len - 1 ? "" : " ");
        }
        result += chr;
        i++;
      }
      return '"'.concat(result, '"');
    }
    exports.escapeString = escapeString;
  }
});

// node_modules/css-selector-parser/dist/cjs/parser.js
var require_parser = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createParser = void 0;
    var indexes_js_1 = require_indexes();
    var pseudo_signatures_js_1 = require_pseudo_signatures();
    var syntax_definitions_js_1 = require_syntax_definitions();
    var utils_js_1 = require_utils();
    var errorPrefix = "css-selector-parser parse error: ";
    function createParser(options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.syntax, syntax = _a === void 0 ? "latest" : _a, substitutes = options.substitutes, _b = options.strict, strict = _b === void 0 ? true : _b;
      var syntaxDefinition = typeof syntax === "object" ? syntax : syntax_definitions_js_1.cssSyntaxDefinitions[syntax];
      if (syntaxDefinition.baseSyntax) {
        syntaxDefinition = (0, syntax_definitions_js_1.extendSyntaxDefinition)(syntax_definitions_js_1.cssSyntaxDefinitions[syntaxDefinition.baseSyntax], syntaxDefinition);
      }
      var _c = syntaxDefinition.tag ? [true, Boolean((0, syntax_definitions_js_1.getXmlOptions)(syntaxDefinition.tag).wildcard)] : [false, false], tagNameEnabled = _c[0], tagNameWildcardEnabled = _c[1];
      var idEnabled = Boolean(syntaxDefinition.ids);
      var classNamesEnabled = Boolean(syntaxDefinition.classNames);
      var namespaceEnabled = Boolean(syntaxDefinition.namespace);
      var namespaceWildcardEnabled = syntaxDefinition.namespace && (syntaxDefinition.namespace === true || syntaxDefinition.namespace.wildcard === true);
      if (namespaceEnabled && !tagNameEnabled) {
        throw new Error("".concat(errorPrefix, "Namespaces cannot be enabled while tags are disabled."));
      }
      var substitutesEnabled = Boolean(substitutes);
      var combinatorsIndex = syntaxDefinition.combinators ? (0, indexes_js_1.createMulticharIndex)(syntaxDefinition.combinators) : indexes_js_1.emptyMulticharIndex;
      var _d = syntaxDefinition.attributes ? [
        true,
        syntaxDefinition.attributes.operators ? (0, indexes_js_1.createMulticharIndex)(syntaxDefinition.attributes.operators) : indexes_js_1.emptyMulticharIndex,
        syntaxDefinition.attributes.caseSensitivityModifiers ? (0, indexes_js_1.createRegularIndex)(syntaxDefinition.attributes.caseSensitivityModifiers) : indexes_js_1.emptyRegularIndex,
        syntaxDefinition.attributes.unknownCaseSensitivityModifiers === "accept"
      ] : [false, indexes_js_1.emptyMulticharIndex, indexes_js_1.emptyRegularIndex, false], attributesEnabled = _d[0], attributesOperatorsIndex = _d[1], attributesCaseSensitivityModifiers = _d[2], attributesAcceptUnknownCaseSensitivityModifiers = _d[3];
      var attributesCaseSensitivityModifiersEnabled = attributesAcceptUnknownCaseSensitivityModifiers || Object.keys(attributesCaseSensitivityModifiers).length > 0;
      var _e = syntaxDefinition.pseudoClasses ? [
        true,
        syntaxDefinition.pseudoClasses.definitions ? (0, pseudo_signatures_js_1.calculatePseudoSignatures)(syntaxDefinition.pseudoClasses.definitions) : pseudo_signatures_js_1.emptyPseudoSignatures,
        syntaxDefinition.pseudoClasses.unknown === "accept"
      ] : [false, pseudo_signatures_js_1.emptyPseudoSignatures, false], pseudoClassesEnabled = _e[0], pseudoClassesDefinitions = _e[1], pseudoClassesAcceptUnknown = _e[2];
      var _f = syntaxDefinition.pseudoElements ? [
        true,
        syntaxDefinition.pseudoElements.notation === "singleColon" || syntaxDefinition.pseudoElements.notation === "both",
        !syntaxDefinition.pseudoElements.notation || syntaxDefinition.pseudoElements.notation === "doubleColon" || syntaxDefinition.pseudoElements.notation === "both",
        syntaxDefinition.pseudoElements.definitions ? (0, pseudo_signatures_js_1.calculatePseudoSignatures)(Array.isArray(syntaxDefinition.pseudoElements.definitions) ? { NoArgument: syntaxDefinition.pseudoElements.definitions } : syntaxDefinition.pseudoElements.definitions) : pseudo_signatures_js_1.emptyPseudoSignatures,
        syntaxDefinition.pseudoElements.unknown === "accept"
      ] : [false, false, false, pseudo_signatures_js_1.emptyPseudoSignatures, false], pseudoElementsEnabled = _f[0], pseudoElementsSingleColonNotationEnabled = _f[1], pseudoElementsDoubleColonNotationEnabled = _f[2], pseudoElementsDefinitions = _f[3], pseudoElementsAcceptUnknown = _f[4];
      var str = "";
      var l = str.length;
      var pos = 0;
      var chr = "";
      var is = function(comparison) {
        return chr === comparison;
      };
      var isTagStart = function() {
        return is("*") || (0, utils_js_1.isIdentStart)(chr);
      };
      var rewind = function(newPos) {
        pos = newPos;
        chr = str.charAt(pos);
      };
      var next = function() {
        pos++;
        chr = str.charAt(pos);
      };
      var readAndNext = function() {
        var current = chr;
        pos++;
        chr = str.charAt(pos);
        return current;
      };
      function fail(errorMessage) {
        var position = Math.min(l - 1, pos);
        var error = new Error("".concat(errorPrefix).concat(errorMessage, " Pos: ").concat(position, "."));
        error.position = position;
        error.name = "ParserError";
        throw error;
      }
      function assert(condition, errorMessage) {
        if (!condition) {
          return fail(errorMessage);
        }
      }
      var assertNonEof = function() {
        assert(pos < l, "Unexpected end of input.");
      };
      var isEof = function() {
        return pos >= l;
      };
      var pass = function(character) {
        assert(pos < l, 'Expected "'.concat(character, '" but end of input reached.'));
        assert(chr === character, 'Expected "'.concat(character, '" but "').concat(chr, '" found.'));
        pos++;
        chr = str.charAt(pos);
      };
      function matchMulticharIndex(index) {
        var match = matchMulticharIndexPos(index, pos);
        if (match) {
          pos += match.length;
          chr = str.charAt(pos);
          return match;
        }
      }
      function matchMulticharIndexPos(index, subPos) {
        var char = str.charAt(subPos);
        var charIndex = index[char];
        if (charIndex) {
          var subMatch = matchMulticharIndexPos(charIndex.chars, subPos + 1);
          if (subMatch) {
            return subMatch;
          }
          if (charIndex.self) {
            return charIndex.self;
          }
        }
      }
      function parseHex() {
        var hex = readAndNext();
        var count = 1;
        while ((0, utils_js_1.isHex)(chr) && count < utils_js_1.maxHexLength) {
          hex += readAndNext();
          count++;
        }
        skipSingleWhitespace();
        return String.fromCharCode(parseInt(hex, 16));
      }
      function parseString(quote) {
        var result = "";
        pass(quote);
        while (pos < l) {
          if (is(quote)) {
            next();
            return result;
          } else if (is("\\")) {
            next();
            if (is(quote)) {
              result += quote;
              next();
            } else if (chr === "\n" || chr === "\f") {
              next();
            } else if (chr === "\r") {
              next();
              if (is("\n")) {
                next();
              }
            } else if ((0, utils_js_1.isHex)(chr)) {
              result += parseHex();
            } else {
              result += chr;
              next();
            }
          } else {
            result += chr;
            next();
          }
        }
        return result;
      }
      function parseIdentifier() {
        if (!(0, utils_js_1.isIdentStart)(chr)) {
          return null;
        }
        var result = "";
        while (is("-")) {
          result += chr;
          next();
        }
        if (result === "-" && !(0, utils_js_1.isIdent)(chr) && !is("\\")) {
          fail("Identifiers cannot consist of a single hyphen.");
        }
        if (strict && result.length >= 2) {
          fail("Identifiers cannot start with two hyphens with strict mode on.");
        }
        if (utils_js_1.digitsChars[chr]) {
          fail("Identifiers cannot start with hyphens followed by digits.");
        }
        while (pos < l) {
          if ((0, utils_js_1.isIdent)(chr)) {
            result += readAndNext();
          } else if (is("\\")) {
            next();
            assertNonEof();
            if ((0, utils_js_1.isHex)(chr)) {
              result += parseHex();
            } else {
              result += readAndNext();
            }
          } else {
            break;
          }
        }
        return result;
      }
      function parsePseudoClassString() {
        var result = "";
        while (pos < l) {
          if (is(")")) {
            break;
          } else if (is("\\")) {
            next();
            if (isEof() && !strict) {
              return (result + "\\").trim();
            }
            assertNonEof();
            if ((0, utils_js_1.isHex)(chr)) {
              result += parseHex();
            } else {
              result += readAndNext();
            }
          } else {
            result += readAndNext();
          }
        }
        return result.trim();
      }
      function skipSingleWhitespace() {
        if (chr === " " || chr === "	" || chr === "\f" || chr === "\n") {
          next();
          return;
        }
        if (chr === "\r") {
          next();
        }
        if (chr === "\n") {
          next();
        }
      }
      function skipWhitespace() {
        while (utils_js_1.whitespaceChars[chr]) {
          next();
        }
      }
      function parseSelector(relative) {
        if (relative === void 0) {
          relative = false;
        }
        skipWhitespace();
        var rules = [parseRule(relative)];
        while (is(",")) {
          next();
          skipWhitespace();
          rules.push(parseRule(relative));
        }
        return {
          type: "Selector",
          rules
        };
      }
      function parseAttribute() {
        pass("[");
        skipWhitespace();
        var attr;
        if (is("|")) {
          assert(namespaceEnabled, "Namespaces are not enabled.");
          next();
          var name_1 = parseIdentifier();
          assert(name_1, "Expected attribute name.");
          attr = {
            type: "Attribute",
            name: name_1,
            namespace: { type: "NoNamespace" }
          };
        } else if (is("*")) {
          assert(namespaceEnabled, "Namespaces are not enabled.");
          assert(namespaceWildcardEnabled, "Wildcard namespace is not enabled.");
          next();
          pass("|");
          var name_2 = parseIdentifier();
          assert(name_2, "Expected attribute name.");
          attr = {
            type: "Attribute",
            name: name_2,
            namespace: { type: "WildcardNamespace" }
          };
        } else {
          var identifier = parseIdentifier();
          assert(identifier, "Expected attribute name.");
          attr = {
            type: "Attribute",
            name: identifier
          };
          if (is("|")) {
            var savedPos = pos;
            next();
            if ((0, utils_js_1.isIdentStart)(chr)) {
              assert(namespaceEnabled, "Namespaces are not enabled.");
              var name_3 = parseIdentifier();
              assert(name_3, "Expected attribute name.");
              attr = {
                type: "Attribute",
                name: name_3,
                namespace: { type: "NamespaceName", name: identifier }
              };
            } else {
              rewind(savedPos);
            }
          }
        }
        assert(attr.name, "Expected attribute name.");
        skipWhitespace();
        if (isEof() && !strict) {
          return attr;
        }
        if (is("]")) {
          next();
        } else {
          attr.operator = matchMulticharIndex(attributesOperatorsIndex);
          assert(attr.operator, "Expected a valid attribute selector operator.");
          skipWhitespace();
          assertNonEof();
          if (utils_js_1.quoteChars[chr]) {
            attr.value = {
              type: "String",
              value: parseString(chr)
            };
          } else if (substitutesEnabled && is("$")) {
            next();
            var name_4 = parseIdentifier();
            assert(name_4, "Expected substitute name.");
            attr.value = {
              type: "Substitution",
              name: name_4
            };
          } else {
            var value = parseIdentifier();
            assert(value, "Expected attribute value.");
            attr.value = {
              type: "String",
              value
            };
          }
          skipWhitespace();
          if (isEof() && !strict) {
            return attr;
          }
          if (!is("]")) {
            var caseSensitivityModifier = parseIdentifier();
            assert(caseSensitivityModifier, "Expected end of attribute selector.");
            attr.caseSensitivityModifier = caseSensitivityModifier;
            assert(attributesCaseSensitivityModifiersEnabled, "Attribute case sensitivity modifiers are not enabled.");
            assert(attributesAcceptUnknownCaseSensitivityModifiers || attributesCaseSensitivityModifiers[attr.caseSensitivityModifier], "Unknown attribute case sensitivity modifier.");
            skipWhitespace();
            if (isEof() && !strict) {
              return attr;
            }
          }
          pass("]");
        }
        return attr;
      }
      function parseNumber() {
        var result = "";
        while (utils_js_1.digitsChars[chr]) {
          result += readAndNext();
        }
        assert(result !== "", "Formula parse error.");
        return parseInt(result);
      }
      var isNumberStart = function() {
        return is("-") || is("+") || utils_js_1.digitsChars[chr];
      };
      function parseFormula() {
        if (is("e") || is("o")) {
          var ident = parseIdentifier();
          if (ident === "even") {
            skipWhitespace();
            return [2, 0];
          }
          if (ident === "odd") {
            skipWhitespace();
            return [2, 1];
          }
        }
        var firstNumber = null;
        var firstNumberMultiplier = 1;
        if (is("-")) {
          next();
          firstNumberMultiplier = -1;
        }
        if (isNumberStart()) {
          if (is("+")) {
            next();
          }
          firstNumber = parseNumber();
          if (!is("\\") && !is("n")) {
            return [0, firstNumber * firstNumberMultiplier];
          }
        }
        if (firstNumber === null) {
          firstNumber = 1;
        }
        firstNumber *= firstNumberMultiplier;
        var identifier;
        if (is("\\")) {
          next();
          if ((0, utils_js_1.isHex)(chr)) {
            identifier = parseHex();
          } else {
            identifier = readAndNext();
          }
        } else {
          identifier = readAndNext();
        }
        assert(identifier === "n", 'Formula parse error: expected "n".');
        skipWhitespace();
        if (is("+") || is("-")) {
          var sign = is("+") ? 1 : -1;
          next();
          skipWhitespace();
          return [firstNumber, sign * parseNumber()];
        } else {
          return [firstNumber, 0];
        }
      }
      function parsePseudoArgument(pseudoName, type, signature) {
        var argument;
        if (is("(")) {
          next();
          skipWhitespace();
          if (substitutesEnabled && is("$")) {
            next();
            var name_5 = parseIdentifier();
            assert(name_5, "Expected substitute name.");
            argument = {
              type: "Substitution",
              name: name_5
            };
          } else if (signature.type === "String") {
            argument = {
              type: "String",
              value: parsePseudoClassString()
            };
            assert(argument.value, "Expected ".concat(type, " argument value."));
          } else if (signature.type === "Selector") {
            argument = parseSelector(true);
          } else if (signature.type === "Formula") {
            var _a2 = parseFormula(), a = _a2[0], b = _a2[1];
            argument = {
              type: "Formula",
              a,
              b
            };
            if (signature.ofSelector) {
              skipWhitespace();
              if (is("o") || is("\\")) {
                var ident = parseIdentifier();
                assert(ident === "of", "Formula of selector parse error.");
                skipWhitespace();
                argument = {
                  type: "FormulaOfSelector",
                  a,
                  b,
                  selector: parseRule()
                };
              }
            }
          } else {
            return fail("Invalid ".concat(type, " signature."));
          }
          skipWhitespace();
          if (isEof() && !strict) {
            return argument;
          }
          pass(")");
        } else {
          assert(signature.optional, "Argument is required for ".concat(type, ' "').concat(pseudoName, '".'));
        }
        return argument;
      }
      function parseTagName() {
        if (is("*")) {
          assert(tagNameWildcardEnabled, "Wildcard tag name is not enabled.");
          next();
          return { type: "WildcardTag" };
        } else if ((0, utils_js_1.isIdentStart)(chr)) {
          assert(tagNameEnabled, "Tag names are not enabled.");
          var name_6 = parseIdentifier();
          assert(name_6, "Expected tag name.");
          return {
            type: "TagName",
            name: name_6
          };
        } else {
          return fail("Expected tag name.");
        }
      }
      function parseTagNameWithNamespace() {
        if (is("*")) {
          var savedPos = pos;
          next();
          if (!is("|")) {
            rewind(savedPos);
            return parseTagName();
          }
          next();
          if (!isTagStart()) {
            rewind(savedPos);
            return parseTagName();
          }
          assert(namespaceEnabled, "Namespaces are not enabled.");
          assert(namespaceWildcardEnabled, "Wildcard namespace is not enabled.");
          var tagName = parseTagName();
          tagName.namespace = { type: "WildcardNamespace" };
          return tagName;
        } else if (is("|")) {
          assert(namespaceEnabled, "Namespaces are not enabled.");
          next();
          var tagName = parseTagName();
          tagName.namespace = { type: "NoNamespace" };
          return tagName;
        } else if ((0, utils_js_1.isIdentStart)(chr)) {
          var identifier = parseIdentifier();
          assert(identifier, "Expected tag name.");
          if (!is("|")) {
            assert(tagNameEnabled, "Tag names are not enabled.");
            return {
              type: "TagName",
              name: identifier
            };
          }
          var savedPos = pos;
          next();
          if (!isTagStart()) {
            rewind(savedPos);
            return {
              type: "TagName",
              name: identifier
            };
          }
          assert(namespaceEnabled, "Namespaces are not enabled.");
          var tagName = parseTagName();
          tagName.namespace = { type: "NamespaceName", name: identifier };
          return tagName;
        } else {
          return fail("Expected tag name.");
        }
      }
      function parseRule(relative) {
        var _a2, _b2;
        if (relative === void 0) {
          relative = false;
        }
        var rule = { type: "Rule", items: [] };
        if (relative) {
          var combinator = matchMulticharIndex(combinatorsIndex);
          if (combinator) {
            rule.combinator = combinator;
            skipWhitespace();
          }
        }
        while (pos < l) {
          if (isTagStart()) {
            assert(rule.items.length === 0, "Unexpected tag/namespace start.");
            rule.items.push(parseTagNameWithNamespace());
          } else if (is("|")) {
            var savedPos = pos;
            next();
            if (isTagStart()) {
              assert(rule.items.length === 0, "Unexpected tag/namespace start.");
              rewind(savedPos);
              rule.items.push(parseTagNameWithNamespace());
            } else {
              rewind(savedPos);
              break;
            }
          } else if (is(".")) {
            assert(classNamesEnabled, "Class names are not enabled.");
            next();
            var className = parseIdentifier();
            assert(className, "Expected class name.");
            rule.items.push({ type: "ClassName", name: className });
          } else if (is("#")) {
            assert(idEnabled, "IDs are not enabled.");
            next();
            var idName = parseIdentifier();
            assert(idName, "Expected ID name.");
            rule.items.push({ type: "Id", name: idName });
          } else if (is("[")) {
            assert(attributesEnabled, "Attributes are not enabled.");
            rule.items.push(parseAttribute());
          } else if (is(":")) {
            var isDoubleColon = false;
            var isPseudoElement = false;
            next();
            if (is(":")) {
              assert(pseudoElementsEnabled, "Pseudo elements are not enabled.");
              assert(pseudoElementsDoubleColonNotationEnabled, "Pseudo elements double colon notation is not enabled.");
              isDoubleColon = true;
              next();
            }
            var pseudoName = parseIdentifier();
            assert(isDoubleColon || pseudoName, "Expected pseudo-class name.");
            assert(!isDoubleColon || pseudoName, "Expected pseudo-element name.");
            assert(pseudoName, "Expected pseudo-class name.");
            assert(!isDoubleColon || pseudoElementsAcceptUnknown || Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName), 'Unknown pseudo-element "'.concat(pseudoName, '".'));
            isPseudoElement = pseudoElementsEnabled && (isDoubleColon || !isDoubleColon && pseudoElementsSingleColonNotationEnabled && Object.prototype.hasOwnProperty.call(pseudoElementsDefinitions, pseudoName));
            if (isPseudoElement) {
              var signature = (_a2 = pseudoElementsDefinitions[pseudoName]) !== null && _a2 !== void 0 ? _a2 : pseudoElementsAcceptUnknown && pseudo_signatures_js_1.defaultPseudoSignature;
              var pseudoElement = {
                type: "PseudoElement",
                name: pseudoName
              };
              var argument = parsePseudoArgument(pseudoName, "pseudo-element", signature);
              if (argument) {
                assert(argument.type !== "Formula" && argument.type !== "FormulaOfSelector", "Pseudo-elements cannot have formula argument.");
                pseudoElement.argument = argument;
              }
              rule.items.push(pseudoElement);
            } else {
              assert(pseudoClassesEnabled, "Pseudo-classes are not enabled.");
              var signature = (_b2 = pseudoClassesDefinitions[pseudoName]) !== null && _b2 !== void 0 ? _b2 : pseudoClassesAcceptUnknown && pseudo_signatures_js_1.defaultPseudoSignature;
              assert(signature, 'Unknown pseudo-class: "'.concat(pseudoName, '".'));
              var argument = parsePseudoArgument(pseudoName, "pseudo-class", signature);
              var pseudoClass = {
                type: "PseudoClass",
                name: pseudoName
              };
              if (argument) {
                pseudoClass.argument = argument;
              }
              rule.items.push(pseudoClass);
            }
          } else {
            break;
          }
        }
        if (rule.items.length === 0) {
          if (isEof()) {
            return fail("Expected rule but end of input reached.");
          } else {
            return fail('Expected rule but "'.concat(chr, '" found.'));
          }
        }
        skipWhitespace();
        if (!isEof() && !is(",") && !is(")")) {
          var combinator = matchMulticharIndex(combinatorsIndex);
          skipWhitespace();
          rule.nestedRule = parseRule();
          rule.nestedRule.combinator = combinator;
        }
        return rule;
      }
      return function(input) {
        if (typeof input !== "string") {
          throw new Error("".concat(errorPrefix, "Expected string input."));
        }
        str = input;
        l = str.length;
        pos = 0;
        chr = str.charAt(0);
        return parseSelector();
      };
    }
    exports.createParser = createParser;
  }
});

// node_modules/css-selector-parser/dist/cjs/render.js
var require_render = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/render.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.render = void 0;
    var utils_js_1 = require_utils();
    var errorPrefix = "css-selector-parser render error: ";
    function renderNamespace(namespace) {
      if (namespace.type === "WildcardNamespace") {
        return "*|";
      } else if (namespace.type === "NamespaceName") {
        return "".concat((0, utils_js_1.escapeIdentifier)(namespace.name), "|");
      } else if (namespace.type === "NoNamespace") {
        return "|";
      }
      throw new Error("".concat(errorPrefix, "Unknown namespace type: ").concat(namespace.type, "."));
    }
    function renderSubstitution(sub) {
      return "$".concat((0, utils_js_1.escapeIdentifier)(sub.name));
    }
    function renderFormula(a, b) {
      if (a) {
        var result = "".concat(a === 1 ? "" : a === -1 ? "-" : a, "n");
        if (b) {
          result += "".concat(b > 0 ? "+" : "").concat(b);
        }
        return result;
      } else {
        return String(b);
      }
    }
    function render(entity) {
      if (entity.type === "Selector") {
        return entity.rules.map(render).join(", ");
      }
      if (entity.type === "Rule") {
        var result = "";
        var items = entity.items, combinator = entity.combinator, nestedRule = entity.nestedRule;
        if (combinator) {
          result += "".concat(combinator, " ");
        }
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
          var item = items_1[_i];
          result += render(item);
        }
        if (nestedRule) {
          result += " ".concat(render(nestedRule));
        }
        return result;
      } else if (entity.type === "TagName" || entity.type === "WildcardTag") {
        var result = "";
        var namespace = entity.namespace;
        if (namespace) {
          result += renderNamespace(namespace);
        }
        if (entity.type === "TagName") {
          result += (0, utils_js_1.escapeIdentifier)(entity.name);
        } else if (entity.type === "WildcardTag") {
          result += "*";
        }
        return result;
      } else if (entity.type === "Id") {
        return "#".concat((0, utils_js_1.escapeIdentifier)(entity.name));
      } else if (entity.type === "ClassName") {
        return ".".concat((0, utils_js_1.escapeIdentifier)(entity.name));
      } else if (entity.type === "Attribute") {
        var name_1 = entity.name, namespace = entity.namespace, operator = entity.operator, value = entity.value, caseSensitivityModifier = entity.caseSensitivityModifier;
        var result = "[";
        if (namespace) {
          result += renderNamespace(namespace);
        }
        result += (0, utils_js_1.escapeIdentifier)(name_1);
        if (operator && value) {
          result += operator;
          if (value.type === "String") {
            result += (0, utils_js_1.escapeString)(value.value);
          } else if (value.type === "Substitution") {
            result += renderSubstitution(value);
          } else {
            throw new Error("Unknown attribute value type: ".concat(value.type, "."));
          }
          if (caseSensitivityModifier) {
            result += " ".concat((0, utils_js_1.escapeIdentifier)(caseSensitivityModifier));
          }
        }
        result += "]";
        return result;
      } else if (entity.type === "PseudoClass") {
        var name_2 = entity.name, argument = entity.argument;
        var result = ":".concat((0, utils_js_1.escapeIdentifier)(name_2));
        if (argument) {
          result += "(".concat(argument.type === "String" ? (0, utils_js_1.escapeIdentifier)(argument.value) : render(argument), ")");
        }
        return result;
      } else if (entity.type === "PseudoElement") {
        var name_3 = entity.name, argument = entity.argument;
        var result = "::".concat((0, utils_js_1.escapeIdentifier)(name_3));
        if (argument) {
          result += "(".concat(argument.type === "String" ? (0, utils_js_1.escapeIdentifier)(argument.value) : render(argument), ")");
        }
        return result;
      } else if (entity.type === "String") {
        throw new Error("".concat(errorPrefix, "String cannot be rendered outside of context."));
      } else if (entity.type === "Formula") {
        return renderFormula(entity.a, entity.b);
      } else if (entity.type === "FormulaOfSelector") {
        return renderFormula(entity.a, entity.b) + " of " + render(entity.selector);
      } else if (entity.type === "Substitution") {
        return "$".concat((0, utils_js_1.escapeIdentifier)(entity.name));
      }
      throw new Error("Unknown type specified to render method: ".concat(entity.type, "."));
    }
    exports.render = render;
  }
});

// node_modules/css-selector-parser/dist/cjs/ast.js
var require_ast = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/ast.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ast = void 0;
    function astMethods(type) {
      return function(generatorName, checkerName) {
        var _a;
        return _a = {}, _a[generatorName] = function(props) {
          return __assign({ type }, props);
        }, _a[checkerName] = function(entity) {
          return typeof entity === "object" && entity !== null && entity.type === type;
        }, _a;
      };
    }
    exports.ast = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, astMethods("Selector")("selector", "isSelector")), astMethods("Rule")("rule", "isRule")), astMethods("TagName")("tagName", "isTagName")), astMethods("Id")("id", "isId")), astMethods("ClassName")("className", "isClassName")), astMethods("WildcardTag")("wildcardTag", "isWildcardTag")), astMethods("NamespaceName")("namespaceName", "isNamespaceName")), astMethods("WildcardNamespace")("wildcardNamespace", "isWildcardNamespace")), astMethods("NoNamespace")("noNamespace", "isNoNamespace")), astMethods("Attribute")("attribute", "isAttribute")), astMethods("PseudoClass")("pseudoClass", "isPseudoClass")), astMethods("PseudoElement")("pseudoElement", "isPseudoElement")), astMethods("String")("string", "isString")), astMethods("Formula")("formula", "isFormula")), astMethods("FormulaOfSelector")("formulaOfSelector", "isFormulaOfSelector")), astMethods("Substitution")("substitution", "isSubstitution"));
  }
});

// node_modules/css-selector-parser/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/css-selector-parser/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ast = exports.render = exports.createParser = void 0;
    var parser_js_1 = require_parser();
    Object.defineProperty(exports, "createParser", { enumerable: true, get: function() {
      return parser_js_1.createParser;
    } });
    var render_js_1 = require_render();
    Object.defineProperty(exports, "render", { enumerable: true, get: function() {
      return render_js_1.render;
    } });
    var ast_js_1 = require_ast();
    Object.defineProperty(exports, "ast", { enumerable: true, get: function() {
      return ast_js_1.ast;
    } });
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/sessionStorageUtils.js
var require_sessionStorageUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/sessionStorageUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeSessionStorageItem = exports.setSessionStorageItem = exports.getSessionStorageItem = exports.removeMemoryStorageItem = exports.setMemoryStorageItem = exports.getMemoryStorageItem = exports.CURRENT_NAV_TREE = exports.ELEMENT_KEY_TO_NAV_NODE = exports.ELEMENT_KEY_TO_LOOKUP_LIST = exports.NAV_TREE_CALLBACKS = exports.IS_FLUSHING = exports.HOT_RELOADING = exports.TEXT_EDIT = exports.HOVERED_ELEMENT_KEY = exports.MULTI_SELECTED_ELEMENT_KEYS = exports.SELECTED_ELEMENT_KEY = exports.SAVED_STORYBOARD_COMPONENT_FILENAME = exports.ORIGINAL_STORYBOARD_URL = exports.STORYBOARD_TYPE = exports.STORYBOARD_COMPONENT = exports.SCOPE_LOOKUP = exports.TREE_ELEMENT_LOOKUP = void 0;
    exports.TREE_ELEMENT_LOOKUP = "TREE_ELEMENT_LOOKUP";
    exports.SCOPE_LOOKUP = "SCOPE_LOOKUP";
    exports.STORYBOARD_COMPONENT = "STORYBOARD_COMPONENT";
    exports.STORYBOARD_TYPE = "STORYBOARD_TYPE";
    exports.ORIGINAL_STORYBOARD_URL = "ORIGINAL_STORYBOARD_URL";
    exports.SAVED_STORYBOARD_COMPONENT_FILENAME = "SAVED_STORYBOARD_COMPONENT_FILENAME";
    exports.SELECTED_ELEMENT_KEY = "SELECTED_ELEMENT_KEY";
    exports.MULTI_SELECTED_ELEMENT_KEYS = "MULTI_SELECTED_ELEMENT_KEYS";
    exports.HOVERED_ELEMENT_KEY = "HOVERED_ELEMENT_KEY";
    exports.TEXT_EDIT = "TEXT_EDIT";
    exports.HOT_RELOADING = "HOT_RELOADING";
    exports.IS_FLUSHING = "IS_FLUSHING";
    exports.NAV_TREE_CALLBACKS = "NAV_TREE_CALLBACKS";
    exports.ELEMENT_KEY_TO_LOOKUP_LIST = "ELEMENT_KEY_TO_LOOKUP_LIST";
    exports.ELEMENT_KEY_TO_NAV_NODE = "ELEMENT_KEY_TO_NAV_NODE";
    exports.CURRENT_NAV_TREE = "CURRENT_NAV_TREE";
    var inMemoryStorage = {};
    var getMemoryStorageItem = (key) => {
      return inMemoryStorage[key];
    };
    exports.getMemoryStorageItem = getMemoryStorageItem;
    var setMemoryStorageItem = (key, value) => {
      inMemoryStorage[key] = value;
      if (!value) {
        delete inMemoryStorage[key];
      }
    };
    exports.setMemoryStorageItem = setMemoryStorageItem;
    var removeMemoryStorageItem = (key) => {
      delete inMemoryStorage[key];
    };
    exports.removeMemoryStorageItem = removeMemoryStorageItem;
    var getSessionStorageItem = (key, storyboardId) => {
      return sessionStorage.getItem(`${storyboardId}_${key}`);
    };
    exports.getSessionStorageItem = getSessionStorageItem;
    var setSessionStorageItem = (key, value, storyboardId) => {
      if (!value) {
        (0, exports.removeSessionStorageItem)(key, storyboardId);
        return;
      }
      sessionStorage.setItem(`${storyboardId}_${key}`, value);
    };
    exports.setSessionStorageItem = setSessionStorageItem;
    var removeSessionStorageItem = (key, storyboardId) => {
      sessionStorage.removeItem(`${storyboardId}_${key}`);
    };
    exports.removeSessionStorageItem = removeSessionStorageItem;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/editTextUtils.js
var require_editTextUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/editTextUtils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.teardownEditableText = exports.setupEditableText = exports.getEditingInfo = exports.currentlyEditing = exports.hasTextContents = exports.canEditText = void 0;
    var identifierUtils_1 = require_identifierUtils();
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var constantsAndTypes_1 = require_constantsAndTypes();
    var jquery_1 = __importDefault(require_jquery());
    var canEditText = (element) => {
      const treeElements = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.TREE_ELEMENT_LOOKUP) || {};
      const treeElement = treeElements[element.codebaseId];
      if (!treeElement) {
        return false;
      }
      return treeElement.staticTextContents;
    };
    exports.canEditText = canEditText;
    var hasTextContents = (node) => {
      if (!node) {
        return false;
      }
      let hasText = false;
      let hasNonText = false;
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          hasText = true;
          return;
        }
        hasNonText = true;
      });
      return hasText && !hasNonText;
    };
    exports.hasTextContents = hasTextContents;
    var currentlyEditing = () => {
      const item = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.TEXT_EDIT);
      return item !== null && item !== void 0;
    };
    exports.currentlyEditing = currentlyEditing;
    var markAsEditing = (info) => {
      (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.TEXT_EDIT, info);
    };
    var getEditingInfo = () => {
      return (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.TEXT_EDIT);
    };
    exports.getEditingInfo = getEditingInfo;
    var clearEditingInfo = () => {
      (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.TEXT_EDIT, null);
    };
    var setupEditableText = (element, parentPort, storyboardId) => {
      const classToSearchFor = `.${identifierUtils_1.ELEMENT_KEY_PREFIX}${element.getKey()}`;
      const domElement = (0, jquery_1.default)(classToSearchFor).get(0);
      if (!domElement) {
        return;
      }
      const originalText = (0, jquery_1.default)(domElement).text();
      markAsEditing({
        key: element.getKey(),
        originalText
      });
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.START_EDITING_TEXT,
        data: {
          key: element.getKey(),
          oldText: originalText
        }
      });
      (0, jquery_1.default)(domElement).attr("contenteditable", "plaintext-only").trigger("focus");
      (0, jquery_1.default)(domElement).css({
        cursor: "text",
        outline: "none",
        border: "none"
      });
      (0, jquery_1.default)(domElement).on("blur", () => (0, exports.teardownEditableText)(parentPort, storyboardId));
    };
    exports.setupEditableText = setupEditableText;
    var teardownEditableText = (parentPort, storyboardId) => {
      var _a;
      const editingInfo = (0, exports.getEditingInfo)();
      if (!(0, exports.currentlyEditing)()) {
        return;
      }
      clearEditingInfo();
      if (!editingInfo) {
        return;
      }
      const classToSearchFor = `.${identifierUtils_1.ELEMENT_KEY_PREFIX}${editingInfo.key}`;
      const domElement = (0, jquery_1.default)(classToSearchFor).get(0);
      if (!domElement) {
        return;
      }
      const updatedText = (0, jquery_1.default)(domElement).text();
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.EDITED_TEXT,
        data: {
          key: editingInfo.key,
          newText: updatedText,
          oldText: editingInfo.originalText
        }
      });
      (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
      (0, jquery_1.default)(domElement).removeAttr("contenteditable").off("blur").css({
        cursor: "",
        outline: "",
        border: ""
      });
      clearEditingInfo();
    };
    exports.teardownEditableText = teardownEditableText;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/outlineUtils.js
var require_outlineUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/outlineUtils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNodeOutline = exports.updateOutlines = exports.clearAllOutlines = exports.getOutlineElement = exports.OutlineType = exports.PRIMARY_COMPONENT_OUTLINE_COLOR = exports.SECONDARY_OUTLINE_COLOUR = exports.PRIMARY_OUTLINE_COLOUR = void 0;
    var identifierUtils_1 = require_identifierUtils();
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var jquery_1 = __importDefault(require_jquery());
    var tempoElement_1 = require_tempoElement();
    var editTextUtils_1 = require_editTextUtils();
    var constantsAndTypes_1 = require_constantsAndTypes();
    exports.PRIMARY_OUTLINE_COLOUR = "#4597F7";
    exports.SECONDARY_OUTLINE_COLOUR = "#4597F7";
    exports.PRIMARY_COMPONENT_OUTLINE_COLOR = "#6183e4";
    var OutlineType;
    (function(OutlineType2) {
      OutlineType2[OutlineType2["PRIMARY"] = 0] = "PRIMARY";
      OutlineType2[OutlineType2["SECONDARY"] = 1] = "SECONDARY";
      OutlineType2[OutlineType2["CHILD"] = 2] = "CHILD";
      OutlineType2[OutlineType2["MOVE"] = 3] = "MOVE";
    })(OutlineType || (exports.OutlineType = OutlineType = {}));
    var colours = () => {
      const aiContextSelection = (0, sessionStorageUtils_1.getMemoryStorageItem)("aiContext");
      if (aiContextSelection) {
        return {
          primary: "#6858f5",
          secondary: "#6858f5",
          component: "#5246C2"
        };
      }
      return {
        primary: exports.PRIMARY_OUTLINE_COLOUR,
        secondary: exports.SECONDARY_OUTLINE_COLOUR,
        component: exports.PRIMARY_COMPONENT_OUTLINE_COLOR
      };
    };
    var getDashedBackgroundImage = (strokeColor, dashWidth, dashGap) => {
      return `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${strokeColor.replace("#", "%23")}' stroke-width='${dashWidth}' stroke-dasharray='1%2c ${dashGap}' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;
    };
    var capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var getPencilSVG = () => {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`;
    };
    var getEditTextButtonNode = (parentPort, bgColor, elementKey) => {
      const el = document.createElement("div");
      const textEl = document.createElement("div");
      textEl.innerText = "Edit Dynamic Text";
      textEl.classList.add(identifierUtils_1.EDIT_TEXT_BUTTON);
      textEl.classList.add(identifierUtils_1.OUTLINE_CLASS);
      const pencilSVG = document.createElement("div");
      pencilSVG.innerHTML = getPencilSVG();
      pencilSVG.style.width = "22px";
      pencilSVG.style.height = "22px";
      pencilSVG.classList.add(identifierUtils_1.EDIT_TEXT_BUTTON);
      pencilSVG.classList.add(identifierUtils_1.OUTLINE_CLASS);
      el.appendChild(pencilSVG);
      el.appendChild(textEl);
      el.classList.add(identifierUtils_1.OUTLINE_CLASS);
      el.classList.add(identifierUtils_1.EDIT_TEXT_BUTTON);
      el.style.color = "white";
      el.style.cursor = "pointer";
      el.style.backgroundColor = bgColor;
      el.style.padding = "4px 12px 4px 12px";
      el.style.borderRadius = "8px";
      el.style.fontSize = "20px";
      el.style.pointerEvents = "auto";
      el.style.display = "flex";
      el.style.flexDirection = "row";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.gap = "8px";
      el.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.EDIT_DYNAMIC_TEXT,
          elementKey
        });
      });
      el.addEventListener("pointerup", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      return el;
    };
    var getOutlineElement = (parentPort, type, pageLeft, pageTop, width, height, selected, tagName, isComponent, elementKey) => {
      const palette = colours();
      const left = pageLeft;
      const top = pageTop;
      const zoomPerc = (0, sessionStorageUtils_1.getMemoryStorageItem)("zoomPerc");
      const zoomMultiplier = zoomPerc ? 1 / Number(zoomPerc) : 1;
      const newElement = document.createElement("div");
      newElement.classList.add(identifierUtils_1.OUTLINE_CLASS);
      if (type === OutlineType.CHILD || type === OutlineType.MOVE) {
        const dashThickness = 5 * zoomMultiplier;
        newElement.style.backgroundImage = getDashedBackgroundImage(isComponent ? palette.component : palette.primary, Math.max(1, Math.round(dashThickness)), Math.max(3, Math.round(dashThickness * 3)));
      } else {
        const thickness = type === OutlineType.SECONDARY ? 0.5 * zoomMultiplier : 1 * zoomMultiplier;
        if (thickness >= 0.5) {
          newElement.style.outline = `${thickness}px solid ${type === OutlineType.SECONDARY ? palette.secondary : isComponent ? palette.component : palette.primary}`;
        }
        newElement.style.border = `${thickness >= 0.5 ? thickness : thickness * 2}px solid ${type === OutlineType.SECONDARY ? palette.secondary : isComponent ? palette.component : palette.primary}`;
      }
      newElement.style.position = "fixed";
      newElement.style.pointerEvents = "none";
      switch (type) {
        case OutlineType.PRIMARY:
          newElement.style.zIndex = "2000000002";
          break;
        case OutlineType.SECONDARY:
          newElement.style.zIndex = "2000000001";
          break;
        case OutlineType.CHILD:
          newElement.style.zIndex = "2000000000";
          break;
        case OutlineType.MOVE:
          newElement.style.zIndex = "2000000003";
          break;
      }
      newElement.style.boxSizing = "border-box";
      newElement.style.left = left + "px";
      newElement.style.top = top + "px";
      newElement.style.width = width + "px";
      newElement.style.height = height + "px";
      newElement.style.cursor = "default !important";
      const limitedZoomMultiplier = Math.min(2, zoomMultiplier);
      if (type === OutlineType.PRIMARY && selected) {
        const sizeElement = document.createElement("div");
        newElement.appendChild(sizeElement);
        sizeElement.classList.add(identifierUtils_1.OUTLINE_CLASS);
        sizeElement.innerHTML = `${Math.round(width)} x ${Math.round(height)}`;
        sizeElement.style.color = "white";
        sizeElement.style.backgroundColor = isComponent ? palette.component : palette.primary;
        sizeElement.style.padding = "4px 12px 4px 12px";
        sizeElement.style.height = "38px";
        sizeElement.style.borderRadius = "8px";
        sizeElement.style.position = "absolute";
        sizeElement.style.left = `calc(${width}px / 2)`;
        sizeElement.style.fontSize = "20px";
        sizeElement.style.whiteSpace = "nowrap";
        const bottomValue = -Math.max(22, 45 + (52 * limitedZoomMultiplier - 52) / 2);
        sizeElement.style.bottom = `${bottomValue}px`;
        sizeElement.style.transform = `scale(${limitedZoomMultiplier}) translateX(${-50 / limitedZoomMultiplier}%)`;
      }
      if (selected && tagName) {
        const topControlsWrapper = document.createElement("div");
        newElement.appendChild(topControlsWrapper);
        topControlsWrapper.style.display = "flex";
        topControlsWrapper.style.width = width / limitedZoomMultiplier + "px";
        topControlsWrapper.style.justifyContent = "space-between";
        topControlsWrapper.style.flexDirection = "row";
        topControlsWrapper.style.gap = "4px";
        topControlsWrapper.style.position = "absolute";
        topControlsWrapper.style.left = `0px`;
        topControlsWrapper.style.transform = `scale(${limitedZoomMultiplier}) translateX(${50 - 50 / limitedZoomMultiplier}%) translateY(${-70 - 50 / limitedZoomMultiplier}%)`;
        const tagNameElement = document.createElement("div");
        topControlsWrapper.appendChild(tagNameElement);
        tagNameElement.classList.add(identifierUtils_1.OUTLINE_CLASS);
        tagNameElement.innerHTML = tagName ? isComponent ? capitalizeFirstLetter(tagName) : tagName.toLowerCase() : "";
        tagNameElement.style.color = "white";
        tagNameElement.style.backgroundColor = isComponent ? palette.component : palette.primary;
        tagNameElement.style.padding = "4px 12px 4px 12px";
        tagNameElement.style.height = "38px";
        tagNameElement.style.borderRadius = "8px";
        tagNameElement.style.fontSize = "20px";
        if (type === OutlineType.PRIMARY) {
          const matchingNode = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0);
          const tempoElement = tempoElement_1.TempoElement.fromKey(elementKey || "");
          if ((0, editTextUtils_1.hasTextContents)(matchingNode) && !(0, editTextUtils_1.canEditText)(tempoElement)) {
            const newNode = getEditTextButtonNode(parentPort, isComponent ? palette.component : palette.primary, elementKey);
            topControlsWrapper.appendChild(newNode);
          }
        }
      }
      return newElement;
    };
    exports.getOutlineElement = getOutlineElement;
    var clearAllOutlines = () => {
      (0, jquery_1.default)(`.${identifierUtils_1.OUTLINE_CLASS}`).remove();
    };
    exports.clearAllOutlines = clearAllOutlines;
    var updateOutlines = (parentPort, storyboardId) => {
      (0, exports.clearAllOutlines)();
      const driveModeEnabled = !!(0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId);
      if (driveModeEnabled) {
        return;
      }
      const hoveredElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
      const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
      const multiselectedElementKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS);
      const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      const body = document.getElementsByTagName("body")[0];
      const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
      const getBoundingBoxForElementKey = (elementKey) => {
        var _a, _b;
        const navNode = elementKeyToNavNode[elementKey];
        const boundingBoxToUse = (_b = (_a = (0, jquery_1.default)("body").find(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (boundingBoxToUse) {
          return {
            left: boundingBoxToUse.left,
            top: boundingBoxToUse.top,
            width: boundingBoxToUse.width,
            height: boundingBoxToUse.height
          };
        }
        if (navNode === null || navNode === void 0 ? void 0 : navNode.pageBoundingBox) {
          return {
            left: navNode.pageBoundingBox.pageX,
            top: navNode.pageBoundingBox.pageY,
            width: navNode.pageBoundingBox.width,
            height: navNode.pageBoundingBox.height
          };
        }
        return null;
      };
      const createOutlinesForElementKey = (elementKey, selected, isChild, outlineChildren) => {
        var _a, _b;
        const navNode = elementKeyToNavNode[elementKey];
        if (!navNode) {
          return;
        }
        const tagNameToUse = navNode === null || navNode === void 0 ? void 0 : navNode.name;
        const boundingBox = getBoundingBoxForElementKey(elementKey);
        if (boundingBox) {
          body.appendChild((0, exports.getOutlineElement)(parentPort, isChild ? OutlineType.CHILD : OutlineType.PRIMARY, boundingBox.left, boundingBox.top, boundingBox.width, boundingBox.height, selected, tagNameToUse, navNode === null || navNode === void 0 ? void 0 : navNode.isComponent, elementKey));
          const mouseDragData = (0, sessionStorageUtils_1.getMemoryStorageItem)("mouseDragContext");
          const mousePosData = (0, sessionStorageUtils_1.getMemoryStorageItem)("mousePos");
          if (selected && (mouseDragData === null || mouseDragData === void 0 ? void 0 : mouseDragData.dragging) && mousePosData) {
            body.appendChild((0, exports.getOutlineElement)(parentPort, OutlineType.MOVE, mousePosData.pageX - boundingBox.width / 2 + mouseDragData.offsetX, mousePosData.pageY - boundingBox.height / 2 + mouseDragData.offsetY, boundingBox.width, boundingBox.height, void 0, void 0, navNode === null || navNode === void 0 ? void 0 : navNode.isComponent, elementKey));
          }
        }
        if (outlineChildren) {
          (_b = (_a = navNode === null || navNode === void 0 ? void 0 : navNode.children) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, (child) => {
            createOutlinesForElementKey(child.tempoElement.getKey(), false, true, false);
          });
        }
      };
      if (hoveredElementKey) {
        createOutlinesForElementKey(hoveredElementKey, false, false, true);
      }
      if (multiselectedElementKeys === null || multiselectedElementKeys === void 0 ? void 0 : multiselectedElementKeys.length) {
        let fullBoundingBox = getBoundingBoxForElementKey(multiselectedElementKeys[0]);
        multiselectedElementKeys.slice(1).forEach((elementKey) => {
          const boundingRect = getBoundingBoxForElementKey(elementKey);
          if (boundingRect) {
            if (fullBoundingBox) {
              const prevRight = fullBoundingBox.left + fullBoundingBox.width;
              const prevBottom = fullBoundingBox.top + fullBoundingBox.height;
              fullBoundingBox.left = Math.min(fullBoundingBox.left, boundingRect.left);
              fullBoundingBox.top = Math.min(fullBoundingBox.top, boundingRect.top);
              const right = Math.max(prevRight, boundingRect.left + boundingRect.width);
              const bottom = Math.max(prevBottom, boundingRect.top + boundingRect.height);
              fullBoundingBox.width = right - fullBoundingBox.left;
              fullBoundingBox.height = bottom - fullBoundingBox.top;
            } else {
              fullBoundingBox = boundingRect;
            }
          }
        });
        if (fullBoundingBox) {
          body.appendChild((0, exports.getOutlineElement)(parentPort, OutlineType.PRIMARY, fullBoundingBox.left, fullBoundingBox.top, fullBoundingBox.width, fullBoundingBox.height, true, `${multiselectedElementKeys.length} Elements`, false));
        }
        multiselectedElementKeys.forEach((elementKey) => {
          createOutlinesForElementKey(elementKey, false, false, false);
        });
      } else if (selectedElementKey) {
        createOutlinesForElementKey(selectedElementKey, true, false, false);
      }
      (0, jquery_1.default)(`.${identifierUtils_1.TEMPO_INSTANT_DIV_DRAW_CLASS}`).each((index, item) => {
        const boundingRect = item.getBoundingClientRect();
        body.appendChild((0, exports.getOutlineElement)(parentPort, OutlineType.PRIMARY, boundingRect.left, boundingRect.top, boundingRect.width, boundingRect.height));
      });
      (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_OUTLINE_UNTIL_REFESH}=true]`).each((index, item) => {
        const boundingRect = item.getBoundingClientRect();
        body.appendChild((0, exports.getOutlineElement)(parentPort, OutlineType.PRIMARY, boundingRect.left, boundingRect.top, boundingRect.width, boundingRect.height));
      });
      if (selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.codebaseId) {
        (0, jquery_1.default)("body").find(`.${selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.codebaseId}`).not(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElementKey}`).not(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${hoveredElementKey}`).each((index, item) => {
          const boundingRect = item.getBoundingClientRect();
          body.appendChild((0, exports.getOutlineElement)(parentPort, OutlineType.SECONDARY, boundingRect.left, boundingRect.top, boundingRect.width, boundingRect.height));
        });
      }
    };
    exports.updateOutlines = updateOutlines;
    var isNodeOutline = (node) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return false;
      }
      let isOutline = false;
      node.classList.forEach((cls) => {
        if (cls === identifierUtils_1.OUTLINE_CLASS) {
          isOutline = true;
        }
      });
      return isOutline;
    };
    exports.isNodeOutline = isNodeOutline;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/navTreeUtils.js
var require_navTreeUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/navTreeUtils.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.runNavTreeBuiltCallbacks = exports.addNavTreeBuiltCallback = exports.buildNavForNode = exports.getNavNodeForVirtualComponent = exports.ExtractedPropType = exports.SKIP_ROOT_CODEBASE_ID = exports.EMPTY_TREE_CODEBASE_ID = exports.TOP_LEVEL_PARENT_COMPONENT_TO_SKIP = exports.UNKNOWN_PARENT_COMPONENT = void 0;
    var cssFunctions_1 = require_cssFunctions();
    var identifierUtils_1 = require_identifierUtils();
    var outlineUtils_1 = require_outlineUtils();
    var jquery_1 = __importDefault(require_jquery());
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var tempoElement_1 = require_tempoElement();
    exports.UNKNOWN_PARENT_COMPONENT = "UnknownComponent";
    exports.TOP_LEVEL_PARENT_COMPONENT_TO_SKIP = "TOP_LEVEL_PARENT_COMPONENT_TO_SKIP";
    exports.EMPTY_TREE_CODEBASE_ID = "EMPTY-TREE";
    exports.SKIP_ROOT_CODEBASE_ID = "SKIP-ROOT";
    var ExtractedPropType;
    (function(ExtractedPropType2) {
      ExtractedPropType2["LITERAL"] = "LITERAL";
      ExtractedPropType2["FUNCTION"] = "FUNCTION";
      ExtractedPropType2["JSON_OBJECT"] = "JSON_OBJECT";
    })(ExtractedPropType || (exports.ExtractedPropType = ExtractedPropType = {}));
    var extractPropsFromReactFiberNode = (reactFiberNode) => {
      var _a;
      if (!((_a = reactFiberNode === null || reactFiberNode === void 0 ? void 0 : reactFiberNode.element) === null || _a === void 0 ? void 0 : _a.memoizedProps)) {
        return {};
      }
      const props = {};
      Object.keys(reactFiberNode.element.memoizedProps).forEach((key) => {
        if (key === "children") {
          return;
        }
        if (identifierUtils_1.KNOWN_ATTRIBUTES.has(key.toLowerCase())) {
          return;
        }
        let propValue = reactFiberNode.element.memoizedProps[key];
        if (key === "className" && typeof propValue === "string") {
          propValue = (0, identifierUtils_1.getAllUnknownClasesFromList)(propValue.split(" ")).join(" ");
        }
        if (typeof propValue === "function") {
          props[key] = {
            value: key,
            type: ExtractedPropType.FUNCTION
          };
        } else if (typeof propValue === "object") {
          try {
            props[key] = {
              value: JSON.stringify(propValue),
              type: ExtractedPropType.JSON_OBJECT
            };
          } catch (e) {
          }
        } else {
          props[key] = {
            value: propValue,
            type: ExtractedPropType.LITERAL
          };
        }
      });
      return props;
    };
    var extractLiteralChildrenFromReactFiberNode = (reactFiberNode) => {
      var _a, _b;
      if (!((_b = (_a = reactFiberNode === null || reactFiberNode === void 0 ? void 0 : reactFiberNode.element) === null || _a === void 0 ? void 0 : _a.memoizedProps) === null || _b === void 0 ? void 0 : _b.children)) {
        return [];
      }
      const literalChildren = [];
      Array.from(reactFiberNode.element.memoizedProps.children || []).forEach((childProp, index) => {
        if (typeof childProp !== "object") {
          literalChildren.push({
            index,
            value: childProp
          });
        }
      });
      return literalChildren;
    };
    function selectorSafe(uniquePath) {
      const replacements = {
        "!": "_exclamation_",
        "@": "_at_",
        "#": "_hash_",
        $: "_dollar_",
        "%": "_percent_",
        "^": "_caret_",
        "&": "_and_",
        "*": "_asterisk_",
        "(": "_openParen_",
        ")": "_closeParen_",
        "+": "_plus_",
        "=": "_equals_",
        "[": "_openBracket_",
        "]": "_closeBracket_",
        "{": "_openBrace_",
        "}": "_closeBrace_",
        "|": "_pipe_",
        ";": "_semicolon_",
        ":": "_colon_",
        ",": "_comma_",
        ".": "_period_",
        "<": "_lessThan_",
        ">": "_greaterThan_",
        "/": "_slash_",
        "?": "_question_",
        "\\": "_backslash_",
        " ": "_space_"
      };
      Object.keys(replacements).forEach((character) => {
        const regex = new RegExp("\\" + character, "g");
        uniquePath = uniquePath.replace(regex, replacements[character]);
      });
      uniquePath = uniquePath.replace(/^[0-9-]/, "_startNumOrHyphen_");
      return uniquePath.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    var getNavNodeForVirtualComponent = (parent, componentName, componentInstanceId, uniquePath, scopeLookup, storyboardId, reactFiberNode) => {
      const navTreeNode = {
        parent,
        children: [],
        classList: [],
        directlySetClassList: [],
        name: "",
        tempoElement: tempoElement_1.TempoElement.empty()
      };
      navTreeNode.name = componentName;
      navTreeNode.isComponent = true;
      navTreeNode.tempoElement = new tempoElement_1.TempoElement(componentInstanceId, storyboardId, uniquePath);
      navTreeNode.props = extractPropsFromReactFiberNode(reactFiberNode);
      navTreeNode.literalChildren = extractLiteralChildrenFromReactFiberNode(reactFiberNode);
      Object.keys(scopeLookup).forEach((codebaseId) => {
        var _a;
        if (navTreeNode.scope) {
          return;
        }
        if (((_a = scopeLookup[codebaseId].codebaseIds) === null || _a === void 0 ? void 0 : _a.indexOf(componentInstanceId)) > -1) {
          navTreeNode.scope = scopeLookup[codebaseId];
        }
      });
      return navTreeNode;
    };
    exports.getNavNodeForVirtualComponent = getNavNodeForVirtualComponent;
    var buildNavForNode = (storyboardId, parent, node, uniquePathBase, uniquePathAddon, scopeLookup, treeElements, lookupIdToReactTreeMap, knownComponentNames, knownComponentInstanceNames, elementKeyToLookupList, elementKeyToNavNode) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      if (!node) {
        return null;
      }
      if ((0, outlineUtils_1.isNodeOutline)(node)) {
        return null;
      }
      if ((0, identifierUtils_1.isSkipNavTreeNode)(node)) {
        return null;
      }
      if (["noscript", "script"].includes((_a = node === null || node === void 0 ? void 0 : node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
        return null;
      }
      const foundId = (0, identifierUtils_1.getCodebaseIdFromNode)(node);
      const reactFiberLookupId = (0, identifierUtils_1.getUniqueLookupFromNode)(node);
      if (((_b = node === null || node === void 0 ? void 0 : node.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "iframe") {
        if (!foundId) {
          node.remove();
          return null;
        }
      }
      let reactFiberNode = null;
      if (reactFiberLookupId) {
        reactFiberNode = lookupIdToReactTreeMap[reactFiberLookupId];
      }
      const boundingRect = node.getBoundingClientRect();
      const { top, left } = (0, jquery_1.default)(node).offset() || { top: 0, left: 0 };
      let parentToUse = parent;
      let uniquePathBaseToUse = uniquePathBase;
      const virtualComponentElementKeys = [];
      let componentNameToCollapseInto;
      let componentInstanceIdToCollapseInto;
      if (reactFiberNode && (parent === null || parent === void 0 ? void 0 : parent.reactFiberNode)) {
        let searchNode = reactFiberNode.parent;
        let possibleNodesToAdd = [];
        while (searchNode) {
          if (searchNode === parent.reactFiberNode) {
            break;
          }
          const debugSourceFileInCodebase = ((_d = (_c = searchNode === null || searchNode === void 0 ? void 0 : searchNode.element) === null || _c === void 0 ? void 0 : _c._debugSource) === null || _d === void 0 ? void 0 : _d.fileName) && !((_g = (_f = (_e = searchNode === null || searchNode === void 0 ? void 0 : searchNode.element) === null || _e === void 0 ? void 0 : _e._debugSource) === null || _f === void 0 ? void 0 : _f.fileName) === null || _g === void 0 ? void 0 : _g.includes("node_modules"));
          if (((_h = searchNode.props) === null || _h === void 0 ? void 0 : _h.tempoelementid) && ((knownComponentNames === null || knownComponentNames === void 0 ? void 0 : knownComponentNames.has(searchNode.name)) || (knownComponentInstanceNames === null || knownComponentInstanceNames === void 0 ? void 0 : knownComponentInstanceNames.has(searchNode.name)) || debugSourceFileInCodebase)) {
            possibleNodesToAdd.push(searchNode);
          }
          searchNode = searchNode.parent;
        }
        if (searchNode && possibleNodesToAdd.length) {
          let currentParent = parent;
          Array.from(possibleNodesToAdd).reverse().forEach((nodeToAdd) => {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
            if (((_c2 = (_b2 = (_a2 = nodeToAdd === null || nodeToAdd === void 0 ? void 0 : nodeToAdd.element) === null || _a2 === void 0 ? void 0 : _a2.elementType) === null || _b2 === void 0 ? void 0 : _b2["$$typeof"]) === null || _c2 === void 0 ? void 0 : _c2.toString()) === "Symbol(react.forward_ref)") {
              if (!componentNameToCollapseInto && !componentInstanceIdToCollapseInto) {
                componentInstanceIdToCollapseInto = (_d2 = nodeToAdd.props) === null || _d2 === void 0 ? void 0 : _d2.tempoelementid;
                const referenceTreeElement = treeElements[componentInstanceIdToCollapseInto || ""];
                if ((referenceTreeElement === null || referenceTreeElement === void 0 ? void 0 : referenceTreeElement.type) === "component-instance") {
                  componentNameToCollapseInto = referenceTreeElement.componentName;
                } else {
                  componentNameToCollapseInto = nodeToAdd.name;
                }
              }
              return;
            }
            const matchingNavTreeNode = currentParent ? (_e2 = currentParent.children) === null || _e2 === void 0 ? void 0 : _e2.find((child) => child.reactFiberNode === nodeToAdd) : null;
            if (matchingNavTreeNode) {
              currentParent = matchingNavTreeNode;
              if (currentParent.tempoElement) {
                virtualComponentElementKeys.push(currentParent.tempoElement.getKey());
              }
              if (!matchingNavTreeNode.pageBoundingBox) {
                matchingNavTreeNode.pageBoundingBox = {
                  pageX: left,
                  pageY: top,
                  width: boundingRect.width,
                  height: boundingRect.height
                };
              } else {
                const newRight = Math.max(matchingNavTreeNode.pageBoundingBox.pageX + matchingNavTreeNode.pageBoundingBox.width, left + boundingRect.width);
                const newLeft = Math.min(matchingNavTreeNode.pageBoundingBox.pageX, boundingRect.left);
                const newTop = Math.min(matchingNavTreeNode.pageBoundingBox.pageY, boundingRect.top);
                const newBottom = Math.max(matchingNavTreeNode.pageBoundingBox.pageY + matchingNavTreeNode.pageBoundingBox.height, top + boundingRect.height);
                matchingNavTreeNode.pageBoundingBox.pageX = newLeft;
                matchingNavTreeNode.pageBoundingBox.pageY = newTop;
                matchingNavTreeNode.pageBoundingBox.width = newRight - newLeft;
                matchingNavTreeNode.pageBoundingBox.height = newBottom - newTop;
              }
              return;
            } else {
              let componentName;
              let componentInstanceId;
              if (componentNameToCollapseInto) {
                componentName = componentInstanceIdToCollapseInto;
                componentInstanceId = componentInstanceIdToCollapseInto;
                componentNameToCollapseInto = void 0;
                componentInstanceIdToCollapseInto = void 0;
              } else {
                componentName = nodeToAdd.name;
                componentInstanceId = (_f2 = nodeToAdd.props) === null || _f2 === void 0 ? void 0 : _f2.tempoelementid;
              }
              uniquePathBaseToUse = selectorSafe(`${uniquePathBaseToUse}-${((_g2 = currentParent === null || currentParent === void 0 ? void 0 : currentParent.children) === null || _g2 === void 0 ? void 0 : _g2.length) || 0}`);
              const newVirtualComponent = (0, exports.getNavNodeForVirtualComponent)(currentParent, nodeToAdd.name, componentInstanceId, uniquePathBaseToUse, scopeLookup, storyboardId, nodeToAdd);
              currentParent.children.push(newVirtualComponent);
              currentParent = newVirtualComponent;
              virtualComponentElementKeys.push(newVirtualComponent.tempoElement.getKey());
              elementKeyToNavNode[newVirtualComponent.tempoElement.getKey()] = newVirtualComponent;
              newVirtualComponent.pageBoundingBox = {
                pageX: left,
                pageY: top,
                width: boundingRect.width,
                height: boundingRect.height
              };
            }
          });
          parentToUse = currentParent;
        }
      }
      const navTreeNode = {
        parent: parentToUse,
        children: [],
        classList: (0, identifierUtils_1.getAllUnknownClasses)(node),
        directlySetClassList: [],
        name: "",
        tempoElement: tempoElement_1.TempoElement.empty()
      };
      (_j = parentToUse === null || parentToUse === void 0 ? void 0 : parentToUse.children) === null || _j === void 0 ? void 0 : _j.push(navTreeNode);
      navTreeNode.name = componentNameToCollapseInto || node.tagName;
      navTreeNode.elementTagName = node.tagName;
      navTreeNode.isComponent = Boolean(componentInstanceIdToCollapseInto);
      const uniquePathForNode = selectorSafe(`${uniquePathBaseToUse}${uniquePathAddon}`);
      const codebaseId = componentInstanceIdToCollapseInto || foundId || void 0;
      navTreeNode.tempoElement = new tempoElement_1.TempoElement(codebaseId, storyboardId, uniquePathForNode);
      const nodeElementKey = navTreeNode.tempoElement.getKey();
      virtualComponentElementKeys.forEach((elementKey) => {
        if (elementKeyToLookupList[elementKey]) {
          elementKeyToLookupList[elementKey].push(nodeElementKey);
        } else {
          elementKeyToLookupList[elementKey] = [nodeElementKey];
        }
      });
      elementKeyToLookupList[nodeElementKey] = [nodeElementKey];
      (0, identifierUtils_1.addElementKeyAsClass)(node, nodeElementKey);
      const treeElementForNode = treeElements[navTreeNode.tempoElement.codebaseId];
      if (treeElementForNode) {
        const removableClasses = new Set((treeElementForNode === null || treeElementForNode === void 0 ? void 0 : treeElementForNode.removableClasses) || []);
        navTreeNode.directlySetClassList = (_k = navTreeNode.classList) === null || _k === void 0 ? void 0 : _k.filter((cls) => {
          return removableClasses.has(cls);
        });
      }
      navTreeNode.reactFiberNode = reactFiberNode;
      navTreeNode.props = extractPropsFromReactFiberNode(reactFiberNode);
      navTreeNode.literalChildren = extractLiteralChildrenFromReactFiberNode(reactFiberNode);
      navTreeNode.pageBoundingBox = {
        pageX: left,
        pageY: top,
        width: boundingRect.width,
        height: boundingRect.height
      };
      navTreeNode.displayType = (0, cssFunctions_1.cssEval)(node, "display");
      navTreeNode.positionType = (0, cssFunctions_1.cssEval)(node, "position");
      navTreeNode.flexDirection = (0, cssFunctions_1.cssEval)(node, "flex-direction");
      navTreeNode.floatVal = (0, cssFunctions_1.cssEval)(node, "float");
      if (navTreeNode.tempoElement.codebaseId) {
        Object.keys(scopeLookup).forEach((codebaseId2) => {
          var _a2;
          if (navTreeNode.scope) {
            return;
          }
          if (((_a2 = scopeLookup[codebaseId2].codebaseIds) === null || _a2 === void 0 ? void 0 : _a2.indexOf(navTreeNode.tempoElement.codebaseId)) > -1) {
            navTreeNode.scope = scopeLookup[codebaseId2];
          }
        });
      }
      if (node.children && node.tagName !== "svg") {
        let indexForUniqueness = 0;
        Array.from(node.children).forEach((child) => {
          (0, exports.buildNavForNode)(storyboardId, navTreeNode, child, uniquePathForNode, `-${indexForUniqueness}`, scopeLookup, treeElements, lookupIdToReactTreeMap, knownComponentNames, knownComponentInstanceNames, elementKeyToLookupList, elementKeyToNavNode);
          indexForUniqueness += 1;
        });
      }
      elementKeyToNavNode[nodeElementKey] = navTreeNode;
      if (!parentToUse) {
        let newNavTree = filterOutNodesWithoutCodebaseId(navTreeNode, elementKeyToNavNode, treeElements, storyboardId);
        return newNavTree;
      }
      return null;
    };
    exports.buildNavForNode = buildNavForNode;
    var filterOutNodesWithoutCodebaseId = (finishedNavTree, elementKeyToNavNode, treeElements, storyboardId) => {
      let treeToReturn = finishedNavTree;
      const storyboardType = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.STORYBOARD_TYPE) || "APPLICATION";
      const storyboardSavedComponentFile = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SAVED_STORYBOARD_COMPONENT_FILENAME);
      const originalStoryboardUrl = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ORIGINAL_STORYBOARD_URL);
      const userNavigatedToNewRoute = originalStoryboardUrl && !window.location.href.includes(originalStoryboardUrl);
      const isElementDirectlyInStoryboard = (node) => {
        var _a, _b, _c, _d, _e;
        const filename = (_a = treeElements[node.tempoElement.codebaseId]) === null || _a === void 0 ? void 0 : _a.filename;
        if (storyboardType === "STORY" && filename && !filename.includes("_app") && !filename.includes("_document")) {
          return true;
        }
        if (((_b = node.parent) === null || _b === void 0 ? void 0 : _b.name) === "BODY") {
          let parentFiberNode = (_c = node.reactFiberNode) === null || _c === void 0 ? void 0 : _c.parent;
          while (parentFiberNode) {
            const codebaseId = ((_d = parentFiberNode === null || parentFiberNode === void 0 ? void 0 : parentFiberNode.props) === null || _d === void 0 ? void 0 : _d.tempoelementid) || "";
            if (codebaseId) {
              const treeElementFilename = (_e = treeElements[codebaseId]) === null || _e === void 0 ? void 0 : _e.filename;
              const valid = Boolean(treeElementFilename === null || treeElementFilename === void 0 ? void 0 : treeElementFilename.includes("tempobook/storyboards")) || Boolean(treeElementFilename && treeElementFilename === storyboardSavedComponentFile);
              if (valid) {
                return true;
              }
            }
            parentFiberNode = parentFiberNode === null || parentFiberNode === void 0 ? void 0 : parentFiberNode.parent;
          }
        }
        return Boolean(filename === null || filename === void 0 ? void 0 : filename.includes("tempobook/storyboards")) || Boolean(filename && filename === storyboardSavedComponentFile);
      };
      const processNode = (node, elementInStoryboardFound) => {
        var _a, _b;
        for (let i = node.children.length - 1; i >= 0; i--) {
          processNode(node.children[i], elementInStoryboardFound || isElementDirectlyInStoryboard(node));
        }
        const inComponentStoryboardAndSkip = storyboardType !== "APPLICATION" && !userNavigatedToNewRoute && !elementInStoryboardFound && !isElementDirectlyInStoryboard(node);
        if (!((_a = node.tempoElement.codebaseId) === null || _a === void 0 ? void 0 : _a.startsWith("tempo-")) || inComponentStoryboardAndSkip) {
          if (node.parent) {
            const childrenToMove = node.children;
            const indexOfNodeInParent = (_b = node.parent.children) === null || _b === void 0 ? void 0 : _b.indexOf(node);
            node.parent.children.splice(indexOfNodeInParent, 1, ...childrenToMove);
            childrenToMove.forEach((child) => {
              child.parent = node.parent;
            });
            delete elementKeyToNavNode[node.tempoElement.getKey()];
          } else if (node.children.length === 1) {
            treeToReturn = node.children[0];
            delete elementKeyToNavNode[node.tempoElement.getKey()];
            treeToReturn.parent = void 0;
          } else if (node.children.length === 0) {
            treeToReturn = {
              children: [],
              tempoElement: new tempoElement_1.TempoElement(exports.EMPTY_TREE_CODEBASE_ID, storyboardId, "1"),
              name: ""
            };
            delete elementKeyToNavNode[node.tempoElement.getKey()];
          } else {
            node.tempoElement = new tempoElement_1.TempoElement(exports.SKIP_ROOT_CODEBASE_ID, node.tempoElement.storyboardId, node.tempoElement.uniquePath);
            delete elementKeyToNavNode[node.tempoElement.getKey()];
          }
        }
      };
      processNode(finishedNavTree, false);
      const postProcess = (node, level) => {
        delete node["reactFiberNode"];
        node.level = level;
        node.children.forEach((child) => {
          postProcess(child, node.tempoElement.codebaseId === exports.SKIP_ROOT_CODEBASE_ID ? level : level + 1);
        });
      };
      postProcess(treeToReturn, 0);
      return treeToReturn;
    };
    var addNavTreeBuiltCallback = (callbackToAdd) => {
      const { callbackFn, state } = callbackToAdd;
      const callbacks = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.NAV_TREE_CALLBACKS) || [];
      state.multiSelectedElementKeys = (state.multiSelectedElementKeys || []).sort();
      const existingCallback = callbacks.find((callback) => callback.callbackFn.toString() === callbackFn.toString() && callback.state.selectedElementKey === state.selectedElementKey && callback.state.multiSelectedElementKeys.join(",") === state.multiSelectedElementKeys.join(","));
      if (existingCallback) {
        return;
      }
      callbacks.push(callbackToAdd);
      (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.NAV_TREE_CALLBACKS, callbacks);
    };
    exports.addNavTreeBuiltCallback = addNavTreeBuiltCallback;
    var runNavTreeBuiltCallbacks = () => {
      const callbacks = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.NAV_TREE_CALLBACKS) || [];
      if (!callbacks.length) {
        return;
      }
      const currentSelectedKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
      const multiSelectedElementKeys = ((0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS) || []).sort();
      callbacks.forEach((callback) => {
        const { callbackFn, state } = callback;
        if (state.selectedElementKey === currentSelectedKey && state.multiSelectedElementKeys.join(",") === multiSelectedElementKeys.join(",")) {
          callbackFn();
        }
      });
      (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.NAV_TREE_CALLBACKS);
    };
    exports.runNavTreeBuiltCallbacks = runNavTreeBuiltCallbacks;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/cssFunctions.js
var require_cssFunctions = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/cssFunctions.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ruleMatchesElement = exports.getElementClassList = exports.getCssEvals = exports.cssEval = exports.processRulesForSelectedElement = exports.setModifiersForSelectedElement = exports.parse = void 0;
    var jquery_1 = __importDefault(require_jquery());
    var identifierUtils_1 = require_identifierUtils();
    var cssRuleUtils_1 = require_cssRuleUtils();
    var constantsAndTypes_1 = require_constantsAndTypes();
    var uuid_1 = require_commonjs_browser();
    var specificity_1 = (init_specificity(), __toCommonJS(specificity_exports));
    var tempoElement_1 = require_tempoElement();
    var css_selector_parser_1 = require_cjs();
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var navTreeUtils_1 = require_navTreeUtils();
    exports.parse = (0, css_selector_parser_1.createParser)({
      syntax: {
        baseSyntax: "latest",
        pseudoClasses: {
          unknown: "accept",
          definitions: {
            Selector: ["has"]
          }
        },
        pseudoElements: {
          unknown: "accept"
        },
        combinators: [">", "+", "~"],
        attributes: {
          operators: ["^=", "$=", "*=", "~="]
        },
        classNames: true,
        namespace: {
          wildcard: true
        },
        tag: {
          wildcard: true
        }
      },
      substitutes: true
    });
    var addCSSRule = (styleSheet, selector, rules, index) => {
      try {
        if (styleSheet.insertRule) {
          styleSheet.insertRule(`${selector} { ${rules} }`, index);
        } else {
          styleSheet.addRule(selector, rules, index);
        }
      } catch (e) {
        console.log("Error adding rule: ", e);
      }
    };
    var processMediaQueryRulesForResponsiveModifiers = (rule) => {
      let rules = [];
      if (rule instanceof CSSMediaRule) {
        for (let innerRule of rule.cssRules) {
          if (rule.media.mediaText.includes("min-width") && innerRule instanceof CSSStyleRule) {
            const parsedIsSelector = (0, exports.parse)(innerRule.selectorText);
            if (parsedIsSelector.type !== "Selector") {
              continue;
            }
            const lastRule = parsedIsSelector.rules[0];
            const classNames = lastRule.items.filter((item) => item.type === "ClassName").map((item) => item.name);
            if (classNames.length !== 1) {
              continue;
            }
            rules.push({
              class: classNames[0],
              pseudos: extractTailwindPrefixes(classNames[0]),
              cssText: innerRule.style.cssText,
              style: innerRule.style
            });
          }
        }
      }
      return rules;
    };
    var extractTailwindPrefixes = (selectorText) => {
      const prefixRegex = new RegExp("(?:\\b|(?<=[:.]))(sm|md|lg|xl|2xl)\\\\?:[\\w-]+", "g");
      const matches = selectorText.match(prefixRegex) || [];
      const prefixes = matches.map((match) => {
        const index = match.indexOf(match.includes("\\:") ? "\\:" : ":");
        return match.substring(0, index);
      });
      return [...new Set(prefixes)];
    };
    var processIsSelectorForDarkMode = (isSelector) => {
      if (isSelector.type !== "Selector") {
        return;
      }
      const firstRule = isSelector.rules[0];
      const classNames = firstRule.items.filter((item) => item.type === "ClassName").map((item) => item.name);
      if (classNames.length === 0 || classNames[0] !== "dark") {
        return;
      }
      const nestedRule = firstRule.nestedRule;
      if (!nestedRule) {
        return;
      }
      let darkModeClasses = [];
      const nestedClassNames = nestedRule.items.filter((item) => item.type === "ClassName").map((item) => item.name);
      if (nestedClassNames.length > 1) {
        console.log("Skipping is selector with multiple classes", firstRule);
        return;
      }
      darkModeClasses.push({
        class: nestedClassNames[0],
        pseudos: [
          "dark",
          ...nestedRule.items.filter((item) => item.type === "PseudoClass").map((p) => p.name)
        ]
      });
      return darkModeClasses;
    };
    var setModifiersForSelectedElement = (parentPort, modifiers, selectedElementKey) => {
      const allElements = document.querySelectorAll('[class*="tempo-force-"]');
      allElements.forEach((element) => {
        const classes = Array.from(element.classList);
        classes.forEach((cls) => {
          if (cls.startsWith("tempo-force-")) {
            element.classList.remove(cls);
          }
        });
      });
      const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      if (selectedElement.isEmpty()) {
        return;
      }
      const selectedDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElement.getKey()}`).get(0);
      if (!selectedDomElement) {
        return;
      }
      modifiers.forEach((modifier) => {
        selectedDomElement.classList.add("tempo-force-" + modifier);
      });
    };
    exports.setModifiersForSelectedElement = setModifiersForSelectedElement;
    var processRulesForSelectedElement = (parentPort, cssElementLookup, selectedElementKey) => {
      var _a, _b, _c, _d, _e;
      if (!cssElementLookup) {
        return;
      }
      const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      if (selectedElement.isEmpty()) {
        return;
      }
      const selectedDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElement.getKey()}`).get(0);
      const multiSelectedElementKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS) || [];
      if (!selectedDomElement) {
        (0, navTreeUtils_1.addNavTreeBuiltCallback)({
          callbackFn: () => {
            (0, exports.processRulesForSelectedElement)(parentPort, cssElementLookup, selectedElementKey);
          },
          state: {
            selectedElementKey,
            multiSelectedElementKeys
          }
        });
        return;
      }
      const newProcessedCssRules = [];
      const extractedKnownClasses = /* @__PURE__ */ new Set();
      const knownSelectors = /* @__PURE__ */ new Set();
      const inlineStyleRule = {
        filename: "",
        selector: "element.style",
        source: {},
        styles: {},
        applied: true,
        codebaseId: "element.style",
        removable: false,
        allowChanges: true
      };
      for (let i = 0; i < ((_a = selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.style) === null || _a === void 0 ? void 0 : _a.length) || 0; i++) {
        const cssName = selectedDomElement.style[i];
        inlineStyleRule.styles[cssName] = selectedDomElement.style[cssName];
      }
      newProcessedCssRules.push(inlineStyleRule);
      let checkedInlineStylesOfParent = false;
      const directMatchCssRules = [];
      const otherCssRules = [];
      Object.keys(cssElementLookup).forEach((codebaseId) => {
        var _a2;
        const cssRule = cssElementLookup[codebaseId];
        knownSelectors.add(cssRule.selector);
        if (!(0, cssRuleUtils_1.isCssSelectorValid)(cssRule.selector)) {
          return;
        }
        (0, cssRuleUtils_1.getAllClassesFromSelector)(cssRule.selector).forEach((cls) => {
          extractedKnownClasses.add(cls);
        });
        if ((0, cssRuleUtils_1.isCssSelectorValid)(cssRule.selector) && (selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.matches(cssRule.selector))) {
          directMatchCssRules.push(Object.assign(Object.assign({}, cssRule), { applied: true, allowChanges: true, removable: (0, cssRuleUtils_1.canRemoveCssClassFromElement)(cssRule.selector, selectedDomElement) }));
          return;
        }
        let parentElementIndex = 0;
        let parentDomElement = selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.parentElement;
        const inheritedStyles = {};
        while (parentDomElement) {
          if (!checkedInlineStylesOfParent) {
            const inlineStyleOfParent = {};
            for (let i = 0; i < ((_a2 = parentDomElement === null || parentDomElement === void 0 ? void 0 : parentDomElement.style) === null || _a2 === void 0 ? void 0 : _a2.length) || 0; i++) {
              const cssName = parentDomElement.style[i];
              if (constantsAndTypes_1.INHERITABLE_CSS_PROPS[cssName]) {
                inlineStyleOfParent[cssName] = parentDomElement.style[cssName];
              }
            }
            if (Object.keys(inlineStyleOfParent).length !== 0) {
              otherCssRules.push({
                filename: "",
                // TODO: make this unique
                selector: `parentElement${parentElementIndex}.style`,
                inherited: true,
                source: {},
                styles: inlineStyleOfParent,
                applied: true,
                codebaseId: `parentElement${parentElementIndex}.style`,
                removable: false,
                allowChanges: false
              });
            }
          }
          if ((0, cssRuleUtils_1.isCssSelectorValid)(cssRule.selector) && !(parentDomElement === null || parentDomElement === void 0 ? void 0 : parentDomElement.matches(cssRule.selector))) {
            parentDomElement = parentDomElement.parentElement;
            continue;
          }
          Object.keys((cssRule === null || cssRule === void 0 ? void 0 : cssRule.styles) || {}).forEach((cssName) => {
            if (constantsAndTypes_1.INHERITABLE_CSS_PROPS[cssName] && inheritedStyles[cssName] !== null) {
              inheritedStyles[cssName] = cssRule.styles[cssName];
            }
          });
          parentDomElement = parentDomElement.parentElement;
          parentElementIndex += 1;
        }
        checkedInlineStylesOfParent = true;
        if (Object.keys(inheritedStyles).length !== 0) {
          otherCssRules.push(Object.assign(Object.assign({}, cssRule), { inherited: true, styles: inheritedStyles, applied: true, removable: false, allowChanges: false }));
        }
        otherCssRules.push(Object.assign(Object.assign({}, cssRule), { applied: false, allowChanges: false, eligibleToApply: (0, cssRuleUtils_1.canApplyCssRuleToElement)(cssRule.selector, selectedDomElement) }));
      });
      const mainStyleSheet = document.styleSheets[0];
      for (let i = 0; i < document.styleSheets.length; i += 1) {
        const sheet = document.styleSheets[i];
        let rules = null;
        try {
          rules = sheet.cssRules;
        } catch (e) {
          console.log(e);
          try {
            rules = sheet.rules;
          } catch (e2) {
            console.log(e2);
          }
        }
        if (!rules) {
          continue;
        }
        for (let j = 0; j < rules.length; j += 1) {
          const rule = rules[j];
          const responsiveModifiers = processMediaQueryRulesForResponsiveModifiers(rule);
          if (responsiveModifiers.length > 0) {
            for (let k = 0; k < responsiveModifiers.length; k++) {
              const modifier = responsiveModifiers[k];
              if (!(selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.matches("." + CSS.escape(modifier.class)))) {
                continue;
              }
              const styling = {};
              for (let l = 0; l < ((_b = modifier === null || modifier === void 0 ? void 0 : modifier.style) === null || _b === void 0 ? void 0 : _b.length) || 0; l += 1) {
                const cssName = modifier === null || modifier === void 0 ? void 0 : modifier.style[l];
                styling[cssName] = modifier === null || modifier === void 0 ? void 0 : modifier.style[cssName];
              }
              const ruleToPush = {
                filename: void 0,
                selector: CSS.escape("." + modifier.class),
                classParsed: modifier.class,
                source: {},
                styles: styling,
                applied: true,
                modifiers: Object.assign({}, modifier.pseudos.reduce((acc, pseudo) => {
                  acc[pseudo] = true;
                  return acc;
                }, {})),
                // Generate a random codebase ID to use for selection
                // Note: this ID is shown as a backup in the overridden tooltip
                codebaseId: `${modifier.class} ${(0, uuid_1.v4)().toString()}`,
                removable: false,
                allowChanges: false,
                cssText: modifier.cssText
              };
              directMatchCssRules.push(ruleToPush);
            }
          }
          if (!rule.selectorText) {
            continue;
          }
          if (knownSelectors.has(rule.selectorText)) {
            continue;
          }
          const parsedCssRule = (0, exports.parse)(rule.selectorText);
          if (parsedCssRule.type !== "Selector") {
            continue;
          }
          const firstRule = parsedCssRule.rules[0];
          if (!firstRule) {
            continue;
          }
          const classNames = firstRule.items.filter((item) => item.type === "ClassName").map((item) => item.name);
          const pseudos = firstRule.items.filter((item) => item.type === "PseudoClass");
          if (classNames.length === 0 && pseudos.length === 1 && pseudos[0].name === "is") {
            const pseudo = pseudos[0];
            if (pseudo && ((_c = pseudo.argument) === null || _c === void 0 ? void 0 : _c.type) === "Selector") {
              const darkModeClasses = processIsSelectorForDarkMode(pseudo.argument);
              if (darkModeClasses) {
                for (const darkModeClass of darkModeClasses) {
                  if (!(selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.matches("." + CSS.escape(darkModeClass.class)))) {
                    continue;
                  }
                  const styling = {};
                  for (let k = 0; k < ((_d = rule === null || rule === void 0 ? void 0 : rule.style) === null || _d === void 0 ? void 0 : _d.length) || 0; k += 1) {
                    const cssName = rule.style[k];
                    styling[cssName] = rule.style[cssName];
                  }
                  const ruleToPush = {
                    filename: void 0,
                    selector: CSS.escape("." + darkModeClass.class),
                    classParsed: darkModeClass.class,
                    source: {},
                    styles: styling,
                    applied: true,
                    modifiers: Object.assign({}, darkModeClass.pseudos.reduce((acc, pseudo2) => {
                      acc[pseudo2] = true;
                      return acc;
                    }, {})),
                    // Generate a random codebase ID to use for selection
                    // Note: this ID is shown as a backup in the overridden tooltip
                    codebaseId: `${rule.selectorText} ${(0, uuid_1.v4)().toString()}`,
                    removable: false,
                    allowChanges: false,
                    cssText: rule.style.cssText
                  };
                  directMatchCssRules.push(ruleToPush);
                }
              }
            }
          }
          if (classNames.length === 0 || classNames.length > 1) {
            continue;
          }
          const cls = classNames[0];
          const pseudoClasses = firstRule.items.filter((item) => item.type === "PseudoClass").map((p) => p.name);
          try {
            if (selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.matches("." + CSS.escape(cls))) {
              const styling = {};
              for (let k = 0; k < ((_e = rule === null || rule === void 0 ? void 0 : rule.style) === null || _e === void 0 ? void 0 : _e.length) || 0; k += 1) {
                const cssName = rule.style[k];
                styling[cssName] = rule.style[cssName];
              }
              directMatchCssRules.push({
                filename: void 0,
                selector: rule.selectorText,
                classParsed: cls,
                source: {},
                styles: styling,
                applied: true,
                modifiers: Object.assign({}, pseudoClasses.reduce((acc, pseudo) => {
                  acc[pseudo.name] = true;
                  return acc;
                }, {})),
                // Generate a random codebase ID to use for selection
                // Note: this ID is shown as a backup in the overridden tooltip
                codebaseId: `${rule.selectorText} ${(0, uuid_1.v4)().toString()}`,
                removable: false,
                allowChanges: false,
                cssText: rule.style.cssText
              });
            } else {
            }
          } catch (e) {
          }
        }
      }
      for (let i = 0; i < directMatchCssRules.length; i++) {
        const currentRule = directMatchCssRules[i];
        if (!currentRule.modifiers) {
          continue;
        }
        const rulePseudos = Object.keys(currentRule.modifiers);
        if (rulePseudos.length < 1) {
          continue;
        }
        const cls = currentRule.classParsed;
        if (!cls) {
          continue;
        }
        const cssText = currentRule.cssText;
        if (!cssText) {
          continue;
        }
        const pseudoSelector = rulePseudos.map((pseudo) => ".tempo-force-" + pseudo).join("");
        const newSelector = "." + CSS.escape(cls) + pseudoSelector;
        const newRules = cssText;
        addCSSRule(mainStyleSheet, newSelector, newRules, mainStyleSheet.cssRules.length);
      }
      const newList = newProcessedCssRules.concat(directMatchCssRules.sort((a, b) => {
        try {
          return -(0, specificity_1.compare)(a.selector, b.selector);
        } catch (_a2) {
          let aValid = true;
          try {
            (0, specificity_1.compare)(a.selector, "body");
          } catch (e) {
            aValid = false;
          }
          let bValid = true;
          try {
            (0, specificity_1.compare)(b.selector, "body");
          } catch (e) {
            bValid = false;
          }
          if (aValid && !bValid) {
            return -1;
          }
          if (!aValid && bValid) {
            return 1;
          }
          return 0;
        }
      })).concat(otherCssRules);
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.PROCESSED_CSS_RULES_FOR_ELEMENT,
        processedCssRules: newList
      });
    };
    exports.processRulesForSelectedElement = processRulesForSelectedElement;
    var cssEval = (element, property) => {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    };
    exports.cssEval = cssEval;
    var getCssEvals = (parentPort, selectedElementKey) => {
      let cssEvals = {};
      const selectdElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      if (selectdElement.isEmpty()) {
        return;
      }
      const selectedDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectdElement.getKey()}`).get(0);
      if (!selectedDomElement) {
        return;
      }
      constantsAndTypes_1.CSS_VALUES_TO_COLLECT.forEach((cssName) => {
        cssEvals[cssName] = (0, exports.cssEval)(selectedDomElement, cssName);
      });
      const parentCssEvals = {};
      const parentElement = selectedDomElement.parentElement;
      if (parentElement) {
        constantsAndTypes_1.CSS_VALUES_TO_COLLECT_FOR_PARENT.forEach((cssName) => {
          parentCssEvals[cssName] = (0, exports.cssEval)(selectedDomElement.parentElement, cssName);
        });
        let darkEnabledInParent = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectdElement.getKey()}`).closest(".dark").length > 0;
        parentCssEvals["darkEnabledInParent"] = darkEnabledInParent;
      }
      cssEvals["parent"] = parentCssEvals;
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.CSS_EVALS_FOR_ELEMENT,
        cssEvals
      });
    };
    exports.getCssEvals = getCssEvals;
    var getElementClassList = (parentPort, selectedElementKey) => {
      const selectdElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      if (selectdElement.isEmpty()) {
        return;
      }
      const selectedDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectdElement.getKey()}`).get(0);
      if (!selectedDomElement) {
        return;
      }
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.ELEMENT_CLASS_LIST,
        classList: Array.from(selectedDomElement.classList)
      });
    };
    exports.getElementClassList = getElementClassList;
    var ruleMatchesElement = (parentPort, messageId, rule, selectedElementKey) => {
      if (!rule) {
        return;
      }
      const selectdElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
      if (selectdElement.isEmpty()) {
        return;
      }
      const selectedDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectdElement.getKey()}`).get(0);
      if (!selectedDomElement) {
        return;
      }
      parentPort.postMessage({
        id: messageId,
        matches: selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.matches(rule)
      });
    };
    exports.ruleMatchesElement = ruleMatchesElement;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/cssRuleUtils.js
var require_cssRuleUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/cssRuleUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.camelToSnakeCase = exports.isCssSelectorValid = exports.getAllClassesFromSelector = exports.canRemoveCssClassFromElement = exports.canApplyCssRuleToElement = void 0;
    var cssFunctions_1 = require_cssFunctions();
    var canApplyCssRuleToElement = (cssRule, element) => {
      var _a;
      try {
        if (!element) {
          return false;
        }
        if (!(0, exports.isCssSelectorValid)(cssRule)) {
          return false;
        }
        if (element.matches(cssRule)) {
          return false;
        }
        const parsedCssRule = (0, cssFunctions_1.parse)(cssRule);
        let lastRule = parsedCssRule;
        while (lastRule.nestedRule) {
          lastRule = lastRule.nestedRule;
        }
        const addedClasses = [];
        const classes = new Set(element.classList);
        (_a = lastRule.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
          if (item.type === "ClassName") {
            const cls = item.name;
            if (!classes.has(cls)) {
              element.classList.add(cls);
              addedClasses.push(cls);
            }
          }
        });
        const canApply = element.matches(cssRule);
        addedClasses.forEach((cls) => {
          element.classList.remove(cls);
        });
        return canApply;
      } catch (e) {
        console.error(e);
        return false;
      }
    };
    exports.canApplyCssRuleToElement = canApplyCssRuleToElement;
    var canRemoveCssClassFromElement = (cssRule, element) => {
      var _a;
      try {
        if (!(0, exports.isCssSelectorValid)(cssRule)) {
          return false;
        }
        if (!element.matches(cssRule)) {
          return false;
        }
        const parsedCssRule = (0, cssFunctions_1.parse)(cssRule);
        let lastRule = parsedCssRule;
        while (lastRule.nestedRule) {
          lastRule = lastRule.nestedRule;
        }
        const removedClasses = [];
        const classes = new Set(element.classList);
        (_a = lastRule.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
          if (item.type === "ClassName") {
            const cls = item.name;
            if (!classes.has(cls)) {
              return;
            }
            element.classList.remove(cls);
            removedClasses.push(cls);
          }
        });
        const canRemove = !element.matches(cssRule);
        removedClasses.forEach((cls) => {
          element.classList.add(cls);
        });
        return canRemove;
      } catch (e) {
        console.error(e);
        return false;
      }
    };
    exports.canRemoveCssClassFromElement = canRemoveCssClassFromElement;
    var getAllClassesFromSelector = (cssSelector) => {
      try {
        if (!(0, exports.isCssSelectorValid)(cssSelector)) {
          return /* @__PURE__ */ new Set();
        }
        const parsedCssRule = (0, cssFunctions_1.parse)(cssSelector);
        let traverseRule = parsedCssRule;
        const allClasses = /* @__PURE__ */ new Set();
        while (traverseRule) {
          const items = traverseRule.items || [];
          items.forEach((item) => {
            if (item.type === "ClassName") {
              allClasses.add(item.name);
            }
          });
          traverseRule = traverseRule.nestedRule;
        }
        return allClasses;
      } catch (e) {
        console.log("Failed to parse classes from selector " + cssSelector + ", " + e);
        return /* @__PURE__ */ new Set();
      }
    };
    exports.getAllClassesFromSelector = getAllClassesFromSelector;
    var queryCheck = (s) => document.createDocumentFragment().querySelector(s);
    var isCssSelectorValid = (cssSelector) => {
      try {
        queryCheck(cssSelector);
        const parsedCssRule = (0, cssFunctions_1.parse)(cssSelector);
        return true;
      } catch (e) {
        return false;
      }
    };
    exports.isCssSelectorValid = isCssSelectorValid;
    var camelToSnakeCase = (str) => {
      if (!str)
        return str;
      return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    };
    exports.camelToSnakeCase = camelToSnakeCase;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/changeItemFunctions.js
var require_changeItemFunctions = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/changeItemFunctions.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateCodebaseIds = exports.applyChangeItemToDocument = exports.TEMPORARY_STYLING_CLASS_NAME = exports.ADD_CLASS_INSTANT_UPDATE_QUEUE = exports.ADD_JSX_PREFIX = exports.DUPLICATE_PLACEHOLDER_PREFIX = exports.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID = void 0;
    var jquery_1 = __importDefault(require_jquery());
    var identifierUtils_1 = require_identifierUtils();
    var changeLedgerTypes_1 = require_changeLedgerTypes();
    var constantsAndTypes_1 = require_constantsAndTypes();
    var cssRuleUtils_1 = require_cssRuleUtils();
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var tempoElement_1 = require_tempoElement();
    var uuid_1 = require_commonjs_browser();
    exports.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID = "tempo-wrap-in-div-placeholder";
    exports.DUPLICATE_PLACEHOLDER_PREFIX = "tempo-duplicate-placeholder-";
    exports.ADD_JSX_PREFIX = "tempo-add-jsx-placeholder-";
    exports.ADD_CLASS_INSTANT_UPDATE_QUEUE = "ADD_CLASS_INSTANT_UPDATE_QUEUE";
    exports.TEMPORARY_STYLING_CLASS_NAME = "arb89-temp-styling";
    var getTopLevelCodebaseIdForComponent = (componentId) => {
      let topLevelCodebaseId = null;
      let minNumberParents = Infinity;
      (0, jquery_1.default)(`.component-${componentId}`).each((index, element) => {
        if ((0, jquery_1.default)(element).parents().length < minNumberParents) {
          minNumberParents = (0, jquery_1.default)(element).parents().length;
          topLevelCodebaseId = (0, identifierUtils_1.getCodebaseIdFromNode)(element);
        }
      });
      return topLevelCodebaseId;
    };
    var addOrEditCSSRule = (selector, rules, id) => {
      var styleEl = document.createElement("style");
      if (id) {
        const existingElement = document.getElementById(id);
        if (existingElement) {
          existingElement.remove();
        }
        styleEl.id = id;
      }
      document.head.appendChild(styleEl);
      var styleSheet = styleEl.sheet;
      if (styleSheet.insertRule) {
        styleSheet.insertRule(selector + "{" + rules + "}", styleSheet.cssRules.length);
      } else if (styleSheet.addRule) {
        styleSheet.addRule(selector, rules, styleSheet.rules.length);
      }
    };
    var applyChangeItemToDocument = (parentPort, storyboardId, plainChangeItem) => {
      var _a;
      if (!plainChangeItem || !plainChangeItem.type) {
        return { sendNewNavTree: false, instantUpdateSuccessful: false };
      }
      const changeItem = (0, changeLedgerTypes_1.reconstructChangeLedgerClass)(plainChangeItem);
      let extraInstantUpdateData = {};
      let instantUpdateSuccessful = false;
      if (!document.getElementById(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS)) {
        addOrEditCSSRule(`.${identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS}`, "display: none !important", identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
      }
      let sendNewNavTree = false;
      if (changeItem.type === changeLedgerTypes_1.ChangeType.ADD_JSX) {
        const castChangeItem = changeItem;
        const changeFields = castChangeItem.changeFields;
        const newAddedIds = [];
        if (changeFields.htmlForInstantUpdate) {
          const elementToAdd = (0, jquery_1.default)(changeFields.htmlForInstantUpdate);
          elementToAdd.attr(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
          elementToAdd.attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
          elementToAdd.attr(identifierUtils_1.TEMPO_OUTLINE_UNTIL_REFESH, "true");
          const ID_FOR_ELEMENT = `${exports.ADD_JSX_PREFIX}${(0, uuid_1.v4)()}`;
          elementToAdd.attr(identifierUtils_1.TEMPO_ELEMENT_ID, ID_FOR_ELEMENT);
          elementToAdd.addClass(ID_FOR_ELEMENT);
          newAddedIds.push(ID_FOR_ELEMENT);
          (0, jquery_1.default)(`.${changeFields.codebaseIdToAddTo}`).each((index, item) => {
            if (changeFields.afterCodebaseId) {
              const afterElement = (0, jquery_1.default)(`.${changeFields.afterCodebaseId}`);
              if (!(afterElement === null || afterElement === void 0 ? void 0 : afterElement.length)) {
                return;
              }
              elementToAdd.insertAfter(afterElement.first());
            } else if (changeFields.beforeCodebaseId) {
              const beforeElement = (0, jquery_1.default)(`.${changeFields.beforeCodebaseId}`);
              if (!(beforeElement === null || beforeElement === void 0 ? void 0 : beforeElement.length)) {
                return;
              }
              elementToAdd.insertBefore(beforeElement.first());
            } else {
              (0, jquery_1.default)(item).append(elementToAdd);
            }
            sendNewNavTree = true;
            instantUpdateSuccessful = true;
          });
        }
        extraInstantUpdateData["newAddedIds"] = newAddedIds;
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.MOVE_JSX) {
        const castChangeItem = changeItem;
        const sourceElements = [];
        if ((0, jquery_1.default)(`.${castChangeItem.changeFields.codebaseIdToMove}`).length > 0) {
          (0, jquery_1.default)(`.${castChangeItem.changeFields.codebaseIdToMove}`).each((index, element) => {
            sourceElements.push((0, jquery_1.default)(element));
          });
        } else {
          let topLevelCodebaseId = getTopLevelCodebaseIdForComponent(castChangeItem.changeFields.codebaseIdToMove || "");
          if (topLevelCodebaseId) {
            (0, jquery_1.default)(`.${topLevelCodebaseId}`).each((index, element) => {
              sourceElements.push((0, jquery_1.default)(element));
            });
          }
        }
        let containerCodebaseId = getTopLevelCodebaseIdForComponent(castChangeItem.changeFields.codebaseIdToMoveTo || "") || castChangeItem.changeFields.codebaseIdToMoveTo;
        const newParentElements = [];
        sourceElements.forEach((element) => {
          let newParentElement = null;
          let parentElement = element.parent();
          while (parentElement.length) {
            if (parentElement.hasClass(containerCodebaseId)) {
              newParentElement = parentElement;
              break;
            }
            const matchingChildren = parentElement.find(`.${containerCodebaseId}`);
            if (matchingChildren.length) {
              newParentElement = matchingChildren.first();
              break;
            }
            parentElement = parentElement.parent();
          }
          if (!newParentElement) {
            newParentElements.push(null);
            return;
          }
          newParentElements.push(newParentElement);
        });
        sourceElements.forEach((element, index) => {
          const newParentElement = newParentElements[index];
          if (!newParentElement.length) {
            console.log("Could not find new parent element for instant update");
            return;
          }
          sendNewNavTree = true;
          instantUpdateSuccessful = true;
          element.attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
          let useClone = !newParentElement.is(element.parent());
          let cloneElement;
          if (useClone) {
            cloneElement = element.clone();
            cloneElement.attr(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
            element.addClass(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
            element.attr(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH, "true");
          }
          if (castChangeItem.changeFields.afterCodebaseId) {
            const afterIdToUse = getTopLevelCodebaseIdForComponent(castChangeItem.changeFields.afterCodebaseId) || castChangeItem.changeFields.afterCodebaseId;
            const afterElement = newParentElement.children(`.${afterIdToUse}`);
            if (afterElement.length) {
              if (useClone && cloneElement) {
                cloneElement.insertAfter(afterElement.first());
              } else {
                element.insertAfter(afterElement.first());
              }
              return;
            }
          }
          if (castChangeItem.changeFields.beforeCodebaseId) {
            const beforeIdToUse = getTopLevelCodebaseIdForComponent(castChangeItem.changeFields.beforeCodebaseId) || castChangeItem.changeFields.beforeCodebaseId;
            const beforeElement = newParentElement.children(`.${beforeIdToUse}`);
            if (beforeElement.length) {
              if (useClone && cloneElement) {
                cloneElement.insertBefore(beforeElement.first());
              } else {
                element.insertBefore(beforeElement.first());
              }
              return;
            }
          }
          if (useClone && cloneElement) {
            cloneElement.appendTo(newParentElement);
          } else {
            element.appendTo(newParentElement);
          }
        });
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.REMOVE_JSX) {
        const castChangeItem = changeItem;
        const parentToElementKeysRemoved = {};
        castChangeItem.changeFields.codebaseIdsToRemove.forEach((codebaseId) => {
          let codebaseIdToRemove;
          if ((0, jquery_1.default)(`.${codebaseId}`).length > 0) {
            codebaseIdToRemove = codebaseId;
          } else {
            let topLevelCodebaseId = getTopLevelCodebaseIdForComponent(codebaseId || "");
            if (!topLevelCodebaseId) {
              console.log("Could not find component element for instant update");
              return false;
            }
            codebaseIdToRemove = topLevelCodebaseId;
          }
          (0, jquery_1.default)(`.${codebaseIdToRemove}`).each((index, item) => {
            const elementKeyRemoved = (0, identifierUtils_1.getElementKeyFromNode)(item);
            const parentElementKey = (0, identifierUtils_1.getElementKeyFromNode)(item.parentElement);
            if (elementKeyRemoved && parentElementKey) {
              if (!parentToElementKeysRemoved[parentElementKey]) {
                parentToElementKeysRemoved[parentElementKey] = [];
              }
              parentToElementKeysRemoved[parentElementKey].push({
                outerHTML: item.outerHTML,
                elementKeyRemoved
              });
            }
            item.classList.add(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
            item.setAttribute(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH, "true");
            sendNewNavTree = true;
            instantUpdateSuccessful = true;
          });
        });
        extraInstantUpdateData.parentToElementKeysRemoved = parentToElementKeysRemoved;
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.ADD_CLASS || changeItem.type === changeLedgerTypes_1.ChangeType.STYLING) {
        let className, cssEquivalent, codebaseIdToAddClass, temporaryClass, codebaseClassName, modifiers;
        if (changeItem.type === changeLedgerTypes_1.ChangeType.ADD_CLASS) {
          const castChangeItem = changeItem;
          codebaseClassName = castChangeItem.changeFields.className;
          className = castChangeItem.changeFields.className;
          cssEquivalent = castChangeItem.changeFields.cssEquivalent;
          codebaseIdToAddClass = castChangeItem.changeFields.codebaseIdToAddClass;
          temporaryClass = castChangeItem.changeFields.temporaryOnly;
          modifiers = castChangeItem.changeFields.modifiers;
          if (temporaryClass) {
            className = exports.TEMPORARY_STYLING_CLASS_NAME;
          }
        } else {
          const castChangeItem = changeItem.changeFields;
          className = "";
          cssEquivalent = Object.keys(castChangeItem.stylingChanges).map((key) => {
            if (castChangeItem.stylingChanges[key] === constantsAndTypes_1.DELETE_STYLE_CONSTANT) {
              return `${(0, cssRuleUtils_1.camelToSnakeCase)(key)}: unset !important;`;
            }
            return `${(0, cssRuleUtils_1.camelToSnakeCase)(key)}: ${castChangeItem.stylingChanges[key]};`;
          }).join("");
          codebaseIdToAddClass = castChangeItem.codebaseId;
          modifiers = castChangeItem.modifiers;
        }
        const SAFE_CLASSNAME_REGEX = /[^A-Za-z0-9_-]/g;
        let classToAdd = (className || "").replace(SAFE_CLASSNAME_REGEX, "-").replace(/^\d/, "-$&");
        if (cssEquivalent && !temporaryClass) {
          const msSinceJan1 = Date.now() - 17040672e5;
          classToAdd = `${identifierUtils_1.TEMPO_INSTANT_UPDATE_STYLING_PREFIX}${msSinceJan1}-${classToAdd}`;
        }
        if (classToAdd) {
          if (!temporaryClass) {
            (0, jquery_1.default)(`.${codebaseIdToAddClass}`).removeClass(exports.TEMPORARY_STYLING_CLASS_NAME);
          }
          if (cssEquivalent) {
            if (modifiers && modifiers.length > 0) {
              const CSS_PSEUDO_MODIFIERS = [
                "hover",
                "required",
                "focus",
                "active",
                "invalid",
                "disabled"
              ];
              const pseudoModifiers = modifiers.filter((modifier) => CSS_PSEUDO_MODIFIERS.includes(modifier));
              const pseudoModifiersSuffix = pseudoModifiers.join(":");
              if (pseudoModifiers.length > 0) {
                const modifierClass = `${classToAdd}:${pseudoModifiersSuffix}`;
                addOrEditCSSRule(`.${modifierClass}`, cssEquivalent, modifierClass);
              } else {
                addOrEditCSSRule(`.${classToAdd}`, cssEquivalent, classToAdd);
              }
              const forceClasses = modifiers.map((modifier) => `.tempo-force-${modifier}`).join("");
              const instantUpdateForForceClass = `${classToAdd}${forceClasses}`;
              addOrEditCSSRule(`.${instantUpdateForForceClass}`, cssEquivalent, instantUpdateForForceClass);
            } else {
              addOrEditCSSRule(`.${classToAdd}`, cssEquivalent, classToAdd);
            }
          }
          const currentAddClassValues = (0, sessionStorageUtils_1.getMemoryStorageItem)(exports.ADD_CLASS_INSTANT_UPDATE_QUEUE) || [];
          if ((0, jquery_1.default)(`.${codebaseIdToAddClass}`).length > 0) {
            (0, jquery_1.default)(`.${codebaseIdToAddClass}`).addClass(classToAdd);
            instantUpdateSuccessful = true;
            currentAddClassValues.push({
              codebaseId: codebaseIdToAddClass,
              className: classToAdd
            });
          } else {
            let topLevelCodebaseId = getTopLevelCodebaseIdForComponent(codebaseIdToAddClass || "");
            if (topLevelCodebaseId && (0, jquery_1.default)(`.${topLevelCodebaseId}`).length > 0) {
              instantUpdateSuccessful = true;
              (0, jquery_1.default)(`.${topLevelCodebaseId}`).addClass(classToAdd);
              currentAddClassValues.push({
                codebaseId: topLevelCodebaseId,
                className: classToAdd
              });
            }
          }
          (0, sessionStorageUtils_1.setMemoryStorageItem)(exports.ADD_CLASS_INSTANT_UPDATE_QUEUE, currentAddClassValues);
          extraInstantUpdateData.addedClass = classToAdd;
          extraInstantUpdateData.codebaseAddedClass = codebaseClassName;
        }
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.REMOVE_CLASS) {
        const removeClassChangeFields = changeItem.changeFields;
        if ((0, jquery_1.default)(`.${removeClassChangeFields.codebaseIdToRemoveClass}`).length > 0) {
          (0, jquery_1.default)(`.${removeClassChangeFields.codebaseIdToRemoveClass}`).removeClass(removeClassChangeFields.className);
          instantUpdateSuccessful = true;
        } else {
          let topLevelCodebaseId = getTopLevelCodebaseIdForComponent(removeClassChangeFields.codebaseIdToRemoveClass || "");
          if (topLevelCodebaseId && (0, jquery_1.default)(`.${topLevelCodebaseId}`).length > 0) {
            instantUpdateSuccessful = true;
            (0, jquery_1.default)(`.${topLevelCodebaseId}`).removeClass(removeClassChangeFields.className);
          }
        }
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.WRAP_DIV) {
        const changeFields = changeItem.changeFields;
        const codebaseIdsToWrap = changeFields.codebaseIdsToWrap;
        const firstCodebaseId = codebaseIdsToWrap[0];
        (0, jquery_1.default)(`.${firstCodebaseId}`).each((index, item) => {
          const otherCodebaseIds = codebaseIdsToWrap.slice(1);
          const siblings = (0, jquery_1.default)(item).siblings();
          const allItemsToAddToNewDiv = [item];
          let earliestItem = item;
          let earliestIndex = (0, jquery_1.default)(item).index();
          otherCodebaseIds.forEach((codebaseId) => {
            const foundSibling = siblings.filter(`.${codebaseId}`).get(0);
            if (foundSibling) {
              allItemsToAddToNewDiv.push(foundSibling);
              const index2 = (0, jquery_1.default)(foundSibling).index();
              if (index2 < earliestIndex) {
                earliestItem = foundSibling;
                earliestIndex = index2;
              }
            }
          });
          if (allItemsToAddToNewDiv.length !== codebaseIdsToWrap.length) {
          }
          const newDiv = document.createElement("div");
          newDiv.className = exports.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID;
          newDiv.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
          newDiv.setAttribute("tempoelementid", exports.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID);
          newDiv.setAttribute(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
          allItemsToAddToNewDiv.forEach((elem) => {
            newDiv.appendChild(elem.cloneNode(true));
            elem.classList.add(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
            elem.setAttribute(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH, "true");
          });
          earliestItem.insertAdjacentElement("beforebegin", newDiv);
          sendNewNavTree = true;
          instantUpdateSuccessful = true;
        });
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.DUPLICATE) {
        const changeFileds = changeItem.changeFields;
        const codebaseIdsToDuplicate = changeFileds.codebaseIdsToDuplicate;
        codebaseIdsToDuplicate.forEach((codebaseIdToDuplicate) => {
          (0, jquery_1.default)(`.${codebaseIdToDuplicate}`).each((index, item) => {
            const clonedNode = item.cloneNode(true);
            clonedNode.setAttribute(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
            clonedNode.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
            clonedNode.setAttribute("tempoelementid", `${exports.DUPLICATE_PLACEHOLDER_PREFIX}${codebaseIdToDuplicate}`);
            clonedNode.classList.add(exports.DUPLICATE_PLACEHOLDER_PREFIX + codebaseIdToDuplicate);
            clonedNode.classList.remove(codebaseIdToDuplicate);
            let children = Array.from(clonedNode.children);
            while (children.length) {
              const child = children.pop();
              if (!child) {
                continue;
              }
              const codebaseId = child.getAttribute("tempoelementid");
              if (!codebaseId) {
                continue;
              }
              child.setAttribute("tempoelementid", `${exports.DUPLICATE_PLACEHOLDER_PREFIX}${codebaseId}`);
              child.classList.remove(codebaseId);
              child.classList.add(exports.DUPLICATE_PLACEHOLDER_PREFIX + codebaseId);
              child.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
              children.push(...Array.from(child.children));
            }
            item.insertAdjacentElement("afterend", clonedNode);
            sendNewNavTree = true;
            instantUpdateSuccessful = true;
          });
        });
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.CHANGE_TAG) {
        const changeFields = changeItem.changeFields;
        (0, jquery_1.default)(`.${changeFields.codebaseIdToChange}`).each((index, item) => {
          const $newElement = (0, jquery_1.default)("<" + changeFields.newTagName + "></" + changeFields.newTagName + ">");
          $newElement.attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
          $newElement.attr(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
          const $item = (0, jquery_1.default)(item);
          jquery_1.default.each($item[0].attributes, function() {
            $newElement.attr(this.name, this.value);
          });
          $item.contents().clone(true, true).appendTo($newElement);
          $item.before($newElement);
          $item.addClass(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
          $item.attr(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH, "true");
          sendNewNavTree = true;
          instantUpdateSuccessful = true;
        });
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.UNDO) {
        const { sendNewNavTree: _sendNewNavTree, instantUpdateSuccessful: _instantUpdateSuccessful } = applyUndoChangeItemToDocument(parentPort, changeItem);
        sendNewNavTree = _sendNewNavTree;
        instantUpdateSuccessful = _instantUpdateSuccessful;
      } else if (changeItem.type === changeLedgerTypes_1.ChangeType.REDO) {
        const changeFields = changeItem.changeFields;
        const changeToRedo = changeFields.changeToRedo;
        if (changeLedgerTypes_1.CHANGE_TYPES_WITH_INSTANT_UNDO.includes(changeToRedo.type)) {
          const { sendNewNavTree: _sendNewNavTree, instantUpdateSuccessful: _instantUpdateSuccessful } = (0, exports.applyChangeItemToDocument)(parentPort, storyboardId, changeToRedo);
          sendNewNavTree = _sendNewNavTree;
          instantUpdateSuccessful = _instantUpdateSuccessful;
          if (changeToRedo.prevIdToNewIdMap) {
            (0, exports.updateCodebaseIds)(parentPort, changeToRedo.prevIdToNewIdMap, true);
          }
        }
      }
      let elementKeyToSelectAfterInstantUpdate = changeItem.getElementKeyToSelectAfterInstantUpdate();
      let elementKeysToMultiselectAfterInstantUpdate = changeItem.getElementKeysToMultiselectAfterInstantUpdate();
      if (changeItem.type === changeLedgerTypes_1.ChangeType.UNDO) {
        elementKeyToSelectAfterInstantUpdate = changeItem.changeFields.changeToUndo.getElementKeyToSelectAfterUndoInstantUpdate();
        elementKeysToMultiselectAfterInstantUpdate = changeItem.changeFields.changeToUndo.getElementKeysToMultiselectAfterUndoInstantUpdate();
      }
      if (elementKeyToSelectAfterInstantUpdate !== void 0) {
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, elementKeyToSelectAfterInstantUpdate);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
          elementKey: elementKeyToSelectAfterInstantUpdate,
          outerHTML: (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKeyToSelectAfterInstantUpdate}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML
        });
      }
      if (elementKeysToMultiselectAfterInstantUpdate !== void 0) {
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS, elementKeysToMultiselectAfterInstantUpdate);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
          elementKeys: elementKeysToMultiselectAfterInstantUpdate,
          outerHTMLs: elementKeysToMultiselectAfterInstantUpdate === null || elementKeysToMultiselectAfterInstantUpdate === void 0 ? void 0 : elementKeysToMultiselectAfterInstantUpdate.map((elementKey) => {
            var _a2;
            return (_a2 = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0)) === null || _a2 === void 0 ? void 0 : _a2.outerHTML;
          })
        });
      }
      if (instantUpdateSuccessful) {
        (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_DELETE_AFTER_INSTANT_UPDATE}=true]`).remove();
      }
      parentPort.postMessage({
        id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.INSTANT_UPDATE_DONE,
        changeItem: plainChangeItem,
        instantUpdateData: extraInstantUpdateData,
        instantUpdateSuccessful
      });
      return { sendNewNavTree, instantUpdateSuccessful };
    };
    exports.applyChangeItemToDocument = applyChangeItemToDocument;
    var applyUndoChangeItemToDocument = (parentPort, changeItem) => {
      const changeFields = changeItem.changeFields;
      const changeToUndo = changeFields.changeToUndo;
      if (!changeLedgerTypes_1.CHANGE_TYPES_WITH_INSTANT_UNDO.includes(changeToUndo.type)) {
        return { sendNewNavTree: false, instantUpdateSuccessful: false };
      }
      let sendNewNavTree = false;
      let instantUpdateSuccessful = false;
      if (changeToUndo.prevIdToNewIdMap) {
        const undoCodebaseIdChanges = {};
        Object.keys(changeToUndo.prevIdToNewIdMap).forEach((prevId) => {
          const newId = changeToUndo.prevIdToNewIdMap[prevId];
          undoCodebaseIdChanges[newId] = prevId;
        });
        const selectedElementSpecifiedAfterUndo = changeToUndo.getElementKeyToSelectAfterUndoInstantUpdate() !== void 0;
        (0, exports.updateCodebaseIds)(parentPort, undoCodebaseIdChanges, !selectedElementSpecifiedAfterUndo);
      }
      if (changeToUndo.type === changeLedgerTypes_1.ChangeType.REMOVE_JSX) {
        const innerChangeFields = changeToUndo.changeFields;
        const codebaseIdsToReadd = innerChangeFields.codebaseIdsToRemove;
        if (changeFields.matchingActivityFlushed) {
          const instantUpdateData = changeToUndo.getInstantUpdateData();
          const parentToElementKeysRemoved = instantUpdateData.parentToElementKeysRemoved || {};
          Object.entries(parentToElementKeysRemoved).forEach(([parentElementKey, itemsRemoved]) => {
            const sortedItemsRemoved = Object.values(itemsRemoved).sort((a, b) => {
              const aElementKey = tempoElement_1.TempoElement.fromKey(a.elementKeyRemoved);
              const bElementKey = tempoElement_1.TempoElement.fromKey(b.elementKeyRemoved);
              return aElementKey.uniquePath.localeCompare(bElementKey.uniquePath);
            });
            const parentElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${parentElementKey}`).get(0);
            if (parentElement) {
              sortedItemsRemoved.forEach((item) => {
                const { elementKeyRemoved, outerHTML } = item;
                const element = tempoElement_1.TempoElement.fromKey(elementKeyRemoved);
                const indexInParent = Number(element.uniquePath.split("-").pop());
                const newElementFromHtml = (0, jquery_1.default)(outerHTML).get(0);
                if (newElementFromHtml) {
                  newElementFromHtml.setAttribute(identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH, "true");
                  newElementFromHtml.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
                  parentElement.insertBefore(newElementFromHtml, parentElement.children[indexInParent] || null);
                  instantUpdateSuccessful = true;
                  sendNewNavTree = true;
                }
              });
            }
          });
        } else {
          codebaseIdsToReadd.forEach((codebaseIdToReadd) => {
            (0, jquery_1.default)(`.${codebaseIdToReadd}`).each((index, item) => {
              item.classList.remove(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
              item.removeAttribute(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH);
              sendNewNavTree = true;
              instantUpdateSuccessful = true;
            });
          });
        }
      } else if (changeToUndo.type === changeLedgerTypes_1.ChangeType.ADD_CLASS || changeToUndo.type === changeLedgerTypes_1.ChangeType.STYLING) {
        const instantUpdateData = changeToUndo.getInstantUpdateData();
        const innerChangeFields = changeToUndo.changeFields;
        const addedClass = instantUpdateData === null || instantUpdateData === void 0 ? void 0 : instantUpdateData.addedClass;
        if (addedClass) {
          (0, jquery_1.default)(`.${innerChangeFields.codebaseIdToAddClass}`).each((index, item) => {
            if ((0, jquery_1.default)(item).hasClass(addedClass)) {
              (0, jquery_1.default)(item).removeClass(addedClass);
              instantUpdateSuccessful = true;
            }
          });
        }
        const codebaseAddedClass = instantUpdateData === null || instantUpdateData === void 0 ? void 0 : instantUpdateData.codebaseAddedClass;
        if (codebaseAddedClass) {
          (0, jquery_1.default)(`.${innerChangeFields.codebaseIdToAddClass}`).each((index, item) => {
            if ((0, jquery_1.default)(item).hasClass(codebaseAddedClass)) {
              (0, jquery_1.default)(item).removeClass(codebaseAddedClass);
              instantUpdateSuccessful = true;
            }
          });
        }
      } else if (changeToUndo.type === changeLedgerTypes_1.ChangeType.ADD_JSX) {
        const instantUpdateData = changeToUndo.getInstantUpdateData();
        const addedIds = instantUpdateData === null || instantUpdateData === void 0 ? void 0 : instantUpdateData.addedIds;
        addedIds === null || addedIds === void 0 ? void 0 : addedIds.forEach((addedId) => {
          (0, jquery_1.default)(`.${addedId}`).remove();
          instantUpdateSuccessful = true;
        });
        sendNewNavTree = true;
      }
      return { sendNewNavTree, instantUpdateSuccessful };
    };
    var updateCodebaseIds = (parentPort, prevIdToNewIdMap, updateElementKeys) => {
      const changes = [];
      Object.entries(prevIdToNewIdMap).forEach(([prevCodebaseId, newCodebaseId]) => {
        (0, jquery_1.default)(`.${prevCodebaseId}`).each((index, item) => {
          changes.push({
            item,
            prevCodebaseId,
            newCodebaseId
          });
        });
      });
      changes.forEach((change) => {
        const $item = (0, jquery_1.default)(change.item);
        const newClass = ($item.attr("class") || "").replace(new RegExp(`${change.prevCodebaseId}`, "g"), change.newCodebaseId);
        $item.attr("class", newClass);
        change.item.setAttribute("tempoelementid", change.newCodebaseId);
      });
      if (!updateElementKeys) {
        return Boolean(changes.length);
      }
      const keysToCheck = [
        {
          key: sessionStorageUtils_1.SELECTED_ELEMENT_KEY,
          messageId: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY
        },
        {
          key: sessionStorageUtils_1.HOVERED_ELEMENT_KEY,
          messageId: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.HOVERED_ELEMENT_KEY
        }
      ];
      keysToCheck.forEach(({ key, messageId }) => {
        var _a;
        const elementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(key);
        const tempoElement = tempoElement_1.TempoElement.fromKey(elementKey);
        if (prevIdToNewIdMap[tempoElement.codebaseId]) {
          const newElement = new tempoElement_1.TempoElement(prevIdToNewIdMap[tempoElement.codebaseId], tempoElement.storyboardId, tempoElement.uniquePath);
          (0, sessionStorageUtils_1.setMemoryStorageItem)(key, newElement.getKey());
          parentPort.postMessage({
            id: messageId,
            elementKey: newElement.getKey(),
            outerHTML: (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${newElement.getKey()}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML
          });
        }
      });
      const multiselectedElementKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS);
      if (multiselectedElementKeys === null || multiselectedElementKeys === void 0 ? void 0 : multiselectedElementKeys.length) {
        const newMultiselectedElementKeys = [];
        multiselectedElementKeys.forEach((elementKey) => {
          const tempoElement = tempoElement_1.TempoElement.fromKey(elementKey);
          if (prevIdToNewIdMap[tempoElement.codebaseId]) {
            const newElement = new tempoElement_1.TempoElement(prevIdToNewIdMap[tempoElement.codebaseId], tempoElement.storyboardId, tempoElement.uniquePath);
            newMultiselectedElementKeys.push(newElement.getKey());
          } else {
            newMultiselectedElementKeys.push(elementKey);
          }
        });
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS, newMultiselectedElementKeys);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
          elementKeys: newMultiselectedElementKeys,
          outerHTMLs: newMultiselectedElementKeys === null || newMultiselectedElementKeys === void 0 ? void 0 : newMultiselectedElementKeys.map((elementKey) => {
            var _a;
            return (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML;
          })
        });
      }
      return Boolean(changes.length);
    };
    exports.updateCodebaseIds = updateCodebaseIds;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/identifierUtils.js
var require_identifierUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/identifierUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isElementInSvg = exports.isSkipNavTreeNode = exports.isMovingElement = exports.getAllUnknownClasses = exports.getAllUnknownClasesFromList = exports.isOutline = exports.hasClass = exports.removeUniqueLookupFromNode = exports.getUniqueLookupFromNode = exports.getElementKeyFromNode = exports.addCodebaseIdToNode = exports.addUniqueLookupAsClass = exports.addElementKeyAsClass = exports.getCodebaseIdFromNode = exports.getCodebaseIdFromClassName = exports.validateUuid = exports.KNOWN_ATTRIBUTES = exports.TEMPO_QUEUE_DELETE_AFTER_HOT_RELOAD = exports.TEMPO_ELEMENT_ID = exports.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH = exports.TEMPO_OUTLINE_UNTIL_REFESH = exports.TEMPO_DELETE_AFTER_REFRESH = exports.TEMPO_INSTANT_UPDATE = exports.TEMPO_DELETE_AFTER_INSTANT_UPDATE = exports.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS = exports.TEMPO_INSTANT_UPDATE_STYLING_PREFIX = exports.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE = exports.TEMPO_INSTANT_DIV_DRAW_CLASS = exports.EDIT_TEXT_BUTTON = exports.OUTLINE_CLASS = exports.UNIQUE_LOOKUP_PREFIX = exports.ELEMENT_KEY_PREFIX = void 0;
    var changeItemFunctions_1 = require_changeItemFunctions();
    exports.ELEMENT_KEY_PREFIX = "arb89-key-";
    exports.UNIQUE_LOOKUP_PREFIX = "arb89-lookup-";
    exports.OUTLINE_CLASS = "arb89-outline";
    exports.EDIT_TEXT_BUTTON = "arb89-edit-text-button";
    exports.TEMPO_INSTANT_DIV_DRAW_CLASS = "arb89-instant-div-draw";
    exports.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE = "arb89-move-between-parents-outline";
    exports.TEMPO_INSTANT_UPDATE_STYLING_PREFIX = "arb89-styling-";
    exports.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS = "arb89-display-none-until-refresh";
    exports.TEMPO_DELETE_AFTER_INSTANT_UPDATE = "arb89-delete-after-instant-update";
    var KNOWN_CLASSES = /* @__PURE__ */ new Set([
      exports.OUTLINE_CLASS,
      exports.TEMPO_INSTANT_DIV_DRAW_CLASS,
      exports.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE,
      exports.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS,
      changeItemFunctions_1.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID,
      changeItemFunctions_1.TEMPORARY_STYLING_CLASS_NAME,
      exports.EDIT_TEXT_BUTTON
    ]);
    var KNOWN_CLASS_PREFIXES = [
      exports.ELEMENT_KEY_PREFIX,
      exports.UNIQUE_LOOKUP_PREFIX,
      exports.TEMPO_INSTANT_UPDATE_STYLING_PREFIX,
      changeItemFunctions_1.DUPLICATE_PLACEHOLDER_PREFIX,
      changeItemFunctions_1.ADD_JSX_PREFIX
    ];
    exports.TEMPO_INSTANT_UPDATE = "arb89-instant-update";
    exports.TEMPO_DELETE_AFTER_REFRESH = "arb89-delete-after-refresh";
    exports.TEMPO_OUTLINE_UNTIL_REFESH = "arb89-outline-until-refresh";
    exports.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH = "arb89-do-not-show-in-nav";
    exports.TEMPO_ELEMENT_ID = "tempoelementid";
    exports.TEMPO_QUEUE_DELETE_AFTER_HOT_RELOAD = "arb89-queue-delete-after-hot-reload";
    exports.KNOWN_ATTRIBUTES = /* @__PURE__ */ new Set([
      exports.TEMPO_INSTANT_UPDATE,
      exports.TEMPO_DELETE_AFTER_REFRESH,
      exports.TEMPO_DELETE_AFTER_INSTANT_UPDATE,
      exports.TEMPO_OUTLINE_UNTIL_REFESH,
      exports.TEMPO_QUEUE_DELETE_AFTER_HOT_RELOAD,
      exports.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH,
      exports.TEMPO_ELEMENT_ID
    ]);
    var validateUuid = (uuid) => {
      return new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$", "i").test(uuid);
    };
    exports.validateUuid = validateUuid;
    var getCodebaseIdFromClassName = (className) => {
      if (className && className.startsWith("tempo-") && ((0, exports.validateUuid)(className.substring("tempo-".length)) || className === changeItemFunctions_1.WRAP_IN_DIV_PLACEHOLDER_CODEBASE_ID || className.startsWith(changeItemFunctions_1.DUPLICATE_PLACEHOLDER_PREFIX))) {
        return className;
      }
      return null;
    };
    exports.getCodebaseIdFromClassName = getCodebaseIdFromClassName;
    var getCodebaseIdFromNode = (node) => {
      var _a;
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return null;
      }
      let clsFound = null;
      node.classList.forEach((cls) => {
        if (clsFound) {
          return;
        }
        if (!cls) {
          return;
        }
        const extractedId = (0, exports.getCodebaseIdFromClassName)(cls);
        if (extractedId) {
          clsFound = extractedId;
        }
      });
      if (clsFound) {
        return clsFound;
      }
      if (((_a = node === null || node === void 0 ? void 0 : node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "body") {
        return "body";
      }
      if ((node === null || node === void 0 ? void 0 : node.id) == "root") {
        return "root";
      }
      if ((node === null || node === void 0 ? void 0 : node.id) == "__next") {
        return "__next";
      }
      return null;
    };
    exports.getCodebaseIdFromNode = getCodebaseIdFromNode;
    var addElementKeyAsClass = (node, safeElementKey) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return;
      }
      const classesToRemove = /* @__PURE__ */ new Set();
      node.classList.forEach((cls) => {
        if (cls === null || cls === void 0 ? void 0 : cls.startsWith(exports.ELEMENT_KEY_PREFIX)) {
          classesToRemove.add(cls);
        }
      });
      classesToRemove.forEach((cls) => {
        node.classList.remove(cls);
      });
      node.classList.add(`${exports.ELEMENT_KEY_PREFIX}${safeElementKey}`);
    };
    exports.addElementKeyAsClass = addElementKeyAsClass;
    var addUniqueLookupAsClass = (node, uniqueLookup) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return;
      }
      const classesToRemove = /* @__PURE__ */ new Set();
      node.classList.forEach((cls) => {
        if (cls === null || cls === void 0 ? void 0 : cls.startsWith(exports.UNIQUE_LOOKUP_PREFIX)) {
          classesToRemove.add(cls);
        }
      });
      classesToRemove.forEach((cls) => {
        node.classList.remove(cls);
      });
      node.classList.add(`${exports.UNIQUE_LOOKUP_PREFIX}${uniqueLookup}`);
    };
    exports.addUniqueLookupAsClass = addUniqueLookupAsClass;
    var addCodebaseIdToNode = (node, codebaseId) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return;
      }
      const classesToRemove = /* @__PURE__ */ new Set();
      node.classList.forEach((cls) => {
        if (!cls) {
          return;
        }
        if ((0, exports.getCodebaseIdFromClassName)(cls)) {
          classesToRemove.add(cls);
        }
      });
      classesToRemove.forEach((cls) => {
        node.classList.remove(cls);
      });
      node.classList.add(codebaseId);
    };
    exports.addCodebaseIdToNode = addCodebaseIdToNode;
    var getElementKeyFromNode = (node) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return null;
      }
      let clsFound = null;
      node.classList.forEach((cls) => {
        if (cls === null || cls === void 0 ? void 0 : cls.startsWith(exports.ELEMENT_KEY_PREFIX)) {
          clsFound = cls.substring(exports.ELEMENT_KEY_PREFIX.length);
        }
      });
      return clsFound;
    };
    exports.getElementKeyFromNode = getElementKeyFromNode;
    var getUniqueLookupFromNode = (node) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return null;
      }
      let clsFound = null;
      node.classList.forEach((cls) => {
        if (cls === null || cls === void 0 ? void 0 : cls.startsWith(exports.UNIQUE_LOOKUP_PREFIX)) {
          clsFound = cls.substring(exports.UNIQUE_LOOKUP_PREFIX.length);
        }
      });
      return clsFound;
    };
    exports.getUniqueLookupFromNode = getUniqueLookupFromNode;
    var removeUniqueLookupFromNode = (node) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return false;
      }
      const classesToRemove = /* @__PURE__ */ new Set();
      node.classList.forEach((cls) => {
        if (cls === null || cls === void 0 ? void 0 : cls.startsWith(exports.UNIQUE_LOOKUP_PREFIX)) {
          classesToRemove.add(cls);
        }
      });
      classesToRemove.forEach((cls) => {
        node.classList.remove(cls);
      });
      return classesToRemove.size > 0;
    };
    exports.removeUniqueLookupFromNode = removeUniqueLookupFromNode;
    var hasClass = (node, klass) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return false;
      }
      let hasClass2 = false;
      node.classList.forEach((cls) => {
        if (cls == klass) {
          hasClass2 = true;
        }
      });
      return hasClass2;
    };
    exports.hasClass = hasClass;
    var isOutline = (node) => {
      return (0, exports.hasClass)(node, exports.OUTLINE_CLASS);
    };
    exports.isOutline = isOutline;
    var getAllUnknownClasesFromList = (classes) => {
      return classes.filter((cls) => {
        if (!cls) {
          return false;
        }
        const isCodebaseId = (0, exports.getCodebaseIdFromClassName)(cls) !== null;
        const clsStartsWithKnownPrefix = KNOWN_CLASS_PREFIXES.some((prefix) => cls.startsWith(prefix));
        if (!clsStartsWithKnownPrefix && !KNOWN_CLASSES.has(cls) && !isCodebaseId) {
          return true;
        }
        return false;
      });
    };
    exports.getAllUnknownClasesFromList = getAllUnknownClasesFromList;
    var getAllUnknownClasses = (node) => {
      if (!(node === null || node === void 0 ? void 0 : node.classList)) {
        return [];
      }
      return (0, exports.getAllUnknownClasesFromList)(Array.from(node.classList));
    };
    exports.getAllUnknownClasses = getAllUnknownClasses;
    var isMovingElement = (node) => {
      if (!node) {
        return false;
      }
      if (typeof node.getAttribute !== "function") {
        return false;
      }
      return node.getAttribute(exports.TEMPO_INSTANT_UPDATE) === "true";
    };
    exports.isMovingElement = isMovingElement;
    var isSkipNavTreeNode = (node) => {
      if (!node) {
        return;
      }
      return node.getAttribute(exports.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH) === "true";
    };
    exports.isSkipNavTreeNode = isSkipNavTreeNode;
    var isElementInSvg = (node, parent) => {
      var _a;
      if (!node) {
        return false;
      }
      if (parent && ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "svg") {
        return true;
      }
      if (node.parentNode) {
        return (0, exports.isElementInSvg)(node.parentNode, true);
      }
      return false;
    };
    exports.isElementInSvg = isElementInSvg;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/resqUtils.js
var require_resqUtils = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/resqUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findElementInTree = exports.getElementName = exports.clearLookupsFromTree = exports.buildTreeLookupMap = exports.removeUniqueLoookupFromReactTreeNode = exports.addUniqueLoookupToReactTreeNode = exports.getUniqueLoookupFromReactTreeNode = exports.getDomElementForReactNode = exports.buildNodeTree = exports.getRootReactElement = exports.findReactInstance = void 0;
    var identifierUtils_1 = require_identifierUtils();
    var uuid_1 = require_commonjs_browser();
    var findReactInstance = (element) => {
      if (element.hasOwnProperty("_reactRootContainer")) {
        if (element._reactRootContainer._internalRoot) {
          return element._reactRootContainer._internalRoot.current;
        } else {
          return element._reactRootContainer.current;
        }
      }
      const instanceId = Object.keys(element).find((key) => key.startsWith("__reactInternalInstance") || key.startsWith("__reactFiber") || key.startsWith("__reactContainer"));
      if (instanceId) {
        return element[instanceId];
      }
    };
    exports.findReactInstance = findReactInstance;
    function isElement(o) {
      return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    }
    var getRootReactElement = () => {
      var _a;
      let rootSelector = "#root";
      if (!document.querySelector(rootSelector)) {
        rootSelector = "#__next";
      }
      const root = document.querySelector(rootSelector);
      let findInstance = null;
      if (root) {
        findInstance = (0, exports.findReactInstance)(root);
      } else {
        document.getElementsByTagName("body")[0].childNodes.forEach((childNode) => {
          if (findInstance) {
            return;
          }
          if (childNode.tagName !== "DIV") {
            return;
          }
          findInstance = (0, exports.findReactInstance)(childNode);
        });
      }
      if (findInstance && !findInstance.child && ((_a = findInstance.alternate) === null || _a === void 0 ? void 0 : _a.child)) {
        findInstance = findInstance.alternate;
      }
      return findInstance;
    };
    exports.getRootReactElement = getRootReactElement;
    var removeChildrenFromProps = (props) => {
      if (!props || typeof props === "string") {
        return props;
      }
      const returnProps = Object.assign({}, props);
      delete returnProps.children;
      return returnProps;
    };
    var getElementState = (elementState) => {
      if (!elementState) {
        return void 0;
      }
      const { baseState } = elementState;
      if (baseState) {
        return baseState;
      }
      return elementState;
    };
    var buildNodeTree = (element, parentTreeNode) => {
      var _a, _b;
      let tree = { children: [] };
      tree.element = element;
      tree.parent = parentTreeNode;
      if (!element) {
        return tree;
      }
      tree.name = (0, exports.getElementName)(element.type);
      if (typeof tree.name !== "string") {
        tree.name = (_b = (_a = tree.name) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      tree.props = removeChildrenFromProps(element.memoizedProps);
      tree.state = getElementState(element.memoizedState);
      let { child } = element;
      if (child) {
        tree.children.push(child);
        while (child.sibling) {
          tree.children.push(child.sibling);
          child = child.sibling;
        }
      }
      tree.children = tree.children.map((child2) => (0, exports.buildNodeTree)(child2, tree));
      return tree;
    };
    exports.buildNodeTree = buildNodeTree;
    var getDomElementForReactNode = (node) => {
      var _a, _b;
      let stateNode = (_a = node === null || node === void 0 ? void 0 : node.element) === null || _a === void 0 ? void 0 : _a.stateNode;
      if (stateNode && ((_b = stateNode === null || stateNode === void 0 ? void 0 : stateNode.constructor) === null || _b === void 0 ? void 0 : _b.name) === "FiberRootNode") {
        stateNode = stateNode.containerInfo;
      }
      if (isElement(stateNode)) {
        return stateNode;
      }
      return null;
    };
    exports.getDomElementForReactNode = getDomElementForReactNode;
    var getUniqueLoookupFromReactTreeNode = (node) => {
      const stateNode = (0, exports.getDomElementForReactNode)(node);
      if (stateNode) {
        return (0, identifierUtils_1.getUniqueLookupFromNode)(stateNode);
      }
      return null;
    };
    exports.getUniqueLoookupFromReactTreeNode = getUniqueLoookupFromReactTreeNode;
    var addUniqueLoookupToReactTreeNode = (node, uniqueLookup) => {
      const stateNode = (0, exports.getDomElementForReactNode)(node);
      if (stateNode) {
        (0, identifierUtils_1.addUniqueLookupAsClass)(stateNode, uniqueLookup);
        return true;
      }
      return false;
    };
    exports.addUniqueLoookupToReactTreeNode = addUniqueLoookupToReactTreeNode;
    var removeUniqueLoookupFromReactTreeNode = (node) => {
      const stateNode = (0, exports.getDomElementForReactNode)(node);
      if (stateNode) {
        (0, identifierUtils_1.removeUniqueLookupFromNode)(stateNode);
        return true;
      }
      return false;
    };
    exports.removeUniqueLoookupFromReactTreeNode = removeUniqueLoookupFromReactTreeNode;
    var buildTreeLookupMap = (tree, map) => {
      const newUniqueLookup = (0, uuid_1.v4)();
      const added = (0, exports.addUniqueLoookupToReactTreeNode)(tree, newUniqueLookup);
      if (added) {
        map[newUniqueLookup] = tree;
      }
      tree.children.forEach((child) => {
        (0, exports.buildTreeLookupMap)(child, map);
      });
    };
    exports.buildTreeLookupMap = buildTreeLookupMap;
    var clearLookupsFromTree = (tree) => {
      (0, exports.removeUniqueLoookupFromReactTreeNode)(tree);
      tree.children.forEach((child) => {
        (0, exports.clearLookupsFromTree)(child);
      });
    };
    exports.clearLookupsFromTree = clearLookupsFromTree;
    var isFunction = (type) => {
      return typeof type === "function";
    };
    var isObject = (type) => {
      return typeof type === "object";
    };
    var getElementName = (type) => {
      var _a;
      if (!type) {
        return type;
      }
      if (isFunction(type) || isObject(type)) {
        if (type.displayName) {
          if (isFunction(type.displayName)) {
            return type.displayName();
          } else {
            return type.displayName;
          }
        }
        if (type.name) {
          if (isFunction(type.name)) {
            return type.name();
          } else {
            return type.name;
          }
        }
        if ((_a = type.render) === null || _a === void 0 ? void 0 : _a.name) {
          return type.render.name;
        }
        return null;
      }
      return type;
    };
    exports.getElementName = getElementName;
    var findElementInTree = (tree, searchFn, firstOnly) => {
      let searchQueue = [tree];
      const foundNodes = [];
      while (searchQueue.length > 0) {
        const node = searchQueue.shift();
        if (searchFn(node)) {
          foundNodes.push(node);
          if (firstOnly) {
            break;
          }
        }
        searchQueue = searchQueue.concat(node.children || []);
      }
      return foundNodes;
    };
    exports.findElementInTree = findElementInTree;
  }
});

// node_modules/lz-string/libs/lz-string.js
var require_lz_string = __commonJS({
  "node_modules/lz-string/libs/lz-string.js"(exports, module) {
    var LZString = function() {
      var f = String.fromCharCode;
      var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
      var baseReverseDic = {};
      function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
          baseReverseDic[alphabet] = {};
          for (var i = 0; i < alphabet.length; i++) {
            baseReverseDic[alphabet][alphabet.charAt(i)] = i;
          }
        }
        return baseReverseDic[alphabet][character];
      }
      var LZString2 = {
        compressToBase64: function(input) {
          if (input == null) return "";
          var res = LZString2._compress(input, 6, function(a) {
            return keyStrBase64.charAt(a);
          });
          switch (res.length % 4) {
            default:
            case 0:
              return res;
            case 1:
              return res + "===";
            case 2:
              return res + "==";
            case 3:
              return res + "=";
          }
        },
        decompressFromBase64: function(input) {
          if (input == null) return "";
          if (input == "") return null;
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrBase64, input.charAt(index));
          });
        },
        compressToUTF16: function(input) {
          if (input == null) return "";
          return LZString2._compress(input, 15, function(a) {
            return f(a + 32);
          }) + " ";
        },
        decompressFromUTF16: function(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString2._decompress(compressed.length, 16384, function(index) {
            return compressed.charCodeAt(index) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(uncompressed) {
          var compressed = LZString2.compress(uncompressed);
          var buf = new Uint8Array(compressed.length * 2);
          for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
            var current_value = compressed.charCodeAt(i);
            buf[i * 2] = current_value >>> 8;
            buf[i * 2 + 1] = current_value % 256;
          }
          return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(compressed) {
          if (compressed === null || compressed === void 0) {
            return LZString2.decompress(compressed);
          } else {
            var buf = new Array(compressed.length / 2);
            for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
              buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
            }
            var result = [];
            buf.forEach(function(c) {
              result.push(f(c));
            });
            return LZString2.decompress(result.join(""));
          }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(input) {
          if (input == null) return "";
          return LZString2._compress(input, 6, function(a) {
            return keyStrUriSafe.charAt(a);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(input) {
          if (input == null) return "";
          if (input == "") return null;
          input = input.replace(/ /g, "+");
          return LZString2._decompress(input.length, 32, function(index) {
            return getBaseValue(keyStrUriSafe, input.charAt(index));
          });
        },
        compress: function(uncompressed) {
          return LZString2._compress(uncompressed, 16, function(a) {
            return f(a);
          });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
          if (uncompressed == null) return "";
          var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
          for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
              context_dictionary[context_c] = context_dictSize++;
              context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
              context_w = context_wc;
            } else {
              if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 8; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                } else {
                  value = 1;
                  for (i = 0; i < context_numBits; i++) {
                    context_data_val = context_data_val << 1 | value;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = 0;
                  }
                  value = context_w.charCodeAt(0);
                  for (i = 0; i < 16; i++) {
                    context_data_val = context_data_val << 1 | value & 1;
                    if (context_data_position == bitsPerChar - 1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                    } else {
                      context_data_position++;
                    }
                    value = value >> 1;
                  }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                  context_enlargeIn = Math.pow(2, context_numBits);
                  context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
              } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              context_dictionary[context_wc] = context_dictSize++;
              context_w = String(context_c);
            }
          }
          if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
              if (context_w.charCodeAt(0) < 256) {
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 8; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              } else {
                value = 1;
                for (i = 0; i < context_numBits; i++) {
                  context_data_val = context_data_val << 1 | value;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = 0;
                }
                value = context_w.charCodeAt(0);
                for (i = 0; i < 16; i++) {
                  context_data_val = context_data_val << 1 | value & 1;
                  if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                  } else {
                    context_data_position++;
                  }
                  value = value >> 1;
                }
              }
              context_enlargeIn--;
              if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
              }
              delete context_dictionaryToCreate[context_w];
            } else {
              value = context_dictionary[context_w];
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
          }
          value = 2;
          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
          while (true) {
            context_data_val = context_data_val << 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data.push(getCharFromInt(context_data_val));
              break;
            } else context_data_position++;
          }
          return context_data.join("");
        },
        decompress: function(compressed) {
          if (compressed == null) return "";
          if (compressed == "") return null;
          return LZString2._decompress(compressed.length, 32768, function(index) {
            return compressed.charCodeAt(index);
          });
        },
        _decompress: function(length, resetValue, getNextValue) {
          var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
          for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
          }
          bits = 0;
          maxpower = Math.pow(2, 2);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          switch (next = bits) {
            case 0:
              bits = 0;
              maxpower = Math.pow(2, 8);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 1:
              bits = 0;
              maxpower = Math.pow(2, 16);
              power = 1;
              while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                  data.position = resetValue;
                  data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
              }
              c = f(bits);
              break;
            case 2:
              return "";
          }
          dictionary[3] = c;
          w = c;
          result.push(c);
          while (true) {
            if (data.index > length) {
              return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            switch (c = bits) {
              case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                  resb = data.val & data.position;
                  data.position >>= 1;
                  if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                  }
                  bits |= (resb > 0 ? 1 : 0) * power;
                  power <<= 1;
                }
                dictionary[dictSize++] = f(bits);
                c = dictSize - 1;
                enlargeIn--;
                break;
              case 2:
                return result.join("");
            }
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
            if (dictionary[c]) {
              entry = dictionary[c];
            } else {
              if (c === dictSize) {
                entry = w + w.charAt(0);
              } else {
                return null;
              }
            }
            result.push(entry);
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;
            if (enlargeIn == 0) {
              enlargeIn = Math.pow(2, numBits);
              numBits++;
            }
          }
        }
      };
      return LZString2;
    }();
    if (typeof define === "function" && define.amd) {
      define(function() {
        return LZString;
      });
    } else if (typeof module !== "undefined" && module != null) {
      module.exports = LZString;
    } else if (typeof angular !== "undefined" && angular != null) {
      angular.module("LZString", []).factory("LZString", function() {
        return LZString;
      });
    }
  }
});

// node_modules/tempo-devtools/dist/posthog.js
var require_posthog = __commonJS({
  "node_modules/tempo-devtools/dist/posthog.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHog = {
      init: () => {
        !function(t, e) {
          var o, n, p, r;
          e.__SV || (window.posthog = e, e._i = [], e.init = function(i, s, a) {
            function g(t2, e2) {
              var o2 = e2.split(".");
              2 == o2.length && (t2 = t2[o2[0]], e2 = o2[1]), t2[e2] = function() {
                t2.push([e2].concat(Array.prototype.slice.call(arguments, 0)));
              };
            }
            (p = t.createElement("script")).type = "text/javascript", p.async = true, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
            var u = e;
            for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function(t2) {
              var e2 = "posthog";
              return "posthog" !== a && (e2 += "." + a), t2 || (e2 += " (stub)"), e2;
            }, u.people.toString = function() {
              return u.toString(1) + ".people (stub)";
            }, o = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId".split(" "), n = 0; n < o.length; n++)
              g(u, o[n]);
            e._i.push([i, s, a]);
          }, e.__SV = 1);
        }(document, window.posthog || []);
        posthog.init("phc_jjpEvBVV0R2mp44ePAL8Yt4jdtX5HW1lc493rkpUwwa", {
          api_host: "https://us.i.posthog.com",
          person_profiles: "identified_only",
          session_recording: {
            recordCrossOriginIframes: true,
            maskAllInputs: false,
            maskInputOptions: {
              password: true
            }
          }
        });
      }
    };
    exports.default = PostHog;
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape2(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite2;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape2;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports);
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/channelMessagingFunctions.js
var require_channelMessagingFunctions = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/channelMessagingFunctions.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initChannelMessagingFunctions = void 0;
    var identifierUtils_1 = require_identifierUtils();
    var sessionStorageUtils_1 = require_sessionStorageUtils();
    var navTreeUtils_1 = require_navTreeUtils();
    var jquery_1 = __importDefault(require_jquery());
    var lodash_1 = __importDefault(require_lodash());
    var outlineUtils_1 = require_outlineUtils();
    var cssFunctions_1 = require_cssFunctions();
    var constantsAndTypes_1 = require_constantsAndTypes();
    var changeItemFunctions_1 = require_changeItemFunctions();
    var resqUtils_1 = require_resqUtils();
    var tempoElement_1 = require_tempoElement();
    var editTextUtils_1 = require_editTextUtils();
    var PIXELS_TO_MOVE_BEFORE_DRAG = 20;
    var IMMEDIATELY_REMOVE_POINTER_LOCK = "IMMEDIATELY_REMOVE_POINTER_LOCK";
    var LAST_NAV_TREE_REFRESH_TIME = "LAST_NAV_TREE_REFRESH_TIME";
    var initChannelMessagingFunctions = () => {
      String.prototype.hashCode = function() {
        var hash = 0, i, chr;
        if (this.length === 0)
          return hash;
        for (i = 0; i < this.length; i++) {
          chr = this.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0;
        }
        return hash;
      };
      let passiveSupported = false;
      const makePassiveEventOption = () => {
        try {
          const options = {
            get passive() {
              passiveSupported = true;
              return false;
            }
          };
          return options;
        } catch (err) {
          passiveSupported = false;
          return passiveSupported;
        }
      };
      const observeDOM = function() {
        var MutationObserver = (
          // @ts-ignore
          window.MutationObserver || window.WebKitMutationObserver
        );
        return function(obj, callback) {
          if (!obj || obj.nodeType !== 1)
            return () => {
            };
          if (MutationObserver) {
            var mutationObserver = new MutationObserver(callback);
            mutationObserver.observe(obj, {
              childList: true,
              subtree: true,
              attributes: true
            });
            return () => {
              mutationObserver.disconnect();
            };
          } else if (window.addEventListener) {
            obj.addEventListener("DOMNodeInserted", callback, false);
            obj.addEventListener("DOMNodeRemoved", callback, false);
            return () => {
              obj.removeEventListener("DOMNodeInserted", callback, false);
              obj.removeEventListener("DOMNodeRemoved", callback, false);
            };
          }
          return () => {
          };
        };
      }();
      const getSelectableNavNode = (e) => {
        const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE);
        let firstNavNode = null;
        let searchNode = e.target;
        while (searchNode && !firstNavNode) {
          firstNavNode = elementKeyToNavNode[(0, identifierUtils_1.getElementKeyFromNode)(searchNode) || ""];
          searchNode = searchNode.parentElement;
        }
        if (!firstNavNode) {
          return constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD;
        }
        const isNavNodeMatch = (navTreeNode) => {
          var _a, _b, _c, _d;
          if (selectedElement.isEmpty()) {
            throw Error("No selected element when isNavNodeMatch called");
          }
          if (!navTreeNode) {
            return false;
          }
          if (!navTreeNode.tempoElement.codebaseId.startsWith("tempo-") || navTreeNode.tempoElement.codebaseId === navTreeUtils_1.SKIP_ROOT_CODEBASE_ID) {
            return false;
          }
          if (selectedElement.isEqual(navTreeNode.tempoElement)) {
            return true;
          }
          if (navTreeNode.tempoElement.isParentOf(selectedElement)) {
            return true;
          }
          let parent = navTreeNode.parent;
          while (parent && !parent.tempoElement.codebaseId.startsWith("tempo-")) {
            parent = parent.parent;
          }
          if ((_a = parent === null || parent === void 0 ? void 0 : parent.tempoElement) === null || _a === void 0 ? void 0 : _a.isEqual(selectedElement)) {
            return true;
          }
          const selectedNode = elementKeyToNavNode[selectedElement.getKey()];
          if (selectedNode && ((_d = (_c = (_b = navTreeNode.parent) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.includes) === null || _d === void 0 ? void 0 : _d.call(_c, selectedNode))) {
            return true;
          }
          return false;
        };
        let foundNavNode = null;
        let searchNavNode = firstNavNode;
        while (searchNavNode) {
          if (!selectedElement.isEmpty() && !selectedElement.isStoryboard()) {
            if (isNavNodeMatch(searchNavNode)) {
              foundNavNode = searchNavNode;
              break;
            }
          } else {
            if (searchNavNode.tempoElement.codebaseId && searchNavNode.tempoElement.codebaseId.startsWith("tempo-")) {
              foundNavNode = searchNavNode;
            }
          }
          searchNavNode = searchNavNode.parent;
        }
        return foundNavNode || null;
      };
      const onPointerOver = (e, parentPort, storyboardId, selectBottomMostElement) => {
        const passedThrough = passThroughEventsIfNeeded(e, parentPort, storyboardId);
        const editingTextInfo = (0, editTextUtils_1.getEditingInfo)();
        if (e.altKey || passedThrough && !editingTextInfo) {
          return;
        }
        if ((0, sessionStorageUtils_1.getMemoryStorageItem)("mouseDragContext")) {
          return;
        }
        const currentHoveredKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        let hoveredNavNode;
        if (e.metaKey || e.ctrlKey || selectBottomMostElement) {
          const elementKey = (0, identifierUtils_1.getElementKeyFromNode)(e.target);
          hoveredNavNode = elementKeyToNavNode[elementKey];
          if (!hoveredNavNode && e.target.parentNode === document.body) {
            hoveredNavNode = constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD;
          }
        } else {
          hoveredNavNode = getSelectableNavNode(e);
        }
        const currentSelectedKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const currentSelectedElement = tempoElement_1.TempoElement.fromKey(currentSelectedKey);
        if (e.shiftKey && hoveredNavNode && currentSelectedKey) {
          if (typeof hoveredNavNode === "string" && !currentSelectedElement.isStoryboard()) {
            hoveredNavNode = null;
          }
          if (typeof hoveredNavNode !== "string" && !(hoveredNavNode === null || hoveredNavNode === void 0 ? void 0 : hoveredNavNode.tempoElement.isSiblingOf(currentSelectedElement))) {
            hoveredNavNode = null;
          }
        }
        if (!hoveredNavNode) {
          if (currentHoveredKey !== null) {
            (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY, null);
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.HOVERED_ELEMENT_KEY,
              elementKey: null
            });
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }
          return;
        }
        if (typeof hoveredNavNode === "string") {
          if (hoveredNavNode === constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD) {
            const storyboardKey = tempoElement_1.TempoElement.forStoryboard(storyboardId).getKey();
            if (currentHoveredKey !== storyboardKey) {
              (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY, storyboardKey);
              parentPort.postMessage({
                id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.HOVERED_ELEMENT_KEY,
                elementKey: storyboardKey
              });
              (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
            }
          }
          return;
        }
        const tempoElementKey = hoveredNavNode.tempoElement.getKey();
        if (currentHoveredKey !== tempoElementKey) {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.HOVERED_ELEMENT_KEY,
            elementKey: tempoElementKey
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY, tempoElementKey);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        }
      };
      const clearHoveredElements = (parentPort, storyboardId) => {
        const currentHoveredKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
        if (!currentHoveredKey) {
          return;
        }
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.HOVERED_ELEMENT_KEY,
          elementKey: null
        });
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY, null);
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      const onPointerMove = (e, parentPort, storyboardId) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        passThroughEventsIfNeeded(e, parentPort, storyboardId);
        let mouseDragData = (0, sessionStorageUtils_1.getMemoryStorageItem)("mouseDragContext");
        if (!e.buttons && mouseDragData) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", null);
          if (mouseDragData === null || mouseDragData === void 0 ? void 0 : mouseDragData.dragging) {
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.DRAG_CANCEL_EVENT,
              event: {}
            });
          }
          mouseDragData = null;
        }
        const importantFields = {
          pageX: e.pageX,
          pageY: e.pageY,
          clientX: e.clientX,
          clientY: e.clientY
        };
        (0, sessionStorageUtils_1.setMemoryStorageItem)("mousePos", importantFields);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MOUSE_MOVE_EVENT,
          event: importantFields
        });
        if (mouseDragData && !mouseDragData.dragging) {
          const zoomPerc = (0, sessionStorageUtils_1.getMemoryStorageItem)("zoomPerc") || 1;
          const totalMovementPixels = Math.abs(mouseDragData.pageX - e.pageX) + Math.abs(mouseDragData.pageY - e.pageY);
          if (totalMovementPixels >= PIXELS_TO_MOVE_BEFORE_DRAG / zoomPerc) {
            if (mouseDragData.parentSelectedElementKey) {
              const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
              const navNodeToSelect = elementKeyToNavNode[mouseDragData.parentSelectedElementKey];
              if (navNodeToSelect) {
                parentPort.postMessage({
                  id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
                  elementKey: mouseDragData.parentSelectedElementKey,
                  outerHTML: (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${mouseDragData.parentSelectedElementKey}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML
                });
                (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, mouseDragData.parentSelectedElementKey);
              }
            }
            const aiContextSelection = (0, sessionStorageUtils_1.getMemoryStorageItem)("aiContext");
            if (!aiContextSelection) {
              (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", Object.assign(Object.assign({}, mouseDragData), { dragging: true }));
              const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
              const selectedElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElementKey}`).get(0);
              parentPort.postMessage({
                id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.DRAG_START_EVENT,
                event: mouseDragData,
                outerHTML: selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.outerHTML
              });
              const bodyObject = (0, jquery_1.default)("body").get(0);
              (0, sessionStorageUtils_1.setMemoryStorageItem)(IMMEDIATELY_REMOVE_POINTER_LOCK, true);
              yield bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.requestPointerLock();
            }
          }
        }
        if ((0, sessionStorageUtils_1.getMemoryStorageItem)("mouseDragContext")) {
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        }
      });
      const getParentDomElementForNavNode = (navNode) => {
        if (!navNode) {
          return null;
        }
        if (!(navNode === null || navNode === void 0 ? void 0 : navNode.isComponent)) {
          const childDomElement2 = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${navNode.tempoElement.getKey()}`).get(0);
          return childDomElement2 === null || childDomElement2 === void 0 ? void 0 : childDomElement2.parentElement;
        }
        const elementKeyToLookupList = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_LOOKUP_LIST) || {};
        const lookupList = elementKeyToLookupList[navNode.tempoElement.getKey()] || [];
        let childDomElement;
        lookupList.forEach((lookupElementKey) => {
          if (childDomElement) {
            return;
          }
          childDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${lookupElementKey}`).get(0);
        });
        return childDomElement === null || childDomElement === void 0 ? void 0 : childDomElement.parentElement;
      };
      const onPointerDown = (e, parentPort, storyboardId) => {
        if (e.which !== 1) {
          return;
        }
        if ((0, identifierUtils_1.hasClass)(e.target, identifierUtils_1.EDIT_TEXT_BUTTON)) {
          return;
        }
        const passedThrough = passThroughEventsIfNeeded(e, parentPort, storyboardId);
        if (passedThrough) {
          return;
        }
        const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
        const selectedNavNode = onSelectElement(e, parentPort, storyboardId);
        const useSelectedIfDragging = !selectedElement.isEmpty() && selectedElement.isParentOf(selectedNavNode === null || selectedNavNode === void 0 ? void 0 : selectedNavNode.tempoElement);
        let offsetX, offsetY;
        if (selectedNavNode === null || selectedNavNode === void 0 ? void 0 : selectedNavNode.pageBoundingBox) {
          offsetX = selectedNavNode.pageBoundingBox.pageX + selectedNavNode.pageBoundingBox.width / 2 - e.pageX;
          offsetY = selectedNavNode.pageBoundingBox.pageY + selectedNavNode.pageBoundingBox.height / 2 - e.pageY;
        }
        const importantFields = {
          pageX: e.pageX,
          pageY: e.pageY,
          // The difference between where the user clicked and the center of the element
          offsetX,
          offsetY,
          // Used to reselect the parent if the user starts to move
          parentSelectedElementKey: useSelectedIfDragging ? selectedElementKey : null
        };
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        const navNodeToUseForDragging = useSelectedIfDragging ? elementKeyToNavNode[selectedElementKey] : selectedNavNode;
        const parentDomElement = getParentDomElementForNavNode(navNodeToUseForDragging);
        if (parentDomElement) {
          importantFields["selectedParentDisplay"] = (0, cssFunctions_1.cssEval)(parentDomElement, "display");
          importantFields["selectedParentFlexDirection"] = (0, cssFunctions_1.cssEval)(parentDomElement, "flex-direction");
        }
        const aiContextSelection = (0, sessionStorageUtils_1.getMemoryStorageItem)("aiContext");
        if (!aiContextSelection) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", importantFields);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      const onPointerUp = (e, parentPort, storyboardId) => {
        passThroughEventsIfNeeded(e, parentPort, storyboardId);
        const mouseDragData = (0, sessionStorageUtils_1.getMemoryStorageItem)("mouseDragContext");
        (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", null);
        if (mouseDragData === null || mouseDragData === void 0 ? void 0 : mouseDragData.dragging) {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.DRAG_END_EVENT,
            event: {}
          });
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      const onSelectElement = (e, parentPort, storyboardId) => {
        var _a, _b, _c;
        const driveModeEnabled = !!(0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId);
        if (driveModeEnabled) {
          return null;
        }
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        let selectedNavNode;
        if (e.metaKey || e.ctrlKey) {
          const elementKey = (0, identifierUtils_1.getElementKeyFromNode)(e.target);
          selectedNavNode = elementKeyToNavNode[elementKey];
          if (!selectedNavNode && e.target.parentNode === document.body) {
            selectedNavNode = constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD;
          }
        } else {
          selectedNavNode = getSelectableNavNode(e);
        }
        const currentSelectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        if (!selectedNavNode) {
          if (currentSelectedElementKey) {
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
              elementKey: null
            });
            (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, null);
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }
          return null;
        }
        const currentSelectedElement = tempoElement_1.TempoElement.fromKey(currentSelectedElementKey);
        const currentMultiSelectedKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS) || [];
        let newSelectedElement = typeof selectedNavNode === "string" ? tempoElement_1.TempoElement.forStoryboard(storyboardId) : selectedNavNode.tempoElement;
        let newMultiSelectKeys = [];
        if (e.shiftKey && currentSelectedElementKey) {
          const elementToDeselect = currentMultiSelectedKeys.map((elementKey) => tempoElement_1.TempoElement.fromKey(elementKey)).find((element) => {
            return element.isParentOf(newSelectedElement) || element.isEqual(newSelectedElement);
          });
          if (elementToDeselect) {
            newMultiSelectKeys = currentMultiSelectedKeys.filter((elementKey) => {
              return elementKey !== elementToDeselect.getKey();
            });
            if (elementToDeselect.isEqual(currentSelectedElement) && newMultiSelectKeys.length > 1) {
              parentPort.postMessage({
                id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
                elementKey: newMultiSelectKeys[0],
                outerHTML: (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${newMultiSelectKeys[0]}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML
              });
              (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, newMultiSelectKeys[0]);
            }
          } else if (currentSelectedElement.isSiblingOf(newSelectedElement)) {
            if (currentMultiSelectedKeys === null || currentMultiSelectedKeys === void 0 ? void 0 : currentMultiSelectedKeys.length) {
              newMultiSelectKeys = currentMultiSelectedKeys.concat([
                newSelectedElement.getKey()
              ]);
            } else {
              newMultiSelectKeys = [
                currentSelectedElementKey,
                newSelectedElement.getKey()
              ];
            }
          } else {
            return null;
          }
        }
        if (newMultiSelectKeys.length > 1) {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
            elementKeys: newMultiSelectKeys,
            outerHTMLs: newMultiSelectKeys === null || newMultiSelectKeys === void 0 ? void 0 : newMultiSelectKeys.map((elementKey) => {
              var _a2;
              return (_a2 = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0)) === null || _a2 === void 0 ? void 0 : _a2.outerHTML;
            })
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS, newMultiSelectKeys);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          (0, editTextUtils_1.teardownEditableText)(parentPort, storyboardId);
          return null;
        }
        if (newMultiSelectKeys.length === 1) {
          newSelectedElement = tempoElement_1.TempoElement.fromKey(newMultiSelectKeys[0]);
        }
        const clearMultiSelectState = () => {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
            elementKeys: [],
            outerHTMLs: []
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS, null);
        };
        if (newSelectedElement.isStoryboard()) {
          if (newSelectedElement.getKey() !== currentSelectedElementKey) {
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
              elementKey: newSelectedElement.getKey(),
              outerHTML: (_b = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${newSelectedElement.getKey()}`).get(0)) === null || _b === void 0 ? void 0 : _b.outerHTML
            });
            (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, newSelectedElement.getKey());
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }
          (0, editTextUtils_1.teardownEditableText)(parentPort, storyboardId);
          clearMultiSelectState();
          return null;
        }
        if ((0, editTextUtils_1.currentlyEditing)()) {
          const editingInfo = (0, editTextUtils_1.getEditingInfo)();
          if ((editingInfo === null || editingInfo === void 0 ? void 0 : editingInfo.key) !== currentSelectedElementKey) {
            (0, editTextUtils_1.teardownEditableText)(parentPort, storyboardId);
          }
          clearMultiSelectState();
          return null;
        }
        e.preventDefault();
        e.stopPropagation();
        if ((0, editTextUtils_1.canEditText)(newSelectedElement) && newSelectedElement.getKey() === currentSelectedElementKey) {
          (0, editTextUtils_1.setupEditableText)(newSelectedElement, parentPort, storyboardId);
        }
        if (newSelectedElement.getKey() === currentSelectedElementKey) {
          clearMultiSelectState();
          return selectedNavNode;
        }
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
          elementKey: newSelectedElement.getKey(),
          outerHTML: (_c = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${newSelectedElement.getKey()}`).get(0)) === null || _c === void 0 ? void 0 : _c.outerHTML
        });
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, newSelectedElement.getKey());
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        clearMultiSelectState();
        return selectedNavNode;
      };
      const passThroughEventsIfNeeded = (e, parentPort, storyboardId) => {
        var _a, _b;
        const driveModeEnabled = !!(0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId);
        const editingTextInfo = (0, editTextUtils_1.getEditingInfo)();
        if (driveModeEnabled || editingTextInfo) {
          return true;
        }
        (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
        (_b = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _b === void 0 ? void 0 : _b.call(e);
        return false;
      };
      const onClickElementContextMenu = (e, parentPort, storyboardId) => {
        var _a;
        const passedThrough = passThroughEventsIfNeeded(e, parentPort, storyboardId);
        if (passedThrough) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", null);
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        let requestedNavNode;
        if (e.metaKey || e.ctrlKey) {
          const elementKey = (0, identifierUtils_1.getElementKeyFromNode)(e.target);
          requestedNavNode = elementKeyToNavNode[elementKey];
          if (!requestedNavNode && e.target.parentNode === document.body) {
            requestedNavNode = constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD;
          }
        } else {
          requestedNavNode = getSelectableNavNode(e);
        }
        const currentSelectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const currentMultiSelectedKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS);
        if (!requestedNavNode || typeof requestedNavNode === "string") {
          if (requestedNavNode === constantsAndTypes_1.SELECT_OR_HOVER_STORYBOARD && !(currentMultiSelectedKeys === null || currentMultiSelectedKeys === void 0 ? void 0 : currentMultiSelectedKeys.length)) {
            const storyboardKey = tempoElement_1.TempoElement.forStoryboard(storyboardId).getKey();
            if (currentSelectedElementKey === storyboardKey) {
              return;
            }
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
              elementKey: storyboardKey
            });
            (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, storyboardKey);
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }
          return;
        }
        let contextRequestedElementKey = null;
        const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
        if (!requestedNavNode.tempoElement.isEqual(selectedElement) && !selectedElement.isParentOf(requestedNavNode.tempoElement) && !(currentMultiSelectedKeys === null || currentMultiSelectedKeys === void 0 ? void 0 : currentMultiSelectedKeys.length)) {
          contextRequestedElementKey = requestedNavNode.tempoElement.getKey();
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
            elementKey: contextRequestedElementKey,
            outerHTML: (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${contextRequestedElementKey}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, contextRequestedElementKey);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        }
        const importantFields = {
          clientX: e.clientX,
          clientY: e.clientY
        };
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.CONTEXT_REQUESTED,
          event: importantFields
        });
      };
      const buildAndSendNavTree = (parentPort, storyboardId, treeElementLookup, scopeLookup, storyboardComponentElement) => {
        let treeElements = treeElementLookup;
        if (!treeElements) {
          treeElements = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.TREE_ELEMENT_LOOKUP) || {};
        }
        let scopes = scopeLookup;
        if (!scopes) {
          scopes = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SCOPE_LOOKUP) || {};
        }
        let storyboardComponent = storyboardComponentElement;
        if (storyboardComponentElement === "EXPLICIT_NONE") {
          storyboardComponent = null;
        } else if (!storyboardComponent) {
          storyboardComponent = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.STORYBOARD_COMPONENT) || {};
        }
        const rootReactElement = (0, resqUtils_1.getRootReactElement)();
        const reactTree = (0, resqUtils_1.buildNodeTree)(rootReactElement, null);
        const lookupIdToReactTreeMap = {};
        (0, resqUtils_1.buildTreeLookupMap)(reactTree, lookupIdToReactTreeMap);
        const knownComponentNames = /* @__PURE__ */ new Set();
        const knownComponentInstanceNames = /* @__PURE__ */ new Set();
        if (treeElements) {
          Object.values(treeElements).forEach((treeElement) => {
            if (treeElement.type === "component" || treeElement.type === "storybook-component") {
              knownComponentNames.add(treeElement.componentName);
            }
            if (treeElement.type === "component-instance") {
              knownComponentInstanceNames.add(treeElement.componentName);
            }
          });
        }
        const elementKeyToLookupList = {};
        const elementKeyToNavNode = {};
        const builtNavTree = (0, navTreeUtils_1.buildNavForNode)(storyboardId, void 0, (0, jquery_1.default)("body").get(0), "", "root", scopes, treeElements, lookupIdToReactTreeMap, knownComponentNames, knownComponentInstanceNames, elementKeyToLookupList, elementKeyToNavNode);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_LOOKUP_LIST, elementKeyToLookupList);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.CURRENT_NAV_TREE, builtNavTree);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE, elementKeyToNavNode);
        (0, resqUtils_1.clearLookupsFromTree)(reactTree);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.NAV_TREE,
          navTree: builtNavTree,
          outerHtml: document.documentElement.outerHTML
        });
        (0, navTreeUtils_1.runNavTreeBuiltCallbacks)();
      };
      const onFlushStart = () => {
        const classesToDelete = [];
        (0, jquery_1.default)(`*[class*=${identifierUtils_1.TEMPO_INSTANT_UPDATE_STYLING_PREFIX}]`).each((i, element) => {
          const classes = (element.getAttribute("class") || "").split(" ");
          classes.forEach((className) => {
            if (className.startsWith(identifierUtils_1.TEMPO_INSTANT_UPDATE_STYLING_PREFIX)) {
              classesToDelete.push(className);
            }
          });
        });
        (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH}=true]`).attr(identifierUtils_1.TEMPO_QUEUE_DELETE_AFTER_HOT_RELOAD, "true");
        (0, sessionStorageUtils_1.setMemoryStorageItem)(changeItemFunctions_1.ADD_CLASS_INSTANT_UPDATE_QUEUE, []);
        (0, sessionStorageUtils_1.setMemoryStorageItem)("POST_HOT_RELOAD_CLEAR", {
          classesToDelete
        });
      };
      const clearInstantUpdatesAndSendNavTree = (parentPort, storyboardId) => {
        (0, sessionStorageUtils_1.setMemoryStorageItem)(LAST_NAV_TREE_REFRESH_TIME, /* @__PURE__ */ new Date());
        const { classesToDelete } = (0, sessionStorageUtils_1.getMemoryStorageItem)("POST_HOT_RELOAD_CLEAR") || {};
        (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_QUEUE_DELETE_AFTER_HOT_RELOAD}=true]`).remove();
        (0, jquery_1.default)(`.${identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS}`).removeClass(identifierUtils_1.TEMPO_DISPLAY_NONE_UNTIL_REFRESH_CLASS);
        (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_INSTANT_UPDATE}=true]`).removeAttr(identifierUtils_1.TEMPO_INSTANT_UPDATE);
        (0, jquery_1.default)(`*[${identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH}=true]`).removeAttr(identifierUtils_1.TEMPO_DO_NOT_SHOW_IN_NAV_UNTIL_REFRESH);
        (0, jquery_1.default)(`.${changeItemFunctions_1.TEMPORARY_STYLING_CLASS_NAME}`).removeClass(changeItemFunctions_1.TEMPORARY_STYLING_CLASS_NAME);
        classesToDelete === null || classesToDelete === void 0 ? void 0 : classesToDelete.forEach((cls) => {
          (0, jquery_1.default)(`.${cls}`).removeClass(cls);
        });
        const newAddClassQueue = (0, sessionStorageUtils_1.getMemoryStorageItem)(changeItemFunctions_1.ADD_CLASS_INSTANT_UPDATE_QUEUE) || [];
        newAddClassQueue.forEach((item) => {
          if (!item) {
            return;
          }
          const { codebaseId, className } = item;
          if (codebaseId && className) {
            (0, jquery_1.default)(`.${codebaseId}`).attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
            (0, jquery_1.default)(`.${codebaseId}`).addClass(className);
          }
        });
        try {
          setTimeout(() => {
            buildAndSendNavTree(parentPort, storyboardId);
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }, 300);
        } catch (e) {
          console.error("ERROR: Could not re-create nav tree on DOM change, " + e);
        }
      };
      const onDOMChanged = (mutations, parentPort, storyboardId, fromNextJsLoader) => {
        var _a;
        if ((0, sessionStorageUtils_1.getMemoryStorageItem)("href") !== window.location.href) {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.LATEST_HREF,
            href: window.location.href
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)("href", window.location.href);
        }
        let refreshNavTree = false;
        if (fromNextJsLoader) {
          const mutationTarget = (_a = mutations === null || mutations === void 0 ? void 0 : mutations[0]) === null || _a === void 0 ? void 0 : _a.target;
          if (mutationTarget && mutationTarget.id === "container") {
            const currentlyHotReloading = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOT_RELOADING);
            if (mutationTarget.classList.contains("visible")) {
              (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOT_RELOADING, true);
            } else {
              (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOT_RELOADING, false);
              refreshNavTree = true;
            }
          }
        } else {
          mutations.forEach((e) => {
            if (e.type === "attributes" && e.attributeName === "class" && e.target && !(0, outlineUtils_1.isNodeOutline)(e.target) && !(0, identifierUtils_1.isMovingElement)(e.target) && // And not a script
            // Bug found on Oct 8, 2024, for some reason the script kept triggering a reload
            !e.target.tagName.toLowerCase().includes("script")) {
              const elementKey = (0, identifierUtils_1.getElementKeyFromNode)(e.target);
              const uniqueLookup = (0, identifierUtils_1.getUniqueLookupFromNode)(e.target);
              if (!elementKey && !uniqueLookup && !(0, identifierUtils_1.isElementInSvg)(e.target)) {
                refreshNavTree = true;
              }
              return;
            }
            [e.addedNodes, e.removedNodes].forEach((nodeList) => {
              if (!nodeList) {
                return;
              }
              nodeList.forEach((node) => {
                if (!(0, outlineUtils_1.isNodeOutline)(node) && !(0, identifierUtils_1.isMovingElement)(node)) {
                  refreshNavTree = true;
                }
              });
            });
          });
        }
        if (!refreshNavTree) {
          return;
        }
        if (fromNextJsLoader) {
          const triggerTime = /* @__PURE__ */ new Date();
          setTimeout(() => {
            const lastRefreshTime = (0, sessionStorageUtils_1.getMemoryStorageItem)(LAST_NAV_TREE_REFRESH_TIME);
            if (!lastRefreshTime || lastRefreshTime < triggerTime) {
              clearInstantUpdatesAndSendNavTree(parentPort, storyboardId);
            }
          }, 1e3);
          return;
        }
        clearInstantUpdatesAndSendNavTree(parentPort, storyboardId);
      };
      const onWheel = (e, parentPort, storyboardId) => {
        const passedThrough = passThroughEventsIfNeeded(e, parentPort, storyboardId);
        const isScrollShortcut = e.altKey;
        const isZoomShortcut = e.ctrlKey || e.metaKey;
        if (!isZoomShortcut && (passedThrough || isScrollShortcut)) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        const importantFields = {
          deltaX: e.deltaX,
          deltaY: e.deltaY,
          wheelDelta: e.wheelDelta,
          x: e.x,
          y: e.y,
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          shiftKey: e.shiftKey,
          metaKey: e.metaKey
        };
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.WHEEL_EVENT,
          event: importantFields
        });
      };
      const activeElementMetadata = () => {
        const activeElement = document.activeElement;
        let tagName, isContentEditable, elementType;
        if (activeElement) {
          tagName = activeElement.tagName;
          if (activeElement instanceof HTMLElement) {
            isContentEditable = activeElement.isContentEditable;
          }
          if (activeElement instanceof HTMLInputElement) {
            elementType = activeElement.type;
          }
        }
        return {
          tagName,
          isContentEditable,
          elementType
        };
      };
      const onKeyDown = (e, parentPort) => {
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.KEY_DOWN_EVENT,
          event: {
            key: e.key,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
            ctrlKey: e.ctrlKey,
            activeElement: Object.assign({}, activeElementMetadata())
          }
        });
      };
      const onKeyUp = (e, parentPort) => {
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.KEY_UP_EVENT,
          event: {
            key: e.key,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
            ctrlKey: e.ctrlKey,
            activeElement: Object.assign({}, activeElementMetadata())
          }
        });
      };
      const throttledUpdateOutlines = lodash_1.default.throttle((parentPort, storyboardId) => (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId), 15);
      const onScroll = (e, parentPort, storyboardId) => {
        throttledUpdateOutlines(parentPort, storyboardId);
      };
      window.initProject = (parentPort, storyboardId, treeElementLookup, scopeLookup, storyboardComponentElement, options = {}, storyboardType, savedComponentFilename, originalStoryboardUrl) => {
        const passive = makePassiveEventOption();
        passive["capture"] = true;
        const body$ = (0, jquery_1.default)("body");
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.TREE_ELEMENT_LOOKUP, treeElementLookup);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SCOPE_LOOKUP, scopeLookup);
        if (storyboardComponentElement) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.STORYBOARD_COMPONENT, storyboardComponentElement);
        }
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.STORYBOARD_TYPE, storyboardType);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SAVED_STORYBOARD_COMPONENT_FILENAME, savedComponentFilename);
        if (originalStoryboardUrl) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.ORIGINAL_STORYBOARD_URL, originalStoryboardUrl);
        }
        (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        const bodyObject = body$.get(0);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("click", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("pointerover", (e) => {
          onPointerOver(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("pointerdown", (e) => {
          onPointerDown(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("pointerup", (e) => {
          onPointerUp(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("pointermove", (e) => {
          onPointerMove(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("pointerleave", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("contextmenu", (e) => {
          onClickElementContextMenu(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("dblclick", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("mouseover", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("mouseout", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("mousemove", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("mousedown", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("mouseup", (e) => {
          passThroughEventsIfNeeded(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("wheel", (e) => {
          onWheel(e, parentPort, storyboardId);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("keydown", (e) => {
          onKeyDown(e, parentPort);
        }, passive);
        bodyObject === null || bodyObject === void 0 ? void 0 : bodyObject.addEventListener("keyup", (e) => {
          onKeyUp(e, parentPort);
        }, passive);
        window.addEventListener("scroll", (e) => {
          onScroll(e, parentPort, storyboardId);
        }, passive);
        document.addEventListener("pointerlockchange", () => {
          if (document.pointerLockElement && (0, sessionStorageUtils_1.getMemoryStorageItem)(IMMEDIATELY_REMOVE_POINTER_LOCK)) {
            document.exitPointerLock();
            (0, sessionStorageUtils_1.setMemoryStorageItem)(IMMEDIATELY_REMOVE_POINTER_LOCK, false);
          }
        }, false);
        observeDOM(bodyObject, (e) => {
          onDOMChanged(e, parentPort, storyboardId);
        });
        const nextBuildWatcher = document.getElementById("__next-build-watcher");
        if (nextBuildWatcher && nextBuildWatcher.shadowRoot) {
          Array.from(nextBuildWatcher.shadowRoot.children).forEach((child) => {
            observeDOM(child, (e) => {
              onDOMChanged(e, parentPort, storyboardId, true);
            });
          });
        }
        if (options.driveModeEnabled) {
          enableDriveMode(parentPort, storyboardId);
        } else {
          disableDriveMode(parentPort, storyboardId);
        }
        if (options.aiContextSelection) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)("aiContext", true);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        } else {
          (0, sessionStorageUtils_1.setMemoryStorageItem)("aiContext", false);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
        }
        try {
          buildAndSendNavTree(parentPort, storyboardId, treeElementLookup, scopeLookup, storyboardComponentElement || "EXPLICIT_NONE");
        } catch (e) {
          console.log(e);
          console.error("Error building nav tree: " + e);
        }
      };
      const enableDriveMode = (parentPort, storyboardId) => {
        if (!(0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId)) {
          (0, sessionStorageUtils_1.setSessionStorageItem)("driveModeEnabled", "enabled", storyboardId);
          clearHoveredElements(parentPort, storyboardId);
          (0, outlineUtils_1.clearAllOutlines)();
        }
        (0, jquery_1.default)("body").css("cursor", "");
      };
      const disableDriveMode = (parentPort, storyboardId) => {
        if ((0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId)) {
          (0, sessionStorageUtils_1.removeSessionStorageItem)("driveModeEnabled", storyboardId);
          (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          clearHoveredElements(parentPort, storyboardId);
        }
        (0, jquery_1.default)("body").attr("style", function(i, s) {
          return (s || "") + "cursor: default !important;";
        });
      };
      window.enableDriveMode = (parentPort, storyboardId) => {
        enableDriveMode(parentPort, storyboardId);
      };
      window.disableDriveMode = (parentPort, storyboardId) => {
        disableDriveMode(parentPort, storyboardId);
      };
      window.setNewLookups = (parentPort, storyboardId, treeElementLookup, scopeLookup) => {
        const prevTreeElemntLookup = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.TREE_ELEMENT_LOOKUP) || {};
        const prevScopeLookup = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SCOPE_LOOKUP) || {};
        const newTreeElements = Object.assign({}, prevTreeElemntLookup);
        Object.keys(treeElementLookup).forEach((key) => {
          if (treeElementLookup[key]) {
            newTreeElements[key] = treeElementLookup[key];
          } else if (newTreeElements[key]) {
            delete newTreeElements[key];
          }
        });
        const newScopes = Object.assign({}, prevScopeLookup);
        Object.keys(scopeLookup).forEach((key) => {
          if (scopeLookup[key]) {
            newScopes[key] = scopeLookup[key];
          } else if (newScopes[key]) {
            delete newScopes[key];
          }
        });
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.TREE_ELEMENT_LOOKUP, newTreeElements);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SCOPE_LOOKUP, newScopes);
      };
      window.setHoveredElement = (parentPort, storyboardId, elementKey) => {
        const driveModeEnabled = !!(0, sessionStorageUtils_1.getSessionStorageItem)("driveModeEnabled", storyboardId);
        if (driveModeEnabled) {
          return;
        }
        const prevHoveredElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
        if (prevHoveredElementKey === elementKey) {
          return;
        }
        if (elementKey) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY, elementKey);
        } else {
          (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.setSelectedElement = (parentPort, storyboardId, elementKey) => {
        var _a, _b;
        const prevSelectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        if (prevSelectedElementKey === elementKey) {
          return;
        }
        if (elementKey) {
          const tempoElement = tempoElement_1.TempoElement.fromKey(elementKey);
          let elementKeyToExtract = elementKey;
          if (tempoElement.isStoryboard(storyboardId)) {
            const topLevelNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.CURRENT_NAV_TREE);
            const topLevelElementKey = (_a = topLevelNode === null || topLevelNode === void 0 ? void 0 : topLevelNode.tempoElement) === null || _a === void 0 ? void 0 : _a.getKey();
            if (topLevelElementKey) {
              elementKeyToExtract = topLevelElementKey;
            }
          }
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
            doNotSetElementKey: true,
            outerHTML: (_b = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKeyToExtract}`).get(0)) === null || _b === void 0 ? void 0 : _b.outerHTML
          });
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, elementKey);
        } else {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
            doNotSetElementKey: true,
            outerHTML: null
          });
          (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.setMultiselectedElementKeys = (parentPort, storyboardId, elementKeys) => {
        const prevMultiSelectedElementKeys = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS);
        const prevSet = new Set(prevMultiSelectedElementKeys || []);
        const newSet = new Set(elementKeys || []);
        const setsEqual = prevSet.size === newSet.size && [...prevSet].every((value) => newSet.has(value));
        if (setsEqual) {
          return;
        }
        if (elementKeys) {
          (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS, elementKeys);
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
            doNotSetElementKeys: true,
            outerHTMLs: elementKeys === null || elementKeys === void 0 ? void 0 : elementKeys.map((elementKey) => {
              var _a;
              return (_a = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${elementKey}`).get(0)) === null || _a === void 0 ? void 0 : _a.outerHTML;
            })
          });
        } else {
          (0, sessionStorageUtils_1.removeMemoryStorageItem)(sessionStorageUtils_1.MULTI_SELECTED_ELEMENT_KEYS);
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.MULTI_SELECTED_ELEMENT_KEYS,
            doNotSetElementKeys: true,
            outerHTMLs: []
          });
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.processRulesForSelectedElement = (parentPort, storyboardId, cssElementLookup, selectedElementKey) => {
        (0, cssFunctions_1.processRulesForSelectedElement)(parentPort, cssElementLookup, selectedElementKey);
      };
      window.setModifiersForSelectedElement = (parentPort, storyboardId, modifiers, selectedElementKey) => {
        (0, cssFunctions_1.setModifiersForSelectedElement)(parentPort, modifiers, selectedElementKey);
      };
      window.getCssEvals = (parentPort, storyboardId, selectedElementKey) => {
        (0, cssFunctions_1.getCssEvals)(parentPort, selectedElementKey);
      };
      window.ruleMatchesElement = (parentPort, storyboardId, messageId, rule, selectedElementKey) => {
        (0, cssFunctions_1.ruleMatchesElement)(parentPort, messageId, rule, selectedElementKey);
      };
      window.getElementClassList = (parentPort, storyboardId, selectedElementKey) => {
        (0, cssFunctions_1.getElementClassList)(parentPort, selectedElementKey);
      };
      window.applyChangeItemToDocument = (parentPort, storyboardId, changeItem) => __awaiter(void 0, void 0, void 0, function* () {
        const { sendNewNavTree } = (0, changeItemFunctions_1.applyChangeItemToDocument)(parentPort, storyboardId, changeItem);
        if (sendNewNavTree) {
          buildAndSendNavTree(parentPort, storyboardId);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      });
      window.updateCodebaseIds = (parentPort, storyboardId, prevIdToNewIdMap, newTreeElementLookup, newScopeLookup) => {
        const sendNewNavTree = (0, changeItemFunctions_1.updateCodebaseIds)(parentPort, prevIdToNewIdMap, true);
        if (sendNewNavTree) {
          buildAndSendNavTree(parentPort, storyboardId, newTreeElementLookup, newScopeLookup);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.dispatchEvent = (parentPort, storyboardId, eventName, eventDetails) => {
        const event = new CustomEvent(eventName, Object.assign({}, eventDetails));
        document.dispatchEvent(event);
      };
      window.updateOutlines = (parentPort, storyboardId) => {
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.goBack = (parentPort, storyboardId) => {
        if (document.referrer !== "") {
          window.history.back();
        }
      };
      window.goForward = (parentPort, storyboardId) => {
        window.history.forward();
      };
      window.refresh = (parentPort, storyboardId) => {
        window.location.reload();
      };
      window.syntheticMouseOver = (parentPort, storyboardId, coords, dontHoverInsideSelected, selectBottomMostElement) => {
        const target = document.elementFromPoint(coords.x, coords.y);
        if (dontHoverInsideSelected) {
          const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
          const selectedElement = tempoElement_1.TempoElement.fromKey(selectedElementKey);
          if (!selectedElement.isEmpty()) {
            const selectedDomElement = document.querySelector(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElementKey}`);
            if (selectedDomElement === null || selectedDomElement === void 0 ? void 0 : selectedDomElement.contains(target)) {
              onPointerOver({ target: selectedDomElement }, parentPort, storyboardId);
              return;
            }
          }
        }
        onPointerOver({ target }, parentPort, storyboardId, selectBottomMostElement);
      };
      window.syntheticMouseMove = (parentPort, storyboardId, syntheticEvent) => {
        const eventWithClient = Object.assign(Object.assign({}, syntheticEvent), { pageX: syntheticEvent.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), pageY: syntheticEvent.clientY + (document.documentElement.scrollTop || document.body.scrollTop) });
        onPointerMove(eventWithClient, parentPort, storyboardId);
      };
      window.syntheticMouseUp = (parentPort, storyboardId, syntheticEvent) => {
        onPointerUp(syntheticEvent, parentPort, storyboardId);
      };
      window.clearHoveredOutlines = (parentPort, storyboardId) => {
        if ((0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.HOVERED_ELEMENT_KEY)) {
          clearHoveredElements(parentPort, storyboardId);
        }
      };
      window.setZoomPerc = (parentPort, storyboardId, zoomPerc) => {
        (0, sessionStorageUtils_1.setMemoryStorageItem)("zoomPerc", zoomPerc.toString());
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.setAiContext = (parentPort, storyboardId, aiContext) => {
        (0, sessionStorageUtils_1.setMemoryStorageItem)("aiContext", !!aiContext);
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.tempMoveElement = (parentPort, storyboardId, nodeToMoveElementKey, newIndex) => {
        var _a, _b, _c, _d, _e;
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        const navNodeToMove = elementKeyToNavNode[nodeToMoveElementKey];
        if (!navNodeToMove) {
          return;
        }
        const nodeToMoveElement = tempoElement_1.TempoElement.fromKey(nodeToMoveElementKey);
        const domElementsToMove = [];
        const elementKeyToLookupList = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_LOOKUP_LIST) || {};
        const lookupList = elementKeyToLookupList[navNodeToMove.tempoElement.getKey()] || [];
        lookupList.forEach((lookupElementKey) => {
          domElementsToMove.push((0, jquery_1.default)("body").find(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${lookupElementKey}`).get(0));
        });
        const parentDomElement = (_a = domElementsToMove[0]) === null || _a === void 0 ? void 0 : _a.parentElement;
        const parentNavNode = navNodeToMove.parent;
        if (parentDomElement && parentNavNode) {
          const currentIndex = (_b = parentNavNode === null || parentNavNode === void 0 ? void 0 : parentNavNode.children) === null || _b === void 0 ? void 0 : _b.indexOf(navNodeToMove);
          const numChildren = (_c = parentNavNode === null || parentNavNode === void 0 ? void 0 : parentNavNode.children) === null || _c === void 0 ? void 0 : _c.length;
          if (currentIndex !== newIndex) {
            Array.from(parentDomElement.children).forEach((child) => {
              (0, jquery_1.default)(child).attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
            });
            (0, jquery_1.default)(parentDomElement).attr(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
            if (newIndex === numChildren - 1) {
              domElementsToMove.forEach((element) => {
                element.parentElement.appendChild(element);
              });
            } else {
              const beforeNode = currentIndex > newIndex ? parentNavNode === null || parentNavNode === void 0 ? void 0 : parentNavNode.children[newIndex] : parentNavNode === null || parentNavNode === void 0 ? void 0 : parentNavNode.children[newIndex + 1];
              const lookupListForBefore = elementKeyToLookupList[(_d = beforeNode === null || beforeNode === void 0 ? void 0 : beforeNode.tempoElement) === null || _d === void 0 ? void 0 : _d.getKey()] || [];
              if (!lookupListForBefore.length) {
                console.log("Cannot find element to insert before in lookup list");
                return;
              }
              const beforeDomElement = (0, jquery_1.default)("body").find(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${lookupListForBefore[0]}`).get(0);
              if (!beforeDomElement) {
                console.log("Cannot find element to insert before");
                return;
              }
              domElementsToMove.forEach((element) => {
                element.parentElement.insertBefore(element, beforeDomElement);
              });
            }
            const elementToMoveSegments = nodeToMoveElement.uniquePath.split("-");
            const newSelectedUniquePath = elementToMoveSegments.slice(0, elementToMoveSegments.length - 1).join("-") + `-${newIndex}`;
            const newSelectedElementKey = new tempoElement_1.TempoElement(nodeToMoveElement.codebaseId, nodeToMoveElement.storyboardId, newSelectedUniquePath).getKey();
            buildAndSendNavTree(parentPort, storyboardId);
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.SELECTED_ELEMENT_KEY,
              elementKey: newSelectedElementKey,
              outerHTML: (_e = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${newSelectedElementKey}`).get(0)) === null || _e === void 0 ? void 0 : _e.outerHTML
            });
            (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY, newSelectedElementKey);
            (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
          }
        }
      };
      window.tempAddDiv = (parentPort, storyboardId, parentCodebaseId, indexInParent, width, height) => {
        const element = (0, jquery_1.default)(`.${identifierUtils_1.TEMPO_INSTANT_DIV_DRAW_CLASS}`);
        if (element.length) {
          element.css("width", width);
          element.css("height", height);
        } else {
          let parent = (0, jquery_1.default)(`.${parentCodebaseId}`);
          if (!parent.length) {
            parent = (0, jquery_1.default)("body");
          }
          parent.each((index, item) => {
            const newElement = (0, jquery_1.default)(`<div class="${identifierUtils_1.TEMPO_INSTANT_DIV_DRAW_CLASS}" ${identifierUtils_1.TEMPO_DELETE_AFTER_INSTANT_UPDATE}="true" ${identifierUtils_1.TEMPO_DELETE_AFTER_REFRESH}="true" ${identifierUtils_1.TEMPO_INSTANT_UPDATE}="true"></div>`);
            const childAtIndex = (0, jquery_1.default)(item).children().eq(indexInParent);
            if (childAtIndex === null || childAtIndex === void 0 ? void 0 : childAtIndex.length) {
              childAtIndex.before(newElement);
            } else {
              (0, jquery_1.default)(item).append(newElement);
            }
          });
          buildAndSendNavTree(parentPort, storyboardId);
        }
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.tempMoveToNewParent = (parentPort, storyboardId, indicatorWidth, indicatorHeight, newPositionX, newPositionY, parentElementKey, clear) => {
        (0, jquery_1.default)(`.${identifierUtils_1.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE}`).remove();
        if (clear) {
          return;
        }
        const newElement = document.createElement("div");
        newElement.classList.add(identifierUtils_1.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE);
        newElement.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
        newElement.style.width = indicatorWidth + "px";
        newElement.style.height = indicatorHeight + "px";
        newElement.style.left = newPositionX + "px";
        newElement.style.top = newPositionY + "px";
        newElement.style.position = "fixed";
        newElement.style.pointerEvents = "none";
        newElement.style.zIndex = "2000000004";
        newElement.style.boxSizing = "border-box";
        newElement.style.cursor = "default !important";
        newElement.style.backgroundColor = outlineUtils_1.PRIMARY_OUTLINE_COLOUR;
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(newElement);
        const parentDomElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${parentElementKey}`).get(0);
        if (parentDomElement) {
          const boundingRect = parentDomElement.getBoundingClientRect();
          const parentOutline = (0, outlineUtils_1.getOutlineElement)(parentPort, outlineUtils_1.OutlineType.PRIMARY, boundingRect.left, boundingRect.top, boundingRect.width, boundingRect.height);
          parentOutline.classList.remove(identifierUtils_1.OUTLINE_CLASS);
          parentOutline.classList.add(identifierUtils_1.TEMPO_MOVE_BETWEEN_PARENTS_OUTLINE);
          parentOutline.setAttribute(identifierUtils_1.TEMPO_INSTANT_UPDATE, "true");
          body.appendChild(parentOutline);
        }
      };
      window.checkIfHydrationError = (parentPort, storyboardId) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        let errorDescr, errorLabel, errorBody, hasError;
        if (window.location.href.includes("framework=VITE")) {
          const errorPortal = (_a = document.getElementsByTagName("vite-error-overlay")[0]) === null || _a === void 0 ? void 0 : _a.shadowRoot;
          errorDescr = "A Vite Error Occurred";
          errorLabel = (_d = (_c = (_b = errorPortal === null || errorPortal === void 0 ? void 0 : errorPortal.querySelectorAll) === null || _b === void 0 ? void 0 : _b.call(errorPortal, ".file-link")) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.innerHTML;
          errorBody = (_g = (_f = (_e = errorPortal === null || errorPortal === void 0 ? void 0 : errorPortal.querySelectorAll) === null || _e === void 0 ? void 0 : _e.call(errorPortal, ".message")) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.innerHTML;
          hasError = Boolean(errorLabel || errorBody);
        } else {
          const errorPortal = (_h = document.getElementsByTagName("nextjs-portal")[0]) === null || _h === void 0 ? void 0 : _h.shadowRoot;
          errorDescr = (_k = (_j = errorPortal === null || errorPortal === void 0 ? void 0 : errorPortal.getElementById) === null || _j === void 0 ? void 0 : _j.call(errorPortal, "nextjs__container_errors_desc")) === null || _k === void 0 ? void 0 : _k.innerHTML;
          errorLabel = (_m = (_l = errorPortal === null || errorPortal === void 0 ? void 0 : errorPortal.getElementById) === null || _l === void 0 ? void 0 : _l.call(errorPortal, "nextjs__container_errors_label")) === null || _m === void 0 ? void 0 : _m.innerHTML;
          errorBody = (_q = (_p = (_o = errorPortal === null || errorPortal === void 0 ? void 0 : errorPortal.querySelectorAll) === null || _o === void 0 ? void 0 : _o.call(errorPortal, ".nextjs-container-errors-body")) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.innerHTML;
          hasError = Boolean(errorDescr);
        }
        if (hasError) {
          if (errorDescr === null || errorDescr === void 0 ? void 0 : errorDescr.includes("Hydration failed")) {
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.LATEST_HYDRATION_ERROR_STATUS,
              status: constantsAndTypes_1.STORYBOARD_HYDRATION_STATUS.ERROR,
              errorDescr,
              errorLabel,
              errorBody
            });
          } else {
            parentPort.postMessage({
              id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.LATEST_HYDRATION_ERROR_STATUS,
              status: constantsAndTypes_1.STORYBOARD_HYDRATION_STATUS.OTHER_ERROR,
              errorDescr,
              errorLabel,
              errorBody
            });
          }
        } else {
          parentPort.postMessage({
            id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.LATEST_HYDRATION_ERROR_STATUS,
            status: constantsAndTypes_1.STORYBOARD_HYDRATION_STATUS.NO_ERROR
          });
        }
      };
      window.triggerDragStart = (parentPort, storyboardId) => {
        const selectedElementKey = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.SELECTED_ELEMENT_KEY);
        const elementKeyToNavNode = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.ELEMENT_KEY_TO_NAV_NODE) || {};
        if (!selectedElementKey) {
          return;
        }
        const draggedNavNode = elementKeyToNavNode[selectedElementKey];
        const parentDomElement = getParentDomElementForNavNode(draggedNavNode);
        const selectedElement = (0, jquery_1.default)(`.${identifierUtils_1.ELEMENT_KEY_PREFIX}${selectedElementKey}`).get(0);
        const mouseDragContext = {
          // Start off screen, this will get updated by onMouseMove
          pageX: -1e4,
          pageY: -1e4,
          // The difference between where the user clicked and the center of the element
          offsetX: 0,
          offsetY: 0,
          dragging: true,
          selectedParentDisplay: (0, cssFunctions_1.cssEval)(parentDomElement, "display"),
          selectedParentFlexDirection: (0, cssFunctions_1.cssEval)(parentDomElement, "flex-direction")
        };
        (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", mouseDragContext);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.DRAG_START_EVENT,
          event: mouseDragContext,
          outerHTML: selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.outerHTML
        });
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.triggerDragCancel = (parentPort, storyboardId) => {
        (0, sessionStorageUtils_1.setMemoryStorageItem)("mouseDragContext", null);
        parentPort.postMessage({
          id: constantsAndTypes_1.FIXED_IFRAME_MESSAGE_IDS.DRAG_CANCEL_EVENT,
          event: {}
        });
        (0, outlineUtils_1.updateOutlines)(parentPort, storyboardId);
      };
      window.setIsFlushing = (parentPort, storyboardId, isFlushing) => {
        const wasFlushing = (0, sessionStorageUtils_1.getMemoryStorageItem)(sessionStorageUtils_1.IS_FLUSHING);
        (0, sessionStorageUtils_1.setMemoryStorageItem)(sessionStorageUtils_1.IS_FLUSHING, isFlushing);
        if (isFlushing && !wasFlushing) {
          onFlushStart();
        }
      };
    };
    exports.initChannelMessagingFunctions = initChannelMessagingFunctions;
  }
});

// node_modules/tempo-devtools/dist/channelMessaging/index.js
var require_channelMessaging = __commonJS({
  "node_modules/tempo-devtools/dist/channelMessaging/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initChannelMessaging = void 0;
    var resqUtils_1 = require_resqUtils();
    var lz_string_1 = __importDefault(require_lz_string());
    var posthog_js_1 = __importDefault(require_posthog());
    var channelMessagingFunctions_1 = require_channelMessagingFunctions();
    if (typeof window !== "undefined" && window.location.href.includes("framework=VITE")) {
      const showErrorOverlay = (err) => {
        const ErrorOverlay = customElements.get("vite-error-overlay");
        if (!ErrorOverlay) {
          return;
        }
        const overlay = new ErrorOverlay(err);
        document.body.appendChild(overlay);
      };
      window.addEventListener("error", showErrorOverlay);
      window.addEventListener("unhandledrejection", ({ reason }) => showErrorOverlay(reason));
    }
    var debugLogInDev = (...str) => {
      var _a;
      if ((_a = window.location.search) === null || _a === void 0 ? void 0 : _a.includes("debugLog=true")) {
        console.debug(...str);
      }
    };
    function initChannelMessaging() {
      var _a;
      if (typeof window !== "undefined") {
        (0, channelMessagingFunctions_1.initChannelMessagingFunctions)();
        if (window.location.hostname.endsWith("dev.tempolabs.ai") && !window.location.hostname.endsWith("staging-dev.tempolabs.ai")) {
          if (posthog_js_1.default) {
            posthog_js_1.default.init();
          }
        }
      }
      if (typeof window !== "undefined") {
        window.addEventListener("message", (event) => {
          const { data } = event;
          if (data.type === "GET_STATE_AND_PROPS") {
            const { componentName } = data;
            let rootSelector = "#root";
            if (!document.querySelector(rootSelector)) {
              rootSelector = "#__next";
            }
            const root = document.querySelector(rootSelector);
            const rootReactElement = (0, resqUtils_1.getRootReactElement)();
            const tree = (0, resqUtils_1.buildNodeTree)(rootReactElement, null);
            const foundNodes = (0, resqUtils_1.findElementInTree)(tree, (node) => {
              if (componentName && node.name == componentName) {
                return true;
              }
              return false;
            });
            if (!(foundNodes === null || foundNodes === void 0 ? void 0 : foundNodes.length)) {
              const message = {
                error: "No component found"
              };
              console.log("STATE_AND_PROPS ", JSON.stringify(message));
              return;
            }
            if (foundNodes.length > 1) {
              console.log(foundNodes);
              console.log("Warning: more than 1 component found");
            }
            const foundNode = foundNodes[0];
            const sendDataForNode = (node) => {
              debugLogInDev("NODE FOUND: ", node);
              const PROPS_TO_EXCLUDE = {
                tempoelementid: true
              };
              const propsToSend = {};
              if (node.props) {
                Object.keys(node.props).forEach((key) => {
                  if (!PROPS_TO_EXCLUDE[key]) {
                    if (typeof node.props[key] === "object") {
                      propsToSend[key] = "TEMPO_OBJECT_TYPE";
                    } else if (typeof node.props[key] === "function") {
                      propsToSend[key] = "TEMPO_FUNCTION_TYPE";
                    } else {
                      propsToSend[key] = node.props[key];
                    }
                  }
                });
              }
              let stateToSend = {};
              if (node.state) {
                if (typeof node.state === "string") {
                  stateToSend = {
                    state: node.state
                  };
                } else {
                  Object.keys(node.state).forEach((key) => {
                    if (typeof node.state[key] === "object") {
                      stateToSend[key] = "TEMPO_OBJECT_TYPE";
                    } else if (typeof node.state[key] === "function") {
                      stateToSend[key] = "TEMPO_FUNCTION_TYPE";
                    } else {
                      stateToSend[key] = node.state[key];
                    }
                  });
                }
              }
              const message = {
                id: data.id,
                props: propsToSend,
                state: stateToSend
              };
              console.log("STATE_AND_PROPS ", JSON.stringify(message));
            };
            sendDataForNode(foundNode);
          }
        });
      }
      if (typeof window !== "undefined") {
        if ((_a = window.location.search) === null || _a === void 0 ? void 0 : _a.includes("storyboard=true")) {
          let rootEl = document.getElementById("root");
          if (!rootEl) {
            rootEl = document.getElementById("__next");
          }
          if (rootEl) {
            if (window.location.search.includes("type=STORY") || window.location.search.includes("type=COMPONENT")) {
              [rootEl, document.body, document.documentElement].forEach((el) => {
                el.style.backgroundColor = "transparent";
                el.style.width = "100vw";
                el.style.height = "100vh";
                el.style.overflow = "hidden";
              });
            } else {
              rootEl.style.width = "100vw";
              rootEl.style.height = "100vh";
            }
          }
        }
        (function() {
          let port2 = null;
          let storyboardId = null;
          const initPort = (e) => {
            if (e.data === "init") {
              port2 = e.ports[0];
              port2.onmessage = onMessage;
            } else {
              var msgObj = e.data;
              onMessage({
                data: msgObj
              });
            }
          };
          window.addEventListener("message", initPort);
          const onInspectElement = (data) => __awaiter(this, void 0, void 0, function* () {
            if (!data.payload.componentName) {
              console.log("NO COMPONENT NAME");
              const message = {
                id: data.id,
                error: "No component name"
              };
              port2.postMessage(message);
              return;
            }
            const rootReactElement = (0, resqUtils_1.getRootReactElement)();
            const tree = (0, resqUtils_1.buildNodeTree)(rootReactElement, null);
            const { isComponent, componentName, tempoElementID, componentElementId } = data.payload;
            if (!isComponent && !tempoElementID) {
              console.log("No tempo element ID provided");
              const message = {
                id: data.id,
                error: "Could not find element"
              };
              port2.postMessage(message);
              return;
            }
            if (isComponent && !tempoElementID && !componentName) {
              console.log("No tempo element ID or component name provided");
              const message = {
                id: data.id,
                error: "Could not find component"
              };
              port2.postMessage(message);
              return;
            }
            const foundNodes = (0, resqUtils_1.findElementInTree)(tree, (node) => {
              var _a2, _b, _c;
              if (isComponent) {
                if (tempoElementID && ((_a2 = node.props) === null || _a2 === void 0 ? void 0 : _a2.tempoelementid) == tempoElementID) {
                  return true;
                }
                if (!tempoElementID && componentName && node.name == componentName) {
                  return true;
                }
              } else {
                if (tempoElementID && ((_b = node.props) === null || _b === void 0 ? void 0 : _b.tempoelementid) !== tempoElementID) {
                  return false;
                }
                if (componentElementId) {
                  let nodeToCheck = node.parent;
                  let foundMatchingComponent = false;
                  while (nodeToCheck) {
                    if (((_c = nodeToCheck.props) === null || _c === void 0 ? void 0 : _c.tempoelementid) === componentElementId) {
                      foundMatchingComponent = true;
                      break;
                    }
                    nodeToCheck = nodeToCheck.parent;
                  }
                  if (!foundMatchingComponent) {
                    return false;
                  }
                }
                return true;
              }
              return false;
            });
            if (!(foundNodes === null || foundNodes === void 0 ? void 0 : foundNodes.length)) {
              debugLogInDev("NO COMPONENT FOUND");
              const message = {
                id: data.id,
                error: "No component found"
              };
              port2.postMessage(message);
              return;
            }
            if (foundNodes.length > 1) {
              console.log(foundNodes);
              console.log("Warning: more than 1 component found");
            }
            const foundNode = foundNodes[0];
            const sendDataForNode = (node) => {
              debugLogInDev("NODE FOUND: ", node);
              const propsToSend = {};
              if (node.props) {
                Object.keys(node.props).forEach((key) => {
                  if (typeof node.props[key] === "object") {
                    propsToSend[key] = "TEMPO_OBJECT_TYPE";
                  } else if (typeof node.props[key] === "function") {
                    propsToSend[key] = "TEMPO_FUNCTION_TYPE";
                  } else {
                    propsToSend[key] = node.props[key];
                  }
                });
              }
              let stateToSend = {};
              if (node.state) {
                if (typeof node.state === "string") {
                  stateToSend = {
                    state: node.state
                  };
                } else {
                  Object.keys(node.state).forEach((key) => {
                    if (typeof node.state[key] === "object") {
                      stateToSend[key] = "TEMPO_OBJECT_TYPE";
                    } else if (typeof node.state[key] === "function") {
                      stateToSend[key] = "TEMPO_FUNCTION_TYPE";
                    } else {
                      stateToSend[key] = node.state[key];
                    }
                  });
                }
              }
              const message = {
                id: data.id,
                props: propsToSend,
                state: stateToSend
              };
              debugLogInDev("RESPONDING WITH: ", message);
              port2.postMessage(message);
            };
            sendDataForNode(foundNode);
          });
          const onMessage = (e) => __awaiter(this, void 0, void 0, function* () {
            var _a2, _b;
            try {
              const data = e.data;
              const dataToLog = Object.assign({}, data);
              if ((_a2 = data === null || data === void 0 ? void 0 : data.payload) === null || _a2 === void 0 ? void 0 : _a2.compressedArgs) {
                dataToLog.payload = Object.assign(Object.assign({}, data.payload), { compressedArgs: "COMPRESSED" });
              }
              const LOGS_TO_SKIP_ARGS = [
                "initProject",
                "setNewLookups",
                "processRulesForSelectedElement"
              ];
              if (((_b = data === null || data === void 0 ? void 0 : data.payload) === null || _b === void 0 ? void 0 : _b.functionName) && LOGS_TO_SKIP_ARGS.includes(data.payload.functionName)) {
                dataToLog.payload = Object.assign(Object.assign({}, data.payload), { args: "ARGS_SKIPPED" });
              }
              debugLogInDev("INNER FRAME: Received message from parent: ", JSON.stringify(dataToLog));
              if (!data || !data.payload) {
                debugLogInDev("NO PAYLOAD");
                return;
              }
              if (!data.id) {
                debugLogInDev("NO ID");
                return;
              }
              if (data.type === "inspectElement") {
                onInspectElement(data);
              } else if (data.type === "executeFunction") {
                const fn = window[data.payload.functionName];
                if (typeof fn === "function") {
                  let args = data.payload.args;
                  if (data.payload.compressedArgs) {
                    args = JSON.parse(lz_string_1.default.decompress(data.payload.compressedArgs));
                  }
                  if (data.payload.functionName === "initProject") {
                    storyboardId = args[0];
                    args = args.slice(1);
                  }
                  let res = null;
                  if (data.payload.args) {
                    res = fn(port2, storyboardId, ...args);
                  } else {
                    res = fn(port2, storyboardId);
                  }
                  if (res) {
                    port2.postMessage({
                      id: data.id,
                      result: res
                    });
                  }
                } else {
                  console.log("INNER FRAME ERROR: Function to execute not found");
                }
              }
            } catch (error) {
              console.log("INNER FRAME ERROR: ", error);
            }
          });
        })();
      }
    }
    exports.initChannelMessaging = initChannelMessaging;
  }
});

// node_modules/tempo-devtools/dist/TempoDevtools.js
var require_TempoDevtools = __commonJS({
  "node_modules/tempo-devtools/dist/TempoDevtools.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TempoDevtools = void 0;
    var channelMessaging_1 = require_channelMessaging();
    exports.TempoDevtools = {
      state: {
        dependencies: {
          LzString: null
        },
        env: {}
      },
      // Initialization method
      init: function(customEnv = {}) {
        if (customEnv) {
          this.state.env = Object.assign({}, customEnv);
        }
        (0, channelMessaging_1.initChannelMessaging)();
      }
    };
  }
});

// node_modules/tempo-devtools/dist/index.js
var require_dist = __commonJS({
  "node_modules/tempo-devtools/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TempoDevtools = void 0;
    var TempoDevtools_js_1 = require_TempoDevtools();
    Object.defineProperty(exports, "TempoDevtools", { enumerable: true, get: function() {
      return TempoDevtools_js_1.TempoDevtools;
    } });
  }
});
export default require_dist();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=tempo-devtools.js.map
