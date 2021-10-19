const { Router } = require('express')
const router = Router()
const {
    getHomepage,
    addData,
    dateDelete,
    editPage,
    editData,
    viewsCarPage
} = require('../controllers/homeController')

router.get('/', getHomepage)
router.post("/", addData)
router.post("/delete/:id", dateDelete)
router.get('/edit/:id', editPage)
router.post('/edit/:id', editData)
router.get('/views/:id', viewsCarPage)

module.exports = router