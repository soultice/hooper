(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["hooper"] = factory(require("vue"));
	else
		root["hooper"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "c267");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0041":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "03ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0744":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var objectKeys = __webpack_require__("e14d");
var getOwnPropertySymbolsModule = __webpack_require__("1a21");
var propertyIsEnumerableModule = __webpack_require__("1625");
var toObject = __webpack_require__("d9ac");
var IndexedObject = __webpack_require__("24c4");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "0f6b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "16b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var setGlobal = __webpack_require__("c890");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "1a21":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "1a68":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "1c25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var exec = __webpack_require__("bba6");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "206e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("5fac");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "22f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("dfa5");
var global = __webpack_require__("6da9");
var isForced = __webpack_require__("b775");
var redefine = __webpack_require__("40e0");
var has = __webpack_require__("b547");
var classof = __webpack_require__("b2c3");
var inheritIfRequired = __webpack_require__("4aca");
var toPrimitive = __webpack_require__("964c");
var fails = __webpack_require__("5fac");
var create = __webpack_require__("6982");
var getOwnPropertyNames = __webpack_require__("6d9a").f;
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var defineProperty = __webpack_require__("b569").f;
var trim = __webpack_require__("d545").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "24c4":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var classof = __webpack_require__("b2c3");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "25c8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");

module.exports = global;


/***/ }),

/***/ "2769":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "2a7c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var createElement = __webpack_require__("5f8c");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "2c5b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var assign = __webpack_require__("0744");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "2ce6":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("40e0");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "3159":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("16b4");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "347e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var isArray = __webpack_require__("3519");
var wellKnownSymbol = __webpack_require__("e314");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "3519":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "3894":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "40e0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");
var has = __webpack_require__("b547");
var setGlobal = __webpack_require__("c890");
var inspectSource = __webpack_require__("3159");
var InternalStateModule = __webpack_require__("7c00");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "4387":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "44d8":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var toIndexedObject = __webpack_require__("c442");
var indexOf = __webpack_require__("d7e0").indexOf;
var hiddenKeys = __webpack_require__("0f6b");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "4aca":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var setPrototypeOf = __webpack_require__("a3d8");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "4c8c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var anObject = __webpack_require__("b5d1");
var objectKeys = __webpack_require__("e14d");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "5259":
/***/ (function(module, exports) {

// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "5ea2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var isObject = __webpack_require__("7091");
var isArray = __webpack_require__("3519");
var toAbsoluteIndex = __webpack_require__("2769");
var toLength = __webpack_require__("b13d");
var toIndexedObject = __webpack_require__("c442");
var createProperty = __webpack_require__("71db");
var wellKnownSymbol = __webpack_require__("e314");
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "5f8c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "5fac":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "5ff8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var DOMIterables = __webpack_require__("6043");
var forEach = __webpack_require__("ff89");
var createNonEnumerableProperty = __webpack_require__("c29f");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "6043":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "61d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var createNonEnumerableProperty = __webpack_require__("c29f");
var redefine = __webpack_require__("40e0");
var setGlobal = __webpack_require__("c890");
var copyConstructorProperties = __webpack_require__("a8f2");
var isForced = __webpack_require__("b775");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "6512":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("e405");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "6693":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "6982":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var defineProperties = __webpack_require__("4c8c");
var enumBugKeys = __webpack_require__("e054");
var hiddenKeys = __webpack_require__("0f6b");
var html = __webpack_require__("d6f2");
var documentCreateElement = __webpack_require__("5f8c");
var sharedKey = __webpack_require__("a80a");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "6d9a":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "6da9":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("ad89")))

/***/ }),

/***/ "6e9e":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("7fbb");
var IndexedObject = __webpack_require__("24c4");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var arraySpeciesCreate = __webpack_require__("347e");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "7091":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "71db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("964c");
var definePropertyModule = __webpack_require__("b569");
var createPropertyDescriptor = __webpack_require__("b81d");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "7332":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("e314");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "767c":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "7c00":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("b84b");
var global = __webpack_require__("6da9");
var isObject = __webpack_require__("7091");
var createNonEnumerableProperty = __webpack_require__("c29f");
var objectHas = __webpack_require__("b547");
var sharedKey = __webpack_require__("a80a");
var hiddenKeys = __webpack_require__("0f6b");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "7c5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $trimEnd = __webpack_require__("d545").end;
var forcedStringTrimMethod = __webpack_require__("7d44");

var FORCED = forcedStringTrimMethod('trimEnd');

var trimEnd = FORCED ? function trimEnd() {
  return $trimEnd(this);
} : ''.trimEnd;

// `String.prototype.{ trimEnd, trimRight }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimEnd: trimEnd,
  trimRight: trimEnd
});


/***/ }),

