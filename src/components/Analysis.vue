<template>
<div>
    <Start v-if="currentCardName==='Start'" @changeCard="changeCard" :key="key" />
    <SceTrend v-if="currentCardName==='SceTrend'" @changeCard="changeCard" :key="key" />
    <Triangle v-if="currentCardName==='Triangle'" @changeCard="changeCard" :key="key" />
    <Gartley v-if="currentCardName==='Gartley'" @changeCard="changeCard" :key="key" />
    <Cypher v-if="currentCardName==='Cypher'" @changeCard="changeCard" :key="key" />
    <HnS v-if="currentCardName==='HnS'" @changeCard="changeCard" :key="key" />
    <MultipleTip v-if="currentCardName==='MultipleTip'" @changeCard="changeCard" :key="key" />
    <Flag v-if="currentCardName==='Flag'" @changeCard="changeCard" :key="key" />
    <CupNHandle v-if="currentCardName==='CupNHandle'" @changeCard="changeCard" :key="key" />
    <DSR v-if="currentCardName==='DSR'" @changeCard="changeCard" :key="key" />
    <DrawSR v-if="currentCardName==='DrawSR'" @changeCard="changeCard" :key="key" />
    <StratShadow v-if="currentCardName==='StratShadow'" @changeCard="changeCard" :key="key" />
    <Fibs v-if="currentCardName==='Fibs'" @changeCard="changeCard" :key="key" />
    <ControlCandle v-if="currentCardName==='ControlCandle'" @changeCard="changeCard" :key="key" />
    <Swing v-if="currentCardName==='Swing'" @changeCard="changeCard" :key="key" />
    <PriceRelative v-if="currentCardName==='PriceRelative'" @changeCard="changeCard" :key="key" />
    <Price v-if="currentCardName==='Price'" @changeCard="changeCard" :key="key" />
    <TestAnalysisCard v-if="currentCardName==='TestAnalysisCard'" @changeCard="changeCard" :key="key" />
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
import DrawSR from "./AnalysisCards/DrawSR";
import StratShadow from "./AnalysisCards/StratShadow";
import Fibs from "./AnalysisCards/Fibs";
import ControlCandle from "./AnalysisCards/ControlCandle";
import Swing from "./AnalysisCards/Swing";
import PriceRelative from "./AnalysisCards/PriceRelative";
import Price from "./AnalysisCards/Price";
import TestAnalysisCard from "./AnalysisCards/TestAnalysisCard";

export default {
    name: "AnalysisCards",
    components: {
        Start,
        // etc
        TestAnalysisCard,
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
        StratShadow,
        Fibs,
        // SR
        DrawSR,
        // close up
        ControlCandle,
        Swing,
        PriceRelative,
        Price,
    },
    data() {
        return {
            currentCardName: "Start",
            key: 0,
        }
    },
    methods: {
        changeCard(value) {
            this.key++; // to prevent reuse of analysis card
            this.currentCardName = String(value)
        },
    }
}
</script>

<style>

</style>
