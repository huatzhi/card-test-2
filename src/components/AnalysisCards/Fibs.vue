<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Fibonacci Confluences?</b>
    </div>
    <div class="card-body">
      <p>Draw them if they <b>relevant</b>.</p>
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
  name: "Fibs",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    exist() {
      if (this.note) {
        this.$store.dispatch("analysis/append", "\nItalian Ice Cream Man - "+ this.note)
      }
      this.$emit('changeCard', "DrawSR")
    },
    next() {
      this.$emit('changeCard', "DrawSR")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "StratShadow")
    }
  },
};
</script>

<style>

</style>
