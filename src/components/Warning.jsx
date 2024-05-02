import { RxCross2 } from "react-icons/rx";
import { TbAlertTriangleFilled } from "react-icons/tb";

const Warning = () => {
  return (
    <>
      <div
        id="parent_container"
        className="rounded-md border-l-4 border-red-500 bg-red-100 p-2 mt-1 w-full max-w-[1024px] m-auto mb-5"
      >
        <div className="flex items-center justify-between space-x-2">
          <TbAlertTriangleFilled
            id="alert_icons"
            className="h-6 w-6 text-red-600"
          />
          <p className="text-xs text-blue-600 font-mono w-fit lg:text-lg">
            This is Free Api some Image not render properly, I am just making
            some Project form Real API.
          </p>
          <RxCross2
            id="cross_icons"
            className="h-6 w-6 cursor-pointer text-red-600  "
          />
        </div>
      </div>
    </>
  );
};

export default Warning;
