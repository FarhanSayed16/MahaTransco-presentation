const si = require('simple-icons');
fetch('https://cdn.jsdelivr.net/npm/simple-icons@10.0.0/icons/openai.svg')
  .then(r => r.text())
  .then(t => {
    console.log('OpenAI:', t.match(/d="([^"]+)"/)[1]);
    console.log('Claude:', si.siAnthropic.path);
    console.log('Perplexity:', si.siPerplexity.path);
    console.log('Notion:', si.siNotion.path);
    console.log('ElevenLabs:', si.siElevenlabs.path);
  });
