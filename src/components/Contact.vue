<template>
  <div class="contact-container py-1 sm:py-3 w-full">
    <div class="mx-8 sm:mx-16 justify-around flex lg:w-1/4 text-sm sm:text-xl">
      <div>
        <a href="https://github.com/cloneable01" target="_blank">Github</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kevin-kidley/" target="_blank">Linkedin</a>
      </div>
      <div>
        <a 
        href="https://api.whatsapp.com/send?phone=6282126388637&text=Hi,%20I%20visited%20your%20portfolio%20website%20and%20I%20would%20like%20to%20connect%20with%20you."
        target="_blank"
        rel="noopener noreferrer">
        Whatsapp
        </a>
      </div>
      <div>
        <a href="mailto:kevin.kidley@gmail.com" target="_blank">Email</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .contact-container {
    background-color: white;
    border: 2px solid black;
  }
</style>