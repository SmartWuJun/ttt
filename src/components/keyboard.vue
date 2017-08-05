<template>
  <div class="key" :data-value="keyvalue" @click='enterKey'>
     {{keyvalue}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:['keyvalue'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
     
    }
  },
  methods:{
    enterKey:function(e){
      // console.log(e.target.dataset.value)
      let key=e.target.dataset.value;
      this.$store.commit('calculator',key);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
