<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>End</b>
    </div>
    <div class="card-body">
      <p>Analysis Completed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "End",
  beforeCreate() {
    let analysisType = this.$store.state.analysis.analysisType;
    let currentAnalysisTF = this.$store.state.analysis.currentAnalysisTF;
    if (analysisType === "BB&B" && currentAnalysisTF === "BB") {
      this.$store.dispatch("analysis/append", "\n\nB");
      this.$store.commit("analysis/setCurrentAnalysisTF", "B")
      this.$emit('changeCard', "SceTrend")
    }
  }
}
</script>

<style>

</style>
