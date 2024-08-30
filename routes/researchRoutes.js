const express = require('express')
const router = express.Router()
const {createResearch,getResearch,deleteResearch} = require('../controllers/researchControllers')

router.post('/axonlink/create-research',createResearch)
router.get('/axonlink/get-research',getResearch)
router.delete('/axonlink/delete-research/:id',deleteResearch)

module.exports = router;