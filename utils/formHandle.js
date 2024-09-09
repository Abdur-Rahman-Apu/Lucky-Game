const handleTypingSound = (e) => {
  const audio = new Audio();
  audio.src = "assets/audio/typing.mp3";
  audio.play();
};

export { handleTypingSound };
