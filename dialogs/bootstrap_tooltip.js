CKEDITOR.dialog.add('bootstrap_tooltip', function (editor) {
    var lang = editor.lang.bootstrap_tooltip;

    return {
        title: 'Bootstrap Tooltip',
        minWidth: 500,
        minHeight: 150,
        resizable: false,
        contents: [
            {
                id: 'tooltip',
                label: 'Tooltip Content',
                elements: [
                    {
                        id: 'tooltip',
                        type: 'text',
			width: '200px',
			require: true,
                        label: 'Text',
                        setup: function (widget) {
                            this.setValue(widget.data.tooltip || '');
                        },
                        commit: function (widget) {
                            widget.setData('tooltip', this.getValue());
                        }
                    },
                    {
                        id: 'text',
                        type: 'text',
			width: '200px',
			require: true,
                        label: 'Text',
                        setup: function (widget) {
                            this.setValue(widget.data.text || '');
                        },
                        commit: function (widget) {
                            widget.setData('text', this.getValue());
                        }
                    }
                ]
            }
        ]
    };
});
