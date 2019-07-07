<template>
<div>
    <Start v-if="currentCardName==='Start'" @changeCard="changeCard" />
    <SceTrend v-if="currentCardName==='SceTrend'" @changeCard="changeCard" />
    <Triangle v-if="currentCardName==='Triangle'" @changeCard="changeCard" />
    <Gartley v-if="currentCardName==='Gartley'" @changeCard="changeCard" />
    <Cypher v-if="currentCardName==='Cypher'" @changeCard="changeCard" />
    <HnS v-if="currentCardName==='HnS'" @changeCard="changeCard" />
    <MultipleTip v-if="currentCardName==='MultipleTip'" @changeCard="changeCard" />
    <Flag v-if="currentCardName==='Flag'" @changeCard="changeCard" />
    <CupNHandle v-if="currentCardName==='CupNHandle'" @changeCard="changeCard" />
    <DSR v-if="currentCardName==='DSR'" @changeCard="changeCard" />
    <TestAnalysisCard v-if="currentCardName==='TestAnalysisCard'" @changeCard="changeCard" />
</div>
</template>

<script>
import Start from "./AnalysisCards/Start";
import SceTrend from "./AnalysisCards/3STrend";
import Triangle from "./AnalysisCards/Triangle";
import MultipleTip from "./AnalysisCards/MultipleTip";
import HnS from "./AnalysisCards/HnS";
import Gartley from "./AnalysisCards/Gartley";
import Cypher from "./AnalysisCards/Cypher";
import Flag from "./AnalysisCards/Flag";
import CupNHandle from "./AnalysisCards/CupNHandle";
import DSR from "./AnalysisCards/DSR";
import TestAnalysisCard from "./AnalysisCards/TestAnalysisCard";

export default {
    name: "AnalysisCards",
    components: {
        Start,
        // big picture
        SceTrend,
        Triangle,
        HnS,
        Gartley,
        Cypher,
        MultipleTip,
        Flag,
        CupNHandle,
        DSR,
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
