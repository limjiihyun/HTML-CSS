const { upload } = require("../image/smile.jpg");

var app = express.Router();

// 이미지 업로드
app.post("/image", upload.single("img"), async (req, res) => {

  const imgfile = req.file;
  console.log(imgfile);
 
  
}); //이미지 업로드 end

module.exports = app;