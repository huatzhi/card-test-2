<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Strat Shadow</b>
    </div>
    <div class="card-body">
      <p>What is the characteristics of Strat Shadow?</p>
      <p>Size: Expanding? Contracting? Maintaining? Tangling? </p>
      <p>Moving Angle: Sharp down? 45? Horizontal?</p>
      <p>Polarity: Positive(Bullish)? Negative(Bearish)?</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="exist">
        Noted
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
  name: "StratShadow",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    exist() {
      if (this.note) {
        this.$store.dispatch("analysis/append", "\nStrat Shadow - "+ this.note)
      }
      this.$emit('changeCard', "Fibs")
    },
    next() {
      this.$emit('changeCard', "Fibs")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "DSR")
    }
  },
};
</script>

<style>

</style>
