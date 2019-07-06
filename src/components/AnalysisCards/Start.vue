<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Which type of analysis?</b>
    </div>
    <div class="card-body">
      <button class="btn btn-success mr-1" @click="anaBBnB">
        BB and B
      </button>
      <button class="btn btn-danger mr-1"  @click="anaW">
        W
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  methods: {
    anaBBnB() {
      this.$store.commit("analysis/setAnalysisType", "BB&B")
      this.$store.commit("analysis/setCurrentAnalysisTF", "BB")
      this.$store.dispatch("analysis/append", "BB")
      this.goToNextPage()
    },
    anaW() {
      this.$store.commit("analysis/setAnalysisType", "W")
      this.$store.commit("analysis/setCurrentAnalysisTF", "W")
      this.$store.dispatch("analysis/append", "W")
      this.goToNextPage()
    },
    goToNextPage() {
      this.$emit('changeCard', "HnS")
    }
  }
}
</script>

