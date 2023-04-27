const express = require('express')
const router = express.Router()
const personController = require('../Controllers/person.Controller')

router.get("/", personController.getPersons)
router.post("/", personController.addPerson)

module.exports = router
