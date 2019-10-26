<template>
    <v-date-picker title-position="left"
    :min-date='date' v-model="date" is-inline @click="getValue ()"
  />
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      value: 'oo'
    };
  },
  methods: {
      
        getValue () {
            this.console.log(this.date)
        }
  
    }
};
</script>

<style>

</style>