<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Is it potentially forming Cypher pattern?</b>
    </div>
    <div class="card-body">
      <p>A small swing follow by next swing making a longer retracement, then continue down the trend.</p>
      <p>The <i>longer retracement</i> should not take out the swing retrace tip before the small swing.</p>
      <p>Interesting price area will be middle of two swing retracement tip, if it confluence with SR, that would be important.</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        Bullish Cypher
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish Cypher
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
  name: "Cypher",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nBullish Cypher")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "Flag")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nBearish Cypher")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "Flag")
    },
    next() {
      this.$emit('changeCard', "Flag")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "Gartley")
    }
  },
};
</script>

<style>

</style>
