import React, { useState } from 'react';

interface ChartData {
  month: string;
  value1: number;
  value2: number;
}

interface ChartCardProps {
  title?: string;
  data?: ChartData[];
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title = "AMOUNT RECEIVED",
  data = [
    { month: "JAN", value1: 35, value2: 69 },
    { month: "FEB", value1: 35, value2: 50 },
    { month: "MAR", value1: 39, value2: 98 },
    { month: "APR", value1: 35, value2: 57 },
    { month: "MAY", value1: 41, value2: 63 },
    { month: "JUN", value1: 35, value2: 57 }
  ]
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const maxValue = Math.max(...data.flatMap(d => [d.value1, d.value2]));
  const yAxisLabels = ["40k", "30k", "20k", "10k", "0k"];

  return (
    <article className="bg-[rgba(232,246,255,1)] min-h-[334px] w-full mt-[47px] rounded-[10px] max-md:max-w-full max-md:mt-10">
      <header className="bg-[rgba(232,246,255,1)] flex w-full items-center gap-[40px_200px] text-base text-[#212529] font-medium leading-[1.1] flex-wrap pl-4 pr-7 py-[18px] rounded-[10px] max-md:max-w-full max-md:pr-5">
        <h3 className="text-[#212529] self-stretch flex-1 shrink basis-[0%] my-auto">
          {title}
        </h3>
        <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
      </header>
      
      <div className="flex w-full flex-col text-sm text-[#212529] font-normal whitespace-nowrap leading-[1.1] justify-center px-1 py-6 max-md:max-w-full">
        <div className="flex gap-2 px-4">
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/2cbd1bdaea770cd0e87b0098211765ef1104065a?placeholderIfAbsent=true"
              alt="Legend 1"
              className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
            />
            <span className="text-[#212529] self-stretch my-auto">
              Legend
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/155c06f10fe89cfc768b6ef98de9f57b017f2ec2?placeholderIfAbsent=true"
              alt="Legend 2"
              className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
            />
            <span className="text-[#212529] self-stretch my-auto">
              Legend
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[486px] flex-col items-stretch py-[15px] max-md:max-w-full">
        <div className="self-center z-10 flex h-[154px] w-[362px] max-w-full">
          {data.map((item, index) => {
            const bar1Height = (item.value1 / maxValue) * 100;
            const bar2Height = (item.value2 / maxValue) * 100;
            const isSelected = selectedMonth === item.month;
            
            return (
              <button
                key={item.month}
                className={`flex flex-col items-center w-[52px] px-2.5 transition-all duration-200 ${
                  isSelected ? 'bg-blue-50 rounded-md' : 'hover:bg-gray-50 rounded-md'
                }`}
                style={{ paddingTop: `${154 - Math.max(bar1Height, bar2Height)}px` }}
                onClick={() => setSelectedMonth(isSelected ? null : item.month)}
                aria-label={`Chart data for ${item.month}: ${item.value1} and ${item.value2}`}
              >
                <div className="w-1.5">
                  <div className="w-full">
                    <div 
                      className="flex shrink-0 bg-blue-400 rounded-sm"
                      style={{ height: `${bar1Height}px` }}
                    />
                  </div>
                  <div className="w-full">
                    <div 
                      className="flex shrink-0 bg-blue-600 rounded-sm"
                      style={{ height: `${bar2Height}px` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-[rgba(232,246,255,1)] flex mt-[-166px] min-h-[196px] w-full flex-col items-stretch text-sm text-[#767676] font-normal whitespace-nowrap text-right leading-[1.1] justify-center px-4 py-[19px] max-md:max-w-full">
          {yAxisLabels.map((label, index) => (
            <div key={label} className={`flex w-full items-center gap-1 ${index > 0 ? 'mt-[21px]' : ''} max-md:max-w-full`}>
              <div className={`text-[#767676] self-stretch my-auto ${index >= 3 ? 'gap-1 pl-1' : ''} ${index === 4 ? 'pl-[9px]' : ''}`}>
                {label}
              </div>
              <div className="self-stretch flex min-w-60 w-[425px] shrink h-2 flex-1 basis-[0%] my-auto py-1" />
            </div>
          ))}
        </div>

        <div className="z-10 flex mt-[-183px] flex-col text-sm text-[#767676] font-normal whitespace-nowrap leading-[1.1] px-[62px] max-md:max-w-full max-md:px-5">
          {data.map((item, index) => (
            <div
              key={item.month}
              className={`text-[#767676] min-h-[180px] w-[60px] ${
                index === 0 ? '' : 
                index === 1 ? 'z-10 mt-[-180px] ml-[60px] max-md:ml-2.5' :
                index === 2 ? 'self-center z-10 mt-[-180px]' :
                index === 3 ? 'self-center z-10 mt-[-180px] ml-[31px]' :
                index === 4 ? 'z-10 mt-[-180px] mr-[60px] max-md:mr-2.5' :
                'z-10 mt-[-180px]'
              }`}
            >
              {item.month}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
