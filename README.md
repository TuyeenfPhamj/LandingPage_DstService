# DST Group Landing Page

Landing page React + TypeScript + Vite + Tailwind CSS cho DST Group.

## Chạy local

```bash
npm install
npm run dev
```

URL mặc định:

```txt
http://127.0.0.1:5173
```

## Kiểm tra

```bash
npm run lint
npm run build
```

## Build production

```bash
npm run build
```

Thư mục build:

```txt
dist
```

## Deploy

Vercel:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Render Static Site:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
