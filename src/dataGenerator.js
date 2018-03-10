const SECURITIES = [
    "AAPL.N",
    "AMZN.N",
    "QQQ.N",
    "NVDA.N",
    "TSLA.N",
    "FB.N",
    "MSFT.N",
    "TLT.N",
    "XIV.N",
    "YY.N",
    "CSCO.N",
    "GOOG.N",
    "PCLN.N",
    "NFLX.N",
    "ORCL.N",
    "NOK.N"
];

const CLIENTS = [
  "Loni",
  "Pat",
  "Ione",
  "Joni",
  "Joleen",
  "Taunya",
  "Haydee",
  "Polly",
  "Nicolas",
  "Venice",
  "Arminda",
  "Loraine",
  "Annabel",
  "Alesia",
  "Audria",
  "Latoria",
  "Kattie",
  "Vernie",
  "Andres",
  "Sheena",
  "Lenna",
  "Jeffie",
  "Viva",
  "Randy",
  "Rodger",
  "Jude",
  "Deirdre",
  "Marina",
  "Maxwell",
  "Mariana"
] 

class DataGenerator {

    constructor(rowCount=500) {
      this.rowCount = rowCount;
      this.id = 0;
    }
  
    generateRows() {
        var rows = [];
        for (var x = 0; x < 5; x ++) {
            rows.push({
                name: SECURITIES[Math.floor(Math.random() * SECURITIES.length)],
                client: CLIENTS[Math.floor(Math.random() * CLIENTS.length)], 
                lastUpdate: new Date(),
                chg: Math.random() * 20 - 10,
                bid: Math.random() * 10 + 90,
                ask: Math.random() * 10 + 100,
                vol: Math.random() * 10 + 100,                    
                rowId: this.id
            });
            this.id = (this.id + 1) % this.rowCount;
        }
        return rows;
    }
  }

export default DataGenerator