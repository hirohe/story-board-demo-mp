Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        visibility: true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 是否显示隐藏模态框
        changeInputModal({target: {dataset: {status}}}) {
            this.setData({
                visibility: status
            })
        },
    }
});