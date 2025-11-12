const CUSTOMER_SITES = {
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod/at/json',
        name: '极速资源',
    },        
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn/',
        name: '茅台资源',
    },
    jinying: {
        api: ' https://jyzyapi.com/provide/vod/from/jinyingyun/at/json',
        name: '金鹰资源',
    },
     uku: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod/',
        name: 'U酷资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
