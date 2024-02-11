

export const WrapperForm = ({ children, titleForm }) => (
  <>
    <div className=" bg-white mx-auto my-10 max-w-lg rounded-lg bg-white-500 p-8 shadow-2xl md:p-12">
      <div className="my-5 w-full">

      </div>
      <h3 className="text-center text-2xl font-bold uppercase text-headers">
        {titleForm}
      </h3>

      {children}
    </div>
  </>
);
