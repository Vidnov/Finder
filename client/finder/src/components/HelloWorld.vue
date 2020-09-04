<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="Search" id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2"></label>
        </div>
      </div>
      <div class="row">
        <a class="waves-effect waves-light btn-large" v-on:click="finder">
          <i class="material-icons left">youtube_searched_for</i>Поиск
        </a>
      </div>
    </form>
     <table>
        <thead>
          <tr>
              <th>Название</th>
              <th>Продажа</th>
              <th>Штрихкод</th>
               <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{Name}}</td>
            <td>{{PriceOut}}</td>
            <td>{{BarCode}}</td>
            <td>{{Rowguid}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      Result: "",
      Search: "",
      Name:"",
      PriceOut:"",
      Rowguid:"",
      BarCode:""
    };
  },
  methods: { 
    finder() {
      axios
        .post(
          "http://192.168.100.12:3000/search",
          {
            Search: this.Search,
          },
          {
            mode: "no-cors",
          }
        ) 
        .then((result) => {
          this.Result = result.data;
          this.Result.forEach(element => {
            this.Name=element.Name,
            this.PriceOut=element.PriceOut2,
            this.Rowguid=element.rowguid,
            this.BarCode=element.BarCode1
          });

        })
        .catch((err) => {
          this.Result = err;
        });
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea.materialize-textarea{
  text-align: center;
  font-size: 18pt;
}
table{
  margin-top: 100px;
}
.center {
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form a {
  color: white;
}
.row {
}
</style>
