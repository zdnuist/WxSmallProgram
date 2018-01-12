
Page({
  data: {
    gankInfo: {},
    pageNo: '1',
    pageCount: '5'
    
  },
  onLoad: function(){
      this.getGankImgs()

     
  },

  onReachBottom: function(){
   console.log("b")
   this.data.pageNo++
   this.getGankImgs()
  },
 
  onPageScroll: function (e) {
    // console.log(e)
  },
  getGankImgs: function () {
    self = this
    wx.request({
      url: 'https://gank.io/api/data/福利/'+ this.data.pageCount+'/' + this.data.pageNo,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        
        if(self.data.pageNo > 1){
          console.log("1")
          var b = res.data.results
          for (var i = 0; i < b.length; i++) {
            self.data.gankInfo.push(b[i]);
            self.setData({
              gankInfo: self.data.gankInfo
            })
          }
        }else{
          self.setData({
                    gankInfo: res.data.results
                  })
        }
      }
    })
  }
})