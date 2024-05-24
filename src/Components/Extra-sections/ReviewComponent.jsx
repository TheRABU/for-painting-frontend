const ReviewComponent = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">
              Look at what clients say about us
            </h2>
            <p className="dark:text-gray-600">Order your favorite art now</p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    I absolutely love the unique art pieces I purchased from
                    this site. The quality is amazing, and the customer service
                    was top-notch. Highly recommend to all art enthusiasts!
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Emily Johnson</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    The variety of crafts available is impressive. I found some
                    really beautiful items that fit perfectly with my home
                    decor. Shipping was a bit slow, but overall, a great
                    experience.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Michael Smith</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    I'm so happy with my purchase! The craftsmanship is superb,
                    and the pieces are truly one-of-a-kind. I had a minor issue
                    with my order, but it was resolved quickly by the friendly
                    support team.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Sarah Lee</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-50">
                  <p>
                    Beautiful art and craft items! I found exactly what I was
                    looking for and more. The checkout process was smooth, and
                    the items arrived well-packaged. Will recommend to friends
                    and family.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Lisa Green</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;
