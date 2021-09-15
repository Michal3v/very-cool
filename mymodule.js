const directory = process.argv[2];
const type = process.argv[3];

module.exports = (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(f => {
            const fileType = f.split(".");
            if(fileType == type){
                console.log(files[i]);
            }
        });
    }
};

