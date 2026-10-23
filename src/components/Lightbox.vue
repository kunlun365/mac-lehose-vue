<template>
    <div class="lightbox show" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd"
        @click.self="onClickBg">
        <img :src="photos[index].img" :alt="photos[index].title" :style="{ opacity: imgOpacity }" @click.stop>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['close', 'prev', 'next'])
const onClickBg = () => emit('close')

const props = defineProps({
    photos: { type: Array, required: true },
    index: { type: Number, required: true },
})

const imgOpacity = ref(1)
let touchStartX = 0, touchStartY = 0
let lastPinchTime = 0

const onTouchStart = (e) => {
    if (e.touches.length > 1) { lastPinchTime = Date.now(); return }
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
}

const onTouchMove = (e) => {
    if (e.touches.length > 1) lastPinchTime = Date.now()
}

const onTouchEnd = (e) => {
    if (e.touches.length > 0) return
    if (Date.now() - lastPinchTime < 500) return // 刚双指缩放完，忽略
    const dx = e.changedTouches[0].clientX - touchStartX
    const dy = e.changedTouches[0].clientY - touchStartY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        dx < 0 ? emit('next') : emit('prev')
        return
    }
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) emit('close')
}

// 切图淡入淡出
watch(() => props.index, (i) => {
    imgOpacity.value = 0
    setTimeout(() => { imgOpacity.value = 1 }, 80)

    // 预加载左右相邻两张，切换零等待
    for (const d of [1, -1]) {
        const n = (i + d + props.photos.length) % props.photos.length
        new Image().src = props.photos[n].img
    }
})
</script>

<style scoped>
/* 悬浮放大层：默认隐藏，加 .show 显示 */
.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 1);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.lightbox.show {
    display: flex;
}

.lightbox img {
    max-width: 100%;
    max-height: 100%;
    transition: opacity .08s ease-out;
}
</style>