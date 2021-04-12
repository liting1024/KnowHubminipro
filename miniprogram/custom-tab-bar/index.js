// miniprogram/custom-tab-bar/index.js
Component({
  data: {
    active:0,
    list:[{
      text:"主页",
      icon:"home-o",
      url:"/pages/home/home"
    },
    {
      text:"拍照上传",
      icon:"add-o",
      url:"/pages/addDocu/addDocu"
    },
    {
      text:"个人主页",
      icon:"manager-o",
      url:"/pages/manage/manage"
    }
  ]
  },
  methods: {
    onChange:function(e){
      var i = e.detail;
      wx.switchTab({
        url: this.data.list[i].url,
      })
      this.setData({
        active : i
      })
    }
  }
})