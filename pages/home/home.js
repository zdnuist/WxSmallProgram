// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.weiboAuth()
  },

  gotoGank: function(){
    wx.navigateTo({
      url: '../gank/gank'
    })
  },

  weiboAuth: function () {
    self = this
    wx.request({
      // url: "https://api.weibo.com/2/statuses/home_timeline.json",
      // url: "https://api.weibo.com/2/friendships/friends.json",
      // url: "https://api.weibo.com/2/statuses/user_timeline.json",
      url: "https://api.weibo.com/2/statuses/home_timeline.json",
      data: {
        access_token: "2.002yMLvC0FZaJu98e83251catBcgyD",
        // uid: "2677188293",
        feature: 2
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        var i = 0
        for(;i < res.data.statuses.length;i++){
          var picUrls = res.data.statuses[i].pic_urls
          // console.log(picUrls)
          for(var j = 0 ; j < picUrls.length; j++){
            var picUrl = picUrls[j].thumbnail_pic;
            // console.log(picUrl)
            picUrl = picUrl.replace('thumbnail','bmiddle')
            console.log(picUrl)
            self.data.imageUrls.push(picUrl)
          }
        }

        self.setData({
          imageUrls: self.data.imageUrls
        })
        

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})