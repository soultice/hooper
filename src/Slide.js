import { normalizeChildren } from './utils';
import { h } from 'vue';
import './styles/slide.css';

export default {
  name: 'HooperSlide',
  inject: ['$hooper'],
  props: {
    isClone: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: null
    }
  },
  computed: {
    style() {
      const { vertical, slideHeight, slideWidth } = this.$hooper || {};
      if (vertical) {
        return `height: ${slideHeight}px`;
      }

      return `width: ${slideWidth}px`;
    },
    isActive() {
      const { upper, lower } = this.$hooper.slideBounds;

      return this.index >= lower && this.index <= upper;
    },
    isPrev() {
      const { lower } = this.$hooper.slideBounds;
      const { itemsToSlide } = this.$hooper;

      return this.index < lower && this.index >= lower - itemsToSlide;
    },
    isNext() {
      const { upper } = this.$hooper.slideBounds;
      const { itemsToSlide } = this.$hooper;

      return this.index > upper && this.index <= upper + itemsToSlide;
    },
    isCurrent() {
      return this.index === this.$hooper.currentSlide;
    }
  },
  render() {
    const classes = {
      'hooper-slide': true,
      'is-clone': this.isClone,
      'is-active': this.isActive,
      'is-prev': this.isPrev,
      'is-next': this.isNext,
      'is-current': this.isCurrent
    };

    const children = normalizeChildren(this);

    return h(
      'li',
      {
        class: classes,
        style: this.style,
        'aria-hidden': !this.isActive
      },
      children
    );
  }
};
