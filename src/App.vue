<template>
  <v-app>
    <v-content>
      <div id="app">
          <navbar />
          <router-view />
        </div>   
    </v-content>
  </v-app>
</template>

<script>
import navbar from './components/navbar';

export default {
  name: 'App',
  components: {
    navbar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: 'Spectral';
  background: #ffffff;
}
</style>
