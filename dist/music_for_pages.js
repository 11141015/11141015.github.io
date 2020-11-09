const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    lrcType: 3,
    audio: [
	{
        name: "想见你想见你想见你",
        artist: '八三夭',
        url: './想見你想見你想見你.mp3',
        cover: '想見你想見你想見你.jpg',
	lrc: '想見你想見你想見你.lrc'
      }
    ]
});