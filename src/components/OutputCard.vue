<template>
  <div class="card mb-3" id="output-field">
    <div class="card-header">
      Analysis Record
    </div>
    <div class="card-body">
      <textarea disabled class="bg-white form-control" v-model="analysis" rows="10" id="analysis-output"></textarea>
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
  },
  updated() {
    // todo :: if editable, this have to stop working when edit mode is on
    let elem = this.$el.querySelector("#analysis-output");
    elem.scrollTop = elem.scrollHeight;
  }
}
</script>

<style scoped>
textarea {
  background-color: "#FFFFFF"
}
</style>
