import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

const WhereCanWeHelpCard = ({ heading, content, image, screenshot }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClickOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  return (
    <div className="group duration-300 grid grid-rows-2 md:grid-rows-[300px_250px] flex-col items-center justify-center rounded-md shadow-md max-[400px]:w-80 w-96">
      <div className=" flex justify-center items-center py-3 px-3 bg-[#a3a3a3] group-hover:bg-white duration-300 w-full h-full rounded-t-md overflow-hidden cursor-pointer">
        <img className=" scale-110 group-hover:scale-125 md:scale-150 md:group-hover:scale-125 duration-300 object-cover" src={image} alt="" />
      </div>
      <div className=" group-hover:bg-indigo duration-300 flex flex-col items-center justify-center text-center gap-3 pt-6 pb-8 px-2 sm:px-3 md:px-5 xl:px-6 rounded-b-md h-fit">
        <h1 className=" font-semibold text-2xl text-indigo group-hover:text-white duration-300">
          {heading}
        </h1>
        <p className=" group-hover:text-stone-200 duration-300 text-stone-500 text-sm sm:text-base">
          {content.slice(0, 160)}...
        </p>
        <div>
          <button
            onClick={() => setIsShown(!isShown)}
            className=" py-1.5 px-3 text-white bg-indigo group-hover:bg-white group-hover:text-indigo hover:opacity-90 duration-300 font-medium rounded"
          >
            Read more
          </button>
          {isShown && (
            <React.Fragment>
              <Dialog
                open={isShown}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xl"
              >
                <div className=" py-10 px-10 rounded">
                  <div className=" flex flex-col gap-2">
                    <h1 className=" font-semibold text-2xl lg:text-3xl text-indigo group-hover:text-white duration-300">
                      {heading}
                    </h1>
                    <p className=" group-hover:text-stone-200 duration-300 text-stone-500 text-sm lg:text-base">
                      {content}
                    </p>
                    <div className="my-8">
                      <img src={screenshot} alt="" />
                    </div>
                    <div className=" flex items-center justify-end">
                      <button onClick={handleClose} className=" bg-primary-blue text-white font-medium py-1.5 px-5 rounded hover:bg-navy-blue duration-300">Close</button>
                    </div>
                  </div>
                </div>
              </Dialog>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhereCanWeHelpCard;
