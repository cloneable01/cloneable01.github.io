<template>
  <div>
    <div class=" text-red-500 sm:flex text-base sm:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 sm:absolute sm:left-20 sm:top-[57.5rem] z-20">ABOUT</div>
    <div class="mx-8 mt-8 sm:mt-8 sm:mx-24 border sm:border-2 border-black bg-white h-fit justify-around block flex-col">
      <div class="w-3/4 m-auto mt-16">
        <div class="border-container m-auto w-fit bg-white">
          <div class="square top-left"></div>
          <div class="square top-right"></div>
          <div class="square bottom-left"></div>
          <div class="square bottom-right"></div>
          <div class="m-8 text-sm sm:text-lg md:text-2xl xl:text-4xl tracking-[0.04rem] sm:tracking-[0.15rem] max-w-[520px] sm:max-w-[700px]">
            <p>
              Hello<span>,</span> Im Kevin FF<span>.</span> Kidley
            </p>
            <p>I am a Front<span>-</span>End Developer</p>
          </div>
        </div>
      </div>
      <div class="mt-16 mb-16 block sm:flex justify-around">
        <div class="text-xs md:text-lg lg:text-xl text-justify max-w-[16rem] md:max-w-sm lg:max-w-xl sm:leading-loose m-auto sm:m-0">
          <div class="mb-8">
            My journey began in psychology, providing me unique insights into user behavior and interaction. Today, I channel that understanding into crafting captivating web experiences that seamlessly fuse aesthetics, UI/UX design, and functionality. With JavaScript as programming languages, I'm dedicated to delivering user-centered digital solutions that leave a lasting impact. Leveraging frameworks such as Vue and React, and utilizing CSS/SCSS frameworks like Bootstrap and Tailwind, I strive to create online experiences that are not only visually appealing but also intuitive and responsive. Let's collaborate and turn your ideas into engaging online realities.
          </div>
          <div>
            Think of me as a bit of a digital architect with a twist. My journey started in the world of psychology – delving into what makes people tick. Fast forward, and I've traded my magnifying glass for a keyboard, now weaving web experiences that blend sleek aesthetics, smooth interactions, and pragmatic smarts. Armed with coding magic and a dash of framework flair, I whip up responsive web goodness that adapts like a chameleon. Fancy turning your ideas into some seriously cool online reality? Let's team up and make it happen!
          </div>
        </div>
        <div class="max-w-32 text-center mb-16 mt-8 sm:mb-0 sm:text-justify">
          <div>
            <p class="text-lg md:text-2xl">Skill set</p>
            <p>&#40; stronger each day &#41;</p>
          </div>
          <div class="mt-4 md:mt-8 block">
            <div class="mb-4">
              <span class="text-base md:text-xl">Programming Languages</span>
              <p class="text-sm md:text-base">JavaScript</p>
              <p class="text-sm md:text-base">TypeScript</p>
            </div>
            <div class="mb-4">
              <span class="text-base md:text-xl">Framework</span>
              <p class="text-sm md:text-base">Vue</p>
              <p class="text-sm md:text-base">React</p>
            </div>
            <div class="mb-4">
              <span class="text-base md:text-xl">Style Library</span>
              <p class="text-sm md:text-base">Tailwind</p>
              <p class="text-sm md:text-base">Bootstrap</p>
              <p class="text-sm md:text-base">Ant Design</p>
              <p class="text-sm md:text-base">Element</p>
            </div>
            <div class="mb-4">
              <span class="text-base md:text-xl">Related Skills</span>
              <p class="text-sm md:text-base">User Experience &#40;UX&#41; Design</p>
              <p class="text-sm md:text-base">User Interface &#40;UI&#41; Design</p>
              <p class="text-sm md:text-base">User-Centered Design</p>
              <p class="text-sm md:text-base">Responsive Design Principles</p>
              <p class="text-sm md:text-base">Cross-Browser Compatibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

.border-container {
  position: relative;
  border: 1px solid #000;
}

.square {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000000;
}

.top-left {
  top: -4px;
  left: -4px;
}

.top-right {
  top: -4px;
  right: -4px;
}

.bottom-left {
  bottom: -4px;
  left: -4px;
}

.bottom-right {
  bottom: -4px;
  right: -4px;
}

span {
  color: rgb(239 68 68);
}

</style>