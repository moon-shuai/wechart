// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    prolist: [],
    start: 0,
    count: 20,
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(function () {
      console.log('出来')
    }, true)
  },

  /**
   * 获取数据的函数封装
   * 
   */
  getData(callback, isMore) {

    wx.request({
      url: 'https://www.daxunxun.com/douban', //仅为示例，并非真实的接口地址
      // 请求参数
      data: {
        start: this.data.start,
        count: this.data.count
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res.data)
        if (isMore) {
          this.data.prolist = this.data.prolist.concat(res.data)
          this.setData({
            prolist: this.data.prolist
          })
        } else {
          this.setData({
            prolist: this.data.prolist,
          })
        }
        console.log(this.data.prolist)
        callback()
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
    console.log('下拉')
    this.getData(function () {
      this.setData({
        start: 0
      })
    }, false)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('上拉')

    this.getData(function () {
      console.log('11111')
      let num = this.data.start
      num += 20
      // if (this.data.prolist.length > 0) {
      this.setData({
        start: num
      })
      // }
    }, true)
    // wx.request({
    //   url: 'https://www.daxunxun.com/douban', //仅为示例，并非真实的接口地址
    //   // 请求参数
    //   data: {
    //     start: num,
    //     count: this.data.count
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: (res) => {
    //     // console.log(res.data)
    //     let arr = this.data.prolist
    //     if (res.data.length === 0) {
    //       wx.showToast({
    //         title: '已无更多数据',
    //         icon: 'success',
    //         duration: 2000
    //       })
    //     } else {
    //       arr = arr.concat(res.data)
    //       this.setData({
    //         prolist: arr,
    //         start: num
    //       })
    //     }
    //     console.log(this.data.prolist)
    //   }
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})