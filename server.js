const express = require('express');
const models = require('./models');
const mustacheExpress = require('mustache-express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const mustache = mustacheExpress();
mustache.cache = null; 
app.engine('mustache', mustache);
app.set('view engine', 'mustache');


app.use(express.static('public'));
// Extended true ->is a nested  
// Extended False ->not nested object
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());



// Creating inputs to put into rows
// const task = models.task.build({
//   title: 'feed the fish',
//   iscompleted: false
// })


// ==> Saving inputs to database
// task.save().then(newTask => {
//   console.log(newTask)
// })


// ==> Plain findOne method with no filter
// models.task.findOne().then(task => {
//   console.log(task)
// })


// ==> Find a particular task (filtered findOne Method)
// models.task.findOne({
//   where: {
//     title: 'mow the lawn'
//   }
// }).then(task => {
//   console.log(task)
// }) 


// ==> Find a taks by id
// models.task.findById(1).then(task => {
//   console.log(task)
// })


// ==> Find all tasks , this returns an array of tasks
// models.task.findAll().then(task => {
//   console.log(task)
// })


// ==> Delete task
// models.task.destroy({
//   where: {
//     title: 'feed the fish'
//   }
// }).then(task => {
//   console.log(task)
// })



app.get('/', (req, res) => {

  models.task.findAll().then(tasks => {

    console.log(tasks)

    res.render('index', {tasks: tasks})
  })
})





 











const port = process.env.PORT || 5050


app.listen(port, () => {
  console.log(`App Running on port ${port}`)
});
