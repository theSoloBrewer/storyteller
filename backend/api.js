import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';

var router = express.Router();

router.get('/message',
    (req, res) => {
        res.json({
            message:
                'Hello GEEKS FOR GEEKS Folks from the Express server!'
        });
    });

// Get 
router.use(bodyParser.json());

router.use('/', routes)



export default router