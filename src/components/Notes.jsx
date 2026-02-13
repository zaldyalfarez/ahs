const Notes = () => {
  const reminders = [
    "Jaga kesehatan, jangan sering begadang.",
    "Kalau keluar rumah pakai jaket.",
    "Bawa motor jangan ngebut2an.",
    "Jangan terobos hujan.",
    "Makan jangan ditunda-tunda.",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full hover:scale-105 transition-transform duration-300">
      <h2
        id="title-card"
        className="text-3xl font-semibold mb-4 text-center text-rose-600"
      >
        Some Reminders
      </h2>
      <div className="w-full flex flex-col gap-3">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="flex items-center bg-pink-100 border border-rose-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm"
          >
            {/* Icon info di kiri */}
            <div className="mr-3 shrink-0">
              <svg
                className="w-5 h-5 text-rose-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-4a1 1 0 00-1 1v2a1 1 0 102 0V7a1 1 0 00-1-1zm0 6a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm">{reminder}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
