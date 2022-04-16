const Copyright = () => {
    return (
        <div className="border-t border-gray-200 pt-4">
            <div
                className="grid grid-cols-1 sm:grid-cols-4 md:gap-8 xl:m-auto w-full sm:mx-auto"
            >
                <div className="mt-0">
                    <div className="text-white text-sm py-2">
                        <div className="flex justify-center sm:justify-start items-center flex-1">
                            <a
                                href="https://www.linkedin.com"
                                className="rounded-md mr-2 inline-flex items-center leading-5 font-medium text-azure-blue betterhover:hover:text-white focus:outline-none transition duration-150 ease-in-out w-6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="sr-only">LinkedIn</span>
                                {/* <FaLinkedinIn /> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-0 col-span-1 sm:col-span-2">
                    <div className="text-white text-sm py-2 text-center">
                        <span className="text-azure-blue">
                            &copy; {new Date().getFullYear()} S.C. Malcons-Com S.R.L. All rights reserved.
                        </span>
                    </div>
                </div>
                <div className="mt-0" />
            </div>
        </div>
    );
};

export default Copyright;