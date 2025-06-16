function Navbar({ show }) {
  return (
    <div className={`fixed top-0 left-0 w-full transition-transform duration-500 ease-in-out z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <h1 className="text-4xl text-[#9e998d] pt-3 pb-3 pl-8 shadow-md" style={{ backgroundColor: '#080f1d' }}> David Katunin </h1>
    </div>
  );
}

export default Navbar;
