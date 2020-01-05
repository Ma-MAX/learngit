// pages/my/my.js
//获取应用实例
const app = getApp()
const api = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    myData: {},
    api: {
      list: '/api/small-program/employ/order/home-page/work-order'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
    // api.getData(this.data.api.list,this.successDo,this.failDo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 跳转详情
   */
  detailTo: function() {
    wx.navigateTo({
      url: '../myDetail/myDetail',
    })
  },

  successDo: function(data) {
    var that = this;
    that.setData({
      myData: data
    })
  },

  failDo: function(data) {
    console.log("失败");
  }
})