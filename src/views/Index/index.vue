<template>
  <div class="page page-home">
    <header class="header">
      <button>back</button>
      <h2 class="title">home</h2>
      <button>menu</button>
    </header>
    <main class="content">
      <h1>content</h1>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Index',
};
</script>

<style lang="scss" scoped>
.page-home {
  background: $bg-color;
}

.header {
  display: flex;
  justify-content: space-between;
  > .title {
    flex: 1;
    text-align: center;
  }
}

.box.ignore-px2vw {
  height: 100px;
}

</style>
