import React from 'react';
import { Header } from '@/components/Header';
import { TickerBanner } from '@/components/TickerBanner';
import { BalanceCard } from '@/components/BalanceCard';
import { ChartCard } from '@/components/ChartCard';
import { ServiceGrid } from '@/components/ServiceGrid';
import { TransactionList } from '@/components/TransactionList';
import { AdditionalServices } from '@/components/AdditionalServices';
import { ChartSection } from '@/components/ChartSection';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-[19px]">
      <Header />
      
      <TickerBanner />
      
      <main className="w-full max-w-[1348px] mt-[46px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[38%] max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-9">
              <BalanceCard />
              <ChartCard />
            </div>
          </div>
          <div className="w-[62%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceGrid />
          </div>
        </div>
      </main>

      <section className="w-full max-w-[1330px] mt-[78px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ChartSection chartImage="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/2c04af1f-e3e0-4e3f-8cfb-27767178208e?placeholderIfAbsent=true" />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ChartSection chartImage="https://cdn.builder.io/api/v1/image/assets/a2e53047b25843fd94cfdce41548669c/4f5c91a5-56c6-4bd2-bb7d-b7254dce19fa?placeholderIfAbsent=true" />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1358px] mt-9 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <TransactionList />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <AdditionalServices />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
