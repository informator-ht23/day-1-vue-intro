<template>
  <ul class="header-feed">
    <li>
      <img src="" alt="first friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="second friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="third friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="fourth friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="fifth friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="sixth friend" width="64" height="64" />
    </li>

    <li>
      <img src="" alt="seventh friend" width="64" height="64" />
    </li>
  </ul>
</template>

<style>
  .header-feed {
    list-style-type: none;
    display: flex;
    overflow-x: scroll;
  }

  .header-feed li{
    flex-shrink: 0;
    width: 64px;
  }
</style>