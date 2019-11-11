const router    = require('express').Router();

const { 
    show, 
    getById,
    create,
    update,
    destroy
    }           = require('./../controllers/users-controller');

router.get('/', show );
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router