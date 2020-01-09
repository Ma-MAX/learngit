// pages/my/my.js
//获取应用实例 
import request from "../../utils/fetch.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    myData: {},
    infoData:{},
    api: {
      list: '/api/order/small-program/employ/complet-work-order-list-statis',
      info: '/api/upms/mini-program/get-info',
      imgUrl: '/api/dfs/get/base64'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    request.getRes(this.data.api.info).then(res => {
      this.setData({
        infoData: res.data.data
      });
      request.getRes(this.data.api.imgUrl,res.data.avatar).then(x => {
        this.setData({
          userInfo: `data: image/png;base64,${x.data}`
        });
      })
    });
    request.postRes(this.data.api.list).then(res => {
      this.setData({
        myData: res.data.data
      })
    })
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
  }
})