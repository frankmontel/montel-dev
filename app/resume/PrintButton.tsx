"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm px-4 py-1.5 rounded-full border border-gray-700 hover:border-indigo-500 transition-colors print:hidden"
    >
      Print / Save PDF
    </button>
  );
}
