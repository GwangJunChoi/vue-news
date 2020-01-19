<template>
  <div>
      <p v-for="job in this.$store.state.jobs">
        <a v-bind:href="job.url">
          {{ job.title }}
        </a>
        <small>{{ job.domain }}</small>
      </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>