import React from 'react';
import HeadingContent from '@/app/components/common/HeadingContent';
import { FaDownload, FaFileAlt, FaCertificate, FaTools } from 'react-icons/fa';
import { HiOutlineChip } from 'react-icons/hi';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const section1Items: DownloadItem[] = [
  {
    id: 'software',
    title: 'Software',
    description: 'Download essential software for configuring and managing your devices.',
    icon: <FaDownload className="w-6 h-6 text-primary" />,
    link: '/downloads/software.zip',
  },
  {
    id: 'datasheet',
    title: 'Datasheet',
    description: 'Access detailed datasheets with product specifications and technical info.',
    icon: <FaFileAlt className="w-6 h-6 text-primary" />,
    link: '/downloads/datasheet.pdf',
  },
  {
    id: 'certificate',
    title: 'Certificate',
    description: 'Download certificates for product authenticity and compliance.',
    icon: <FaCertificate className="w-6 h-6 text-primary" />,
    link: '/downloads/certificate.pdf',
  },
];

const section2Items: DownloadItem[] = [
  {
    id: 'firmware',
    title: 'Firmware',
    description: 'Get the latest firmware updates for improved performance and security.',
    icon: <HiOutlineChip className="w-6 h-6 text-primary" />,
    link: '/downloads/firmware.zip',
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Download support tools for diagnostics and advanced setup.',
    icon: <FaTools className="w-6 h-6 text-primary" />,
    link: '/downloads/tools.zip',
  },
];

const DownloadCard = ({ item }: { item: DownloadItem }) => (
  <div className="p-4 flex flex-col items-center gap-2 transition">
    <div className="flex items-center gap-3">
      {item.icon}
    </div>
    <h3 className="text-lg text-gray-800 font-semibold">{item.title}</h3>
    <p className="text-sm text-center text-gray-600">{item.description}</p>
    <a
      href={item.link}
      download
      className="mt-auto text-sm text-primary hover:underline font-medium"
    >
      Download
    </a>
  </div>
);

export default function SupportDownloads() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <HeadingContent
        layout="mb-4"
        align="center"
        titleColor="text-primary text-center w-full"
        title="Support & Downloads"
        description="BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region."
      />

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {section1Items.map((item) => (
          <DownloadCard key={item.id} item={item} />
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section2Items.map((item) => (
          <DownloadCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
