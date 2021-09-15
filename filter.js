const fs = require("fs");


const type = process.argv[3];


fs.readdir(process.argv[2], function (err, files){
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(f => {

        })
        for(i = 0; i < files.length; i++) {
            const fileName = files[i].split(".")[0];
            const fileType = files[i].split(".")[1];

            if(fileType == type){
                //arr.push(files[i]);
                console.log(files[i]);
            }
            //console.log(arr);
        }
    }
});