/***/ "7d28":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7d44":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var whitespaces = __webpack_require__("d6c9");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "7fbb":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("4387");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "83a9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var V8_VERSION = __webpack_require__("e215");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "8550":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("b774").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "85c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "89a5":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "964c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "9d62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var forEach = __webpack_require__("ff89");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("b5d1");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "9e47":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("b5d1");
var aPossiblePrototype = __webpack_require__("3894");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "a80a":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("ea4d");
var uid = __webpack_require__("6693");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "a8ab":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a8f2":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b547");
var ownKeys = __webpack_require__("edc9");
var getOwnPropertyDescriptorModule = __webpack_require__("b71c");
var definePropertyModule = __webpack_require__("b569");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "abad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var toObject = __webpack_require__("d9ac");
var nativeKeys = __webpack_require__("e14d");
var fails = __webpack_require__("5fac");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "ad89":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "adb0":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "b13d":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "b1e6":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("25c8");
var global = __webpack_require__("6da9");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "b2c3":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "b547":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "b569":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");
var anObject = __webpack_require__("b5d1");
var toPrimitive = __webpack_require__("964c");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b5d1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "b6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("dfb0");
var anObject = __webpack_require__("b5d1");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");
var advanceStringIndex = __webpack_require__("8550");
var regExpExec = __webpack_require__("d0ab");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "b71c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var propertyIsEnumerableModule = __webpack_require__("1625");
var createPropertyDescriptor = __webpack_require__("b81d");
var toIndexedObject = __webpack_require__("c442");
var toPrimitive = __webpack_require__("964c");
var has = __webpack_require__("b547");
var IE8_DOM_DEFINE = __webpack_require__("2a7c");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "b774":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c4f0");
var requireObjectCoercible = __webpack_require__("767c");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "b775":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "b7a3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var global = __webpack_require__("6da9");
var userAgent = __webpack_require__("1a68");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "b81d":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b84b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var inspectSource = __webpack_require__("3159");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "bba6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("9def");
var stickyHelpers = __webpack_require__("e458");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "bfb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $map = __webpack_require__("6e9e").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "c267":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Hooper", function() { return /* reexport */ Carousel; });
__webpack_require__.d(__webpack_exports__, "Slide", function() { return /* reexport */ Slide; });
__webpack_require__.d(__webpack_exports__, "Progress", function() { return /* reexport */ Progress; });
__webpack_require__.d(__webpack_exports__, "Pagination", function() { return /* reexport */ Pagination; });
__webpack_require__.d(__webpack_exports__, "Navigation", function() { return /* reexport */ Navigation; });
__webpack_require__.d(__webpack_exports__, "Icon", function() { return /* reexport */ Icon; });
__webpack_require__.d(__webpack_exports__, "addonMixin", function() { return /* reexport */ Mixin; });

// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("a8ab")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("c3fe");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("22f4");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("f129");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.string.trim-end.js
var es_string_trim_end = __webpack_require__("7c5e");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.string.trim-start.js
var es_string_trim_start = __webpack_require__("f291");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("b7a3");

// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("eae4");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("9d62");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("5ea2");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.date.now.js
var es_date_now = __webpack_require__("89a5");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("2ce6");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.math.sign.js
var es_math_sign = __webpack_require__("ef1f");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("2c5b");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("d4e0");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("abad");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("1c25");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("b6cf");

// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("5ff8");

// CONCATENATED MODULE: ./src/utils.js













function getInRange(value, min, max) {
  return Math.max(Math.min(value, max), min);
}
function now() {
  return Date.now();
}
function Timer(callback, defaultTime) {
  this.create = function () {
    return window.setTimeout(callback, defaultTime);
  };

  this.stop = function () {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  };

  this.start = function () {
    if (!this.timer) {
      this.timer = this.create();
    }
  };

  this.set = function (newTime) {
    var timeout = newTime || defaultTime;
    this.timer = window.setTimeout(callback, timeout);
  };

  this.timer = this.create();
}
function camelCaseToString(camelCase) {
  camelCase = camelCase.replace(/([A-Z]+)/g, ' $1');
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}
function normalizeSlideIndex(index, slidesCount) {
  var realIndex;

  if (index < 0) {
    realIndex = (index + slidesCount) % slidesCount;
  } else {
    realIndex = index % slidesCount;
  } // Test for NaN


  if (realIndex !== realIndex) {
    return 0;
  }

  return realIndex;
} // IE11 :)

function assignPoly(target) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];

    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    nextSource = Object(nextSource);
    var keysArray = Object.keys(Object(nextSource));

    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }

  return to;
}

var utils_assign = Object.assign || assignPoly;

function signPoly(value) {
  if (value < 0) {
    return -1;
  }

  return value > 0 ? 1 : 0;
}

var sign = Math.sign || signPoly;
function normalizeChildren(context) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return context.$slots["default"]() || [];
}

function Observable() {
  this.handlers = {}; // observers
}

Observable.prototype = {
  subscribe: function subscribe(target, fn, scope) {
    if (!this.handlers[target]) {
      this.handlers[target] = [];
    }

    this.handlers[target].push({
      "function": fn,
      scope: scope
    });
  },
  unsubscribe: function unsubscribe(target, fn, scope) {
    this.handlers[target] = this.handlers[target].filter(function (subscriber) {
      if (subscriber.scope !== scope && subscriber["function"] !== fn) {
        return subscriber;
      }
    });
  },
  fire: function fire(target, props, thisObj) {
    var scope = thisObj || window;

    if (this.handlers[target]) {
      this.handlers[target].forEach(function (subscriber) {
        subscriber["function"].call(scope, props);
      });
    }
  }
};
var Obs = new Observable();
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"_"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_ = __webpack_require__("8bbf");

// EXTERNAL MODULE: ./src/styles/carousel.css
var carousel = __webpack_require__("9e47");

// CONCATENATED MODULE: ./src/Carousel.js










