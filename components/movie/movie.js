// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    prolist: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail (e) {
      // console.log(e.currentTarget.dataset.id)
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/detail/detail?id='+ id
      })
    }
  }
})
