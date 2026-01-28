<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
  <template>
  <div id="app">
    <h1>counter: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  computed: {
    // reactively
    count() {
      return this.$store.state.count;
      // vuex state
    },
  },

  methods: {
    increment() {
      this.$store.commit('increment');
      // commit mutation
    },
    decrement() {
      this.$store.commit('decrement');
      // commit mutation
    },
  },
};
</script>