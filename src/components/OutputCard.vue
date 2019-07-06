<template>
  <div class="card mb-3" id="output-field">
    <div class="card-header">
      Analysis Record
    </div>
    <div class="card-body">
      <textarea disabled class="bg-white form-control" v-model="analysis" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputCard",
  computed: {
    analysis: {
      get () {
        return this.$store.state.analysis.text;
      },
      set (value) {
        this.$store.commit("analysis/updateText", value);
      }
    }
  }
}
</script>

<style scoped>
textarea {
  background-color: "#FFFFFF"
}
</style>
