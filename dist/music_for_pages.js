const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    lrcType: 3,
    audio: [
	{
        name: "sleepyhead",
        artist: 'submarine boy (Feat. Ocoenia)',
        url: './sleepyhead.mp3',
        cover: 'sleepyhead.jpg',
	lrc: 'sleepyhead.lrc'
      }
    ]
});