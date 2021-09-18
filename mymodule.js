const fs = require('fs');

module.exports = (dir, ext) => {
    fs.readdir(dir, (err, files) => {
        if(err) {
            console.log("ERROR!!! " + err)
        } else {
            files.forEach(f => {
                            const fileType = f.split(".")[1];
                            if(fileType == ext){
                                console.log(f);
                            }
                        });
                    }
        }    
    )
    }
