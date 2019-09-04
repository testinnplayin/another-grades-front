<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view/>
  </div>
</template>

<script>

/**
 * @requires module:MainNav - @constant {Object} MainNav - main nav bar for the app
 */
import MainNav from "./components/MainNav";

const fakeData = [
  {
    title : "Underwater Basket Weaving 101",
    semesters_offered : ["SPRING", "SUMMER"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Arts and Farts"
  },
  {
    title : "Blowing Things Up 201",
    semesters_offered : ["SPRING"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Engineering"
  },
  {
    title : "Blowing More Things Up 202",
    semesters_offered : ["FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Engineering"
  },
  {
    title : "Obnubilation 0M",
    semesters_offered : ["SPRING", "SUMMER", "FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Social Sciences"
  },
  {
    title : "Flogging Vlogs 505",
    semesters_offered : ["SPRING", "FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Business"
  },
  {
    title : "Chicken or Egg Algorithms 423",
    semesters_offered : ["SPRING", "FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Computer Science"
  },
  {
    title : "Quantum Computing - Chicken and Egg Algorithms 424",
    semesters_offered : ["SPRING", "FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Computer Science"
  },
  {
    title : "Cheese Microbiology 312",
    semesters_offered : ["SPRING", "FALL"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Science"
  },
  {
    title : "Sock/Washing Machine Quantum Tunneling Effects 505",
    semesters_offered : ["SUMMER"],
    grading_system : "US - letter (A, B, C, D, F)",
    category : "Science"
  }
];

export default {
  name : "App",
  /**
   * @namespace data
   * @property {Object[]} classTemplates - array of class template objects
   */
  data () {
    return {
      classTemplates : fakeData
    };
  },
  components : { MainNav }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f00;
  height: auto;
  width: 100%;
}

</style>
