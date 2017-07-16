var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
		doctor: string,
		country: string,
		title: string,
		year: number,
		poster: string,
		language: string,
		flash: string,
		summary: string,
		meta: {
			createAt:{
				type: Date,
				default: Date.now()
			}
			updateAt:{
				type: Date,
				default: Date.new()
			}
		}
})


MovieSchema.pre('save',function(next){
	if (this,isNew) {
		this.meta.createAt=this.meta.updateAt=Date.now()
	}
	else {
		this.meta.updateAt=Date.now()
	}

	next()
})

MovieSchema.statics= {
	fetch: function(cb){
		return this
		  .find({})
		  .sort('meta.updateAt')
		  .exec(cb)
	},
	findById: function(id, cb){
		return this
		  .findOne({_id: id})
		  .exec(cd)
	}
}

module.exports = MovieSchema



