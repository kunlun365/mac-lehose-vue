<template>
    <fieldset class="trip-card">
        <legend class="trip-legend">
            <span :class="isGo ? 'direction' : 'direction2'">
                {{ isGo ? '去程' : '返程' }}
            </span>
            <span class="total-price">{{ trip.price }}</span>
            <span class="duration">{{ trip.duration }}</span>
        </legend>

        <RouteLeg v-for="leg in trip.list" :key="leg.tag" :leg="leg" />
    </fieldset>
</template>

<script setup>
import RouteLeg from './RouteLeg.vue'
defineProps({
    trip: { type: Object, required: true }, // { price, duration, list: [...] }
    isGo: { type: Boolean, default: false },
})
</script>

<style scoped>
/* 行程卡片 */
.trip-card {
    min-width: 0;
    margin: 6px 0;
    padding: 2px 2px;
    border: 1px solid #d7e2da;
    border-radius: 12px;
    background: white;
    box-shadow: 0 6px 20px rgba(29, 48, 37, .045);
}

/* 把每组第一个卡片上移，抵消legend占掉的高度，视觉上和橙色标题贴紧 */
section .trip-card:first-of-type {
    margin-top: -12px;
}

.trip-legend {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    min-width: 0;
    margin: 0 12px;
    padding: 0 6px;
    border: 0;
    line-height: 1;
}

/* 去程 */
.direction {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 8px;
    background: var(--green);
    color: white;
    font-size: 12px;
    font-weight: 750;
    letter-spacing: 0.8px;
}

/* 返程 */
.direction2 {
    display: inline-block;
    padding: 5px 7px;
    border-radius: 8px;
    background: var(--lightred);
    color: white;
    font-size: 12px;
    font-weight: 750;
    letter-spacing: 0.8px;
}

/* 价格文字：透明背景 */
.total-price {
    color: var(--red);
    font-size: 13px;
    font-weight: 800;
    background: transparent;
    font-variant-numeric: tabular-nums;
}

/* 时长文字：透明背景 */
.duration {
    color: var(--muted);
    font-size: 13px;
    font-weight: 700;
    background: transparent;
}
</style>