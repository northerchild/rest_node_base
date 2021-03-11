const {Router } = require('express');
const { userGet, usePut, usePost, useDelete, useaPatch } = require('../controllers/user');

const router = new Router();

router.get('/', userGet)

router.put('/:id', usePut )

router.post('/', usePost)

router.delete('/', useDelete )    

router.patch('/', useaPatch)


module.exports = router;