const express = require('express')
const router = express.Router()
const {createResearch,getResearch,deleteResearch,updateResearch} = require('../controllers/researchControllers')

router.post('/axonlink/create-research',createResearch)
router.get('/axonlink/get-research',getResearch)
router.delete('/axonlink/delete-research/:id',deleteResearch)
router.patch('/axonlink/update-research/:id',updateResearch)

module.exports = router;