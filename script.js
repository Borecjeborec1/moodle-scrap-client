const subForm = document.getElementById('input1');
const topForm = document.getElementById('input2');
const form = document.getElementById('form');
const scrapBtn = document.getElementById('scrapBtn');
const svg = document.getElementById('svg');
const resMsg = document.getElementById('resMsg');
const downloadBtn = document.getElementById('downloadBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (subForm.value && topForm.value) {
    postNotes(subForm.value, topForm.value);
    resMsg.style.display = 'block';
    svg.style.display = 'block';
    scrapBtn.disabled = true;
    setTimeout(() => {
      resMsg.innerText = 'Download the .txt file';
      svg.style.display = 'none';
      downloadBtn.style.display = 'block';
      subForm.value = '';
      topForm.value = '';
    }, 5000);
  }
});

async function postNotes(predmet, tema) {
  await fetch('https://moodle-scraper.herokuapp.com/api/create', {
    method: 'POST',
    body: JSON.stringify({ subject: predmet, topic: tema }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
