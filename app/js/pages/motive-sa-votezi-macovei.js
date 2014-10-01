'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | 20 de motive să votezi Macovei',
  template: templates.pages.motiveSaVoteziMacovei,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
