<template>
<div>
    <Start v-if="currentCardName==='Start'" @changeCard="changeCard" />
    <TestAnalysisCard v-if="currentCardName==='TestAnalysisCard'" @changeCard="changeCard" />
</div>
</template>

<script>
import Start from "./AnalysisCards/Start";
import TestAnalysisCard from "./AnalysisCards/TestAnalysisCard";

export default {
    name: "AnalysisCards",
    components: {
        Start,
        TestAnalysisCard,
    },
    data() {
      return {
        currentCardName: "Start"
      }
    },
    methods: {
        changeCard(value) {
            this.currentCardName = String(value)
        },
    }
}
</script>

<style>

</style>
