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
        showSexPopup: false,
        showTimePopup: false,
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        date: null,
        showCityPopup: true,
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部',
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
    memberNameInput(e) {
        this.setData({
            inputName: e.detail.value
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
    onClickOverlay(e) {
        let type = e.currentTarget.dataset.type
        if (type === 'name') {
            this.setData({
                showNamePopup: false
            })
        } else if (type === 'time') {
            this.setData({
                showTimePopup: false
            })
        }
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
    onDateConfirm(event) {
        console.log(this.formatTime(event.detail, 'Y-M-D'))
        this.setData({
            date: this.formatTime(event.detail, 'Y-M-D'),
            currentDate: this.formatTime(event.detail, 'Y-M-D'),
        });
    },
    formatTime(timestap, format) {
        if (!timestap) {
            return ''
        }
        var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
        var returnArr = [];

        var date = new Date(timestap);
        returnArr.push(date.getFullYear());
        returnArr.push(this.formatNumber(date.getMonth() + 1));
        returnArr.push(this.formatNumber(date.getDate()));

        returnArr.push(this.formatNumber(date.getHours()));
        returnArr.push(this.formatNumber(date.getMinutes()));
        returnArr.push(this.formatNumber(date.getSeconds()));
        for (var i in returnArr) {
            format = format.replace(formateArr[i], returnArr[i]);
        }
        return format;
    },
    //数据转化  
    formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
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