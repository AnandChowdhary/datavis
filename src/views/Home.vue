<template>
  <div style="position: relative">
    <iframe :src="url" />
    <div class="info">
      <div class="range"></div>
      <div class="row">
        <div>
          <div>Rank 1</div>
          <div class="name">Lithuania</div>
        </div>
        <div>
          <div>Rank 176</div>
          <div class="name">Antigua And Barbuda</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "/d3"
    }
  },
  created() {
    if (location.href.includes("localhost"))
      this.url = "https://data-visualizations.netlify.com/d3/";
  }
}
</script>


<style lang="scss" scoped>
iframe {
  border: none;
  width: 100%;
  height: calc(100vh - 5rem);
}
.info {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.name {
  font-size: 80%;
  opacity: 0.7;
}
.row {
  display: flex;
  justify-content: space-between;
  > div:last-child {
    margin-left: 2rem;
    text-align: right;
  }
}
$darkest: rgb(0, 1, 0);
$lightest: rgb(0, 176, 0);
.range {
  height: 1rem;
  background: linear-gradient(to right, $darkest, $lightest);
  margin-bottom: 0.75rem;
}
</style>
