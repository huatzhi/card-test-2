<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>What is price doing relative to SR? (Answer all below)</b>
    </div>
    <div class="card-body">
      <p>Where is price relative to Strat Shadow right now? What is it doing to it?</p>
      <p>Where is price relative to SR right now? What is it doing to it?</p>
      <p>How many times the relevant SR being tested recently?</p>
      <p>9ema: is buyer or seller in control? Or does it even matter?</p>
      <p>If it is PA, describe the shape/attribute of PA.</p>
      <p>If currently it isn't PA, what is last controlling PA?</p>
      <p>Hammer? Shooting Star? OB? EB? IB? DBHLC? DBLHC?</p>
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
  name: "PriceRelative",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    exist() {
      if (this.note) {
        this.$store.dispatch("analysis/append", "\n"+ this.note)
      }
      this.$emit('changeCard', "Price")
    },
    next() {
      this.$emit('changeCard', "Price")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "Swing")
    }
  },
};
</script>

<style>

</style>
