import { mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'raw-photos'
const FULL = 'public/img'
const THUMBS = 'public/img/thumbs'

await mkdir(FULL, { recursive: true })
await mkdir(THUMBS, { recursive: true })

const files = (await readdir(SRC)).filter(f => /\.jpe?g$/i.test(f))

for (const f of files) {
    const fullOut = path.join(FULL, f)
    const thumbOut = path.join(THUMBS, f)

    // 大图：最长边限 1920px、质量 80 —— Lightbox 用
    if (existsSync(fullOut)) {
        console.log(f, '→ 大图已存在，跳过')
    } else {
        await sharp(path.join(SRC, f))
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(fullOut)
    }

    // 缩略图：640px、质量 75 —— 画廊网格用
    if (existsSync(thumbOut)) {
        console.log(f, '→ 缩略图已存在，跳过')
    } else {
        await sharp(path.join(SRC, f))
            .resize({ width: 640 })
            .jpeg({ quality: 75, mozjpeg: true })
            .toFile(thumbOut)
    }

    console.log(f, '✓')
}
console.log(`完成：${files.length} 张 → public/img + public/img/thumbs`)