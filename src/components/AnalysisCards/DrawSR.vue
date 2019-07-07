<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Is time to draw your SR</b>
    </div>
    <div class="card-body">
      <p>Based on what you need.</p>
      <p>Also aware of <i>control candle</i> high and low, and relevant <i>Barometers/Depth Gauge</i></p>
      <button class="btn btn-success mr-1" @click="next">
        Next
      </button>
      <button class="btn btn-secondary float-right" @click="back">
        <span class="oi oi-arrow-thick-left" aria-hidden="true"></span>
        Back
      </button>
    </div>
  </div>
</template>

<script>
// todo :: if I keep missing control candle or barometer, give them each page of their own
export default {
  name: "DrawSR",
  methods: {
    next() {
      this.$emit('changeCard', "ControlCandle")
    },
    back() {
      this.$emit('changeCard', "Fibs")
    }
  }
}
</script>

