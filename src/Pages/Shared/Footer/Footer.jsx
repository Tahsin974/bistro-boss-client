const Footer = () => {
  return (
    <footer>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 bg-neutral text-neutral-content">
        <div className="text-center mx-auto  w-full h-full bg-[#1F2937] py-10">
          <div className="space-y-2">
            <h4 className="footer-title text-white">CONTACT US</h4>
            <div className="font-medium space-y-3">
              <p>F-Block, Road-4, House-6, Dhaka-1216</p>
              <p>+8801795981096</p>
              <p>Mon - Fri: 08:00 am - 10:00 pm</p>
              <p>Sat - Sun: 10:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>
        <div className="text-center mx-auto w-full  bg-[#111827] py-10">
          <div className="space-y-3">
            <h4 className="footer-title text-white">Follow US</h4>
            <p>Join us on social media</p>
            <div className="footer-center ">
              <div className="flex gap-6 justify-center ">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center bg-neutral-950 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Bistro Boss
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
