<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Control Candle</b>
    </div>
    <div class="card-body">
      <p>Is the price in control candle now? If yes, how much candle is in controlled.</p>
      <p>How about parent's control candle. Is there Any? If yes, where price is at comparing to that. Any interaction?</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="exist">
        Relevant
      </button>
      <button class="btn btn-warning mr-1" @click="next">
        <span class="oi oi-arrow-thick-right" aria-hidden="true"></span>
        Not relevant
      </button>
      <button class="btn btn-secondary float-right" @click="back">
        <span class="oi oi-arrow-thick-left" aria-hidden="true"></span>
        Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlCandle",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    exist() {
      if (this.note) {
        this.$store.dispatch("analysis/append", "\nControl Candle - "+ this.note)
      }
      this.$emit('changeCard', "TestAnalysisCard")
    },
    next() {
      this.$emit('changeCard', "TestAnalysisCard")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "DrawSR")
    }
  },
};
</script>

<style>

</style>
