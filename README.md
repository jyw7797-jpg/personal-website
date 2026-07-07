# Wang Jiyue Personal Website

面向招聘者的中英文个人求职网站，主题为 **Turning Change into Long-Term Value**。项目使用 React + Vite + TypeScript + Tailwind CSS + Framer Motion，适合静态部署。

## 安装

```bash
npm install
```

## 本地启动

```bash
npm run dev
```

启动后打开终端显示的本地地址，通常是 `http://127.0.0.1:5173/`。

## 构建

```bash
npm run build
```

构建产物会生成在 `dist/` 目录。

## 替换案例图片

案例图片放在：

```text
public/images/cases/
```

请保持以下文件名不变：

```text
kaoba167.png
government-business.png
uae-market-entry.png
```

如果想换成其他路径，请同步修改 `src/data/content.ts` 中每个 case 的 `image` 字段。

## 修改中英文文案

所有主要文案都集中在：

```text
src/data/content.ts
```

每段内容都使用统一结构：

```ts
{
  en: "English text",
  zh: "中文文案"
}
```

修改这里即可更新页面，不需要复制两套组件。

## 修改联系方式

Footer 的邮箱、LinkedIn、GitHub 和简历链接也在 `src/data/content.ts` 中：

```ts
footer: {
  emailHref: "mailto:hello@example.com",
  linkedinHref: "https://www.linkedin.com/",
  githubHref: "https://github.com/"
}
```

## 部署

推荐部署到 Vercel、Netlify 或 GitHub Pages。

通用流程：

1. 运行 `npm run build`
2. 将 `dist/` 作为静态站点目录部署
3. 如果使用 Vercel 或 Netlify，构建命令填写 `npm run build`，输出目录填写 `dist`
