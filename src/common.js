var common = {};

//图片转base64

// img object
// common.getBase64Image = function(img) {
//   var canvas = document.createElement('canvas');
//
//   canvas.width = img.width;
//   console.log(img.width);
//   canvas.height = img.height;
//
//   var ctx = canvas.getContext('2d');
//   ctx.drawImage(img, 0, 0);
//   var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
//   var dataURL = canvas.toDataURL("image/"+ext);
//   return dataURL;
// }
common.getBase64Image = function(img) {
  var reader = new FileReader();
  var dataURL;
  reader.readAsDataURL(img);
  return reader;
  // reader.onload = function (e) {
  //
  // }


}
export default common
