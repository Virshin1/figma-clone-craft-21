
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showPlusButton?: boolean;
  isCustomService?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  onClick,
  className = "",
  isCustomService = false
}) => {
  const cardContent = (
    <>
      <div className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] absolute z-0 flex min-h-[132px] max-w-full w-[225px] items-stretch h-[132px] rounded-[20px] right-0 bottom-0" />
      <div className="z-10 flex min-h-[104px] w-full max-w-[207px] flex-col items-stretch justify-center">
        {isCustomService && icon ? (
          <div className="flex items-center justify-center h-full">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                console.log(`Failed to load image: ${icon}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ) : !isCustomService ? (
          <>
            <div className="text-4xl text-gray-400 self-center mb-2">+</div>
            <div className="self-stretch text-center text-gray-500 text-sm">
              {title}
            </div>
          </>
        ) : null}
      </div>
    </>
  );

  const baseClasses = `self-stretch relative min-h-[132px] w-[225px] my-auto pl-[9px] pr-2 py-3.5 transition-transform duration-200 hover:scale-105 cursor-pointer ${className}`;

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={isCustomService ? `Access ${title} service` : 'Add new service'}
    >
      {cardContent}
    </button>
  );
};
