// src/setupTests.ts

// 載入 @testing-library/jest-dom，以使用 toBeInTheDocument()、toHaveClass() 等斷言
import "@testing-library/jest-dom";

// 在此可以加入其他全域測試設定與 mock

// 例如：全域模擬 localStorage（如有需要）
// beforeAll(() => {
//   const localStorageMock = (() => {
//     let store: Record<string, string> = {}
//     return {
//       getItem(key: string) {
//         return store[key] || null
//       },
//       setItem(key: string, value: string) {
//         store[key] = value.toString()
//       },
//       clear() {
//         store = {}
//       },
//     }
//   })()
//   Object.defineProperty(window, 'localStorage', { value: localStorageMock })
// })
