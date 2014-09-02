var Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    array: [1, 4, 3, 7, 8, 3, 5, 2, 5, 5],
    mean: 0,
    median: 0,
    mode: 0,
  },

  calcMean: function() {
    var arrayDataMean = this.get('array');
    var meanResult = 0;
    var numAmount = arrayDataMean.length;
    for(var i = 0; i < arrayDataMean.length; i++) {
      meanResult += Number(arrayDataMean[i])/numAmount;
      this.set({mean: meanResult});
    }
  },

  calcMedian: function(array) {
    var arrayDataMed = this.get('array');
    var sortedArrayDataMed = arrayDataMed.sort();
    var middle = Math.floor(sortedArrayDataMed.length/2);
    if(sortedArrayDataMed.length % 2) {
      var medResultOne = sortedArrayDataMed[middle];
      this.set({median: medResultOne});
    }
    else {
      var medResultTwo = (sortedArrayDataMed[middle - 1] + sortedArrayDataMed[middle])/2;
      this.set({median: medResultTwo});
    }
  },

   calcMode: function() {
    var self = this;
    var arrayDataMode = this.get('array');
    var timesOccur = [];
    for (var i = 0; i < arrayDataMode.length; i++) {
      timesOccur[arrayDataMode[i]] = (timesOccur[arrayDataMode[i]] ? timesOccur[arrayDataMode[i]] : 0) + 1;
    }

    var modeResult = 0;
    var num = 0;
    timesOccur.forEach(function(value, index) {
      if (value >= num) {
        modeResult = index;
        num = value;
        self.set({mode: modeResult});
      }
    });
  }
});
