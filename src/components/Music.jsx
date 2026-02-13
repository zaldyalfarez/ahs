const Music = () => {
  const tracks = [
    {
      title: "blue",
      artist: "yung kai",
      url: "https://open.spotify.com/track/3be9ACTxtcL6Zm4vJRUiPG?si=77994c414b9343cd",
    },
    {
      title: "About You",
      artist: "The 1975",
      url: "https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg?si=d35c1c684a064b35",
    },
    {
      title: "Wish You Were Here",
      artist: "Neck Deep",
      url: "https://open.spotify.com/track/4Ssi6tKwrTHi5qvDndrZRP?si=5557dd067b864c5c",
    },
    {
      title: "My Love",
      artist: "Westlife",
      url: "https://open.spotify.com/track/5p0ietGkLNEqx1Z7ijkw5g?si=fc854ab2c1084bb3",
    },
  ];

  return (
    <div className="bg-white opacity-95 -mt-20 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full hover:scale-105 transition-transform duration-300">
      <h2
        id="title-card"
        className="text-3xl font-semibold mb-4 text-center text-rose-600"
      >
        Lagu Yang Bikin Keinget Kamu
      </h2>
      <div className="w-full flex flex-col gap-3 items-center">
        {tracks.map((track, index) => (
          <a
            key={index}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-100 border border-purple-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm hover:bg-purple-200 transition-colors w-70 sm:w-full"
          >
            <div className="mr-3 shrink-0 text-purple-600 text-lg">🎵</div>
            <div className="flex flex-col">
              <span className="font-semibold">{track.title}</span>
              <span className="text-sm text-gray-600">{track.artist}</span>
            </div>
            <div className="ml-auto text-purple-600 font-semibold flex items-center gap-1">
              <span className="text-lg">👉</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Music;
