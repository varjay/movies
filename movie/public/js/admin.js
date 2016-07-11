$(function(){
	$('.del').click(function(e){
		var target = $(e.target)
		var id = target.data('id')
		var tr = $('.item-id-' + id)

		$.ajax({
			type: 'DELETE',
			url: '/admin/movie/list?id=' + id
		})
		.done(function(results){
			if (results.success === 1) {
				if (tr.length > 0) {
					tr.remove()
				}
			}
		})
	})

	$('#douban').blur(function(){
		var douban = $(this)
		var id = douban.val()

		if (id) {
			$.ajax({
				url: 'https://api.douban.com/v2/movie/subject/' + id,
				cache: true,
				type: 'get',
				dataType: 'jsonp',
				crossDomain: true,
				jsonp: 'callback',
				success: function(d){
					$('#inputTitle').val(d.title)
					$('#inputDoctor').val(d.directors[0].name)
					$('#inputCountry').val(d.countries[0])
					$('#inputPoster').val(d.images.large)
					$('#inputYear').val(d.year)
					$('#inputSummary').val(d.summary)
				}
			})
		}
	})
})