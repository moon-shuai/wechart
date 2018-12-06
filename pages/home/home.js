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
    flag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url: 'https://www.daxunxun.com/douban?count=20&start=0',
      success: (res) => {
        console.log(res.data)
        this.setData({
          prolist: res.data
        })
      }
    })
  },
/**
 * 这个函数是为了设置那个缓存而的来的
 * 点击 X 进行取消
 */
  closeTip() {
    wx.setStorage({
      key: 'first',
      data: '0',
    })
    this.setData({
      flag: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow')
    wx.getStorage({
      key: 'first',
      success: (res) => {
        console.log('res', res)
        let isFirst = true
        if (res.data == 1) {
          isFirst = true
        } else {
          isFirst = false
        }
        this.setData({
          flag: isFirst
        })
      },
      fail: (err) => {
        console.log('err', err)
        wx.setStorage({
          key: 'first',
          data: '1',
        })
        this.setData({
          flag: true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    wx.request({
      url: 'https://www.daxunxun.com/douban?count=20&start=0',
      success: (res) => {
        console.log(res.data)
        this.setData({
          prolist: res.data,
          start: 0
        })
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let num = this.data.start;
    num += 20;
    wx.request({
      url: 'https://www.daxunxun.com/douban?start=' + num + '&count=20',
      success: (res) => {
        console.log(res.data)
        let arr = this.data.prolist;
        if (res.data.length == 0) {
          wx.showToast({
            title: '已无更多数据了',
          })
        } else {
          arr = arr.concat(res.data)
          this.setData({
            prolist: arr,
            start: num
          })
          console.log(this.data.prolist)
        }

      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'moon',
      path: '/pages/home/home'
    }
  }
})
