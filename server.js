const express = require('express');
const app = express();
const models = require('./models');


// Creating inputs to put into rows
const task = models.task.build({
  title: 'mow the lawn',
  iscompleted: false
})

// Saving inputs to database
// task.save().then(newTask => {
//   console.log(newTask)
// })


// Plain findOne method with no filter
// models.task.findOne().then(task => {
//   console.log(task)
// })

// fetch a particular task (filtered findOne Method)
models.task.findOne({
  where: {
    title: 'mow the lawn'
  }
}).then(task => {
  console.log(task)
}) 


app.get('/', (req, res) => {
  res.send('Hello World!')
})





 











const port = process.env.PORT || 5050


app.listen(port, () => {
  console.log(`App Running on port ${port}`)
});
