'use client';
import React from 'react';

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, 'blank');
  };
  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 mt-2 rounded-md text-white bg-primary-500 hover:border hover:bg-white hover:border-primary-500 hover:text-black"
    >
      Download
    </button>
  );
};

export default DownloadButton;
