function NavBar() {
  return (
    <div className="w-full h-[4rem] bg-transparent mt-5 flex justify-between items-center p-5 fixed z-50">
      <img src="/logo.svg" alt="logo" className="p-2.5 cursor-pointer" />
      <div className="flex justify-between gap-10 items-center font-semibold">
        <button>About us</button>
        <button className="">Pro</button>
        <button className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-500 transition-colors duration-500">
          Start Gifting
        </button>
      </div>
    </div>
  );
}

export default NavBar;
