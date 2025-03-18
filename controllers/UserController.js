const UserModel = require('../models/UserModel');
class UserController {
  
    async create(req, res) {
        const { email, password, name, role } = req.body;
        const regExEmailValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}(?:\.[a-z]{2,})?$/i;
            if (!regExEmailValid.test(email)) {
                return res.status(400).json({ 
                    error: `Invalid email format: "${email}". Please provide a valid email like "example@domain.com".`
                });
            }
        const user = await UserModel.create(email, password, name, role);
        return res.json(user);
    }
    
    async findByEmail(req, res) {
        const { email } = req.params;
        const user = await UserModel.findByEmail(email);
        return res.json(user);
    }
    
    async findById(req, res) {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        return res.json(user);
    }
    
    async update(req, res) {
        const { id } = req.params;
        const { name, email, role } = req.body;
        const user = await UserModel.update(id, name, email, role);
        return res.json(user);
    }

    async findAll(_req, res) {
        const users = await UserModel.findAll();
        return res.json(users);
    }

    async edit(req, res){
        let {id, name, role , email} = req.body;
        let  result = await UserModeL.update(id, name, email, role);
        if(result != undefined){
          if(result.status){
            res.status(result.status);
            res.json(result);
          }
          else{
            res.status(400);
            res.json(result);
          }
        }
        else{
          res.status(500);
          res.json({error: 'Internal error'});
        }
      }


      async delete(req, res){
        const { id } = req.params;
        try {
            if(id == undefined){
                return res.status(400).json({ error: 'Id not found' });
            }
            const user = await UserModel.findById(id);
            if(user.length == 0){
                return res.status(404).json({ error:'User Cannot be found' });
            }
            await UserModel.delete(id);
            return res.json({ message: 'User deleted' });                                          
          }
          catch (error) {
            return res.status(500).json({ error: error.message });
          }

      }
      


}

module.exports = new UserController();