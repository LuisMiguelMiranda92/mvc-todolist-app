const Todo = require("../models/Todo")

module.exports = {
    getTodos: async (req, res) => {
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render("todos.ejs", {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log("Todo has benn added!")
            res.redirect("/todos")
        } catch (error) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile}, {
                completed: true
            })
            console.log("Marked Complete")
            res.json("Marked Complete")
        } catch (error) {
            console.log(err)
        }
    },
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile}, {
                completed: false
            })
            console.log("Marked Incomplete")
            res.json("Marked Incomplete")
        } catch (error) {
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}