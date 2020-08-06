import parse from "csv-parser";
import stream from "stream";
//import iconv from 'iconv-lite';
//const data = require('./for.csv.js');

function getTestData() {
  return `Date op�ration;Date valeur;libell�;D�bit;Cr�dit;
    18/11/2019;18/11/2019;QWERTZ;-2;
    11/11/2019;11/11/2019;KW;-368;
    08/11/2019;08/11/2019;YYY;-255,1;
    08/11/2019;08/11/2019;YYY;-255,1;
    07/11/2019;07/11/2019;XXX;3350;`;
}

function guessSeparator(csvString) {
  let countTabs = 0;
  let countComa = 0;
  let countSemiColon = 0;

  for (let i = 0; i < csvString.length; i++) {
    switch (csvString[i]) {
      case "\t":
        countTabs++;
        break;
      case ",":
        countComa++;
        break;
      case ";":
        countSemiColon++;
        break;
      default:
        break;
    }
  }

  if (countTabs > countComa && countTabs > countSemiColon) return "\t";
  else if (countComa > countSemiColon) return ",";
  else return ";";
}

function parseCsvString(csvString, callback, profile) {
  let Readable = stream.Readable;

  let s = new Readable();
  s.push(csvString); // the string you want
  s.push(null);

  let results = [];

  s
    //.pipe(iconv.decodeStream('iso-8859-15'))
    //.pipe(iconv.encodeStream('utf8'))
    //.pipe(RemoveLines(skipLines))
    .pipe(parse(profile.csvConfig))
    .on("data", data => results.push(data))
    .on("end", () => {
      //console.log(results);
      callback(results);
    });
}

export default {
  parseCsvString: parseCsvString,
  getTestData: getTestData,
  guessSeparator: guessSeparator
};
