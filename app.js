var express=require('express')
var path=require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongjjjj;iihohiohiohiohiooose')
var _=require('underscore') 
var Movie = require('./models/movie')
var port=process.env.PORT|| 3000;
var app=express();



mongoose.connect('mongoose://locahost/web')

app.locals.moment = require('moment');
app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port) 


console.log('started on port'+ port)


app.get('/',function(req,res){
	Movie.fetch(function(err, movies){
		if(err){
			console.log(err)
		}

			res.render('index', {
			title: '首页',
			movies: movies
		})
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
	var id = req.params.id
	Movie.findById(id,function(err,movie){
		res.render('detail',{
		title:'详情'+movie.title,
		movie: movie
	  })
	})
})




app.post('/admin/movie/new', function(req,res){
	var id=req.body.movie._id;
	var movieObj= req.body.movie;
	var _movie; 
	if (id !== 'undefined'){
		Movie.findById(id, function(err, movie){ 
		if(err){
			console.log(err)
		}

		_movie = _.extend(movie, movieObj)
		_movie.save(function(err, movie){
			if(err){
				console.log(err)
			}

			res.redirect('/movie' + movie._id)
			})
		  })
		}
	else {
		_movie = new Movie({
			doctor:movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		})
		_movie.save(function(err, movie){
			if(err){
				console.log(err)
			}

			res.redirect('/movie/' + movie._id)
			})
		  }
		})


	




app.get('/admin/list',function(req,res){
    Movie.fetch(function(err,movies){
        if(err){
            console.error(err);
        }
        res.render('list',{
            title:'列表页',
            movies:movies
        })
    })
})



app.get('/admin/update/:id',function(req,res){
    var id = req.params.id;
    if(id){
        Movie.findById(id,function(err,movie){
            res.render('admin',{
                title: "后台更新页",
                movie: movie
            })
        })
    }
})


app.delete('/admin/list',function(req,res){
    var id = req.query.id;
    if(id){
        Movie.remove({_id:id},function(err,movie){
            if(err){
                console.error(err);
            }else{
                res.json({success:1})
            }
        })
    }
})
