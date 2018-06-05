const KEY = "KEY_STORE_CLIPDATA"
Page({

  data: {
    clipDatas:[
    ]
  },

  onLoad: function(option){
    self = this
    var value = wx.getStorage({
      key: KEY,
      success: function(res) {
        
      },
    })

  },

  onShow: function(option){
    console.log("onShow")
    this.getClipData()
  },

  getClipData: function(){
    self = this
    
    wx.getClipboardData({
      success: function(res){
        console.log(res.data)
        if (self.data.clipDatas.indexOf(res.data) == -1) {
          self.data.clipDatas.push(res.data)
          self.setData({
            clipDatas: self.data.clipDatas
          })
        }
      }
    })
  }
})