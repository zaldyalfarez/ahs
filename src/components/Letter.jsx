import { useState } from "react";

const paragraphs = [
  "Setiap hari kamu bikin hidupku lebih berwarna. Dari ngobrol 24/7, bertukar kabar, kirim-kiriman foto, call sampai larut malam, kirim reels atau VT, mabar game, sampai semua hal kecil lainnya yang belum aku sebutin, semua itu bikin aku bahagia. Aku nggak pernah nyangka bisa sedekat ini sama seseorang yang bikin aku merasa nyaman dan dimengerti.",
  "Hampir dua tahun kita dekat, dan selama itu kamu selalu hadir dengan membawa canda, tawa, dan keceriaan. Kamu banyak berkontribusi di hidup aku tanpa kamu sadar, kamu bikin aku berubah jadi versi yang lebih baik dari sebelumnya. Aku bakal terus berusaha supaya bisa gapai kamu lagi, supaya kita tetap bisa berbagi momen-momen kecil yang ternyata berarti banget.",
  "Aku pengen kamu selalu inget kalau kamu itu cantik dan baik hati. Jangan sering insecure ya, karena aku selalu melihat sisi hebatmu yang kadang kamu sendiri nggak sadar. Lebih terbuka lagi kalau mau cerita atau minta tolong sama aku, aku akan bantu semampuku, karena aku pengen jadi orang yang selalu bisa bikin kamu merasa aman dan mendukung.",
  "Apapun yang terjadi, aku bakal tetap pilih kamu. Kamu itu lebih dari sekadar teman, lebih dari sekadar seseorang yang bikin aku ketawa, kamu bagian penting dari hidup aku, dan aku nggak mau kehilangan itu. Kamu berarti banget buat aku, lebih dari yang bisa aku ungkapin dengan kata-kata.",
  "Aku cuma pengen kamu tahu, semua hal yang kita lakukan bareng, semua cerita, semua tawa dan obrolan sampai larut malam, semua itu bikin aku bersyukur setiap hari. Terima kasih udah ada di hidup aku, dan terima kasih udah jadi kamu yang bikin aku ingin terus dekat sama kamu, you mean so much to me.",
];

const Letter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="bg-white opacity-95 rounded-2xl -mt-20 shadow-lg p-8 flex flex-col items-center max-w-md w-full hover:scale-105 transition-transform duration-300">
      <h2
        id="title-card"
        className="text-3xl font-semibold text-center text-rose-600"
      >
        Surat Pendek Buat Kamu
      </h2>

      <div className="w-full h-60  rounded-lg flex items-center justify-center p-4 overflow-y-auto">
        <p className="text-gray-800 text-sm text-balance">
          {paragraphs[currentIndex]}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-lg bg-red-200 text-red-700 
             hover:bg-red-300 active:bg-red-400 disabled:bg-red-100 disabled:text-red-300 transition-colors"
        >
          Kembali
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === paragraphs.length - 1}
          className="px-4 py-2 rounded-lg bg-red-500 text-white 
             hover:bg-red-600 active:bg-red-700 disabled:bg-red-100 disabled:text-red-300 transition-colors"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Letter;
