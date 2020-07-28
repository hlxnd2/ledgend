<template>
  <v-container height="100%">
    <v-row height="100%">
      <v-col cols="12">
        <v-textarea
          @input="sendCSV"
          :value="this.csvData"
          auto-grow
          solo
          height="100%"
          placeholder="Insert CSV Text here"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import goTo from "vuetify/es5/services/goto";

export default {
  computed: {
    rowCount: function() {
      return this.csvText.split(",").length - 1;
    },
    ...mapState({
      csvData: state => {
        let data = state.imports.filter(x => x.name === "for1");
        if (data.length > 0) return data[0].raw;
        else return "";
      }
    })
  },
  methods: {
    sendCSV: function(e) {
      this.$store.commit("updateCSV", e);
      goTo(0, {});
      /*
Date opération;Date valeur;libellé;Débit;Crédit;
18/11/2019;18/11/2019;QWERTZ;-2;
11/11/2019;11/11/2019;KW;-368;
08/11/2019;08/11/2019;YYY;-255,1;
08/11/2019;08/11/2019;YYY;-255,1;
07/11/2019;07/11/2019;XXX;3350;
*/
    }
  },
  mounted() {},
  data: function() {
    return {
      csvText: `Date;Account Nr;Receiver;Amount
31/01/2021;94934800099;Mauris Institute;64.53
31/10/2019;67556660499;Lacinia At Associates;45.38
24/06/2020;64866553499;At Lacus Ltd;41.35
06/09/2019;18246340699;Rutrum Justo Ltd;71.07
25/05/2021;05851722899;Ante Dictum Cursus PC;0.88
10/12/2019;94766843799;Orci Adipiscing Company;38.20
03/11/2019;97263697499;Ligula Incorporated;73.29
26/03/2020;05312518299;Mauris Consulting;82.23
27/06/2020;97201851599;A Magna PC;21.04
04/08/2019;05254185999;Purus Sapien Gravida LLC;90.53
12/12/2020;24705611199;Hendrerit LLC;72.24
24/08/2019;87538529099;Sem PC;46.34
25/04/2020;37380453599;Bibendum Ullamcorper Duis LLP;5.59
09/04/2020;31628360399;Non Lobortis Quis LLC;83.21
12/05/2020;73895520699;Lacus Industries;54.46
06/08/2020;04228557399;Velit Corporation;20.93
04/05/2021;13723787899;In PC;31.69
11/05/2021;56337404699;Id Erat Etiam Ltd;48.51
18/06/2021;43414944599;Vel Lectus Cum Institute;11.73
01/04/2021;33275626299;Arcu Nunc Ltd;35.94
03/05/2021;75272505299;Egestas Corp.;76.55
06/09/2020;31496651799;Vestibulum Consulting;72.17
03/03/2021;48957196999;Suspendisse Ltd;12.89
02/12/2020;87851024199;Eu Corporation;21.61
29/05/2020;60271150999;Lorem Ut Associates;25.56
25/05/2021;77716844999;A Incorporated;95.13
19/01/2021;79558957099;Duis Dignissim Tempor Consulting;35.76
07/05/2021;61915273999;Nulla Eget Incorporated;89.33
23/10/2019;47671040799;Nec Urna Et Corp.;10.05
08/03/2020;00894271599;Dui Limited;90.17
07/01/2020;71740191799;Tellus Sem Mollis Limited;87.16
29/06/2020;77781806199;Nulla Integer Industries;51.96
21/12/2020;31561056499;Pede Praesent Eu Industries;91.49
26/06/2021;10390384799;Nec Imperdiet Nec Incorporated;58.01
02/11/2019;76701810999;Elit Fermentum LLC;93.64
14/08/2020;05660754099;Aliquam Eros Turpis Company;24.86
26/11/2020;48305574199;A Associates;21.89
16/04/2021;41300055999;Nascetur Ridiculus Mus LLC;76.59
18/10/2020;28706683099;Nullam Feugiat Incorporated;98.45
18/06/2020;66961707199;A Enim PC;63.07
07/10/2019;45704956699;Nulla Inc.;1.38
02/11/2019;79345852099;Vulputate Posuere PC;92.56
30/12/2019;02462435699;Duis Cursus Diam Company;11.02
20/03/2021;69535112699;Sed Turpis Nec Institute;33.14
30/01/2021;60951051199;Ut Quam LLP;77.71
04/08/2020;46739693899;Malesuada Fringilla LLP;81.73
29/11/2020;67879346099;Vestibulum Neque PC;81.63
05/04/2021;28476527099;Enim Limited;39.44
07/03/2021;58662328299;Ante Ltd;82.41
14/04/2021;29859813599;Cras Vehicula Aliquet Institute;80.40
30/07/2020;49733731299;Quisque Ltd;45.76
24/02/2020;22489782399;Tincidunt Orci Quis Corporation;49.23
18/08/2020;01563794799;Vel PC;98.57
04/07/2021;42999361599;Neque Consulting;13.34
21/01/2021;41945750199;Eu Eros Nam Industries;79.44
24/12/2020;68524570399;Nisi Incorporated;55.77
15/11/2019;58544720699;Diam Institute;51.94
14/06/2021;46561267799;Nostra PC;34.48
06/05/2021;92867568799;Non Inc.;56.35
05/11/2020;17425112899;Eu Sem PC;25.17
08/10/2020;18876647199;Id Mollis Consulting;11.00
11/06/2021;44923871999;Donec Inc.;64.85
16/02/2020;31814793499;Eu Institute;2.17
03/11/2019;41626369899;Dui Inc.;97.40
11/06/2021;09793436799;Ut Odio Foundation;37.02
29/07/2020;13428744299;Augue Eu Tempor Company;56.46
04/03/2020;44539635999;Molestie Pharetra Consulting;47.18
11/03/2020;05461043899;Odio Semper Industries;18.49
20/11/2020;58966251999;Arcu Institute;24.77
03/06/2021;22558567799;Molestie Tortor Nibh Institute;50.89
12/11/2019;19936154899;Eu Augue Porttitor PC;2.33
18/02/2021;67318677199;Nunc Company;19.96
17/06/2021;27412146199;Dignissim Consulting;87.04
08/09/2019;65368759699;Nec Corporation;55.83
08/10/2020;49741846399;Ac Fermentum Vel Incorporated;84.78
08/08/2019;76477090099;In Faucibus Orci LLC;5.74
02/04/2021;12625915799;Nec Malesuada Ut Institute;72.97
31/12/2020;67522472399;Viverra Maecenas Iaculis Company;90.04
19/03/2020;03477175199;Varius PC;53.02
12/11/2019;39941726899;Vitae Diam Proin Foundation;43.32
08/10/2019;92815868599;Ut Dolor Industries;54.60
25/10/2019;15974606199;At Incorporated;29.33
26/02/2021;71669483399;Tristique Pellentesque Tellus Industries;1.81
24/06/2020;24729601599;Interdum Industries;74.94
23/02/2021;81861253599;Lectus Convallis Company;65.16
22/04/2021;19740474399;Lacus Quisque Purus PC;83.76
03/10/2019;74494326699;Morbi LLC;25.69
05/01/2021;92221792499;Orci Foundation;88.08
09/09/2020;92609716299;Purus Associates;29.66
26/09/2020;93298407599;Sodales Mauris Blandit Corporation;93.10
10/12/2020;78774943599;Gravida Nunc Sed Corp.;57.88
20/07/2019;07677684099;Egestas Aliquam Foundation;55.18
15/04/2020;83384936199;Torquent Per Company;88.69
07/07/2021;56780821499;Orci Sem Eget Company;0.63
21/01/2021;01366389199;In Sodales Corp.;94.48
14/02/2021;26334342099;Cursus Consulting;69.07
12/02/2021;60467772799;Nulla Eu Neque LLC;13.83
01/08/2020;69514612099;Sit Limited;92.54
09/02/2020;08830384799;"Cubilia Curae; Donec Limited";19.44
02/05/2021;94353646799;Suspendisse Incorporated;23.12`
    };
  },
  style:
    ".code { font-family:'Roboto Mono','Courier New',Courier,'Nimbus Mono L',Monospace;}"
};
</script>