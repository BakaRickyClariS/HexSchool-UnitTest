# HexSchool-UnitTest

這是一個使用 **React + TypeScript + Vite** 的練習專案，主要目標是學習如何為 React 組件撰寫單元測試，包括操作新增、搜尋、刪除節點 (node) 的功能。這個專案同時練習 `map` / `filter` 的行為與使用 `reduce` 重現這些行為。

---

## 🚀 技術棧

- **React**
- **TypeScript**
- **Vite**
- **Vitest + @testing-library/react + @testing-library/jest-dom**：作為測試框架與工具
- **ESLint**：維持程式風格與品質

---

## 📂 專案結構（大致）
```
HexSchool-UnitTest/
├── src/
│ ├── LinkedList.tsx ← 主組件：新增、搜尋、刪除節點功能
│ ├── mapWithReduce.ts ← 將 map 行為用 reduce 重現
│ ├── filterWithReduce.ts ← 將 filter 行為用 reduce 重現
│ └── … ← 其他輔助檔案
├── src/tests/
│ ├── LinkedList.test.tsx ← 測試新增、刪除、搜尋等功能
│ └── mapWithReduce.test.ts ← 測試 mapWithReduce 是否正常運作
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✅ 功能

- **新增節點（Insert）**  
  在輸入框中輸入內容，按下 Enter 或「Add」按鈕，列表中會新增一個節點，並且輸入框會被清空。

- **刪除節點（Delete）**  
  點擊每個節點旁邊的 Delete 按鈕，可以刪除該節點。

- **搜尋節點（Search / Filter）**  
  輸入某個節點名稱，按下 Search 按鈕後，只顯示符合名稱的節點。搜尋輸入清空後，列表恢復顯示所有節點。

- **mapWithReduce / filterWithReduce**  
  純函式練習，用 `reduce` 重現 `map` 與 `filter` 的功能並提供測試。

---

## 🧪 測試

專案裡有撰寫單元測試來驗證功能是否如預期。

- **測試方向**

  測試純函式 mapWithReduce 是否如原生 map 那樣運作。
  
  測試純函式 filterWithReduce 是否如原生 filter 那樣運作。
  
- **測試 LinkedList 組件的互動行為：**
  
  新增節點後是否在畫面上出現，輸入框是否清空。
  
  刪除節點操作是否生效（節點在畫面中移除）。
  
  搜尋功能是否可以過濾節點；清空搜尋後是否恢復完整列表。

- **執行測試**
```bash
# 執行所有測試
npm run test

# 若要 watch 模式（檢視測試檔有變動時重新跑）
npm run test -- --watch
```
