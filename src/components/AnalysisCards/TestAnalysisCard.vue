<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Test Analysis Criteria</b>
    </div>
    <div class="card-body">
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="bullish">
        <span class="oi oi-arrow-thick-top" aria-hidden="true"></span>
        <!-- <i class="fas fa-arrow-alt-circle-up"></i> -->
        Bullish
      </button>
      <button class="btn btn-danger mr-1">
        <span class="oi oi-arrow-thick-bottom" aria-hidden="true"></span>
        Bearish
      </button>
      <button class="btn btn-warning mr-1">
        <span class="oi oi-arrow-thick-right" aria-hidden="true"></span>
        None
      </button>
      <button class="btn btn-secondary float-right">
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
      // todo :: add bullish analysis
      // todo :: emit correct event
      this.$emit('testLog', "bullish")
    },
    bearish() {
      // todo :: add bearish analysis
      // todo :: emit correct event
      this.$emit('testLog', "bearish")
    },
    next() {
      // todo :: emit correct event
      this.$emit('testLog', "next")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      // todo :: emit correct event
      this.$emit('testLog', "back")
    }
  },
};
</script>

<style>

</style>