/* eslint-disable */



/* harmony default export */ var Carousel = ({
  name: 'Hooper',
  provide: function provide() {
    return {
      $hooper: this
    };
  },
  props: {
    // count of items to showed per view
    itemsToShow: {
      "default": 1,
      type: Number
    },
    // count of items to slide when use navigation buttons
    itemsToSlide: {
      "default": 1,
      type: Number
    },
    // index number of initial slide
    initialSlide: {
      "default": 0,
      type: Number
    },
    // control infinite scrolling mode
    infiniteScroll: {
      "default": false,
      type: Boolean
    },
    // control center mode
    centerMode: {
      "default": false,
      type: Boolean
    },
    // vertical sliding mode
    vertical: {
      "default": false,
      type: Boolean
    },
    // enable rtl mode
    rtl: {
      "default": false,
      type: Boolean
    },
    // enable auto sliding to carousel
    autoPlay: {
      "default": false,
      type: Boolean
    },
    // speed of auto play to trigger slide
    playSpeed: {
      "default": 2000,
      type: Number
    },
    // toggle mouse dragging
    mouseDrag: {
      "default": true,
      type: Boolean
    },
    // toggle touch dragging
    touchDrag: {
      "default": true,
      type: Boolean
    },
    // toggle mouse wheel sliding
    wheelControl: {
      "default": true,
      type: Boolean
    },
    // toggle keyboard control
    keysControl: {
      "default": true,
      type: Boolean
    },
    // enable any move to commit a slide
    shortDrag: {
      "default": true,
      type: Boolean
    },
    // sliding transition time in ms
    transition: {
      "default": 300,
      type: Number
    },
    // pause autoPlay on mousehover
    hoverPause: {
      "default": true,
      type: Boolean
    },
    // remove empty space around slides
    trimWhiteSpace: {
      "default": false,
      type: Boolean
    },
    // an object to pass all settings
    group: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      isDragging: false,
      isSliding: false,
      isTouch: false,
      isHover: false,
      isFocus: false,
      initialized: false,
      slideWidth: 0,
      slideHeight: 0,
      slidesCount: 0,
      containerWidth: 0,
      containerHeight: 0,
      trimStart: 0,
      trimEnd: 1,
      currentSlide: null,
      timer: null,
      defaults: {},
      delta: {
        x: 0,
        y: 0
      },
      config: {}
    };
  },
  computed: {
    slideBounds: function slideBounds() {
      var config = this.config,
          currentSlide = this.currentSlide; // Because the "isActive" depends on the slides shown, not the number of slidable ones.
      // but upper and lower bounds for Next,Prev depend on whatever is smaller.

      var siblings = config.itemsToShow;
      var lower = config.centerMode ? Math.ceil(currentSlide - siblings / 2) : currentSlide;
      var upper = config.centerMode ? Math.floor(currentSlide + siblings / 2) : Math.floor(currentSlide + siblings - 1);
      return {
        lower: lower,
        upper: upper
      };
    },
    trackTransform: function trackTransform() {
      var _this$$props = this.$props,
          infiniteScroll = _this$$props.infiniteScroll,
          vertical = _this$$props.vertical,
          rtl = _this$$props.rtl,
          centerMode = _this$$props.centerMode;
      var direction = rtl ? -1 : 1;
      var slideLength = vertical ? this.slideHeight : this.slideWidth;
      var containerLength = vertical ? this.containerHeight : this.containerWidth;
      var dragDelta = vertical ? this.delta.y : this.delta.x;
      var clonesSpace = infiniteScroll ? slideLength * this.slidesCount : 0;
      var centeringSpace = centerMode ? (containerLength - slideLength) / 2 : 0; // calculate track translate

      var translate = dragDelta + direction * (centeringSpace - clonesSpace - this.currentSlide * slideLength);

      if (vertical) {
        return "transform: translate(0, ".concat(translate, "px);");
      }

      return "transform: translate(".concat(translate, "px, 0);");
    },
    trackTransition: function trackTransition() {
      if (this.initialized && this.isSliding) {
        return "transition: ".concat(this.transition, "ms");
      }

      return '';
    }
  },
  watch: {
    group: function group(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      if (window.hooper) {
        window.hooper.unsubscribe("slideGroup:".concat(oldVal), this._groupSlideHandler, this);
      }

      this.addGroupListeners();
    },
    autoPlay: function autoPlay(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.restartTimer();
    }
  },
  methods: {
    // controlling methods
    slideTo: function slideTo(slideIndex) {
      var _this = this;

      var isSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.isSliding || slideIndex === this.currentSlide) {
        return;
      }

      this.$emit('beforeSlide', {
        currentSlide: this.currentSlide,
        slideTo: index
      });
      var _this$$props2 = this.$props,
          infiniteScroll = _this$$props2.infiniteScroll,
          transition = _this$$props2.transition;
      var previousSlide = this.currentSlide;
      var index = infiniteScroll ? slideIndex : getInRange(slideIndex, this.trimStart, this.slidesCount - this.trimEnd); // Notify others if in a group and is the slide event initiator.

      if (this.group && isSource) {
        window.hooper.fire("slideGroup:".concat(this.group), slideIndex);
      }

      this.currentSlide = index;
      this.isSliding = true;
      window.setTimeout(function () {
        _this.isSliding = false;
        _this.currentSlide = normalizeSlideIndex(index, _this.slidesCount);

        _this.$emit('afterSlide', {
          currentSlide: _this.currentSlide
        });
      }, transition);
      this.$emit('slide', {
        currentSlide: this.currentSlide,
        slideFrom: previousSlide
      });
    },
    slideNext: function slideNext() {
      this.slideTo(this.currentSlide + this.itemsToSlide);
    },
    slidePrev: function slidePrev() {
      this.slideTo(this.currentSlide - this.itemsToSlide);
    },
    initEvents: function initEvents() {
      // get the element direction if not explicitly set
      if (this.$props.autoPlay) {
        this.initAutoPlay();
      }

      if (this.mouseDrag) {
        this.$refs.list.removeEventListener('mousedown', this.onDragStart);
        this.$refs.list.addEventListener('mousedown', this.onDragStart);
      }

      if (this.touchDrag) {
        this.$refs.list.removeEventListener('touchstart', this.onDragStart, {
          passive: true
        });
        this.$refs.list.addEventListener('touchstart', this.onDragStart, {
          passive: true
        });
      }

      if (this.keysControl) {
        this.$el.removeEventListener('keydown', this.onKeypress);
        this.$el.addEventListener('keydown', this.onKeypress);
      }

      if (this.wheelControl) {
        this.lastScrollTime = now();
        this.$el.removeEventListener('wheel', this.onWheel, {
          passive: false
        });
        this.$el.addEventListener('wheel', this.onWheel, {
          passive: false
        });
      }

      window.removeEventListener('resize', this.update);
      window.addEventListener('resize', this.update);
    },
    getCurrentSlideTimeout: function getCurrentSlideTimeout() {
      var curIdx = normalizeSlideIndex(this.currentSlide, this.slidesCount);
      var children = normalizeChildren(this);
      return children[curIdx].componentOptions.propsData.duration;
    },
    // switched to using a timeout which defaults to the prop set on this component, but can be overridden on a per slide basis.
    initAutoPlay: function initAutoPlay() {
      var _this2 = this;

      this.timer = new Timer(function () {
        if (_this2.isSliding || _this2.isDragging || _this2.isHover && _this2.hoverPause || _this2.isFocus || !_this2.$props.autoPlay) {
          _this2.timer.set(_this2.getCurrentSlideTimeout());

          return;
        }

        if (_this2.currentSlide === _this2.slidesCount - 1 && !_this2.infiniteScroll) {
          _this2.slideTo(0);

          _this2.timer.set(_this2.getCurrentSlideTimeout());

          return;
        }

        _this2.slideNext();

        _this2.timer.set(_this2.getCurrentSlideTimeout());
      }, this.getCurrentSlideTimeout());
    },
    updated: function updated() {
      this.initEvents(); //this.update()
    },
    // updating methods
    update: function update() {
      this.updateDimensions();
      this.updateSlideDimensions();
      this.updateTrim();
      this.$emit('updated', {
        containerWidth: this.containerWidth,
        containerHeight: this.containerHeight,
        slideWidth: this.slideWidth,
        slideHeight: this.slideHeight,
        settings: this.$props
      });
    },
    updateTrim: function updateTrim() {
      var _this$$props3 = this.$props,
          trimWhiteSpace = _this$$props3.trimWhiteSpace,
          itemsToShow = _this$$props3.itemsToShow,
          centerMode = _this$$props3.centerMode,
          infiniteScroll = _this$$props3.infiniteScroll;

      if (!trimWhiteSpace || infiniteScroll) {
        this.trimStart = 0;
        this.trimEnd = 1;
        return;
      }

      this.trimStart = centerMode ? Math.floor((itemsToShow - 1) / 2) : 0;
      this.trimEnd = centerMode ? Math.ceil(itemsToShow / 2) : itemsToShow;
    },
    updateDimensions: function updateDimensions() {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          width = _this$$el$getBounding.width,
          height = _this$$el$getBounding.height;

      if (this.itemsToShow === 1) {
        this.containerWidth = width;
        this.containerHeight = height;
      } else {
        if (this.vertical) {
          this.containerHeight = height - height % this.itemsToShow;
          this.containerWidth = width;
        } else {
          this.containerHeight = height;
          this.containerWidth = width - width % this.itemsToShow;
        }
      }
    },
    updateSlideDimensions: function updateSlideDimensions() {
      if (this.vertical) {
        this.slideHeight = this.containerHeight / this.itemsToShow;
      } else {
        this.slideWidth = this.containerWidth / this.itemsToShow;
      }
    },
    restartTimer: function restartTimer() {
      var _this3 = this;

      Object(external_commonjs_vue_commonjs2_vue_amd_vue_root_["nextTick"])(function () {
        if (_this3.timer === null && _this3.$props.autoPlay) {
          _this3.initAutoPlay();

          return;
        }

        if (_this3.timer) {
          _this3.timer.stop();

          if (_this3.$props.autoPlay) {
            _this3.timer.set(_this3.getCurrentSlideTimeout());

            _this3.timer.start();
          }
        }
      });
    },
    restart: function restart() {
      var _this4 = this;

      Object(external_commonjs_vue_commonjs2_vue_amd_vue_root_["nextTick"])(function () {
        _this4.update();
      });
    },
    // events handlers
    onDragStart: function onDragStart(event) {
      this.isTouch = event.type === 'touchstart';

      if (!this.isTouch && event.button !== 0) {
        return;
      }

      this.startPosition = {
        x: 0,
        y: 0
      };
      this.endPosition = {
        x: 0,
        y: 0
      };
      this.isDragging = true;
      this.startPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.startPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;
      document.addEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.addEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
    },
    isInvalidDirection: function isInvalidDirection(deltaX, deltaY) {
      if (!this.vertical) {
        return Math.abs(deltaX) <= Math.abs(deltaY);
      }

      if (this.vertical) {
        return Math.abs(deltaY) <= Math.abs(deltaX);
      }

      return false;
    },
    onDrag: function onDrag(event) {
      if (this.isSliding) {
        return;
      }

      this.endPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.endPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;
      var deltaX = this.endPosition.x - this.startPosition.x;
      var deltaY = this.endPosition.y - this.startPosition.y; // Maybe scrolling.

      if (this.isInvalidDirection(deltaX, deltaY)) {
        return;
      }

      this.delta.y = deltaY;
      this.delta.x = deltaX;

      if (!this.isTouch) {
        event.preventDefault();
      }
    },
    onDragEnd: function onDragEnd() {
      var tolerance = this.shortDrag ? 0.5 : 0.15;
      this.isDragging = false;

      if (this.vertical) {
        var draggedSlides = Math.round(Math.abs(this.delta.y / this.slideHeight) + tolerance);
        this.slideTo(this.currentSlide - sign(this.delta.y) * draggedSlides);
      }

      if (!this.vertical) {
        var direction = (this.rtl ? -1 : 1) * sign(this.delta.x);

        var _draggedSlides = Math.round(Math.abs(this.delta.x / this.slideWidth) + tolerance);

        this.slideTo(this.currentSlide - direction * _draggedSlides);
      }

      this.delta.x = 0;
      this.delta.y = 0;
      document.removeEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.removeEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
      this.restartTimer();
    },
    onKeypress: function onKeypress(event) {
      var key = event.key;

      if (key.startsWith('Arrow')) {
        event.preventDefault();
      }

      if (this.vertical) {
        if (key === 'ArrowUp') {
          this.slidePrev();
        }

        if (key === 'ArrowDown') {
          this.slideNext();
        }

        return;
      }

      if (this.rtl) {
        if (key === 'ArrowRight') {
          this.slidePrev();
        }

        if (key === 'ArrowLeft') {
          this.slideNext();
        }

        return;
      }

      if (key === 'ArrowRight') {
        this.slideNext();
      }

      if (key === 'ArrowLeft') {
        this.slidePrev();
      }
    },
    onWheel: function onWheel(event) {
      event.preventDefault();

      if (now() - this.lastScrollTime < 200) {
        return;
      } // get wheel direction


      this.lastScrollTime = now();
      var value = event.wheelDelta || -event.deltaY;
      var delta = sign(value);

      if (delta === -1) {
        this.slideNext();
      }

      if (delta === 1) {
        this.slidePrev();
      }
    },
    addGroupListeners: function addGroupListeners() {
      var _this5 = this;

      if (!this.group) {
        return;
      }

      this._groupSlideHandler = function (slideIndex) {
        // set the isSource to false to prevent infinite emitting loop.
        _this5.slideTo(slideIndex, false);
      };

      window.hooper.subscribe("slideGroup:".concat(this.group), this._groupSlideHandler, this); // ,
    }
  },
  created: function created() {
    if (!window.hooper) {
      window.hooper = Obs;
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.initEvents();
    this.addGroupListeners();
    Object(external_commonjs_vue_commonjs2_vue_amd_vue_root_["nextTick"])(function () {
      _this6.update();

      _this6.slideTo(_this6.initialSlide || 0);

      setTimeout(function () {
        _this6.$emit('loaded');

        _this6.initialized = true;
      }, _this6.transition);
    });
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener('resize', this.update);

    if (this.group) {
      if (window.hooper) {
        window.hooper.unsubscribe("slideGroup:".concat(this.group), this._groupSlideHandler, this);
      }
    }

    if (this.timer) {
      this.timer.stop();
    }
  },
  render: function render() {
    var _this7 = this;

    var body = renderBody.call(this, external_commonjs_vue_commonjs2_vue_amd_vue_root_["h"]);
    var rendered = Object(external_commonjs_vue_commonjs2_vue_amd_vue_root_["h"])('section', {
      "class": {
        hooper: true,
        'is-vertical': this.vertical,
        'is-rtl': this.rtl
      },
      tabindex: '0',
      onFocusIn: function onFocusIn() {
        return _this7.isFocus = true;
      },
      onFocusOut: function onFocusOut() {
        return _this7.isFocus = false;
      },
      onMouseOver: function onMouseOver() {
        return _this7.isHover = true;
      },
      onMouseLeave: function onMouseLeave() {
        return _this7.isHover = false;
      }
    }, body);
    return rendered;
  }
});
/**
 * Renders additional slides for infinite slides mode.
 * By cloning Slides VNodes before and after either edges.
 */

