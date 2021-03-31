const mongoose = require('mongoose');

let tries = 0;

function connect(app, port) {
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('Connected to database');
            // Start the application
            app.listen(port, () => {
                console.log(`Running at ${port}`);
            });
        })
        .catch(err => {
            if (tries >= 3) {
                console.log("There a problem with Database Server");
            } else {
                console.error("Unable to connect, retrying ...");
                tries = tries + 1;
                connect(app, port);
            }
        });
}

module.exports.connect = connect;