<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Swing</b>
    </div>
    <div class="card-body">
      <p>Where is the last confirm swing high/low?</p>
      <p>Are we on up swing or down swing?</p>
      <p>What are swing doing?</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        Up Swing
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Down Swing
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
  name: "Swing",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nUp Swing")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "TestAnalysisCard")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nDown Swing")
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
      this.$emit('changeCard', "ControlCandle")
    }
  },
};
</script>

<style>

</style>
