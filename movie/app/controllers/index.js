var Movie = require('../models/movie')
var Category = require('../models/category')

//index page
exports.index = function(req, res){
	Category
	.find({})
	.populate({
		path: 'movies',
		select: 'title poster',
		option: {limit:6}
	})
	.exec(function(err, categories){
		if (err) {
			console.log(err)
		}

		res.render('index',{
			title: 'movie 首页',
			categories: categories
		})
	})
}

//search page
exports.search = function(req, res){
	var catId = req.query.cat
	var q =req.query.q
	var page = parseInt(req.query.p) || 0
	var count = 2
	var index = page * count
	var sum

	if (catId) {
		Category
		.find({_id: catId})
		.exec(function(err,count){
			sum = count[0].movies.length
		})

		Category
		.find({_id: catId})
		.populate({
			path: 'movies',
			select: 'title poster',
			options: {limit: count, skip: index}
		})
		.exec(function(err, categories){
			if (err) {
				console.log(err)
			}
			var category = categories[0] || {}
			res.render('results',{
				title: 'movie 搜索结果',
				keyword: category.name,
				currentPage: (page + 1),
				query: 'cat=' + catId,
				totalPage: Math.ceil(sum / count),
				movies: category.movies
			})
		})
	}
	else{
		Movie
			.find({title: new RegExp(q + '.*', 'i')})
			.exec(function(err, movies){
				if (err) {
					console.log(err)
				}
				console.log(movies)
				var results = movies.slice(index, index + count)

				res.render('results',{
					title: 'movie 搜索结果',
					keyword: q,
					currentPage: (page + 1),
					query: 'q=' + q,
					totalPage: Math.ceil(movies.length / count),
					movies: results
				})
			})
	}

	
}