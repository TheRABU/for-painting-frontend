import { Link } from "react-router-dom";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to",
      "Painting Express!",
      "Meet your favorite art collection",
    ],
    loop: 5,
  });
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
            {text}
            <Cursor cursorColor="blue" />
          </h1>

          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
            Get the best deals at minimum price !!
          </p>
          <div className="flex flex-wrap justify-center">
            <a href="#craft_section">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
              >
                Get started
              </button>
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};

export default Banner;
