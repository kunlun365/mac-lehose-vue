<template>
    <div class="back-bar">
        <router-link to="/">
            <img src="/out.png">
            <span>返回</span>
        </router-link>
        <span class="photo-count">共{{ photos.length }}张图片</span>
    </div>

    <div class="gallery-grid">
        <div v-for="(photo, idx) in photos" :key="photo.img" class="gallery-item" @click="openLightbox(idx)">
            <img class="thumb" :src="photo.thumb" loading="lazy" :alt="photo.title">
            <div class="title-bar">{{ photo.title }}</div>
            <div class="tag-bar">
                <span class="tag-left">{{ photo.leftTag }}</span>
                <span class="tag-right">{{ photo.rightTag }}</span>
            </div>
        </div>
    </div>

    <Lightbox v-if="lightboxIndex !== null" :photos="photos" :index="lightboxIndex" @close="closeLightbox"
        @prev="prevImage" @next="nextImage" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Lightbox from '../components/Lightbox.vue'
import { photos as photosData } from '../data/photos'

const route = useRoute()
const router = useRouter()
const photos = ref(photosData)

// URL 是唯一数据源：?photo=N 存在且合法 → 大图打开；缺失/越界 → 关闭
// 越界保护是必须的：手输 ?photo=999 时防止 photos[index] 变 undefined
const lightboxIndex = computed(() => {
    const n = Number(route.query.photo)
    return Number.isInteger(n) && n >= 0 && n < photos.value.length ? n : null
})

const openLightbox = (idx) => {
    router.push({ query: { photo: idx } }) // 压入一条历史，返回手势可关大图
}
const closeLightbox = () => {
    if (window.history.state?.back != null) {
        router.back() // 正常流程：消耗打开时压入的那条历史
    } else {
        router.replace({ query: {} }) // 直链/刷新进来的：原地清参数，不退出网站
    }
}
const prevImage = () => {
    if (lightboxIndex.value === null) return
    const target = (lightboxIndex.value - 1 + photos.value.length) % photos.value.length
    router.replace({ query: { photo: target } })  // replace：切图不堆历史
}
const nextImage = () => {
    if (lightboxIndex.value === null) return
    const target = (lightboxIndex.value + 1) % photos.value.length
    router.replace({ query: { photo: target } })
}
</script>

<style scoped>
/* 顶部固定返回栏 */
.back-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 10px 12px;
    border-bottom: 1px solid #eee;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back-bar img {
    width: 18px;
    height: 18px;
}

.back-bar a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: orange;
    font-weight: bold;
}

.back-bar a span {
    line-height: 1;
    transform: translateY(-1.5px);
}

.photo-count {
    color: lightskyblue;
    font-size: 13px;
    font-weight: bold;
}

/* 画廊 grid：桌面自适应多列 */
.gallery-grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 12px;
    padding: 12px;
}

.gallery-item {
    cursor: pointer;
}

.thumb {
    width: 100%;
    /* 加载前就占好位，object-fit: cover 裁切居中 */
    aspect-ratio: 3 / 2;
    object-fit: cover;
    display: block;
    border-radius: 4px 4px 0 0;
    background: url('/img/placeholder.png') center / 96px no-repeat;
}

/* 深橄榄绿标题条 */
.title-bar {
    background: rgb(96, 113, 52);
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 3px;
    text-align: left;
}

/* 米白偏暖色标签条，左右两文案 */
.tag-bar {
    background: rgb(242, 236, 221);
    padding: 3px;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 4px 4px;
}

.tag-bar span {
    color: #6b3f1d;
    font-size: 12px;
}

@media (max-width: 600px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
        padding: 4px;
    }
}
</style>