function Footer() {
  return (
    <footer className="relative bottom-0 left-10 py-5 ml-2 p-3 mt-0">
      <div className="flex items-center">
        <p className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} Lewis Mcguire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
