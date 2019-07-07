<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Is it potentially forming Gartley pattern?</b>
    </div>
    <div class="card-body">
      <p>A smaller reverse ABCD trend, on the D back to the main trend.</p>
      <p>Determine which Gartley potentially forming when potentially D is forming.</p>
      <p>D will be the interesting price, if it confluence with SR, that would be important.</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        Bullish Gartley
      </button>
      <button class="btn btn-danger mr-1" @click="bearish">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish Gartley
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
  name: "Gartley",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    bullish() {
      this.$store.dispatch("analysis/append", "\nBullish Gartley")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  -" + this.note)
      }
      this.$emit('changeCard', "Cypher")
    },
    bearish() {
      this.$store.dispatch("analysis/append", "\nBearish Gartley")
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n  - " + this.note)
      }
      this.$emit('changeCard', "Cypher")
    },
    next() {
      this.$emit('changeCard', "Cypher")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "HnS")
    }
  },
};
</script>

<style>

</style>
