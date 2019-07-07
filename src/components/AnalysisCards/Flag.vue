<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Flag pattern?</b>
    </div>
    <div class="card-body">
      <p>It exist only after a sharp price shooting. <a href="https://www.profitf.com/articles/forex-education/flags-pennants-chart-patterns/">Learn more...</a></p>
      <p>This pattern exist only when you can see it clearly, usually confluence with other stuffs. Ignore when vague</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        Bullish Flag
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish Flag
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
  name: "Flag",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nBullish Flag")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  -" + this.note)
      }
      this.$emit('changeCard', "CupNHandle")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nBearish Flag")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "CupNHandle")
    },
    next() {
      this.$emit('changeCard', "CupNHandle")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "Cypher")
    }
  },
};
</script>

<style>

</style>
