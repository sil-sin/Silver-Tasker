const router = require('express').Router()
const bcrypt = require('bcryptjs')
const UserModel = require("../models/User.model")
const TaskModel = require("../models/Task.model")
const InfoGoals = require('../models/InfoGoals.model')


let departments = ['FrontOffice', 'Administration', 'Sales', 'FoodsBeverage', 'Housekeeping', 'Engineering', 'HumanRessources']

//CREATE NEW TASK 
router.get('/new-task', (req, res) => {
  let user = req.session.loggedInUser;
  if (user.userType != "Manager") {
    res.redirect('/')
  }
  UserModel.find()
    .populate('asignedTo')
    .then((data) => {
      if (!user && user.userType == "Manager") {
        res.redirect('/')
      }
      res.render('task/new-task.hbs', { data, departments, user })
    })
    .catch(err => console.log(err))
})

router.post('/new-task', (req, res) => {
  const { title, description, department, status, asignedTo, asignedBy } = req.body
  let user = req.session.loggedInUser;

  TaskModel.create({ title, description, department, status: 'Todo', asignedTo, asignedBy: user })

    .then((tasks) => {
      res.redirect('/manager')
    }).catch((err) => {
      console.log(err)
    });
})

// READ TASKS 
// show all tasks and status
router.get('/tasks'/*!route name to be changed*/, (req, res) => {
  let user = req.session.loggedInUser;
  let isTasks = false
  TaskModel.find()
    .populate("asignedTo")
    .then((allTasks) => {
      if (user.userType == "Manager") {
        isTasks = true
        res.render('auth/manager-profile', { allTasks, isTasks })
      } else if (user.userType == "Staff") {
        isTasks = true
        res.render('auth/staff-profile', { allTasks, isTasks })
      }

    }).catch((err) => {
      console.log(err)
    });
})

// update task
router.get('/tasks/:id/edit', (req, res) => {
  const { id } = req.params
  let user = req.session.loggedInUser;
  let manager = false
  TaskModel.findById(id)
    .populate('asignedTo')
    .populate('asignedBy')
    .then((tasks) => {
      if (user.userType == "Manager") {
        manager = true
      }
      UserModel.find()
        .then((users) => {
          res.render('task/task-edit', { tasks, departments, users, manager })
        }).catch((err) => {
          console.log(err)
        });
    })

})
router.post('/tasks/:id/edit', (req, res,) => {
  const { id } = req.params
  const { title, description, department, status, asignedTo } = req.body
  let user = req.session.loggedInUser;
  TaskModel.findByIdAndUpdate(id, { title, description, department, status, asignedTo, asignedBy: user })
    .populate('asignedTo')
    .populate('asignedBy')
    .then((tasks) => {
      res.redirect('/manager')
    }).catch((err) => {
      console.log(err)
    });
})

// delete

// when delete button is clicked it deletes the task
router.get('/tasks/:id/delete', (req, res) => {
  const { id } = req.params
  TaskModel.findByIdAndDelete(id)
    .then((result) => {
      res.redirect('/manager')
    }).catch((err) => {
      console.log(err)
    });
})





module.exports = router;