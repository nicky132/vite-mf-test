# Module Federation

## 说明

app2 中的 App.jsx 动态加载 jweixin 中的 js
条件为 true，执行 app1 会加载 dist 中的 jweixin
条件为 false，执行 app1 不会加载 dist 中的 jweixin

## How to use

使用以下步骤运行，由于 vite 是按需编译，所以 app2 必须先打包启动，无法 2 个 App 同时是开发模式

```bash
cd app2
yarn build
yarn preview
```

new Terminal

```bash
cd app1
yarn dev
```

Both `app1` and `app2` are independently deployed apps:

- `app1`: http://localhost:3001
- `app2`: http://localhost:3002