function renderBufferSlides(h, slides) {
  var before = [];
  var after = []; // reduce prop access

  var slidesCount = slides.length;

  for (var i = 0; i < slidesCount; i++) {
    var slide = slides[i];

    var clonedSlide = _objectSpread2({}, slide);

    var clonedBefore = h(clonedSlide);
    var slideIndex = i - slidesCount;
    clonedBefore.key = "before_".concat(i);
    before.push(clonedBefore);
    var clonedAfter = h(clonedSlide);
    slideIndex = i + slidesCount;
    clonedAfter.key = "after_".concat(slideIndex);
    after.push(clonedAfter);
  }

  return [].concat(before, _toConsumableArray(slides), after);
}
/**
 * Produces the VNodes for the Slides.
 * requires {this} to be bound to hooper.
 * So use with .call or .bind
 */


function renderSlides(h) {
  var children = normalizeChildren(this);
  var childrenCount = children.length;
  var idx = 0;
  var slides = [];

  for (var i = 0; i < childrenCount; i++) {
    var child = children[i];

    if (child.children.length > 0) {
      for (var j = 0; j < child.children.length; j++) {
        var nestedChild = child.children[j];

        if (_typeof(nestedChild.type) === 'object') {
          slides.push(nestedChild);
        }
      }
    }

    if (_typeof(child.type) === 'object') {
      slides.push(child);
    }
  } // update hooper's information of the slide count.


  this.slidesCount = slides.length;

  if (this.infiniteScroll) {
    slides = renderBufferSlides(h, slides);
  }

  return h('ul', {
    "class": {
      'hooper-track': true,
      'is-dragging': this.isDragging
    },
    style: this.trackTransform + this.trackTransition,
    ref: 'track'
  }, slides);
}
/**
 * Builds the VNodes for the hooper body.
 * Which is the slides, addons if available, and a11y stuff.
 * REQUIRES {this} to be bound to the hooper instance.
 * use with .call or .bind
 */


