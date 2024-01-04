import React from "react"
import Image from "next/image"

import {
  FaLinkedinIn,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <>
      <div
        id="footer"
        className="bg-[url('https://i.imgur.com/zksQZhn.png')] w-full h-full bg-no-repeat bg-cover"
      >
        <footer className="g-gradient-to-b from-black to-black via-blue-900 md:mx-auto mx-2 px-4 py-6 rounded-lg">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between mt-6 ">
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-left">
                <h4 className="text-lg font-bold text-white">PHONE</h4>
                <p className="text-white">
                  <a href="tel: +918210542443">
                    +91-8210542443 (Kshitij Singh){" "}
                  </a>{" "}
                </p>
                <p className="text-white">
                  <a href="tel: +917735127138">
                    +91-7735127138 (Satyajeet Das){" "}
                  </a>
                </p>
                <p className="text-white">
                  <a href="tel: +917008051628">
                    +91-7008051628 (Shivram Krishna){" "}
                  </a>
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Address</h4>
                <p className="text-white">Student Activity Centre</p>
                <p className="text-white">
                  Campus 13 KIIT (Deemed to be University)
                </p>
                <p className="text-white">Bhubaneswar, Odisha-751024</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white">Email</h4>
                <p className="text-white">
                  <a href="mailto:kiit.mun@kiit.ac.in">kiit.mun@kiit.ac.in</a>{" "}
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 md:pl-16">
                <h4 className="text-lg font-bold text-white text-centert">
                  Social Media
                </h4>
                <div className="flex items-center">
                  <FaFacebook
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://www.facebook.com/kiitmun/"
                    className="text-white"
                    target="blank"
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center">
                  <FaInstagram
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://www.instagram.com/instakiitmun/"
                    className="text-white"
                    target="blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="flex items-center">
                  <FaTwitter
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://twitter.com/kiitmun"
                    className="text-white"
                    target="blank"
                  >
                    Twitter
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn
                    style={{ fontSize: "xs", marginRight: "0.5rem" }}
                  />
                  <a
                    href="https://www.linkedin.com/company/kiit-international-mun/"
                    className="text-white"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/5 mb-4 text-left md:text-right">
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
                <p>
                  <a href="/about" className="text-white block">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/committees" className="text-white block">
                    Committees
                  </a>
                </p>
                <p>
                  <a
                    href="https://forms.gle/SW8YpWVvCaLrXRvC8"
                    className="text-white block"
                    target="blank"
                  >
                    Executive board
                  </a>
                </p>
                <p>
                  {/* <a href="/#events" className="text-white block">
                    Important Dates
                  </a> */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kiitmun.mun"
                    className="text-white  w-full sm:inline-flex justify-end mt-2"
                    target="blank"
                  >
                    {/* <Image
                      src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                      alt="Image description"
                      width={120}
                      height={120}
                      // fill
                    /> */}
                  </a>
                </p>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />

            <div className="flex items-center gap-4 justify-between">
              <p className="text-left text-sm md:text-base md:text-left text-white-700 flex flex-col md:flex-row gap-1">
                <span>© 2023 KIIT MUN.</span>
                <span>All rights reserved.</span>
              </p>

              {/* <div className="flex gap-2 ml-4 md:ml-0">
                <Image
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="@/public/favicon.ico"
                  alt="Image 1"
                  width={80}
                  height={80}
                />
                <Image
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/Logo/KIIT_Logo.png"
                  alt="Image 1"
                  width={80}
                  height={80}
                />
                <Image
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  src="/Logo/ksac_logo.png"
                  alt="Image 1"
                  width={80}
                  height={80}
                />
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
