<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>Triangle? Ranging Channel?</b>
    </div>
    <div class="card-body">
      <p>Both expanding and narrowing triangle/wedges, it could also be ranging channel. Aware of potential ABCDE (continuously).</p>
      <p>Draw TL if they exists.</p>
      <textarea name="notes" rows="2" placeholder="Notes..." class="form-control mb-2" v-model="note"></textarea>
      <button class="btn btn-success mr-1" @click="exist">
        Exist
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
  name: "Triangle",
  data() {
    return {
      note: ""
    }
  },
  methods: {
    exist() {
      if (this.note) {
        this.$store.dispatch("analysis/append", "\nTriangle - "+ this.note)
      }
      this.$emit('changeCard', "HnS")
    },
    next() {
      this.$emit('changeCard', "HnS")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "SceTrend")
    }
  },
};
</script>

<style>

</style>
