<template>
  <div id="app">
    <div id="header">
      <h1>Vermont School Districts Funding</h1>
    </div>

    <div id="main">
      <h1>{{ myMessage }}</h1>
      <text-box/>
      <div>
        <!-- <span v-for="district in districts">
          <slider name="{{district}}" v-bind:value="someValue" min="0" max="1000"/>
        </span> -->
        <p> temp </p>
      </div>
    </div>

    <div id="map">
      <p> This is the map div </p>
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'
import Text from './components/Text.vue'

export default {
  data() {
    return {
      myMessage: 'Bootstrap to sort by: Financial Help, ',
      someValue: 500
      // // let districts = ["Addison School District",
      //                 "Albany School District",
      //                 "Alburg School District",
      //                 "Arlington School District",
      //                 "Athens Grafton Contract School District",
      //                 "Bakersfield School District",
      //                 "Barnard School District",
      //                 "Barnet School District",
      //                 "Barre City School District",
      //                 "Barre Town School District",
      //                 "Barstow Joint Contract School District",
      //                 "Barton Incorporated School District",
      //                 "Bellows Falls Union High School District #27",
      //                 "Bellows Free Academy Union High School District #48",
      //                 "Bennington Incorporated School District",
      //                 "Benson School District",
      //                 "Berkshire School District",
      //                 "Berlin School District",
      //                 "Bethel School District",
      //                 "Black River Usd #39",
      //                 "Blue Mountain Usd #21",
      //                 "Bolton School District",
      //                 "Bradford Incorporated School District",
      //                 "Braintree School District",
      //                 "Brandon School District",
      //                 "Brattleboro School District",
      //                 "Brattleboro Union High School District #6",
      //                 "Bridgewater School District",
      //                 "Bridport School District",
      //                 "Brighton School District",
      //                 "Bristol School District",
      //                 "Brookfield School District",
      //                 "Brookline Newfane Joint School Contract",
      //                 "Brookline School District",
      //                 "Brownington School District",
      //                 "Burke School District",
      //                 "Burlington School District",
      //                 "Burr & Burton Seminary School District",
      //                 "Cabot School District",
      //                 "Calais School District",
      //                 "Cambridge School District",
      //                 "Canaan School District",
      //                 "Castleton-Hubbardton Usd #42",
      //                 "Cavendish School District",
      //                 "Champlain Valley Union High School District #15",
      //                 "Charleston School District",
      //                 "Charlotte School District",
      //                 "Chelsea School District",
      //                 "Chester-Andover Usd #29",
      //                 "Clarendon School District",
      //                 "Colchester School District",
      //                 "Concord School District",
      //                 "Corwall School District",
      //                 "Coventry School District",
      //                 "Craftsbury School District",
      //                 "Currier Memorial Usd #23",
      //                 "Danville School District",
      //                 "Derby School District",
      //                 "Dorset School District",
      //                 "Dover School District",
      //                 "Dummerston School District",
      //                 "Duxbury Waterbury Union #45 School District",
      //                 "East Haven School District",
      //                 "East Montpelier School District",
      //                 "Eden School District",
      //                 "Elmore School District",
      //                 "Enosburgh Town School District",
      //                 "Essex Community Education Center",
      //                 "Essex Junction Incorporated School District",
      //                 "Essex Town School District",
      //                 "Fair Haven School District",
      //                 "Fair Haven Union High School District #16",
      //                 "Fairfax School District",
      //                 "Fairfield School District",
      //                 "Fayston School District",
      //                 "Ferrisburg School District",
      //                 "Fletcher School District",
      //                 "Flood Brook Usd #20",
      //                 "Franklin School District",
      //                 "Georgia School District",
      //                 "Glover School District",
      //                 "Grand Isle School District",
      //                 "Green Mountain Union High School District #35",
      //                 "Guildhall School District",
      //                 "Guilford School District",
      //                 "Halifax School District",
      //                 "Hardwick School District"];
    }
  },
  components: {
    'slider': Slider,
    'text-box': Text,
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  #header{
    background-color: #559955;
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 10%;
  }
  #main{
    background-color: #808099;
    position: fixed;
    top: 10%;
    left: 0;
    height: 90%;
    width: 60%;
    overflow: scroll;
  }
  #map {
    position: absolute;
    background-color: #995555;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
  }
</style>
