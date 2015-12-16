var express = require('express');
var router = express.Router();
var cgpavDal   = require('../dal/job_view');

router.get('/', function(req, res) {
    cgpavDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('job_view.ejs', {rs: result});
        }
    );
});

module.exports = router;