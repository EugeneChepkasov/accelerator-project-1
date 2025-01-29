const videoContainer = document.querySelector('.video');
const videoImg = document.querySelector('.video__media');
const videoButton = document.querySelector('.video__button');

const loadVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=509Z4Bcb0db2ABVJ?rel=0&showinfo=0&autoplay=1';
  iframe.classList.add('video__media');
  iframe.setAttribute('allow', 'autoplay');
  videoImg.remove();
  videoButton.remove();
  videoContainer.append(iframe);
};

const loadVideoOnClick = () => {
  videoButton.addEventListener('click', loadVideo);
  videoButton.addEventListener('keydowun', (evt) => {
    if (evt.key === 'Enter') {
      loadVideo();
    }
  });
};

export {loadVideoOnClick};
