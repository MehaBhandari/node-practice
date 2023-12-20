let express = require('express');

let app = express();
let empRouter = express.Router();

empRouter.route('/empList')
.get((req, res) => {
    res.json({name: 'Meha', age: 100, location: 'Dwarka Puri'})
})
// .post()
// .patch()
app.use('/app', empRouter)

app.listen(3000)
