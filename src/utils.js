export function getInRange(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

export function now() {
  return Date.now();
}

export function Timer(callback, defaultTime) {
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
    const timeout = newTime || defaultTime;
    this.timer = window.setTimeout(callback, timeout);
  };
  this.timer = this.create();
}

export function camelCaseToString(camelCase) {
  camelCase = camelCase.replace(/([A-Z]+)/g, ' $1');
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

export function normalizeSlideIndex(index, slidesCount) {
  let realIndex;
  if (index < 0) {
    realIndex = (index + slidesCount) % slidesCount;
  } else {
    realIndex = index % slidesCount;
  }

  // Test for NaN
  if (realIndex !== realIndex) {
    return 0;
  }

  return realIndex;
}

// IE11 :)
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

export const assign = Object.assign || assignPoly;

function signPoly(value) {
  if (value < 0) {
    return -1;
  }

  return value > 0 ? 1 : 0;
}

export const sign = Math.sign || signPoly;

export function normalizeChildren(context, slotProps = {}) {
  return context.$slots.default() || [];
}

function Observable() {
  this.handlers = {}; // observers
}

Observable.prototype = {
  subscribe: function (target, fn, scope) {
    if (!this.handlers[target]) {
      this.handlers[target] = [];
    }
    this.handlers[target].push({
      function: fn,
      scope: scope
    });
  },

  unsubscribe: function (target, fn, scope) {
    this.handlers[target] = this.handlers[target].filter(subscriber => {
      if (subscriber.scope !== scope && subscriber.function !== fn) {
        return subscriber;
      }
    });
  },

  fire: function (target, props, thisObj) {
    var scope = thisObj || window;
    if (this.handlers[target]) {
      this.handlers[target].forEach(function (subscriber) {
        subscriber.function.call(scope, props);
      });
    }
  }
};

export const Obs = new Observable();
