// pages/datail/detail.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {},
        imgList: [],   //普通图片
        ugcImgList: []   //动图
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var group_id = options.group_id
        var item_id = options.item_id
        var index = options.index 
        console.log(index)
        // this.setData({
        //     imgData: app.globalData.listData[index].images_list
        // })
        console.log(app.globalData.listData[index].image_list)
        if (app.globalData.listData[index].image_list) {
            this.setData({
                imgList: app.globalData.listData[index].images_list
            })
        } else if (app.globalData.listData[index].ugc_data.ugc_images){
            this.setData({
                ugcImgList: app.globalData.listData[index].ugc_data.ugc_images
            })
        }
        // console.log(this.data.imgList)
        wx.request({
            url: 'https://www.toutiao.com/api/pc/article/v4/tab_comments/?aid=24&app_name=toutiao-web&group_id=' + group_id + '&item_id=' + item_id,
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                this.setData({
                    detail: res.data
                })
                console.log(res.data)
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