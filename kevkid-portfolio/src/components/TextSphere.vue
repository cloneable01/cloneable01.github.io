<template>
  <div id="app">
    <div class="tag-cloud-container"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import TagCloud from 'tagcloud';

export default defineComponent({
  setup() {
    let tagCloud;

    onMounted(() => {
      const myTags = [
        'JavaScript', 'Typescript', 'CSS', 'HTML', 'React', 'Vue', 'Tailwind', 'Bootstrap', 'UI/UX'
      ];

      tagCloud = TagCloud('.tag-cloud-container', myTags, {
        radius: 250,
        maxSpeed: 'fast',
        initSpeed: 'slow',
        direction: 135,
        keep: false
      });

      const tagCloudContainer = document.querySelector('.tag-cloud-container');

      tagCloudContainer.addEventListener('mouseenter', () => {
        tagCloud.pause();
      });

      tagCloudContainer.addEventListener('mouseleave', () => {
        tagCloud.resume();
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        tagCloud.update({ radius: 150 });
      } else {
        tagCloud.update({ radius: 250 });
      }
    });

    return {};
  },
});
</script>

<style>
.tag-cloud-container {
  width: 100%;
  height: 0;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tagcloud { 
  font-size: 15px;
  margin: auto;
  margin-left: 0;
  width: 50%;
  background-color: transparent;
  border-radius: 50%;
  color: black;
  font-weight: bolder;
  backdrop-filter: invert(100%);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: default;
}

.tagcloud--item:hover {
  color: rgb(239 68 68);
}

@media only screen and (max-width: 600px) {
  .tagcloud {
    margin-left: auto;
    font-size: 12px;
    font-weight: bold;
    backdrop-filter: none;
    color: white;
  }

  .tag-cloud-container{
    height: auto;
  }
}
</style>