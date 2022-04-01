<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="App logo" class="logo">
    <div>
      <a href="#">Films</a>
    </div>
  </div>
</template>

<style scoped>
  .header {
    background-color: white;
    height: 60px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
  }

  .logo {
    display: block;
    height: 30%;
    margin-left: 2rem;
  }

  a {
    margin-right: 2rem;
    color: black
  }
</style>
