import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Spotlike 隱私權政策</h1>
          
          <div className="effective-date">
            <p><strong>生效日期：</strong>2025年8月21日</p>
            <p><strong>最後更新：</strong>2025年8月21日</p>
          </div>

          <div className="highlight">
            <p><strong>重要說明：</strong>我們非常重視您的隱私權。本政策說明 Spotlike 應用程式如何收集、使用和保護您的個人資訊。我們遵循資料最小化原則，僅收集提供服務所必需的資訊。</p>
          </div>

          <h2>📋 1. 資料收集說明</h2>
          
          <h3>1.1 我們收集的資訊類型</h3>
          <ul>
            <li><strong>帳號資訊：</strong>電子郵件地址、使用者名稱、密碼（使用 bcrypt 加密儲存）</li>
            <li><strong>簽到資料：</strong>捷運站位置、簽到時間、性別選擇（可選）、自訂訊息（可選）</li>
            <li><strong>個人檔案：</strong>頭像照片（可選上傳）</li>
            <li><strong>社交互動：</strong>留言內容、按讚記錄、回覆內容</li>
            <li><strong>購買記錄：</strong>燈泡積分購買歷史、App Store 交易記錄</li>
            <li><strong>使用統計：</strong>應用程式使用情況、功能偏好、效能數據（匿名化處理）</li>
            <li><strong>通知資料：</strong>推播通知偏好設定、裝置推播 token</li>
            <li><strong>技術資訊：</strong>IP 位址、裝置識別資訊、作業系統版本（僅用於安全防護和服務改善）</li>
          </ul>

          <h3>1.2 位置資訊</h3>
          <p>Spotlike 僅收集您主動選擇簽到的捷運站位置資訊，我們<strong>不會</strong>取得您的 GPS 精確位置或進行背景定位追蹤。所有位置資料都是基於您在地圖上的主動選擇。</p>

          <h3>1.3 資料最小化原則</h3>
          <p>我們承諾遵循資料最小化原則，僅收集提供服務功能所必需的個人資料。我們不會收集與服務目的無關的額外資訊，並定期檢視收集的資料類型以確保其必要性。</p>

          <h2>🎯 2. 資料使用目的</h2>
          
          <h3>2.1 核心功能提供</h3>
          <ul>
            <li>處理捷運站簽到功能</li>
            <li>管理個人檔案和設定</li>
            <li>提供社交互動功能（留言、按讚）</li>
            <li>處理曝光度系統和積分購買</li>
            <li>發送相關通知提醒</li>
            <li>驗證用戶身份和防止濫用</li>
          </ul>

          <h3>2.2 服務改善</h3>
          <ul>
            <li>分析使用模式以改善用戶體驗（使用匿名化資料）</li>
            <li>提供個人化內容推薦</li>
            <li>產生匿名化的使用統計報告</li>
            <li>偵測和預防濫用行為、詐欺活動</li>
            <li>技術支援和錯誤診斷</li>
          </ul>

          <h2>🤝 3. 第三方服務商</h2>
          
          <h3>3.1 我們使用的第三方服務</h3>
          <p>為提供服務，我們與以下類型的第三方服務商合作，所有合作夥伴都受到與本隱私權政策相等或更嚴格的資料保護要求約束：</p>
          <ul>
            <li><strong>雲端基礎設施：</strong>Amazon Web Services (AWS) - 用於資料儲存和應用程式託管</li>
            <li><strong>支付處理：</strong>Apple App Store - 處理應用程式內購買</li>
            <li><strong>推播通知：</strong>Apple Push Notification Service (APNs) - 發送推播通知</li>
            <li><strong>分析服務：</strong>我們可能使用匿名化分析工具以改善服務品質</li>
          </ul>
          <p>我們要求所有第三方合作夥伴提供與本政策相同水準的資料保護，並且僅能基於我們的指示處理資料。</p>

          <h2>🔐 4. 資料保護措施</h2>
          
          <h3>4.1 技術保護</h3>
          <ul>
            <li><strong>加密傳輸：</strong>所有資料傳輸都使用 HTTPS/TLS 加密</li>
            <li><strong>密碼保護：</strong>使用 bcrypt 演算法安全儲存密碼</li>
            <li><strong>AWS 安全：</strong>資料儲存在 AWS 安全雲端基礎設施，符合 SOC 2 和 ISO 27001 標準</li>
            <li><strong>存取控制：</strong>實施嚴格的存取權限管理和多因素驗證</li>
            <li><strong>資料隔離：</strong>用戶資料在邏輯上完全隔離</li>
          </ul>

          <h3>4.2 資料備份與復原</h3>
          <ul>
            <li>啟用 DynamoDB 時間點復原功能（35天）</li>
            <li>定期備份重要資料</li>
            <li>實施災難復原計畫</li>
            <li>定期進行安全性評估和滲透測試</li>
          </ul>

          <h2>📱 5. App Tracking Transparency (ATT)</h2>
          <p>我們的應用程式目前<strong>不會</strong>跨應用程式或網站追蹤您的活動。如果未來我們需要實施此類追蹤功能，我們將：</p>
          <ul>
            <li>遵循 Apple 的 App Tracking Transparency 框架</li>
            <li>在追蹤前明確取得您的同意</li>
            <li>清楚說明追蹤的目的和範圍</li>
            <li>提供隨時撤回同意的選項</li>
          </ul>

          <h2>📤 6. 資料分享與揭露</h2>
          
          <h3>6.1 我們不會販售您的個人資料</h3>
          <p>Spotlike 絕不會販售、出租或以其他方式商業化您的個人資料給第三方。</p>

          <h3>6.2 有限度的資料分享</h3>
          <p>我們僅在以下情況下分享資料：</p>
          <ul>
            <li><strong>服務提供商：</strong>與協助我們提供服務的第三方供應商（如 AWS、Apple），這些供應商受到嚴格的合約約束</li>
            <li><strong>法律要求：</strong>遵守法律義務、法院命令或政府機關的合法要求</li>
            <li><strong>安全保護：</strong>保護用戶安全、防止非法活動或詐欺行為</li>
            <li><strong>商業轉讓：</strong>在公司併購或資產轉讓情況下（會事先通知用戶並給予選擇權）</li>
          </ul>

          <h3>6.3 公開資訊</h3>
          <p>以下資訊可能對其他用戶可見（您可以透過隱私設定控制）：</p>
          <ul>
            <li>使用者名稱</li>
            <li>頭像照片</li>
            <li>簽到資訊（根據曝光度設定）</li>
            <li>公開留言和回覆</li>
          </ul>

          <h2>⏱️ 7. 資料保存期限</h2>
          <ul>
            <li><strong>帳號資料：</strong>帳號存續期間及刪除後30天（法律要求除外）</li>
            <li><strong>簽到記錄：</strong>永久保存（除非用戶主動刪除或帳號刪除）</li>
            <li><strong>留言資料：</strong>永久保存（除非用戶主動刪除或帳號刪除）</li>
            <li><strong>購買記錄：</strong>依法規要求保存5年</li>
            <li><strong>使用日誌：</strong>90天後自動刪除</li>
            <li><strong>技術資料：</strong>安全防護所需的最短期間，通常不超過12個月</li>
          </ul>

          <h2>👤 8. 您的權利</h2>
          
          <h3>8.1 資料存取與控制</h3>
          <ul>
            <li><strong>查看資料：</strong>您可以在應用程式內查看和下載個人資料</li>
            <li><strong>修改資料：</strong>隨時更新個人檔案資訊</li>
            <li><strong>刪除資料：</strong>刪除特定簽到記錄或留言</li>
            <li><strong>匯出資料：</strong>要求匯出個人資料副本（機器可讀格式）</li>
            <li><strong>帳號刪除：</strong>完全刪除帳號和相關資料</li>
            <li><strong>限制處理：</strong>在特定情況下限制資料處理</li>
          </ul>

          <h3>8.2 通知控制</h3>
          <ul>
            <li>您可以在應用程式設定中管理推播通知偏好</li>
            <li>可以選擇接收或停用特定類型的通知</li>
            <li>隨時撤回推播通知同意而不影響其他服務功能</li>
          </ul>

          <h2>👶 9. 兒童隱私保護</h2>
          <p>Spotlike 不專門針對13歲以下兒童設計，我們不會故意收集13歲以下兒童的個人資訊。如果我們發現無意中收集了兒童的個人資訊，將會立即刪除並通知監護人。家長如發現兒童使用我們的服務，請立即聯繫我們。</p>

          <h2>🌏 10. 國際資料傳輸</h2>
          <p>您的資料可能會被傳輸到台灣以外的國家（主要是美國的 AWS 資料中心）進行處理和儲存。我們確保所有資料傳輸都符合以下保護措施：</p>
          <ul>
            <li>遵循台灣個人資料保護法的跨境傳輸規定</li>
            <li>與接收方簽署適當的資料保護協議</li>
            <li>實施技術和組織安全措施</li>
            <li>確保接收國具備適當的資料保護水準</li>
          </ul>

          <h2>🔄 11. 政策更新</h2>
          <p>我們可能會定期更新此隱私權政策以反映服務變更或法律要求。重要變更會透過以下方式通知您：</p>
          <ul>
            <li>應用程式內通知</li>
            <li>電子郵件通知（如有提供）</li>
            <li>在應用程式首頁顯著位置公告</li>
          </ul>
          <p>持續使用服務代表您同意更新後的政策。如不同意變更，您可以停止使用服務或刪除帳號。</p>

          <h2>12. Apple App Store 相關</h2>
          <p>當您透過 App Store 購買燈泡積分時：</p>
          <ul>
            <li>交易由 Apple 處理，我們不會收到您的支付卡資訊</li>
            <li>我們僅收到購買收據用於驗證和提供服務</li>
            <li>請參考 Apple 的隱私權政策了解支付相關的資料處理</li>
            <li>退款政策遵循 Apple App Store 的標準條款</li>
          </ul>

          <h2>13. 法律依據</h2>
          <p>我們基於以下法律依據處理您的個人資料：</p>
          <ul>
            <li><strong>契約履行：</strong>提供您所要求的服務</li>
            <li><strong>合法利益：</strong>改善服務品質、防止詐欺、確保安全</li>
            <li><strong>同意：</strong>特定功能如推播通知、個人化推薦</li>
            <li><strong>法律義務：</strong>遵循適用的法規要求</li>
          </ul>

          <div className="contact-info">
            <h2>14. 聯絡我們</h2>
            <p>如果您對此隱私權政策有任何疑問、需要行使您的權利，或對我們的資料處理實務有任何關切，請透過以下方式聯繫我們：</p>
            <ul>
              <li><strong>電子郵件：</strong>service@spotlike.net</li>
              <li><strong>回應時間：</strong>我們將在7個工作天內回覆您的查詢</li>
            </ul>
            
            <div className="highlight">
              <p><strong>感謝您使用 Spotlike！</strong><br />
              我們致力於保護您的隱私，並提供安全、有趣的捷運簽到體驗。我們會持續檢視和改善我們的隱私保護措施。如有任何疑問，歡迎隨時聯繫我們。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;