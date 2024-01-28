const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'home_banners')
    },

    filename: function (req, file, cb) {
        const fileExt = file.originalname.split('.').pop();
        const uniqueName = file.fieldname + '-' + Date.now() + '.' + fileExt;
        cb(null, uniqueName);
    }
    
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null,true);
    } else {
        cb(new Error('Tipo de archivo no permitod en esta nube.'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;