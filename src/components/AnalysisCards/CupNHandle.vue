<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Cup and Handle pattern?</b>
    </div>
    <div class="card-body">
      <p>Cup and handle only being recognize after the rounding thing completed and rejected. <a href="https://tradingstrategyguides.com/cup-and-handle-trading-strategy/">Learn more...</a></p>
      <p>This pattern exist only when you can see it clearly, usually confluence with other stuffs. Ignore if vague.</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        Bullish Cup and Handle
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish Cup and Handle
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
  name: "CupNHandle",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nBullish Cup and Handle")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "DSR")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nBearish Cup and Handle")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "DSR")
    },
    next() {
      this.$emit('changeCard', "DSR")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "Flag")
    }
  },
};
</script>

<style>

</style>
