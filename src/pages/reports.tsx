import { NextPage } from "next";
import React from "react";
import MostAvailable from "../components/Charts/MostAvailable";
import { MostAvailableNotDemanded } from "../components/Charts/MostAvailableNotDemanded";
import MostDemanded from "../components/Charts/MostDemanded";
import { MostDemandedNotAvailable } from "../components/Charts/MostDemandedNotAvailable";
import Header from "../components/Header";

const Reports: NextPage = () => {
  return (
    <div>
      <Header title="Reports" />
      <div className="flex justify-center p-6">
        <div className="grid grid-cols-1 w-full max-w-screen-md gap-x-4 gap-y-16 mt-10">
          <div className="col-span-1  border shadow p-2 bg-white">
            <MostDemanded />
          </div>
          <div className="col-span-1 border shadow p-2 bg-white">
            <MostAvailable />
          </div>
          <div className="col-span-1 border shadow p-2 bg-white">
            <MostDemandedNotAvailable />
          </div>
          <div className="col-span-1 border shadow p-2 bg-white">
            <MostAvailableNotDemanded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
