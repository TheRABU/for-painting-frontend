const TimelineComponent = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-3xl font-semibold">World Wide Delivery</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                Delivery all around the world
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Best seller Atikujjaman
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                  Dec 2020
                </time>
                <p className="mt-3">
                  Best seller of Painting Express from Bangladesh who has
                  successfully sold 400+ international arts.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Best Buyer Bonde Alicia
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                  Jul 2019
                </time>
                <p className="mt-3">
                  Most items brought on Painting Express is non other than our
                  lovely client Alicia from Spain.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Famous Painter Picaso Bolrado
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                  Jan 2016
                </time>
                <p className="mt-3">Most famous painter of Painting Express.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
