// miniprogram/pages/manager.js
Component({
  pageLifetimes: {
    show() {
      this.getTabBar().setData({
        active: 2
      });
    }
  },
  data: {
    loading: true,
  },
  onReady() {
    this.setData({
      loading: false,
    });
  },
})