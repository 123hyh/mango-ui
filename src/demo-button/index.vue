<template>
  <button :class="prefixCls">
    <slot />
  </button>
</template>

<script>
import { getClsNameSpace } from '../_utils'

export default {
  name: 'demo-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
  data: ()=>({
    prefixCls: getClsNameSpace("demo-button")
  }),

};
</script>

<style lang="scss">
@import "../design/var/index.scss";
$prefix-cls: #{$namespace}-demo-button;
.#{$prefix-cls} {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
