<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import QRCodeVue3 from "qrcode-vue3";
import {ref} from "vue";
defineProps<{
  icon?: DefaultTheme.FeatureIcon
  title: string
  details?: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}>()

const showQRCode = ref(false)
</script>

<template>
  <VPLink  class="VPFeature"  @mouseenter="showQRCode=true" @mouseleave="showQRCode=false"
      :href="link"
      :rel="rel"
      :target="target"
      :no-icon="true"
      :tag="link ? 'a' : 'div'"
  >
    <article class="box">
      <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
        <VPImage
            :image="icon"
            :alt="icon.alt"
            :height="icon.height || 48"
            :width="icon.width || 48"
        />
      </div>
      <VPImage
          v-else-if="typeof icon === 'object'"
          :image="icon"
          :alt="icon.alt"
          :height="icon.height || 48"
          :width="icon.width || 48"
      />
      <div v-else-if="icon" class="icon" v-html="icon"></div>
      <h2 class="title" v-html="title"></h2>
      <p v-if="details" class="details" v-html="details"></p>

      <div v-if="linkText" class="link-text">

          <p class="link-text-value">
            {{ linkText }} <span class="vpi-arrow-right link-text-icon" />
          </p>

      </div>
    </article>
    <div class="qrcode" v-if="showQRCode && title==='移动端'" >
      <div class="myQur">
        <QRCodeVue3
            image="/logo.png"
            :width="120"
            :height="120"
            :margin="0"
            :value="link"
            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
            :dotsOptions="{
            type: 'square',
            color: '#000',
          }"

            :backgroundOptions="{ color: '#fff' }"
            :cornersSquareOptions="{ type: 'square', color: '#000000' }"
            :cornersDotOptions="{ type: 'square', color: '#000' }"
            fileExt="apk"
            myclass="qur"
            imgclass="img-qr"
            downloadButton="my-button"
        />
      </div>

      <span style="margin: 12px">请使用手机扫描二维码或点击此处完成下载</span>
    </div>
  </VPLink>
</template>

<style scoped>
.VPFeature {
  position: relative;
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.qrcode{
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,.6);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all .3s ease-out;
}
.myQur{
  cursor: none!important;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand-1);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.box > :deep(.VPImage) {
  margin-bottom: 20px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-default-soft);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.link-text {
  padding-top: 8px;
}

.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.link-text-icon {
  margin-left: 6px;
}
</style>