<template>
<div>
    <Start v-if="currentCardName==='Start'" @changeCard="changeCard" />
    <SceTrend v-if="currentCardName==='SceTrend'" @changeCard="changeCard" />
    <Triangle v-if="currentCardName==='Triangle'" @changeCard="changeCard" />
    <HnS v-if="currentCardName==='HnS'" @changeCard="changeCard" />
    <TestAnalysisCard v-if="currentCardName==='TestAnalysisCard'" @changeCard="changeCard" />
</div>
</template>

<script>
import Start from "./AnalysisCards/Start";
import SceTrend from "./AnalysisCards/3STrend";
import Triangle from "./AnalysisCards/Triangle";
import HnS from "./AnalysisCards/HnS";
import TestAnalysisCard from "./AnalysisCards/TestAnalysisCard";

export default {
    name: "AnalysisCards",
    components: {
        Start,
        SceTrend,
        Triangle,
        HnS,
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
