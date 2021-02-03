// pages/user/member/userset.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAccountPopup: false,
    account: '451237',
    inputAccount: '',
    showPwdPopup: true,
    pwd: '451237',
    inputPwd: '',
  },

  memberAccountInput(e) {
    this.setData({
      inputAccount: e.detail.value
    })
  },
  memberPwdInput(e) {
    this.setData({
      inputPwd: e.detail.value
    })
  },
  onClickOverlay(e) {
    let type = e.currentTarget.dataset.type
    if (type === 'account') {
      this.setData({
        showAccountPopup: false,
        inputAccount: this.data.account
      })
    } else if (type === 'pwd') {
      this.setData({
        showPwdPopup: false
      })
    }
  },
  onComfirmAccount() {
    console.log(this.data.inputAccount)
    this.setData({
      account: this.data.inputAccount,
      showAccountPopup: false
    })
  },
  onComfirmPwd() {
    console.log(this.data.inputPwd)
    this.setData({
      account: this.data.inputPwd,
      showPwdPopup: false
    })
  },
  openPopup(e) {
    let type = e.currentTarget.dataset.type
    if (type === 'name') {
      this.setData({
        showNamePopup: true
      })
    } else if (type === 'time') {
      this.setData({
        showTimePopup: true
      })
    } else if (type === 'sex') {
      this.setData({
        showSexPopup: true
      })
    } else if (type === 'save') {
      wx.showModal({
        content: '确认保存吗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } 
  },
  onClickAccountBox(){

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