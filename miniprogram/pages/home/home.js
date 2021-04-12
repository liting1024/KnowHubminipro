// miniprogram/pages/home.js
Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        active: 0
      });
    }
  },
  data: {
    value: ''
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
})