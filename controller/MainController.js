const pal ={
    index:(req, res)=>{
        res.render('index');
    },
    movie:(req, res)=>{
        res.render('movie');
    },
    celebritylist:(req, res)=>{
        res.render('celebritylist');
    },
    topmovie:(req, res)=>{
        res.render('topmovies');
    },
    news:(req, res)=>{
        res.render('news');
    },
    moviedetails:(req, res)=>{
        res.render('movie-details');
    },
    blogdetails:(req, res)=>{
        res.render('blog-details');
    }
    
};
module.exports = pal;