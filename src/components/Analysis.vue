<template>
<div>
    <TestAnalysisCard @changeCard="changeCard" @testLog="testLog" />
</div>
</template>

<script>
import TestAnalysisCard from "./AnalysisCards/TestAnalysisCard";

export default {
    name: "AnalysisCards",
    components: {
        TestAnalysisCard,
    },
    data() {
      return {
        currentCardName: "TestAnalysis"
      }
    },
    methods: {
        changeCard(value) {
            this.currentCardName = String(value)
        },
        testLog(value) {
            console.log('here reach', value);
        }
    }
}
</script>

<style>

</style>
