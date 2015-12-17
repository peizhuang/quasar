'use strict';

Vue.component('quasar-icon', {
  template: '<i class="quasar-icon">{{name}}</i>',
  props: ['name'],
  compiled: function() {
    var el = $(this.$el);
    var manager = el.getAttributesManager();
    var icon = manager.getEmpty();

    if (icon.length > 0) {
      this.$data.name = icon.reverse().join(' ');
      manager.removeEmpty();
    }
  }
});