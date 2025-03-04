import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ReactLoading type="spin" color="#1E90FF" height={80} width={80} />
      <p className="mt-4 text-lg text-gray-600 animate-pulse">Loading, please wait...</p>
    </div>
  );
}
