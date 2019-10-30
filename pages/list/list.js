// pages/list/list.js
//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: 'https://www.toutiao.com/api/pc/feed/?category=funny',
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                this.setData({
                    list: res.data.data
                })
                app.globalData.listData = res.data.data
                console.log(app.globalData.listData)
                // if (!res.ugc_data.ugc_images) {
                //     return
                // }
                // app.globalData.imgList = res.ugc_data.ugc_images
                // console.log(app.globalData.imgList)
            }
        })
    },
    toDetail: (event) => {
        var group_id = event.currentTarget.dataset.groupid
        var item_id = event.currentTarget.dataset.itemid
        var index = event.currentTarget.dataset.index
        wx.navigateTo({
            url: '../detail/detail?group_id=' + group_id + '&item_id=' + item_id + '&index=' + index
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