'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var _ = require('lodash');
var $ = require('../shims/jquery');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]': 'handleLinkClick'
  },
  render: function () {
    this.$el.html(this.template());

    // Init and configure the page switcher.
    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = _.result(newView.pageTitle) || 'Monica Macovei';
        document.scrollTop = 0;

        app.currentPage = newView;
      }
    });

    return this;
  },
  setPage: function (view) {
    this.pageSwitcher.set(view);
  },
  handleLinkClick: function (e) {
    var t = $(e.target);
    var aEl = t.is('a') ? t[0] : t.closest('a')[0];
    var local = window.location.host === aEl.host;
    var path = aEl.pathname.slice(1);

    // If the window location host and target host are the
    // same it's local, else, leave it alone.
    if (local) {
      e.preventDefault();
      app.navigate(path);
    }
  }
});
