// pages/user/member/userdata.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headImgPath: '../../../images/zhan.jpg',
        showNamePopup: false,
        name: '',
        inputName: '',
        sex: '',
        actions: [{
                name: '男',
                className: 'color-blue'
            },
            {
                name: '女',
                className: 'color-blue'
            }
        ],
        showSexPopup: true,
    },
    uploadheadImg() {
        console.log(6366)
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                this.upload(this, tempFilePaths);
            }
        })
    },
    upload(page, path) {
        // wx.showToast({
        //   icon: "loading",
        //   title: "请对接接口"
        // })
        this.setData({ //上传成功修改显示头像
            headImgPath: path[0]
        })
        console.log(path[0])
        wx.uploadFile({
            // wx.showToast({
            //   icon: "loading",
            //   title: "请对接接口"
            // })
            // url: constant.SERVER_URL + "/FileUploadServlet",
            // filePath: path[0],
            // name: 'file',
            // header: { "Content-Type": "multipart/form-data" },
            // formData: {
            //   //和服务器约定的token, 一般也可以放在header中
            //   'session_token': wx.getStorageSync('session_token')
            // },
            // success: (res) => {
            //   console.log(res);
            //   if (res.statusCode != 200) {
            //     wx.showModal({
            //       title: '提示',
            //       content: '上传失败',
            //       showCancel: false
            //     })
            //     return;
            //   }
            //   var data = res.data
            //   page.setData({  //上传成功修改显示头像
            //     headImgPath: path[0]
            //   })
            // },
            // fail: function (e) {
            //   console.log(e);
            //   wx.showModal({
            //     title: '提示',
            //     content: '上传失败',
            //     showCancel: false
            //   })
            // },
            // complete: function () {
            //   wx.hideToast();  //隐藏Toast
            // }
        })
    },
    memberAccountInput(e) {
        this.setData({
            inputName: e.detail.value
        })
    },
    //修改昵称
    updateName() {
        this.setData({
            showNamePopup: true
        })
    },
    onClickOverlay() {
        this.setData({
            showNamePopup: false
        })
    },
    onClickNameBox() {

    },
    onComfirmName() {
        console.log(this.data.inputName)
        this.setData({
            name: this.data.inputName,
            showNamePopup: false
        })
    },
    onCancelSex() {
        this.setData({
            showSexPopup: false
        })
    },
    onSelectSex(e) {
        this.setData({
            sex: e.detail.name,
            showSexPopup: false
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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

    }
})