<template>
    <div class="leg">
        <span class="leg-tag">{{ leg.tag }}</span>
        <div class="route-flow">
            <div class="route-point start">{{ leg.start }}</div>
            <div class="route-track">
                <span class="track-fare">{{ leg.fare }}</span>
                <div class="route-line"></div>
                <span class="track-note">{{ leg.note }}</span>
            </div>
            <div class="route-point end">{{ leg.end }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({ leg: { type: Object, required: true } })
</script>

<style scoped>
.leg {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    align-items: center;
    gap: 2px;
    padding: 4px 8px;
}

/* +是相邻兄弟选择器：只有"紧跟在另一个.leg后面的.leg才加border-top，第一行不会有顶部线 */
.leg+.leg {
    border-top: 1px solid #edf1ee;
}

/* 数字圆圈 */
.leg-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #a5ada8;
    color: white;
    font-size: 10px;
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
}

/* 起点 | 中间路线信息 | 终点 */
.route-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
    align-items: center;
    gap: 1px;
    min-width: 0;
}

/* 出发/到达 */
.route-point {
    min-width: 0;
    font-size: 14px;
    font-weight: 750;
    line-height: 1.4;
    overflow-wrap: anywhere;
    white-space: pre-line;
}

.route-point.start {
    text-align: center;
}

.route-point.end {
    text-align: center;
}

/* 中间路线信息内部又是一个网格 */
.route-track {
    display: grid;
    grid-template-rows: auto 1px auto;
    align-items: center;
    justify-items: center;
    text-align: center;
    min-width: 0;
    line-height: 1.35;
}

/* 路线信息第一行：专线小巴(9A) · $12.8/成人 */
.track-fare {
    grid-row: 1;
    padding-bottom: 2px;
    color: var(--green-dark);
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    text-align: center;
}

/* 路线信息第二行：线 */
.route-line {
    grid-row: 2;
    position: relative;
    height: 1px;
    width: 95%;
    min-width: 160px;
    max-width: 220px;
    background: #bdcfc1;
    justify-self: center;
}

/* 路线信息：箭头 */
.route-line::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 5px;
    height: 5px;
    border-top: 1px solid #91aa98;
    border-right: 1px solid #91aa98;
    transform: translateY(-50%) rotate(45deg);
}

/* 路线信息第三行：2个中途站 · 约20分钟 */
.track-note {
    grid-row: 3;
    padding-top: 2px;
    color: var(--muted);
    font-size: 12px;
    /* font-weight: bolder; */
    text-align: center;
    white-space: nowrap;
}
</style>