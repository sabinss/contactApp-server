const Router = require( 'express' ).Router;

const crmController = require('../controllers/crmController');

const router = Router();

router.get('/',(req,res)=>{
    res.json({
        API:'Welcome to CRM server'
    })
})

router.use('/contact',crmController);

module.exports=router;

