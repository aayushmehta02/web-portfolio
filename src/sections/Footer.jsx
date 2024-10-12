const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-6">
            <section className="flex justify-center items-center space-x-6">
                {/* <!-- GitHub Button --> */}
                <button
                    href="/"
                    className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-[#333] text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:bg-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        stroke="white"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2C6.477 2 2 6.478 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482v-1.7c-2.781.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.068-.607.068-.607 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.34 1.088 2.91.832.09-.647.35-1.088.637-1.34-2.22-.254-4.555-1.112-4.555-4.948 0-1.093.39-1.987 1.03-2.687-.104-.254-.446-1.276.098-2.657 0 0 .84-.27 2.75 1.024A9.554 9.554 0 0 1 12 6.844a9.55 9.55 0 0 1 2.5.336c1.91-1.293 2.75-1.024 2.75-1.024.545 1.38.203 2.403.1 2.657.641.7 1.03 1.594 1.03 2.687 0 3.845-2.339 4.69-4.565 4.938.359.31.678.927.678 1.87v2.768c0 .267.18.577.688.478C19.135 20.165 22 16.418 22 12c0-5.522-4.478-10-10-10z"
                        ></path>
                    </svg>
                    <span
                        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        GitHub
                    </span>
                </button>

                {/* <!-- LinkedIn Button --> */}
                <button
                    href="/"
                    className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:bg-[#005582]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        stroke="white"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20.451 2H3.549A1.548 1.548 0 0 0 2 3.546v16.907C2 21.404 2.595 22 3.549 22h16.901A1.55 1.55 0 0 0 22 20.454V3.546A1.547 1.547 0 0 0 20.451 2zM8.837 18.065H5.928v-7.899h2.91v7.899zM7.382 8.431c-.933 0-1.688-.755-1.688-1.688 0-.934.755-1.688 1.688-1.688s1.687.754 1.687 1.688c0 .933-.754 1.688-1.687 1.688zm10.685 9.634h-2.91v-4.255c0-1.015-.02-2.318-1.414-2.318-1.416 0-1.633 1.107-1.633 2.247v4.326H9.8v-7.899h2.791v1.079h.039c.388-.733 1.335-1.505 2.748-1.505 2.937 0 3.478 1.934 3.478 4.45v3.875z"
                        ></path>
                    </svg>
                    <span
                        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        LinkedIn
                    </span>
                </button>

                {/* <!-- Instagram Button --> */}
                <button
                    href="/"
                    className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-pink-500 hover:to-orange-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        stroke="white"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                        ></path>
                    </svg>
                    <span
                        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                        Instagram
                    </span>
                </button>
            </section>
        </footer>
    );
};

export default Footer;
