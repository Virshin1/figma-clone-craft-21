
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
  // Debug logging
  console.log('ServiceCard render:', { title, icon: icon.substring(0, 50) + '...', isCustomService });

  const cardContent = (
    <>
      <div className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.14)] absolute z-0 flex min-h-[132px] max-w-full w-[225px] items-stretch h-[132px] rounded-[20px] right-0 bottom-0" />
      <div className="z-10 flex min-h-[104px] w-full max-w-[207px] flex-col items-center justify-center p-4">
        {isCustomService && icon ? (
          <>
            <div 
              dangerouslySetInnerHTML={{ __html: icon }}
              className="w-12 h-12 mb-3 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-12 [&>svg]:max-h-12 [&>svg]:display-block"
              style={{ 
                minWidth: '48px', 
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
            <div className="text-center text-gray-700 text-sm font-medium leading-tight">
              {title}
            </div>
          </>
        ) : !isCustomService ? (
          <>
            <div className="text-4xl text-gray-400 mb-2">+</div>
            <div className="text-center text-gray-500 text-sm">
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
