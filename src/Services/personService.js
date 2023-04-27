const Person = require('../models/Person')

let personService = {
    savePerson: async function (name, age) {

        let person = await new Person({
            name: name,
            age: age,
        }).save()
        return person
    },
    getPersons: async function (){
        let persons = await Person.find()
        return persons
    }

}


module.exports = personService