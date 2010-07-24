mookSelectMenu
==============

A simple plugin to create a select menu that sends events for navigation or action purposes.

![Screenshot](http://www.71khz.com/wp-content/uploads/2010/07/mookSelectMenu.gif)

How to use
----------

Create a container for the select menu as follows:

    <div id="action-menu"></div>

Then instantiate the class and pass your menu options in:

	new mookSelectMenu($('action-menu'),
    [
        {id: 'action-1', text: 'First action'},
        {id: 'action-2', text: 'Second action'},
        {id: 'action-3', text: 'Third action'}
    ],
    {
        onSelect: function(option) {
            switch (option) {
                case 'none':
                    // for display only
                    break;
                 case 'action-1':
                    alert("You selected action 1");
                    break;
                 case 'action-2':
                    alert("You selected action 2");
                    break;
                 case 'action-3':
                    alert("You selected action 3");
                    break;                
                default:
                    // ignore, how did we get here?
            }
        }
    }

In this example the "title" of the menu will default to 'Select an Action...'