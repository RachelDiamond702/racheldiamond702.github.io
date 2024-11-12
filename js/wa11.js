const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [`/img/wa11-images/pic1.jpg`, `/img/wa11-images/pic2.jpg`, `/img/wa11-images/pic3.jpg`, `/img/wa11-images/pic4.jpg`, `/img/wa11-images/pic5.jpg`];

/* Declaring the alternative text for each image file */

const alts = {
  'img/wa11-images/pic1.jpg' : 'A cat sitting on a stool',
  'img/wa11-images/pic2.jpg' : 'A black cat laying in loaf form',
  'img/wa11-images/pic3.jpg' : 'A cat laying under a table on a blanket',
  'img/wa11-images/pic4.jpg' : 'A white cat sitting in a picnic basket',
  'img/wa11-images/pic5.jpg' : 'A white cat sitting ontop of ar arch'
}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }
  
  /* Wiring up the Darken/Lighten button */
  
  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  