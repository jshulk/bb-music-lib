
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Backbone Music library' });
};

exports.songList = function(req, res){
	var response = [
		{
			id:1,
			album_cover:"https://i2.sndcdn.com/artworks-000056497964-makdmi-t200x200.jpg?0769104",
			song_title:"A dollar short",
			album_name:"Football ramble",
			album_id:23,
			genre:"sports"
		},
		{
			id:2,
			album_cover:"https://i4.sndcdn.com/artworks-000056568647-ovn7yw-t200x200.jpg?0769104",
			song_title:"Can you guess the Roald Dahl audiobook and who's reading it?",
			album_name:"Penguin Books UK",
			album_id:24,
			genre:"books"
		},
		{
			id:3,
			album_cover:"https://i2.sndcdn.com/artworks-000056410148-93i7t5-t200x200.jpg?0769104",
			song_title:"Darkening Clouds",
			album_name:"Simon Reich",
			album_id:25,
			genre:"rock"
		}
	]
	res.json(response);
};