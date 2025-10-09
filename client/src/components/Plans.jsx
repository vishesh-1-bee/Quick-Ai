import React from 'react';
import { PricingTable } from '@clerk/clerk-react';

const Plans = () => {
  return (
    <div className="my-16 mx-auto px-4 max-w-6xl z-20  ">
      <div className="text-center flex flex-col">
        <h2 className="text-4xl md:text-6xl mb-3 font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-base text-gray-600">
          Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
        </p>
      </div>

      {/* Displaying price */}
      <div className="mt-14 flex justify-center w-[100%]  ">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plans;
