import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="text-gray-600 body-font">
      {/* the rest of the header... */}
      <nav className="...">
        {user && (
          <div className="flex itemx-center justify-center mr-5 capitalize bg-blue-500 py-1 px-3 rounded-md text-white">
            <Link href="/admin">
              <a>+ Create</a>
            </Link>
          </div>
        )}
        {user ? (
          <div className="flex items-center space-x-5">
            <Link href="/api/auth/logout">
              <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Logout
              </a>
            </Link>
            <img
              alt="profile"
              className="rounded-full w-12 h-12"
              src={user.picture}
            />
          </div>
        ) : (
          <Link href="/api/auth/login">
            <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
