app.get('/',function(req,res){
	res.render('index', {
		title: '首页',
		movie: [{
			title: '机械战警',
			_id: 1,
			poster: 'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 2,
			poster: 'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 3,
			poster: 'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 4,
			poster: 'http://r3.yking.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})


app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台',
		movie: {
			doctor: '',
			country: '',
			title: '',
			year: 2017,
			poster: '',
			language: '',
			flash: '',
			summary: ''
		}
	})
})



app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'详情',
		movie: {
			doctor: '',
			country: '',
			title: '',
			year: 2017,
			poster: 'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
			language: '',
			flash: 'http://player.youku.com/play.php/sid/XNJA1Njc0NTUy/v.swf',
			summary: ''
		}
	})
})



app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'列表',
		movie: [{
			title: '',
			_id: 1,
			doctor: '导演',
			country: '美国',
			year: 2017,
			language: '英语',
			flash: 'http://player.youku.com/play.php/sid/XNJA1Njc0NTUy/v.swf'
		}]
	})
})
