import aboutImage from "../../assets/images/1ff108caf42e05aafc2d71749bf4d116.png";

export const AboutMe = () => {
  return (
    <section className="grid grid-cols-1 font-jakarta grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 h-fit lg:max-h-[70vh] ">
        <article className="flex flex-col place-content-center py-5 gap-5 lg:gap-4 px-5 md:px-10  lg:pl-14 lg:pr-5">
          <div className="grid grid-cols-[auto,1fr] items-center gap-2 ">
            <div className="w-2 h-16 bg-primary"></div>
            <h1 className="text-2xl lg:text-heading_desktop font-medium text-black">
              We Provide <span className="text-gray-700">Good Coffee</span> and{" "}
              <span className="text-gray-700">Healthy Meals</span>
            </h1>
          </div>

          <p className="text-text h-fit ">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>

          <div className="grid gap-2 ">
            <div className="grid grid-cols-[auto,1fr] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-green-600">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-text pl-2">High quality beans</p>
            </div>

            <div className="grid grid-cols-[auto,1fr] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-green-600">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-text pl-2">
                Healthy meals, you can request the ingredients
              </p>
            </div>

            <div className="grid grid-cols-[auto,1fr] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-green-600">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-text pl-2">
                Chat with our staff to get better experience for ordering
              </p>
            </div>

            <div className="grid grid-cols-[auto,1fr] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-green-600">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-text pl-2">
                Free member card with a minimum purchase of IDR 200.000.
              </p>
            </div>
          </div>
        </article>

        <article className="hidden lg:block">
          <div className=" w-full h-full ">
            <img
              className="lg:h-full lg:w-full object-cover object-top"
              src={aboutImage}
              alt="...."
            />
          </div>
        </article>
      </section>
  )
}
