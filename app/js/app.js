//This file ties all parts together
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var MMM = require('./models/model');
var MMMView = require('./views/view');

var mmm = new MMM;
var mmmView = new MMMView({model: mmm});

//next line connects to html

$('#answer').append(mmmView.el);
