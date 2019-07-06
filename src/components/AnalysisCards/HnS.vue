<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Head and Shoulder?</b>
    </div>
    <div class="card-body">
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        <!-- <i class="fas fa-arrow-alt-circle-up"></i> -->
        Bullish
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish
      </button>
      <button class="btn btn-warning mr-1" @click="next">
        <span class="oi oi-arrow-thick-right" aria-hidden="true"></span>
        None
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
  name: "TestAnalysisCard",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nBullish Head and Shoulder")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  -" + this.note)
      }
      this.$emit('changeCard', "TestAnalysisCard")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nBearish Head and Shoulder")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "TestAnalysisCard")
    },
    next() {
      this.$emit('changeCard', "TestAnalysisCard")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "Start")
    }
  },
};
</script>

<style>

</style>
