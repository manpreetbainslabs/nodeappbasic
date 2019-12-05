module.exports = function(app){
  app.get('/', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/index',  {userdata: user,loggedin:loggedin});    
    //response.sendFile(path.join(__dirname + '/login.html'));
  });
  app.get('/media', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/media',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/buttons', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/buttons',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/components', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/components',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/animations', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/animations',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/icons', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/icons',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/icon-variations', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/icon-variations',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/color-scheme', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/color-scheme',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/about', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/about',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/pricingbox', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/pricingbox',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/testimonials', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/testimonials',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/404', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/404',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/portfolio-2cols', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/portfolio-2cols',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/portfolio-3cols', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/portfolio-3cols',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/portfolio-4cols', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/portfolio-4cols',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/portfolio-detail', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/portfolio-detail',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/blog-left-sidebar', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/blog-left-sidebar',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/blog-right-sidebar', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/blog-right-sidebar',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/post-left-sidebar', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/post-left-sidebar',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/post-right-sidebar', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/post-right-sidebar',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/contact', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    var user = [{name:username}];
    response.render('pages/contact',  {userdata: user,loggedin:loggedin});    
  });
  app.get('/login', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username;
    if(loggedin && username){
      response.redirect('/my-account');
    }else{
      response.render('pages/login', {msg:'',loggedin:false});    
    }    
  });
  app.get('/logout', function(request, response) {
    request.session.destroy();
    response.redirect('/login');  
  });
  app.get('/my-account', function(request, response) {
    var loggedin = request.session.loggedin;  
    var username = request.session.username
    if (loggedin && username) {
      var user = [{name:username}];
      response.render('pages/my-account', {userdata: user,loggedin:true});  
    } else {
        response.redirect('/login');
    }
  });
  app.post('/my-account', function(request, response) {
    connection = app.settings.connection;    
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
      connection.query(
        'SELECT * FROM accounts WHERE username = ? AND password = ?',
        [username, password],
        function(error, results, fields) {
          if (results.length > 0) {
            request.session.loggedin = true;
            request.session.username = username;          
            var user = [{name:username}];          
            response.render('pages/my-account', {        
                userdata: user,
                loggedin:true
            });          
          } else {
            response.render('pages/login', {msg:'Incorrect Username and/or Password!',loggedin:false});          
          }
          response.end();
        }
      );
    } else {
      response.send('Please enter Username and Password!');
      response.end();
    }
  });

  app.get('/register', function(request, response) {
    response.render('pages/register', {loggedin:false});  
  });
  app.post('/register', function(request, response) {
    connection = app.settings.connection;
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    connection.query(
      'INSERT INTO accounts (username,password,email) VALUES (?,?,?)',
      [username, password, email],
      function(error, results, fields) {
        if (results.insertId) {
          request.session.loggedin = true;
          request.session.username = username;
          response.redirect('/');
        } else {
          response.send('Incorrect Username and/or Password!');
        }
        response.end();
      }
    );
  });
  app.get('/home', function(request, response) {
    console.log(request.session.loggedin);
    if (request.session.loggedin) {
      response.send('Welcome back, ' + request.session.username + '!');
    } else if (request.session.register) {
      response.send('Register Successfully as: ' + request.session.username);
    } else {
      response.send('Please login to view this page!');
    }
    response.end();
  });
}