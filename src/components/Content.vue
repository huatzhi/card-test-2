<template>
  <div>
    <Analysis />
    <output-card />
  </div>
</template>

<script>
import Analysis from "./Analysis"
import OutputCard from "./OutputCard.vue"

export default {
  name: "Content",
  components: {
    Analysis,
    OutputCard,
  }
}
</script>

<style>
textarea {
  font-family: "Courier New", Courier, monospace;
}
</style>
