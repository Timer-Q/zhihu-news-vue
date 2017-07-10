
/**
 * img url 处理应对 因为 referer 无法获取图片
 * @param {str} val 接收的原img url
 * @returns 处理后的img url
 */
exports.attachImgUrl = (val) => {
  if (val) {
    return val.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
  }
}
