import { Link } from "react-router-dom";
import x from "../image/x.svg";
import Plan from "./Plan";
const Pricing = () => {
  return (
    <main className="flex-1 xl:px-[60px]">
      <Plan />
      <div className="mb-[50px] flex flex-col justify-between gap-x-20 rounded-xl bg-white p-6 lg:flex-row lg:p-8 xl:p-14">
        <div className="mb-10 lg:max-w-[450px]">
          <h2 className="title pb-2">Frequently Asked Questions</h2>
          <p className="text-dark-200 pb-5">
            Still you have any questions? Contact our Team via
            <Link className="underline" href="mailto:support@skillbridge.com">
              support@skillbridge.com
            </Link>
          </p>
          <button
            type="button"
            className="rounded-md border px-5 py-[14px] font-medium "
          >
            See All FAQ
          </button>
        </div>
        <div className="m-auto flex w-fit flex-col gap-y-5 lg:m-0">
          <div className="flex max-w-[598px] flex-col gap-y-5 rounded-[10px] border p-6">
            <div className="flex items-center justify-between gap-x-4">
              <p className="text-dark-150 font-medium">
                Can I enroll in multiple courses at once?
              </p>
              <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                <img
                  src={x}
                  alt="icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-[598px] flex-col gap-y-5 rounded-[10px] border p-6">
            <div className="flex items-center justify-between gap-x-4">
              <p className="font-medium ">
                What kind of support can I expect from instructors?
              </p>
              <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                <img
                  src={x}
                  alt="icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-[598px] flex-col gap-y-5 rounded-[10px] border p-6">
            <div className="flex items-center justify-between gap-x-4">
              <p className="text-dark-150 font-medium">
                Are the courses self-paced or do they have specific start and
                end dates?
              </p>
              <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                <img
                  src={x}
                  alt="icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-[598px] flex-col gap-y-5 rounded-[10px] border p-6">
            <div className="flex items-center justify-between gap-x-4">
              <p className="text-dark-150 font-medium">
                Are there any prerequisites for the courses?
              </p>
              <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                <img
                  src={x}
                  alt="icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-[598px] flex-col gap-y-5 rounded-[10px] border p-6">
            <div className="flex items-center justify-between gap-x-4">
              <p className="text-dark-150 font-medium">
                Can I download the course materials for offline access?
              </p>
              <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                <img
                  src={x}
                  alt="icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
