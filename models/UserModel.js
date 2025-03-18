const knex = require('../database/connection');
const bycrypt = require('bcrypt');

class User{
    
    async create(email,password,name,role){
        try {
           
            const hash = await bycrypt.hash(password, 10);
            await knex('users').insert({
              name,
              email,
              password: hash,
              role
            });

            return { message: 'User created' };
          } catch (error) {
            return { error: error.message };
          }
    }
    async findAll(){
        try {
            const users = await knex.select("*").table('users');
            return users;
          }
          catch (error) {
            return { error: error.message };
          }
    }
    async findByEmail(email){
        const user = await knex('users').where({email: email});
        return user;
    }
    async findById(id){
        const user = await knex('users').where({id: id});
        return user;
    }


    ''
    async update(id,name,email,role){
        const user = await this.findById(id);
        if(user != undefined){
            const editUser = {};
            if(email != undefined){
                const regExEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}(?:\.[a-z]{2,})?$/i;
                if (!regExEmailValid.test(email)) {
                    return { error: `Invalid email format: "${email}". Please provide a valid email like " `}
                }
                editUser.email = email;
            }
            if(name != undefined){
                editUser.name = name;
            }
            if(role != undefined){
                editUser.role = role;
            }
            try {
                await knex('users').where({id: id}).update(editUser);
                return { message: 'User updated' };
              } catch (error) {
                return { error: error.message };
              }
            }                    
    }
    async  edit(req, res){
      let {id, name, role , email} = req.body;
      let  result = await User.update(id, name, email, role);
      if(result != undefined){
        if(result.status){
          res.status(result.status);
          res.json(result);
        }
        }else{
          res.status(406);
          res.json(result.error);
        }      
    }
    async delete(id){
        const user = await this.findById(id);
        if(user != undefined){
            try {
                await knex('users').where({id: id}).del();
                return { message: 'User deleted' };
              } catch (error) {
                return { error: error.message };
              }
            }
    }
  }

module.exports = new User();