function renderBody(h) {
  var slides = renderSlides.call(this, h);
  var addons = this.$slots['hooper-addons'] || [];
  var a11y = h('div', {
    "class": 'hooper-liveregion hooper-sr-only',
    'aria-live': 'polite',
    'aria-atomic': 'true'
  }, "Item ".concat(this.currentSlide + 1, " of ").concat(this.slidesCount));
  var children = [slides].concat(_toConsumableArray(addons), [a11y]);
  var rendered = h('div', {
    "class": 'hooper-list',
    style: this.vertical ? "height: ".concat(this.containerHeight, "px") : "width: ".concat(this.containerWidth, "px"),
    ref: 'list'
  }, children);
  return rendered;
}
// EXTERNAL MODULE: ./src/styles/slide.css
var styles_slide = __webpack_require__("0041");

// CONCATENATED MODULE: ./src/Slide.js




/* harmony default export */ var Slide = ({
  name: 'HooperSlide',
  inject: ['$hooper'],
  props: {
    isClone: {
      type: Boolean,
      "default": false
    },
    index: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      "default": null
    }
  },
  computed: {
    style: function style() {
      var _ref = this.$hooper || {},
          config = _ref.config,
          slideHeight = _ref.slideHeight,
          slideWidth = _ref.slideWidth;

      if (config.vertical) {
        return "height: ".concat(slideHeight, "px");
      }

      return "width: ".concat(slideWidth, "px");
    },
    isActive: function isActive() {
      var _this$$hooper$slideBo = this.$hooper.slideBounds,
          upper = _this$$hooper$slideBo.upper,
          lower = _this$$hooper$slideBo.lower;
      return this.index >= lower && this.index <= upper;
    },
    isPrev: function isPrev() {
      var lower = this.$hooper.slideBounds.lower;
      var itemsToSlide = this.$hooper.config.itemsToSlide;
      return this.index < lower && this.index >= lower - itemsToSlide;
    },
    isNext: function isNext() {
      var upper = this.$hooper.slideBounds.upper;
      var itemsToSlide = this.$hooper.config.itemsToSlide;
      return this.index > upper && this.index <= upper + itemsToSlide;
    },
    isCurrent: function isCurrent() {
      return this.index === this.$hooper.currentSlide;
    }
  },
  render: function render() {
    var classes = {
      'hooper-slide': true,
      'is-clone': this.isClone,
      'is-active': this.isActive,
      'is-prev': this.isPrev,
      'is-next': this.isNext,
      'is-current': this.isCurrent
    };
    var children = normalizeChildren(this);
    return Object(external_commonjs_vue_commonjs2_vue_amd_vue_root_["h"])('li', {
      "class": classes,
      style: this.style,
      'aria-hidden': !this.isActive
    }, children);
  }
});
// CONCATENATED MODULE: ./src/addons/Mixin.js
/* harmony default export */ var Mixin = ({
  inject: ['$hooper']
});
// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("c4e9");

