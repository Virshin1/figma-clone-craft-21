
import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { AddServiceDropdown } from './AddServiceDropdown';

interface Service {
  id: string;
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  isCustom?: boolean;
}

interface ServiceGridProps {
  services?: Service[];
  columns?: number;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services: initialServices = [
    { id: '1', title: 'Add Service', icon: '', isCustom: false },
    { id: '2', title: 'Add Service', icon: '', isCustom: false },
    { id: '3', title: 'Add Service', icon: '', isCustom: false },
    { id: '4', title: 'Add Service', icon: '', isCustom: false },
    { id: '5', title: 'Add Service', icon: '', isCustom: false },
    { id: '6', title: 'Add Service', icon: '', isCustom: false },
    { id: '7', title: 'Add Service', icon: '', isCustom: false },
    { id: '8', title: 'Add Service', icon: '', isCustom: false },
    { id: '9', title: 'Add Service', icon: '', isCustom: false }
  ],
  columns = 3
}) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const handleServiceClick = (serviceId: string) => {
    console.log(`Service ${serviceId} clicked`);
  };

  const handleAddService = (serviceIndex: number, newService: any) => {
    const updatedServices = [...services];
    updatedServices[serviceIndex] = {
      id: newService.id,
      title: newService.title,
      icon: newService.icon,
      isCustom: true,
      onClick: () => handleServiceClick(newService.id)
    };
    setServices(updatedServices);
    setOpenDropdownIndex(null);
  };

  const handleRemoveService = (serviceIndex: number) => {
    const updatedServices = [...services];
    updatedServices[serviceIndex] = {
      id: `${serviceIndex + 1}`,
      title: 'Add Service',
      icon: '',
      isCustom: false
    };
    setServices(updatedServices);
    setOpenDropdownIndex(null);
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const rows = [];
  for (let i = 0; i < services.length; i += columns) {
    rows.push(services.slice(i, i + columns));
  }

  return (
    <section className="flex min-h-[671px] w-full flex-col items-stretch text-sm text-[#336699] font-normal text-center justify-center pb-2.5 max-md:max-w-full max-md:mt-9">
      {rows.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          className={`flex w-full items-center gap-[34px] justify-center flex-wrap max-md:max-w-full ${
            rowIndex > 0 ? 'mt-[70px] max-md:mt-10' : ''
          }`}
        >
          {row.map((service, serviceIndex) => {
            const globalIndex = rowIndex * columns + serviceIndex;
            return (
              <div key={`${service.id}-${globalIndex}`} className="relative">
                <ServiceCard
                  title={service.isCustom ? '' : service.title}
                  icon={service.icon}
                  href={service.href}
                  onClick={service.onClick || (() => handleServiceClick(service.id))}
                  showPlusButton={false}
                  isCustomService={service.isCustom}
                />
                <AddServiceDropdown
                  onServiceAdd={(newService) => handleAddService(globalIndex, newService)}
                  onServiceRemove={() => handleRemoveService(globalIndex)}
                  isOpen={openDropdownIndex === globalIndex}
                  onToggle={() => handleDropdownToggle(globalIndex)}
                  hasCustomService={service.isCustom || false}
                />
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};
