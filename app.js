const express = require('express');
const path = require('path');
//const methodOverride = require('method-override');
const { projects } = require('./data.json');


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static("public/"));


//app.use(express.urlencoded({ extended: true }));
//app.use(methodOverride('_method')); // lets you trick exress into treating POST requests as PUT or DELETE requests
app.use(express.static(path.join(__dirname, 'public')))

const about = require('./routes/about');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use('/project', projectRoutes);
app.get('/about', about);


app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });

/*
app.get('/', (req, res) => {
  res.render('home');
})


app.get('/:id', (req, res) => {
    const project = projects[req.params.id];
    res.render('project', { project });
})
*/



app.listen(3000, () => {
  console.log('serving on port 3000');
})
