import { BookOpen } from 'lucide-react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] text-center px-4">
      <h1 className="text-[120px] font-extrabold text-[#FF6B6B] leading-none">
        404
      </h1>

      <div className="flex items-center gap-2 mt-2">
        <BookOpen className="text-[#00B894] w-8 h-8" />
        <h2 className="text-2xl font-semibold text-[#2D3436]">
          Lost in the Study Zone?
        </h2>
      </div>

      <p className="mt-3 text-[#2D3436]/80 text-lg max-w-md">
        Looks like this page took a coffee break . Let’s get you back to
        learning!
      </p>

      <Link
        to="/"
        className="mt-6 bg-[#FF6B6B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff4c4c] transition-all duration-300 shadow-md"
      >
        Go Back Home
      </Link>

      <p className="mt-4 text-[#00B894] font-medium text-sm">
        Stay focused, not lost
      </p>
    </div>
  );
};

export default ErrorPage;
