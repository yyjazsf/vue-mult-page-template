<template>
  <div class="page page-home">
    <header class="header">
      <button>back</button>
      <h2 class="title">1px</h2>
      <button>menu</button>
    </header>
    <main class="content">
      <div class="one-px-border">1px demo(with border-image, doesn't work in old mobile phone)</div>
      <div class="scale-1px">1px with transform</div>

      <pre class="one-px-border-demo2">
        @apply --self-rect-item;
        background-image: svg(line param(--color #00b1ff) param(--y1 100%) param(--y2 100%));
      </pre>

      <pre class="mult-borders">
        background-image: svg(
          1px-line param(--color #00b1ff) param(--y1 100%) param(--y2 100%)
        ),
        svg(1px-line param(--color red));
      </pre>

      <div class="one-px-by-pseudo-classes">one-px-by-pseudo-classes</div>
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

.one-px-border {
  border: 1px solid; // 将其余三遍的border宽度设置成0
  border-image: svg(1px-border param(--color red)) 1 stretch;
}

.one-px-border-demo2 {
  background-image: svg(
    1px-line param(--color #00b1ff) param(--y1 100%) param(--y2 100%)
  );
}

.mult-borders {
  background-image: svg(
      1px-line param(--color #00b1ff) param(--y1 100%) param(--y2 100%)
    ),
    svg(1px-line param(--color red));
}

.one-px-by-pseudo-classes {

}

.content > div {
  margin-bottom: 10px;
  padding: 6px;
}
</style>
