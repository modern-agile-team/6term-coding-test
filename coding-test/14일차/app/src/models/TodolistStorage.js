"use strict";

const db = require('../config/db');

class TodolistStorage {

    static loadTodo() {
        return new Promise((resolve, reject)=> {
            const query = "SELECT id,description,is_check FROM todo";
            db.query(query, (err, data)=> {
                if(err) reject (`${err}`);
                resolve (data);
            })
        })
    }

    static reviseTodo() {
        return new Promise((resolve, reject)=> {
            const query = "UPDATE todo SET is_check=(?) WHERE id = (?)";
            db.query(query, [is_check], (err, data)=> {
                if(err) reject (`${err}`);
                resolve (data);
            })
        })
    }

    static plusTodo(description) {
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO todo (description) VALUES(?);";
            db.query(query, [description], (err)=>{
                if(err) reject (`${err}`);
                resolve ({success : true});
            });
        }); 
    }
};

module.exports = TodolistStorage;