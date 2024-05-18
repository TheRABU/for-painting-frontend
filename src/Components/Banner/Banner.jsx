const Banner = () => {
  return (
    // <section className="bg-gray-50">
    //   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    //     <div className="mx-auto max-w-xl text-center">
    //       <h1 className="text-3xl font-extrabold sm:text-5xl">
    //         Understand User Flow.
    //         <strong className="font-extrabold text-red-700 sm:block">
    //           {" "}
    //           Increase Conversion.{" "}
    //         </strong>
    //       </h1>

    //       <p className="mt-4 sm:text-xl/relaxed">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
    //         illo tenetur fuga ducimus numquam ea!
    //       </p>

    //       <div className="mt-8 flex flex-wrap justify-center gap-4">
    //         <a
    //           className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
    //           href="#"
    //         >
    //           Get Started
    //         </a>

    //         <a
    //           className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
    //           href="#"
    //         >
    //           Learn More
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="dark:bg-violet-600">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
            Provident blanditiis cum exercitationem
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};

export default Banner;
