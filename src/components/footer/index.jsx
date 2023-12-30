const Footer = () => {
  return (
    <footer className="bg-slate-100 mt-6 p-3 sm:p-5 bg-base-100 rounded-xl container mx-auto text-base text-center text-dark-primary">
      Copyright © {new Date().getFullYear()} All right reserved - Design by
      <a
        target="_blank"
        className="text-primary block sm:inline-flex ml-2"
        href="https://github.com/shivprajapat"
        rel="noreferrer"
      >
        Shiv Kumar Prajapat.
      </a>
    </footer>
  );
};

export default Footer;
