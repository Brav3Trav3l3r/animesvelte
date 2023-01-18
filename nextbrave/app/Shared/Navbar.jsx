import { FiSearch } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav class="bg-zinc-900 border-b-2 border-zinc-800 text-baseline justify-between h-16 px-4 md:px-10 xl:px-20 fixed top-0 drop-shadow-2xl w-screen flex items-center z-50 ">
            <div class="topcontent flex items-center space-x-4 md:space-x-8 ">
                <div className="menu text-zinc-300 text-2xl">
                    <HiMenuAlt1 />
                </div>
                <div class="logo flex items-center space-x-4">
                    <a href="/"><h1 class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 text-2xl md:text-3xl font-medium ">aniverse</h1></a>
                </div>
            </div>

            <div className="itemsend flex items-center space-x-4 md:space-x-8">
                <div className="search text-zinc-300 text-2xl">
                    <FiSearch />
                    {/* <iconify-icon icon="ic:outline-search"></iconify-icon> */}
                </div>
                <div class="profile w-10 h-10 rounded-full ring-2 ring-purple-400/40 realtive truncate ">
                    <img src="./animeposter/eren.png" alt="profile" class="object-cover w-full h-full" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;