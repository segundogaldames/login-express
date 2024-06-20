var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', mensaje: 'Inicie session para continuar' });
});

router.post('/login', function(req, res, next) {
  const datos = {
    email: req.body.email,
    clave: req.body.password
  }

  req.session.email = datos.email
  
  res.render('login', { title: 'Login', mensaje: 'Usted se ha logueado correctamente' });
});

router.get('/panel', function(req, res, next){
  var mensaje, ruta, button;
  if (req.session.email) {
    mensaje = req.session.email
    ruta = '/logout'
    button = 'Logout'
  }else{
    mensaje = 'No tiene acceso permitido'
    ruta = '/login'
    button = 'Login'
  }

  res.render('panel', {mensaje, ruta, button, title:'Panel de Control'})
})

router.get('/logout', function(req, res, next) {
  req.session.destroy()
  res.render('logout', { title: 'Logout' });
});

module.exports = router;
