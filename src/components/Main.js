require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';

//获取图片名相关的信息
let imagesDatas = require('../data/imageDatas.json');
/*let yeomanImage = require('../images/yeoman.png');*/

//利用自执行函数，将图片名信息转换成图片URL路径信息
imagesDatas = (function genImageURL(imagesDatasArr){  //把所有的图片名称转换成图片路径
  for(var i=0, j = imagesDatasArr.length; i < j; i++){
    var singleImageData = imagesDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imagesDatasArr[i] = singleImageData;
  }
  return imagesDatasArr;
})(imagesDatas)  //只执行一次的可以使用自执行函数
imagesDatas = genImageURL(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>hello</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
