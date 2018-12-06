// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telvalue:'',
    telflag:0,
    pwdvalue: '',
    pwdflag: 0,
    tip:'',
    logon:""
  },
  getTel(e) {
    // console.log(e.detail)
    const val = e.detail.value
    let bool = false
    if (val !== '') {
      bool = true
    } else {
      bool = false
    }
    this.setData({
      telflag: bool,
      telvalue: val
    })
  },
  getpwd (e) {
    // console.log(e.detail.value)
    const pwd = e.detail.value
    let bool = false
    if (pwd !== '') {
      bool = true
    } else {
      bool = false
    }
    this.setData({
      pwdflag: bool,
      pwdvalue: pwd
    })
  },
  clearTel () {
    // console.log(this)
    this.setData({
      telvalue:'',
      telflag: 0
    })
  },
  clearpwd () {
    // console.log(this)
    this.setData({
      pwdvalue: '',
      pwdflag: 0
    })
  },
  login () {
    const username = this.data.telvalue;
    const password = this.data.pwdvalue;
    // console.log(username, password)
    wx.request({
      url: 'https://www.daxunxun.com/users/login',
      method: "post",
      data: { username, password },
      success:(res)=> {
        console.log(res.data)
        if (res.data == 2) {
          this.setData({
            tip: '没有该用户，请先注册',
            tipflag: true
          })
          setTimeout(() => {
            this.setData({
              tip: '',
              tipflag: false
            })
          }, 2000)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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