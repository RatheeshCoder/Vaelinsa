import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#100e09]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-4 lg:grid-cols-6 md:gap-8 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="mb-10 col-span-full lg:col-span-2 lg:mb-0">
            <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
              <img src="/path-to-your-image.svg" alt="Pagedone Logo" className="w-40 h-8" />
            </a>
            <p className="py-8 text-sm text-center text-[#F5F4EB] lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Have any query?
            </p>
            <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-[#476fff] rounded-full shadow-sm text-xs text-[#100e09] mx-auto transition-all duration-500 hover:bg-[#F5F4EB] lg:mx-0">
              Contact us
            </a>
          </div>

          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-[#F5F4EB] mb-7">Pagedone</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Home</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">About</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Pricing</a>
              </li>
              <li>
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Features</a>
              </li>
            </ul>
          </div>

          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-[#F5F4EB] mb-7">Products</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Figma UI System</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Icons Assets</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Responsive Blocks</a>
              </li>
              <li>
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Components Library</a>
              </li>
            </ul>
          </div>

          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-[#F5F4EB] mb-7">Resources</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">FAQs</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Quick Start</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Documentation</a>
              </li>
              <li>
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">User Guide</a>
              </li>
            </ul>
          </div>

          <div className="text-left lg:mx-auto">
            <h4 className="text-lg font-medium text-[#F5F4EB] mb-7">Blogs</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">News</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Tips & Tricks</a>
              </li>
              <li className="mb-6">
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">New Updates</a>
              </li>
              <li>
                <a href="javascript:;" className="text-[#F5F4EB] hover:text-[#476fff]">Events</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a href="javascript:;" className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 hover:bg-indigo-600">
                <img src="/path-to-your-image.svg" alt="Social Media" width="20" height="20" />
              </a>
              <a href="javascript:;" className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 hover:bg-indigo-600">
                <img src="/path-to-your-image.svg" alt="Social Media" className="w-[1.25rem] h-[1.125rem]" />
              </a>
              <a href="javascript:;" className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 hover:bg-indigo-600">
                <img src="/path-to-your-image.svg" alt="Social Media" className="w-[1rem] h-[1rem]" />
              </a>
              <a href="javascript:;" className="flex items-center justify-center bg-gray-700 rounded-full w-9 h-9 hover:bg-indigo-600">
                <img src="/path-to-your-image.svg" alt="Social Media" className="w-[1.25rem] h-[0.875rem]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
