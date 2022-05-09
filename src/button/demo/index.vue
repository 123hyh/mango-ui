<template>
  <div>
    <demo-block title="基础用法">
      <mango-button @click="handleClick" type="primary" style="margin-left: 15px">主要按钮</mango-button>
    </demo-block>
   <demo-block title="自定义颜色">
      <mango-button type='success' style="margin-left: 15px">成功按钮</mango-button>
    </demo-block>
     <demo-block title="自定义颜色">
      <mango-button type='info' style="margin-left: 15px">信息按钮</mango-button>
    </demo-block>
    <demo-block title="自定义颜色">
      <mango-button type='warning' style="margin-left: 15px">警告按钮</mango-button>
    </demo-block>
    <demo-block title="自定义颜色">
      <mango-button type='danger' style="margin-left: 15px">危险按钮</mango-button>
    </demo-block>
    <demo-block title="自定义颜色">
      <mango-button color="#03a9f4" style="margin-left: 15px">自定义颜色</mango-button>
    </demo-block>
  </div>
</template>