// CONCATENATED MODULE: ./src/addons/Icon.js


var icons = {
  arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
  arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
  arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
  arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'
};
/* harmony default export */ var Icon = ({
  name: 'HooperIcon',
  functional: true,
  inheritAttrs: true,
  props: {
    name: {
      type: String,
      required: true,
      validator: function validator(val) {
        return val in icons;
      }
    }
  },
  render: function render(createElement, _ref) {
    var props = _ref.props;
    var icon = icons[props.name];
    var children = [];
    children.push(createElement('title', camelCaseToString(props.name)));
    children.push(createElement('path', {
      attrs: {
        d: 'M0 0h24v24H0z',
        fill: 'none'
      }
    }));
    children.push(createElement('path', {
      attrs: {
        d: icon
      }
    }));
    return createElement('svg', {
      attrs: {
        "class": "icon icon-".concat(props.name),
        viewBox: '0 0 24 24',
        width: '24px',
        height: '24px'
      }
    }, children);
  }
});
// EXTERNAL MODULE: ./src/styles/progress.css
var progress = __webpack_require__("85c2");

// CONCATENATED MODULE: ./src/addons/Progress.js




/* harmony default export */ var Progress = ({
  inject: ['$hooper'],
  name: 'HooperProgress',
  computed: {
    currentSlide: function currentSlide() {
      return normalizeSlideIndex(this.$hooper.currentSlide, this.$hooper.slidesCount);
    },
    progress: function progress() {
      var range = this.$hooper.slidesCount - this.$hooper.trimStart - this.$hooper.trimEnd;
      return (this.currentSlide - this.$hooper.trimStart) * 100 / range;
    }
  },
  render: function render(h) {
    return h('div', {
      "class": 'hooper-progress'
    }, [h('div', {
      "class": 'hooper-progress-inner',
      style: "width: ".concat(this.progress, "%")
    })]);
  }
});
// EXTERNAL MODULE: /home/fpfings/.config/yarn/global/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("bfb6");

