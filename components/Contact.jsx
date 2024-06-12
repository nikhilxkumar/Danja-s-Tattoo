import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
        Contact
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
          +49-173-3951881
            </p>
          <p><a href="https://www.instagram.com/danjas_tattoo_/" style="color: #E6533C;">My Instagram</a> (Preferred)</p>
        </div>
      </div>
  );
};

export default Contact;
