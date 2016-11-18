(function () {

    CKEDITOR.plugins.add('bootstrap_tooltip', {
            lang: 'en,ru',
            requires: 'widget,dialog',
            icons: 'bootstraptooltip',
            init: function (editor) {
                var lang = editor.lang.bootstrap_tooltip;

                CKEDITOR.dialog.add('bootstrap_tooltip', this.path + 'dialogs/bootstrap_tooltip.js');

                // Add widget
                editor.ui.addButton('bootstrap_tooltip', {
                    label: "Add Tooltip",
                    command: 'bootstrap_tooltip',
                    icon: this.path + 'icons/tooltip.png'
                });

                editor.widgets.add('bootstrap_tooltip', {
                    dialog: 'bootstrap_tooltip',

                    init: function () {

		
                    },

                    template: '<span href="#" class="tipper" data-toggle="tooltip" data-placement="top" title>' + '<span class="text"></span>' + '</span>',

                    data: function () {
                        var $el = jQuery(this.element.$);

			console.log($el);
                        if (this.data.tooltip) {
				$el.attr('title', this.data.tooltip);
                        }
                        if (this.data.text) {
				jQuery('.text', $el).text(this.data.text);
                        }

                    },

		    allowedContent: 'p',
                    requiredContent: 'span.tipper',

                    upcast: function (element) {
                        return element.name == 'span.tipper';
                    }
                });
            }
        }
    );

})();






