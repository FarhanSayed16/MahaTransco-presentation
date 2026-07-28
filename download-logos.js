const fs = require('fs')
const https = require('https')
const path = require('path')

const domains = {
  chatgpt: 'openai.com',
  claude: 'anthropic.com',
  perplexity: 'perplexity.ai',
  runway: 'runwayml.com',
  gamma: 'gamma.app',
  notion: 'notion.so',
  midjourney: 'midjourney.com',
  descript: 'descript.com',
  elevenlabs: 'elevenlabs.io',
  heygen: 'heygen.com'
}

const dir = path.join(__dirname, 'public', 'tools')
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

Object.entries(domains).forEach(([name, domain]) => {
  const file = fs.createWriteStream(path.join(dir, `${name}.png`))
  https.get(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`, (response) => {
    response.pipe(file)
    file.on('finish', () => {
      file.close()
      console.log(`Downloaded ${name}.png`)
    })
  }).on('error', (err) => {
    fs.unlink(file.path)
    console.error(`Error downloading ${name}:`, err.message)
  })
})
