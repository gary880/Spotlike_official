# Spotlike - 官方網站

現代化的 App 官網，採用 React + TypeScript + Vite 建構。

## 🏗️ 專案架構

```
src/
├── components/          # 可重用組件
│   ├── layout/         # 佈局組件 (Header, Footer, Layout)
│   ├── sections/       # 頁面區塊組件
│   └── index.ts        # Barrel exports
├── pages/              # 頁面組件
│   ├── HomePage.tsx    # 首頁
│   ├── PrivacyPage.tsx # 隱私政策
│   ├── TermsPage.tsx   # 服務條款
│   └── index.ts        # Barrel exports
├── hooks/              # 自訂 React Hooks
├── styles/             # CSS 樣式文件
│   ├── global.css      # 全域樣式
│   ├── layout.css      # 佈局樣式
│   ├── sections.css    # 區塊樣式
│   └── pages.css       # 頁面樣式
├── types/              # TypeScript 類型定義
├── utils/              # 工具函數和常數
└── assets/             # 靜態資源
```

## 🎨 設計特色

### 響應式設計 (RWD)
- 手機優先設計策略
- 三個主要斷點：768px (tablet)、1024px (desktop)
- 彈性網格系統與流暢的版面切換

### 現代化 UI
- 漸層色彩主題 (#667eea → #764ba2)
- 玻璃擬態效果 (Glassmorphism)
- 平滑動畫過渡效果
- 無障礙設計 (Accessibility)

### 組件化架構
- 高度模組化的組件結構
- Barrel exports 簡化 import 路徑
- TypeScript 嚴格類型檢查
- 可重用的 UI 元件

## 📱 網站結構

### 1. 首頁 (HomePage)
- **HeroSection**: 主視覺與 CTA
- **AppPreviewSection**: 核心功能展示
- **FeaturesSection**: 功能特色介紹
- **HowItWorksSection**: 使用流程說明
- **SocialProofSection**: 用戶評價與數據
- **ScreenshotsSection**: App 截圖展示
- **DownloadSection**: 下載連結與 QR Code

### 2. 功能特色
✨ **車站 Spotlight** - 在每個捷運站留下專屬印記  
🗺️ **城市探索** - 記錄你的通勤路線故事  
👥 **同路人互動** - 遇見志同道合的通勤夥伴  
📍 **即時足跡** - 即時分享通勤中的美好瞬間  

### 3. 使用流程
1. 選擇你的捷運站
2. 創建專屬 Spotlight
3. 分享城市探索故事
4. 與同路人互動交流

## 🛠️ 技術棧

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules + CSS Variables
- **Backend**: AWS Amplify (預配置)
- **Deployment**: Amplify Hosting

## 🚀 開發指令

```bash
# 安裝依賴
npm install

# 開發服務器
npm run dev

# 建構生產版本
npm run build

# 預覽建構結果
npm run preview

# 程式碼檢查
npm run lint
```

## 📂 靜態資源需求

以下圖片需要放置在 `public/assets/` 目錄中：

### App 截圖
- `app-screenshot-hero.png` - 主視覺 App 截圖
- `screenshot-home.png` - 首頁截圖
- `screenshot-create.png` - 創建 Spotlight 截圖
- `screenshot-social.png` - 社群功能截圖
- `screenshot-profile.png` - 個人檔案截圖
- `screenshot-map.png` - 地圖功能截圖

### 下載徽章
- `app-store-badge.png` - App Store 下載徽章
- `google-play-badge.png` - Google Play 下載徽章
- `qr-code.png` - 下載 QR Code

### 其他
- `phones-mockup.png` - 手機樣機圖片
- `metro-pattern.svg` - 背景圖案
- `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` - 用戶頭像

## 🎯 SEO 優化

- 語義化 HTML 標籤
- 適當的 meta 標籤設置
- 圖片 alt 文字
- 結構化數據 (待實作)
- 網站地圖 (待實作)

## 🔧 自訂化

### 品牌色彩
在 `src/styles/global.css` 中修改 CSS 變數：
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

### 內容更新
在 `src/utils/constants.ts` 中修改應用資訊和連結。

## 🤝 維護指南

### 新增頁面
1. 在 `src/pages/` 建立新的頁面組件
2. 在 `src/pages/index.ts` 添加 export
3. 在 `src/App.tsx` 添加路由配置

### 新增區塊
1. 在 `src/components/sections/` 建立新的 Section 組件
2. 在 `src/components/sections/index.ts` 添加 export
3. 在對應頁面中引入並使用

### 樣式修改
- 全域樣式：`src/styles/global.css`
- 佈局樣式：`src/styles/layout.css`
- 區塊樣式：`src/styles/sections.css`
- 頁面樣式：`src/styles/pages.css`

---

## 📞 技術支援

如有任何技術問題，請聯繫開發團隊。

---

## AWS Amplify 配置

This project is built on AWS Amplify React+Vite template with pre-configured:
- **Authentication**: Amazon Cognito for secure user authentication
- **API**: GraphQL endpoint with AWS AppSync  
- **Database**: Real-time database powered by Amazon DynamoDB

For deployment instructions, refer to the [Amplify documentation](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws).