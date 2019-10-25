<template>
    <div id="test">
       <h3>Greeting component</h3>
       <p>Counter: {{ counter }}</p>
       <p>Username: {{ username }}</p>
   </div>
</template>

<script>
export default {
  name: '',
  data () {
    return { 
      counter: 0,
      username: ''
    }
  },
  methods: {
       loadGreeting() {
          this.axios.get('/greeting').then((response) => {
            this.$data.counter = response.data.id;
            this.$data.username = response.data.content;
          })
       }
   },
   mounted() {
       this.loadGreeting();
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
