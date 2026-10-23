<template>
    <main class="page">
        <h2 class="page-title">香港西贡 · 麦理浩径1段行程方案</h2>

        <!-- 路由跳转用 router-link，@click.native 或直接用方法 -->
        <div class="gallery-entry">
            <router-link to="/gallery">
                <span>沿途实拍</span>
                <img src="/in.png" width="18" height="18">
            </router-link>
        </div>

        <section v-for="plan in plans" :key="plan.name">
            <h1 class="plan-heading">
                <span class="plan-name">{{ plan.name }}</span>
                <span class="plan-name">{{ plan.totalPrice }}</span>
            </h1>

            <!-- 去程 -->
            <TripCard :trip="plan.legs.go" :is-go="true" />

            <!-- 返程 -->
            <TripCard :trip="plan.legs.back" :is-go="false" />
        </section>

        <header class="intro">
            <p class="tips"> Tips </p>
            <p class="notice"> [1]. 行程方案都以通关过境后港方口岸为起点 </p>
            <p class="notice"> [2]. [美径跨境专线巴士]从港方[莲塘口岸]至西贡区[北潭涌]，单程￥69/成人，往返优惠20元（即￥118/成人） </p>
            <p class="notice"> [3].
                麦径沿途大部分路段没有便利店，香港入境饮用水(包括宝矿力这类非酒精电解质饮料)、预包装干粮(面包、香蕉/需预包装、能量棒、坚果等)允许带入，生鲜肉类、自热饭、榴莲这类不能带
            </p>
            <p class="notice"> [4]. 带高倍防晒；浪茄海水超美，可下水，可带泳衣 </p>
            <p class="notice"> [5].
                破边洲观景台於九月五日至十月七日期間的周末、中秋節、及國慶黃金周上午九時至下午五時進入破邊洲段之遊客必須預約，每兩小時為一個時段，每個時段名額500人，每日的名額總數為2000人，遊客必須預先透過 漁護署
                指定的旅遊平台Klook預約，每人每次可為自己及同行者預訂最多五個名額，詳情參閲<a target="_blank" rel="noopener noreferrer"
                    href="https://www.info.gov.hk/gia/general/202608/21/P2026082100328.htm">
                    特區政府漁護署網頁<br>https://www.info.gov.hk/gia/general/202608/21/P2026082100328.htm</a></p>
        </header>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import TripCard from '../components/TripCard.vue'
import { plans as plansData } from '../data/plans'

const plans = ref(plansData)
</script>

<style scoped>
.page {
    /* 宽屏时封顶960px；窄屏时是"屏宽减20px"，即左右各留10px间隙 */
    width: min(960px, calc(100% - 20px));
    margin: 0 auto;
    /* 上 左右 下 */
    padding: 20px 0 20px;
}

.page-title {
    margin: 0 0 12px;
    padding: 0;
    line-height: 1.4;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: var(--ink);
}

.gallery-entry {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    margin: 16px 8px 0;
}

.gallery-entry a {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    text-decoration: none;
    color: orange;
    font-weight: bold;
    margin-left: auto;
}

.gallery-entry img {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.gallery-entry a span {
    line-height: 1;
    transform: translateY(-1.5px);
}

.plan-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-radius: 6px;
    background: orange;
    line-height: 1;
    text-shadow: 0 1px 0 rgba(0, 0, 0, .08);
}

.plan-name {
    display: flex;
    align-items: center;
    line-height: 1;
    font-size: 16px;
    color: white;
    font-weight: 700;
    letter-spacing: 1.2px;
}

.intro {
    margin-bottom: 52px;
}

.tips {
    margin-bottom: 2px;
    color: var(--muted);
    font-size: 14px;
}

.notice {
    margin: 0;
    color: var(--muted);
    font-size: 12px;
}

.notice a {
    overflow-wrap: anywhere;
    color: var(--muted);
    word-break: break-all;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>