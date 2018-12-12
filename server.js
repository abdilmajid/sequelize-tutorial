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


// //Create a post (post model has title & body)
// const post = models.post.build({
//   title: 'Hello',
//   body: 'this is a body post'
// })
// // Saving post
// post.save().then(newPost => {
//   console.log(newPost)
// })

// //Create comment(comment model has title, body, postId[comes from comment.associate function])
// const comment = models.comment.build({
//   title: 'Comment',
//   body: 'Body',
//   postId: 3 //id in the post table
// })

// // Saving comment
// comment.save().then(newComment => {
//   console.log(newComment)
// })

// console.log('Now fetching posts from comments table')
// const post = models.post.findOne({
//   include: [
//     {
//       model: models.comment,
//       as: 'comments' // make sure this matches alias
//     }
//   ]
// }).then(post => {
//   console.log(post.comments.length)
// })



// console.log('Now fetching the comment')
// models.comment.findOne({
//   include: [
//     {
//       model: models.post, //Join happens between comment & post
//       as: 'post'
//     }
//   ]
// }).then(comment => {
//   console.log(comment.post)
// })



// app.get('/', (req, res) => {
//   models.task.findOne().then(tasks => {
//     // console.log(tasks)
//     res.render('index', {tasks: tasks})
//   })
// })


models.post.bulkCreate([
  {
    title: 'Post Title',
    body: 'Post Body',
    username: 'john',
  },
  {
    title: 'Post Title 2',
    body: 'Post Body 2',
    username: 'mary',    
  }
]).then(() => {
  return models.post.findAll()
}).then(posts => {
  console.log(posts)
})


 











const port = process.env.PORT || 5050


app.listen(port, () => {
  console.log(`App Running on port ${port}`)
});
