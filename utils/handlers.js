const handleAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.play();
};

const handleTypingSound = () => {
  handleAudio("assets/audio/typing.mp3");
};

const handleErrorSound = () => {
  handleAudio("assets/audio/error.mp3");
};

export { handleErrorSound, handleTypingSound };
