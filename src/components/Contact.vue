<template>
  <div class="relative">
    <div
      class="text-red-500 lg:flex text-base lg:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 lg:absolute lg:left-20 lg:top-12 z-20"
    >
      CONTACT
    </div>
    <div class="mx-8 mt-8 lg:mx-24 border lg:border-2 border-black bg-white">
      <div class="pt-16 px-8 lg:px-20 lg:mt-16 pb-12 lg:pb-16">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 lg:gap-20"
        >
          <div>
            <p
              class="monoton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6"
            >
              LET'S BUILD<br />SOMETHING<span class="text-red-500">.</span>
            </p>
            <p class="text-sm lg:text-base opacity-60 max-w-sm leading-relaxed">
              Open to new opportunities, collaborations, or just a good
              conversation about engineering.
            </p>
          </div>
          <div class="flex flex-col gap-3 shrink-0">
            <a
              href="mailto:kevin.kidley@gmail.com"
              class="contact-link text-sm lg:text-base"
            >
              kevin.kidley@gmail.com
            </a>
            <a
              href="https://github.com/cloneable01"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link text-sm lg:text-base"
            >
              GitHub <span class="text-red-500">↗︎</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-kidley/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link text-sm lg:text-base"
            >
              LinkedIn <span class="text-red-500">↗︎</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6282126388637&text=Hi,%20I%20visited%20your%20portfolio%20website%20and%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link text-sm lg:text-base"
            >
              WhatsApp <span class="text-red-500">↗︎</span>
            </a>
          </div>
        </div>
        <div
          class="mt-12 lg:mt-16 pt-6 border-t border-black/20 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs opacity-40"
        >
          <span>© 2025 Kevin F. Kidley</span>
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.contact-link {
  display: inline-block;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    color: #ef4444;
    border-color: #ef4444;
  }
}
</style>
