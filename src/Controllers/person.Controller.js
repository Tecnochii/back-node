const personService = require('../Services/personService')

const controller = {
    getPersons : async function(req, res){

            try {

                let persons = await personService.getPersons()

                res.json(persons)

            } catch (error) {
            res.json({error: error})
            }
        
    },
    addPerson: async function(req, res){

        try {
        
           let person = await personService.savePerson(req.body.name, req.body.age)
    
            res.json(person)

        } catch (error) {
            res.json({error: error})
        }

    }
}

module.exports = controller


