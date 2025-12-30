<template>
  <div class="home">
    <video autoplay muted loop class="bg-video">
      <source src="../assets/bg.mp4" type="video/mp4" />
    </video>
    <div class="overlay">
      <h1>欢迎来到知识世界</h1>
      <p>探索自然、旅游、美食与健康的奇妙旅程。</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  top: 40%;
}
</style>
