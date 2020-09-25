/* eslint-disable */
import { Obs, getInRange, now, Timer, normalizeSlideIndex, cloneNode, normalizeChildren, sign, assign } from './utils';
import { h, nextTick } from 'vue';

import './styles/carousel.css';

export default {
  name: 'Hooper',
  provide() {
    return {
      $hooper: this
    };
  },
  props: {
    // count of items to showed per view
    itemsToShow: {
      default: 1,
      type: Number
    },
    // count of items to slide when use navigation buttons
    itemsToSlide: {
      default: 1,
      type: Number
    },
    // index number of initial slide
    initialSlide: {
      default: 0,
      type: Number
    },
    // control infinite scrolling mode
    infiniteScroll: {
      default: false,
      type: Boolean
    },
    // control center mode
    centerMode: {
      default: false,
      type: Boolean
    },
    // vertical sliding mode
    vertical: {
      default: false,
      type: Boolean
    },
    // enable rtl mode
    rtl: {
      default: false,
      type: Boolean
    },
    // enable auto sliding to carousel
    autoPlay: {
      default: false,
      type: Boolean
    },
    // speed of auto play to trigger slide
    playSpeed: {
      default: 2000,
      type: Number
    },
    // toggle mouse dragging
    mouseDrag: {
      default: true,
      type: Boolean
    },
    // toggle touch dragging
    touchDrag: {
      default: true,
      type: Boolean
    },
    // toggle mouse wheel sliding
    wheelControl: {
      default: true,
      type: Boolean
    },
    // toggle keyboard control
    keysControl: {
      default: true,
      type: Boolean
    },
    // enable any move to commit a slide
    shortDrag: {
      default: true,
      type: Boolean
    },
    // sliding transition time in ms
    transition: {
      default: 300,
      type: Number
    },
    // pause autoPlay on mousehover
    hoverPause: {
      default: true,
      type: Boolean
    },
    // remove empty space around slides
    trimWhiteSpace: {
      default: false,
      type: Boolean
    },
    // an object to pass all settings
    group: {
      type: String,
      default: null
    }
  },
  data() {
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
      delta: { x: 0, y: 0 },
      config: {}
    };
  },
  computed: {
    slideBounds() {
      const { config, currentSlide } = this;
      // Because the "isActive" depends on the slides shown, not the number of slidable ones.
      // but upper and lower bounds for Next,Prev depend on whatever is smaller.
      const siblings = config.itemsToShow;
      const lower = config.centerMode ? Math.ceil(currentSlide - siblings / 2) : currentSlide;
      const upper = config.centerMode
        ? Math.floor(currentSlide + siblings / 2)
        : Math.floor(currentSlide + siblings - 1);

      return {
        lower,
        upper
      };
    },
    trackTransform() {
      const { infiniteScroll, vertical, rtl, centerMode } = this.$props;

      const direction = rtl ? -1 : 1;
      const slideLength = vertical ? this.slideHeight : this.slideWidth;
      const containerLength = vertical ? this.containerHeight : this.containerWidth;
      const dragDelta = vertical ? this.delta.y : this.delta.x;
      const clonesSpace = infiniteScroll ? slideLength * this.slidesCount : 0;
      const centeringSpace = centerMode ? (containerLength - slideLength) / 2 : 0;

      // calculate track translate
      const translate = dragDelta + direction * (centeringSpace - clonesSpace - this.currentSlide * slideLength);

      if (vertical) {
        return `transform: translate(0, ${translate}px);`;
      }

      return `transform: translate(${translate}px, 0);`;
    },
    trackTransition() {
      if (this.initialized && this.isSliding) {
        return `transition: ${this.transition}ms`;
      }

      return '';
    }
  },
  watch: {
    group(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      if (window.hooper) {
        window.hooper.unsubscribe(`slideGroup:${oldVal}`, this._groupSlideHandler, this);
      }
      this.addGroupListeners();
    },
    autoPlay(val, oldVal) {
      if (val === oldVal) {
        return;
      }
      this.restartTimer();
    }
  },
  methods: {
    // controlling methods
    slideTo(slideIndex, isSource = true) {
      if (this.isSliding || slideIndex === this.currentSlide) {
        return;
      }

      this.$emit('beforeSlide', {
        currentSlide: this.currentSlide,
        slideTo: index
      });

      const { infiniteScroll, transition } = this.$props;
      const previousSlide = this.currentSlide;
      const index = infiniteScroll
        ? slideIndex
        : getInRange(slideIndex, this.trimStart, this.slidesCount - this.trimEnd);

      // Notify others if in a group and is the slide event initiator.
      if (this.group && isSource) {
        window.hooper.fire(`slideGroup:${this.group}`, slideIndex);
      }

      this.currentSlide = index;
      this.isSliding = true;

      window.setTimeout(() => {
        this.isSliding = false;
        this.currentSlide = normalizeSlideIndex(index, this.slidesCount);
        this.$emit('afterSlide', {
          currentSlide: this.currentSlide
        });
      }, transition);

      this.$emit('slide', {
        currentSlide: this.currentSlide,
        slideFrom: previousSlide
      });
    },
    slideNext() {
      this.slideTo(this.currentSlide + this.itemsToSlide);
    },
    slidePrev() {
      this.slideTo(this.currentSlide - this.itemsToSlide);
    },

    initEvents() {
      // get the element direction if not explicitly set

      this.$refs.list.removeEventListener('mousedown', this.onDragStart);
      this.$refs.list.removeEventListener('touchstart', this.onDragStart, {
        passive: true
      });
      this.$el.removeEventListener('keydown', this.onKeypress);
      this.$el.removeEventListener('wheel', this.onWheel, { passive: false });

      window.removeEventListener('resize', this.update);

      if (this.$props.autoPlay) {
        this.initAutoPlay();
      }
      if (this.mouseDrag) {
        this.$refs.list.addEventListener('mousedown', this.onDragStart);
      }
      if (this.touchDrag) {
        this.$refs.list.addEventListener('touchstart', this.onDragStart, {
          passive: true
        }) 
      }
      if (this.keysControl) {
        this.$el.addEventListener('keydown', this.onKeypress);
      }
      if (this.wheelControl) {
        this.lastScrollTime = now();
        this.$el.addEventListener('wheel', this.onWheel, { passive: false });
      }
      window.addEventListener('resize', this.update);
    },
    getCurrentSlideTimeout() {
      const curIdx = normalizeSlideIndex(this.currentSlide, this.slidesCount);
      const children = normalizeChildren(this);
      return children[curIdx].componentOptions.propsData.duration;
    }, // switched to using a timeout which defaults to the prop set on this component, but can be overridden on a per slide basis.
    initAutoPlay() {
      this.timer = new Timer(() => {
        if (
          this.isSliding ||
          this.isDragging ||
          (this.isHover && this.hoverPause) ||
          this.isFocus ||
          !this.$props.autoPlay
        ) {
          this.timer.set(this.getCurrentSlideTimeout());
          return;
        }
        if (this.currentSlide === this.slidesCount - 1 && !this.infiniteScroll) {
          this.slideTo(0);
          this.timer.set(this.getCurrentSlideTimeout());
          return;
        }
        this.slideNext();
        this.timer.set(this.getCurrentSlideTimeout());
      }, this.getCurrentSlideTimeout());
    },
    updated() {
      this.initEvents()
    },
    // updating methods
    update() {
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
    updateTrim() {
      const { trimWhiteSpace, itemsToShow, centerMode, infiniteScroll } = this.$props;
      if (!trimWhiteSpace || infiniteScroll) {
        this.trimStart = 0;
        this.trimEnd = 1;
        return;
      }
      this.trimStart = centerMode ? Math.floor((itemsToShow - 1) / 2) : 0;
      this.trimEnd = centerMode ? Math.ceil(itemsToShow / 2) : itemsToShow;
    },
    updateDimensions() {
      const { width, height } = this.$el.getBoundingClientRect();
      if (this.itemsToShow === 1) {
        this.containerWidth = width;
        this.containerHeight = height;
      } else {
        if (this.vertical) {
          this.containerHeight = height - (height % this.itemsToShow);
          this.containerWidth = width;
        } else {
          this.containerHeight = height;
          this.containerWidth = width - (width % this.itemsToShow);
        }
      }
    },
    updateSlideDimensions() {
      if (this.vertical) {
        this.slideHeight = this.containerHeight / this.itemsToShow;
      } else {
        this.slideWidth = this.containerWidth / this.itemsToShow;
      }
    },
    restartTimer() {
      nextTick(() => {
        if (this.timer === null && this.$props.autoPlay) {
          this.initAutoPlay();
          return;
        }

        if (this.timer) {
          this.timer.stop();
          if (this.$props.autoPlay) {
            this.timer.set(this.getCurrentSlideTimeout());
            this.timer.start();
          }
        }
      });
    },
    restart() {
      nextTick(() => {
        this.update();
      });
    },
    // events handlers
    onDragStart(event) {
      this.isTouch = event.type === 'touchstart';
      if (!this.isTouch && event.button !== 0) {
        return;
      }

      this.startPosition = { x: 0, y: 0 };
      this.endPosition = { x: 0, y: 0 };
      this.isDragging = true;
      this.startPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.startPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;

      document.addEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.addEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
    },
    isInvalidDirection(deltaX, deltaY) {
      if (!this.vertical) {
        return Math.abs(deltaX) <= Math.abs(deltaY);
      }

      if (this.vertical) {
        return Math.abs(deltaY) <= Math.abs(deltaX);
      }

      return false;
    },
    onDrag(event) {
      if (this.isSliding) {
        return;
      }

      this.endPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.endPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;
      const deltaX = this.endPosition.x - this.startPosition.x;
      const deltaY = this.endPosition.y - this.startPosition.y;
      // Maybe scrolling.
      if (this.isInvalidDirection(deltaX, deltaY)) {
        return;
      }

      this.delta.y = deltaY;
      this.delta.x = deltaX;

      if (!this.isTouch) {
        event.preventDefault();
      }
    },
    onDragEnd() {
      const tolerance = this.shortDrag ? 0.5 : 0.15;
      this.isDragging = false;

      if (this.vertical) {
        const draggedSlides = Math.round(Math.abs(this.delta.y / this.slideHeight) + tolerance);
        this.slideTo(this.currentSlide - sign(this.delta.y) * draggedSlides);
      }
      if (!this.vertical) {
        const direction = (this.rtl ? -1 : 1) * sign(this.delta.x);
        const draggedSlides = Math.round(Math.abs(this.delta.x / this.slideWidth) + tolerance);
        this.slideTo(this.currentSlide - direction * draggedSlides);
      }
      this.delta.x = 0;
      this.delta.y = 0;
      document.removeEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.removeEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
      this.restartTimer();
    },
    onKeypress(event) {
      const key = event.key;
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
    onWheel(event) {
      event.preventDefault();
      if (now() - this.lastScrollTime < 200) {
        return;
      }
      // get wheel direction
      this.lastScrollTime = now();
      const value = event.wheelDelta || -event.deltaY;
      const delta = sign(value);
      if (delta === -1) {
        this.slideNext();
      }
      if (delta === 1) {
        this.slidePrev();
      }
    },
    addGroupListeners() {
      if (!this.group) {
        return;
      }

      this._groupSlideHandler = slideIndex => {
        // set the isSource to false to prevent infinite emitting loop.
        this.slideTo(slideIndex, false);
      };
      window.hooper.subscribe(`slideGroup:${this.group}`, this._groupSlideHandler, this); // ,
    }
  },
  created() {
    if (!window.hooper) {
      window.hooper = Obs;
    }
  },
  mounted() {
    this.initEvents();
    this.addGroupListeners();
    nextTick(() => {
      this.update();
      this.slideTo(this.initialSlide || 0);
      setTimeout(() => {
        this.$emit('loaded');
        this.initialized = true;
      }, this.transition);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.update);
    if (this.group) {
      if (window.hooper) {
        window.hooper.unsubscribe(`slideGroup:${this.group}`, this._groupSlideHandler, this);
      }
    }

    if (this.timer) {
      this.timer.stop();
    }
  },
  render() {
    const body = renderBody.call(this, h);

    const rendered = h(
      'section',
      {
        class: {
          hooper: true,
          'is-vertical': this.vertical,
          'is-rtl': this.rtl
        },
        tabindex: '0',
        onFocusIn: () => (this.isFocus = true),
        onFocusOut: () => (this.isFocus = false),
        onMouseOver: () => (this.isHover = true),
        onMouseLeave: () => (this.isHover = false)
      },
      body
    );
    return rendered;
  }
};

/**
 * Renders additional slides for infinite slides mode.
 * By cloning Slides VNodes before and after either edges.
 */
function renderBufferSlides(h, slides) {
  const before = [];
  const after = [];
  // reduce prop access
  const slidesCount = slides.length;
  for (let i = 0; i < slidesCount; i++) {
    const slide = slides[i];
    const clonedSlide = { ...slide };
    const clonedBefore = h(clonedSlide);
    let slideIndex = i - slidesCount;
    clonedBefore.key = `before_${i}`;

    before.push(clonedBefore);

    const clonedAfter = h(clonedSlide);
    slideIndex = i + slidesCount;
    clonedAfter.key = `after_${slideIndex}`;
    after.push(clonedAfter);
  }

  return [...before, ...slides, ...after];
}

/**
 * Produces the VNodes for the Slides.
 * requires {this} to be bound to hooper.
 * So use with .call or .bind
 */
function renderSlides(h) {
  const children = normalizeChildren(this);
  const childrenCount = children.length;
  let idx = 0;
  let slides = [];

  for (let i = 0; i < childrenCount; i++) {
    const child = children[i];
    if (child.children.length > 0) {
      for (let j = 0; j < child.children.length; j++) {
        const nestedChild = child.children[j];
        if (typeof nestedChild.type === 'object') {
          slides.push(nestedChild);
        }
      }
    }

    if (typeof child.type === 'object') {
      slides.push(child);
    }
  }

  // update hooper's information of the slide count.
  this.slidesCount = slides.length;
  if (this.infiniteScroll) {
    slides = renderBufferSlides(h, slides);
  }

  return h(
    'ul',
    {
      class: {
        'hooper-track': true,
        'is-dragging': this.isDragging
      },
      style: this.trackTransform + this.trackTransition,
      ref: 'track'
    },
    slides
  );
}

/**
 * Builds the VNodes for the hooper body.
 * Which is the slides, addons if available, and a11y stuff.
 * REQUIRES {this} to be bound to the hooper instance.
 * use with .call or .bind
 */
function renderBody(h) {
  const slides = renderSlides.call(this, h);
  const addons = this.$slots['hooper-addons'] || [];
  const a11y = h(
    'div',
    {
      class: 'hooper-liveregion hooper-sr-only',
      'aria-live': 'polite',
      'aria-atomic': 'true'
    },
    `Item ${this.currentSlide + 1} of ${this.slidesCount}`
  );

  const children = [slides, ...addons, a11y];

  const rendered = h(
    'div',
    {
      class: 'hooper-list',
      style: this.vertical ? `height: ${this.containerHeight}px` : `width: ${this.containerWidth}px`,
      ref: 'list'
    },
    children
  );
  return rendered;
}
