import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row py-5 md:py-10 px-5 md:px-10 container md:justify-between">
      <p className="text-gray-100 text-[12px] font-medium ml-2">
        <span className="text-[14px]">&copy;</span>TIMILEYIN
      </p>
      <div className="flex items-center">
        <a
          href="https://github.com/timicodes21?tab=repositories"
          target="_blank"
          className="mx-2"
        >
          <GithubIcon className="text-gray-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/timileyin-babalola-283b4b149/"
          target="_blank"
          className="mx-2"
        >
          <LinkedinIcon className="text-gray-100" />
        </a>
        <a href="https://x.com/dev_timi?s=21" target="_blank" className="mx-2">
          <Twitter className="text-gray-100" />
        </a>
      </div>
      <div />
    </div>
  );
};

export default Footer;
