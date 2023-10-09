<template>
  <div class="post-interaction">
    <img src="" alt="Like" width="24" height="24"/>
    <label>5432</label>
  </div>

  <div class="post-interaction">
    <img src="" alt="Comments" width="24" height="24"/>
    <label>134</label>
  </div>
</template>

<style>
  .post-interaction {
    float: left;
  }

  .post-interaction label::before {
    content: ' ';
  }
</style>