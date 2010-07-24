/*
---
description: Creates a HTML select menu that triggers events so to act as simple menu.
license: MIT-style
authors: [Kevin A. Lee]
provides: [mookSelectMenu]
requires: 
  core/1.2.4: '*'
...
*/
var mookSelectMenu = new Class({
    Implements: [Options, Events],
    options: {
        title: "Select an Action..."
        /*  onSelect: $empty */
    },
    initialize: function(container, menuItems, options) {
        this.setOptions(options);
        this.container = $(container);
        this.menuItems = menuItems;
        this.title = this.options.title;
        this.createMenu();
    },
    createMenu: function() {
        var el = new Element('select', {
            id: 'mookSelectMenu',
            class: 'mookSelectMenu',
            events: {
                'change': function(){
                    var item = el.getElement(':selected').get('value');
                    this.fireEvent('select', item);
                }.bind(this)
            }
        }).adopt(
            new Element('option', {
                id: 'none',
                value: 'none',
                disabled: 'disabled', // IE8+
                text: this.title
            }),
            this.createOptions()
        ).inject(this.container, 'top');
    },
    /* internal function to create option entries */
    createOptions: function() {
        var optArray = new Array();
        this.menuItems.each(function(item, index) {
            var el = new Element('option', {
                id: item['id'],
                value: item['id'],
                text: item['text']
            });
            optArray.push(el);
        });
        return optArray;
    }.protect()
    
});
