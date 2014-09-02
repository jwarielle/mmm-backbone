var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagname: 'div',

  initialize: function() {
    this.model.on('change', this.render, this); //When the calculation methods are called (which changes the model because the values of the defaults change), then the render function will happen (no parens needed).
    this.render();
  },

  render: function() {
    var template = require('../templates/template.hbs');
    var modelData = this.model.attributes; //Model attributes are the components of the model.
    this.$el.html(template(modelData)); //Renders the attributes (modelData) into the template (this happens only after the model has changed because render() happens after the model has changed).
    return this; //Just something you have to do with render?
  },

  events: {
    'click #button' : 'calculate' //Click event triggers the calculate function, which calls the calcMean, calcMedian, and calcMode methods in the model.
  },

  calculate: function() {
    this.model.calcMean();
    this.model.calcMedian();
    this.model.calcMode();
  }
});
