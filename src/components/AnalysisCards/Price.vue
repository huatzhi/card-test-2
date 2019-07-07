<template>
  <div class="card mb-3">
    <div class="card-header">
      <b>What is price obviously doing?</b>
    </div>
    <div class="card-body">
      <p>Look at chart overall, what is price obviously doing that is not mentioned before?</p>
      <p>Is it mentioned? Anything that is obvious missed? If not, leave it empty and click Noted.</p>
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
  name: "Price",
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
      this.$emit('changeCard', "End")
    },
    next() {
      this.$emit('changeCard', "End")
    },
    back() {
      // todo :: (low priority) remove previous analysis
      this.$emit('changeCard', "PriceRelative")
    }
  },
};
</script>

<style>

</style>
