const subForm = document.getElementById('input1');
const topForm = document.getElementById('input2');
const form = document.getElementById('form');
const scrapBtn = document.getElementById('scrapBtn');
const svg = document.getElementById('svg');
const resMsg = document.getElementById('resMsg');
const downloadBtn = document.getElementById('downloadBtn');
const openBtn = document.getElementById('openBtn');
const subIcon = document.getElementById('icon1');
const topIcon = document.getElementById('icon2');
const iconSubText = document.getElementById('iconSubText');
const iconTopText = document.getElementById('iconTopText');

let topicArr = [
  //BIOLOGIE
  'prvoci',
  'houbovci',
  'žahavci',
  'ryby',
  'obojživelníci',
  'plazi',
  'ptáci',
  'savci',
  'ploštěnci a hlísti',
  'měkkýši',
  'kroužkovci',
  'členovci - trojlaločnatci, klepítkatci, žabernatí',
  'vzdušnicovci',
  'paryby',
  //FYZIKA
  'termodynamika a molekulová fyzika',
  'molární veličiny',
  'vnitřní energie, práce, teplo',
  'struktura a vlastnosti plynu i',
  'pevné látky i',
  'pevné látky ii',
  'struktura a vlastnosti plynu - jednoduché',
  'změny skupenství',
  'kapaliny',
  'mechanické kmitání - kinematika.',
  'dynamika kmitavého pohybu',
  'mechanické vlnění',
  'nekovy',
  'p-prvky - kovy',
  'p-prvky - polokovy',
  's-prvky - kovy alkalických zemin',
  's-prvky - alkalické kovy',
  'd-prvky - viii.b skupina',
  'd-prvky - i.b a ii.b skupina',
  'analytická chemie',
  'základy organické chemie',
  'názvosloví uhlovodíků',
  'uhlovodíky nasycené',
  'alkeny, alkadieny',
  'alkyny',
  'areny',
  'd-prvky - ostatní',
  'komplexní sloučeniny',
];

form.addEventListener('submit', (e) => {
  resMsg.innerText = 'Wait a while, we are collecting all data for you.';

  e.preventDefault();
  if (
    subForm.value.toLowerCase() == 'biologie' ||
    subForm.value.toLowerCase() == 'fyzika' ||
    subForm.value.toLowerCase() == 'chemie'
  ) {
    if (topicArr.indexOf(topForm.value.toLowerCase()) > -1) {
      //postNotes(subForm.value, topForm.value);
      resMsg.innerText = 'Wait a while, we are collecting all data for you.';
      resMsg.style.display = 'block';
      svg.style.display = 'block';
      scrapBtn.disabled = true;
      setTimeout(() => {
        downloadBtn.download = topForm.value;
        downloadBtn.href = `./assets/${subForm.value}/${topForm.value}.txt`;
        resMsg.innerText = 'Download the .txt file';
        svg.style.display = 'none';
        downloadBtn.style.display = 'block';
        subForm.value = '';
        topForm.value = '';
      }, 4322);
    } else {
      svg.style.display = 'block';
      resMsg.style.display = 'block';
      setTimeout(() => {
        resMsg.innerHTML = `<p >Topic <b>${topForm.value.toLowerCase()}</b> does not exists is subject <b>${subForm.value.toLowerCase()}</b>.</p>`;
        svg.style.display = 'none';
        subForm.value = '';
        topForm.value = '';
      }, 3000);
    }
  } else {
    svg.style.display = 'block';
    resMsg.style.display = 'block';
    setTimeout(() => {
      resMsg.innerHTML = `<p >Subject <b>${subForm.value.toLowerCase()} </b>does not exists.</p>`;
      svg.style.display = 'none';
      subForm.value = '';
      topForm.value = '';
    }, 3000);
  }
});

subIcon.addEventListener('mouseenter', () => {
  iconSubText.style.opacity = 1;
});
subIcon.addEventListener('mouseleave', () => {
  iconSubText.style.opacity = 0;
});
topIcon.addEventListener('mouseenter', () => {
  iconTopText.style.opacity = 1;
  if (subForm.value.toLowerCase() == 'biologie') {
    iconTopText.innerText =
      'prvoci; houbovci; žahavci; ryby; obojživelníci; plazi; ptáci; savci; ploštěnci a hlísti; měkkýši; kroužkovci; členovci - trojlaločnatci, klepítkatci, žabernatí; vzdušnicovci; paryby';
  } else if (subForm.value.toLowerCase() == 'fyzika') {
    iconTopText.innerText =
      'termodynamika a molekulová fyzika; molární veličiny; vnitřní energie, práce, teplo; struktura a vlastnosti plynu i; pevné látky i; pevné látky  ii; struktura a vlastnosti plynu - jednoduché; změny skupenství; kapaliny; mechanické kmitání - kinematika.; dynamika kmitavého pohybu; mechanické vlnění';
    iconTopText.style.width = '175px';
    iconTopText.style.marginTop = '-75px';
  } else if (subForm.value.toLowerCase() == 'chemie') {
    iconTopText.innerText =
      'nekovy; p-prvky - kovy; p-prvky - polokovy; s-prvky - kovy alkalických zemin; s-prvky - alkalické kovy; d-prvky - viii.b skupina; d-prvky - i.b a ii.b skupina; analytická chemie; základy organické chemie; názvosloví uhlovodíků; uhlovodíky nasycené; alkeny, alkadieny; alkyny; areny; d-prvky - ostatní; komplexní sloučeniny';
    iconTopText.style.marginTop = '-75px';
    iconTopText.style.width = '200px';
  } else {
    iconTopText.innerText = '';
  }
});
topIcon.addEventListener('mouseleave', () => {
  iconTopText.style.opacity = 0;
});
/*
async function postNotes(predmet, tema) {
  await fetch('https://moodle-scraper.herokuapp.com/api/create', {
    method: 'POST',
    body: JSON.stringify({ subject: predmet, topic: tema }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
//*/
