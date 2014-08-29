'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Susținere financiară',
  template: templates.pages.donatii,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
