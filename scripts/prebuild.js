const fs = require('fs')
const path = require('path')

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  if (!fs.existsSync(src)) return
  
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyDir(path.join(__dirname, '../content/notes'), path.join(__dirname, '../public/notes'))
console.log('Copied content/notes to public/notes')

copyDir(path.join(__dirname, '../content/demos'), path.join(__dirname, '../public/demos'))
console.log('Copied content/demos to public/demos')