// EXTERNAL MODULE: ./src/styles/pagination.css
var pagination = __webpack_require__("03ce");

// CONCATENATED MODULE: ./src/addons/Pagination.js







function renderFraction(h, current, totalCount) {
  return [h('span', current + 1), h('span', '/'), h('span', totalCount)];
}

function renderIndicator(h, index, isCurrent, onClick) {
  return h('li', [h('button', {
    "class": {
      'hooper-indicator': true,
      'is-active': isCurrent
    },
    on: {
      click: onClick
    },
    attrs: {
      type: 'button'
    }
  }, [h('span', {
    "class": 'hooper-sr-only'
  }, "item ".concat(index))])]);
}

function renderDefault(h, current, totalCount, slideToIndex) {
  var children = [];

  var _loop = function _loop(i) {
    children.push(renderIndicator(h, i, i === current, function () {
      return slideToIndex(i);
    }));
  };

  for (var i = 0; i < totalCount; i++) {
    _loop(i);
  }

  return [h('ol', {
    "class": 'hooper-indicators'
  }, children)];
}

/* harmony default export */ var Pagination = ({
  inject: ['$hooper'],
  name: 'HooperPagination',
  props: {
    mode: {
      "default": 'indicator',
      type: String
    }
  },
  computed: {
    currentSlide: function currentSlide() {
      return normalizeSlideIndex(this.$hooper.currentSlide, this.$hooper.slidesCount);
    },
    slides: function slides() {
      var slides = this.$hooper.slides.map(function (_, index) {
        return index;
      });
      return slides.slice(this.$hooper.trimStart, this.$hooper.slidesCount - this.$hooper.trimEnd + 1);
    }
  },
  render: function render(h) {
    var _this = this;

    var totalCount = this.$hooper.slidesCount;
    var children = this.mode === 'indicator' ? renderDefault(h, this.currentSlide, totalCount, function (index) {
      return _this.$hooper.slideTo(index);
    }) : renderFraction(h, this.currentSlide, totalCount);
    return h('div', {
      "class": {
        'hooper-pagination': true,
        'is-vertical': this.$hooper.config.vertical
      }
    }, children);
  }
});
// EXTERNAL MODULE: ./src/styles/navigation.css
var navigation = __webpack_require__("7d28");

// CONCATENATED MODULE: ./src/addons/Navigation.js




function iconName(isVertical, isRTL, isPrev) {
  if (isPrev) {
    return isVertical ? 'arrowUp' : isRTL ? 'arrowRight' : 'arrowLeft';
  }

  return isVertical ? 'arrowDown' : isRTL ? 'arrowLeft' : 'arrowRight';
}

function renderButton(h, disabled, slot, isPrev, _ref, onClick) {
  var _class;

  var isVertical = _ref.isVertical,
      isRTL = _ref.isRTL;
  var children = slot && slot.length ? slot : [h(Icon, {
    props: {
      name: iconName(isVertical, isRTL, isPrev)
    }
  })];
  return h('button', {
    "class": (_class = {}, _defineProperty(_class, "hooper-".concat(isPrev ? 'prev' : 'next'), true), _defineProperty(_class, 'is-disabled', disabled), _class),
    attrs: {
      type: 'button'
    },
    on: {
      click: onClick
    }
  }, children);
}

