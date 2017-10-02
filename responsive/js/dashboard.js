// dashboard example specific javascript
$(function () {
    function toggleSidebar() {
        $('#sidebar')
			.first()
			.toggleClass('ex-column-sidebar--hidden');
    }
    
    $('#sidebar-button, #sidebar-close').click(toggleSidebar);
});


// This makes the header of the widget-collapse have an animated arrow and
// correct styling. Collapsing/Expanding the content is done by talking
// to the panel-title directly instead of its .widget-collapse parent.
$('.widget-collapse')
	.on('show.bs.collapse', function() {		
		$(this)
			.find('.panel-heading')
			.addClass('animate')
			.removeClass('collapsed');
	})
	.on('hide.bs.collapse', function() {
		$(this)
			.find('.panel-heading')
			.addClass('collapsed animate');
	});
