import ClipLoader from 'react-spinners/ClipLoader';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[40vh]">
      <ClipLoader color="#FF6B6B" size={80} />
    </div>
  );
};

export default LoadingSpinner;