/* harmony default export */ var Navigation = ({
  inject: ['$hooper'],
  name: 'HooperNavigation',
  computed: {
    isPrevDisabled: function isPrevDisabled() {
      if (this.$hooper.config.infiniteScroll) {
        return false;
      }

      return this.$hooper.currentSlide === 0;
    },
    isNextDisabled: function isNextDisabled() {
      if (this.$hooper.config.infiniteScroll) {
        return false;
      }

      if (this.$hooper.config.trimWhiteSpace) {
        return this.$hooper.currentSlide === this.$hooper.slidesCount - Math.min(this.$hooper.config.itemsToShow, this.$hooper.slidesCount);
      }

      return this.$hooper.currentSlide === this.$hooper.slidesCount - 1;
    }
  },
  methods: {
    slideNext: function slideNext() {
      this.$hooper.slideNext();
      this.$hooper.restartTimer();
    },
    slidePrev: function slidePrev() {
      this.$hooper.slidePrev();
      this.$hooper.restartTimer();
    }
  },
  render: function render(h) {
    var _this = this;

    var config = {
      isRTL: this.$hooper.config.rtl,
      isVertical: this.$hooper.config.vertical
    };
    var children = [renderButton(h, this.isPrevDisabled, this.$slots['hooper-prev'], true, config, function () {
      return _this.slidePrev();
    }), renderButton(h, this.isNextDisabled, this.$slots['hooper-next'], false, config, function () {
      return _this.slideNext();
    })];
    return h('div', {
      "class": {
        'hooper-navigation': true,
        'is-vertical': this.$hooper.config.vertical,
        'is-rtl': this.$hooper.config.rtl
      }
    }, children);
  }
});
// CONCATENATED MODULE: ./src/index.js








/* harmony default export */ var src_0 = (Carousel);
// CONCATENATED MODULE: /home/fpfings/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "c29f":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var definePropertyModule = __webpack_require__("b569");
var createPropertyDescriptor = __webpack_require__("b81d");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c3fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var fails = __webpack_require__("5fac");
var isArray = __webpack_require__("3519");
var isObject = __webpack_require__("7091");
var toObject = __webpack_require__("d9ac");
var toLength = __webpack_require__("b13d");
var createProperty = __webpack_require__("71db");
var arraySpeciesCreate = __webpack_require__("347e");
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var wellKnownSymbol = __webpack_require__("e314");
var V8_VERSION = __webpack_require__("e215");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "c442":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("24c4");
var requireObjectCoercible = __webpack_require__("767c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "c4e9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var defineProperty = __webpack_require__("b569").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c4f0":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "c890":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var createNonEnumerableProperty = __webpack_require__("c29f");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cf53":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("dbad");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "d0ab":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("b2c3");
var regexpExec = __webpack_require__("bba6");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "d4e0":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var fails = __webpack_require__("5fac");
var toIndexedObject = __webpack_require__("c442");
var nativeGetOwnPropertyDescriptor = __webpack_require__("b71c").f;
var DESCRIPTORS = __webpack_require__("dfa5");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "d545":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");
var whitespaces = __webpack_require__("d6c9");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "d6c9":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "d6f2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "d7e0":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("c442");
var toLength = __webpack_require__("b13d");
var toAbsoluteIndex = __webpack_require__("2769");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "d9ac":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("767c");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "dbad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "dfa5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("5fac");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "dfb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("1c25");
var redefine = __webpack_require__("40e0");
var fails = __webpack_require__("5fac");
var wellKnownSymbol = __webpack_require__("e314");
var regexpExec = __webpack_require__("bba6");
var createNonEnumerableProperty = __webpack_require__("c29f");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "e054":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "e14d":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("44d8");
var enumBugKeys = __webpack_require__("e054");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e215":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var userAgent = __webpack_require__("1a68");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "e314":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("6da9");
var shared = __webpack_require__("ea4d");
var has = __webpack_require__("b547");
var uid = __webpack_require__("6693");
var NATIVE_SYMBOL = __webpack_require__("dbad");
var USE_SYMBOL_AS_UID = __webpack_require__("cf53");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "e405":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("7091");
var classof = __webpack_require__("b2c3");
var wellKnownSymbol = __webpack_require__("e314");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "e458":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("5fac");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "ea4d":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("adb0");
var store = __webpack_require__("16b4");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "eae4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $filter = __webpack_require__("6e9e").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("83a9");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "edc9":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("b1e6");
var getOwnPropertyNamesModule = __webpack_require__("6d9a");
var getOwnPropertySymbolsModule = __webpack_require__("1a21");
var anObject = __webpack_require__("b5d1");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "ef1f":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("61d8");
var sign = __webpack_require__("5259");

// `Math.sign` method
// https://tc39.github.io/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "f129":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var getOwnPropertyDescriptor = __webpack_require__("b71c").f;
var toLength = __webpack_require__("b13d");
var notARegExp = __webpack_require__("6512");
var requireObjectCoercible = __webpack_require__("767c");
var correctIsRegExpLogic = __webpack_require__("7332");
var IS_PURE = __webpack_require__("adb0");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f291":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("61d8");
var $trimStart = __webpack_require__("d545").start;
var forcedStringTrimMethod = __webpack_require__("7d44");

var FORCED = forcedStringTrimMethod('trimStart');

var trimStart = FORCED ? function trimStart() {
  return $trimStart(this);
} : ''.trimStart;

// `String.prototype.{ trimStart, trimLeft }` methods
// https://github.com/tc39/ecmascript-string-left-right-trim
$({ target: 'String', proto: true, forced: FORCED }, {
  trimStart: trimStart,
  trimLeft: trimStart
});


/***/ }),

/***/ "ff89":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("6e9e").forEach;
var arrayMethodIsStrict = __webpack_require__("206e");
var arrayMethodUsesToLength = __webpack_require__("fff7");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "fff7":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dfa5");
var fails = __webpack_require__("5fac");
var has = __webpack_require__("b547");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ })

/******/ });
});
//# sourceMappingURL=hooper.umd.js.map