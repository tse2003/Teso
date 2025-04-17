import Image from 'next/image';

export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/ub.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">УЛААНБААТАР ХОТЫН ХОГ ХАЯГДЛЫН УХААЛАГ МЕНЕЖМЕНТ</h1>
            <p className="text-lg md:text-xl">ЭКО ХОТ</p>
          </div>
        </div>
      </section>

      {/* 3 Column Flex Section */}
      <section className="flex flex-col md:flex-row">
        {/* Left Green */}
        <div className="flex-1 bg-green-500 text-white flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-lg font-bold mb-4">
            Бидний шийдлүүд Улаанбаатар хотын хоггүй байх орчинг 50% ба түүнээс дээш хувиар сайжруулж чадна.
          </h3>
          <div className="flex gap-2 flex-wrap justify-center">
            <button className="bg-white text-green-600 px-4 py-2 rounded text-sm">🎥 Бичлэг үзэх</button>
            <button className="border border-white px-4 py-2 rounded text-sm">📘 ИЛҮҮ ИХ</button>
          </div>
        </div>

        {/* Center White */}
        <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 text-center">
          <Image src="/city.png" alt="Used by Parks" width={100} height={100} />
          <h3 className="text-lg font-bold mt-4">
            <span className="text-green-600">ХЭРЭГЖҮҮЛСЭН ГАЗРУУД</span>
          </h3>
          <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 text-sm">🧾 ЛАВЛАГАА</button>
        </div>

        {/* Right Green */}
        <div className="flex-1 bg-green-500 text-white flex flex-col items-center justify-center p-8 text-center">
          <h3 className="text-lg font-bold mb-4">
            ЭНЭХҮҮ ШИЙДЛЭЭР ЗАРДЛЫГ ХЭРХЭН ХЭМНЭХ ВЭ?
          </h3>
          <button className="bg-white text-green-600 px-4 py-2 rounded text-sm">📊 ТООЦООЛОХ</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
        <aside className='ml-10'>
          <p>
            ЭКО ХОТ
            <br />
            ТӨСӨЛ 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
