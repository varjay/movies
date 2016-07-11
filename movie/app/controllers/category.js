var Category = require('../models/category')

//detail page
exports.detail = function(req, res){
	var id = req.params.id

	Category.findById(id, function(err, category){
		Comment
			.find({category: id})
			.populate('from', 'name')
			.populate('reply.from reply.to', 'name')
			.exec(function(err, comments){
				console.log(comments)
				res.render('detail',{
					title: category.title,
					category: category,
					comments: comments
				})
			})
	})
}

//admin page
exports.new = function(req, res){
	res.render('category_admin',{
		title: 'category 后台分类录入页',
		category:{}
	})
}

//admin update category
exports.update = function(req, res){
	var id = req.params.id
	if (id) {
		Category.findById(id, function(err, category){
			res.render('admin',{
				title: 'category 后台更新页',
				category: category
			})
		})
	}
}

//admin post category
exports.save = function(req, res){
	var _category	= req.body.category
	var category 	= new Category(_category)

	category.save(function(err, category){
		if (err) {
			console.log(err)
		}

		res.redirect('/admin/category/list/')
	})
}

//list page
exports.list = function(req, res){
	Category.fetch(function(err, categories){
		if (err) {
			console.log(err)
		}
		res.render('categorylist',{
			title: 'category 分类列表页',
			categories:categories
		})
	})
}

// list delete category
exports.del = function(req, res){
	var id = req.query.id
	if (id) {
		Category.remove({_id:id},function(err, category){
			if (err) {
				console.log(err)
			}
			else{
				res.json({success: 1})
			}
		})
	}
}