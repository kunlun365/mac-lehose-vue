// 行程方案数据
export const plans = [
    {
        name: '方案一(跨境专线)',
        totalPrice: '$143.6/人 · 往返合计',
        legs: {
            go: {
                price: '$71.8/成人', duration: '全程约1小时', list: [
                    { tag: 1, start: '莲塘口岸', fare: '美径户外巴士 · ￥59/成人', note: '直达 · 约40min', end: '北潭涌' },
                    { tag: 2, start: '北潭涌\n巴士总站', fare: '专线小巴(9A) · $12.8/成人', note: '2个中途站 · 约20min', end: '万宜水库\n东坝' },
                ]
            },
            back: {
                price: '$71.8/成人', duration: '全程约1小时', list: [
                    { tag: 1, start: '万宜水库\n东坝', fare: '专线小巴(9A) · $12.8/成人', note: '2个中途站 · 约20min', end: '北潭涌\n巴士总站' },
                    { tag: 2, start: '北潭涌', fare: '美径户外巴士 · ￥59/成人', note: '直达 · 约40min', end: '莲塘口岸' },
                ]
            },
        }
    }, {
        name: '方案二(香港的士)',
        totalPrice: '$172/人 · 往返合计',
        legs: {
            go: {
                price: '$90.2/成人', duration: '全程约1小时15分钟', list: [
                    { tag: 1, start: '落马洲\n/罗湖', fare: '东铁线 · $30.2/成人', note: '直达 · 约35min', end: '大学' },
                    { tag: 2, start: '大学', fare: '新界区的士(绿漆) · $60/成人', note: '直达(4人拼一辆的士) · 约40min', end: '万宜水库\n东坝' },
                ]
            },
            back: {
                price: '$81.8/成人', duration: '全程约1小时', list: [
                    { tag: 1, start: '万宜水库\n东坝', fare: '专线小巴(9A) · $12.8/成人', note: '2个中途站 · 约20min', end: '北潭涌\n巴士总站' },
                    { tag: 2, start: '北潭涌', fare: '美径户外巴士 · ￥69/成人', note: '直达 · 约40min', end: '莲塘口岸' },
                ]
            },
        }
    }, {
        name: '方案三(公共交通)',
        totalPrice: '$142.8/人 · 往返合计',
        legs: {
            go: {
                price: '$71.4/成人', duration: '全程约1小时40分钟', list: [
                    { tag: 1, start: '落马洲\n/罗湖', fare: '东铁线 · $33/成人', note: '直达 · 约40min', end: '沙田' },
                    { tag: 2, start: '沙田', fare: '九巴(289R) · $25.6/成人', note: '25个中途站 · 约40min', end: '北潭涌' },
                    { tag: 3, start: '北潭涌\n巴士总站', fare: '专线小巴(9A) · $12.8/成人', note: '2个中途站 · 约20min', end: '万宜水库\n东坝' },
                ]
            },
            back: {
                price: '$71.4/成人', duration: '全程约1小时40分钟', list: [
                    { tag: 1, start: '万宜水库\n东坝', fare: '专线小巴(9A) · $12.8/成人', note: '2个中途站 · 约20min', end: '北潭涌\n巴士总站' },
                    { tag: 2, start: '北潭涌', fare: '九巴(289R) · $25.6/成人', note: '25个中途站 · 约40min', end: '沙田' },
                    { tag: 3, start: '沙田', fare: '东铁线 · $33/成人', note: '直达 · 约40min', end: '落马洲\n/罗湖' },
                ]
            },
        }
    }
]
