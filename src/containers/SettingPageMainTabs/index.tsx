// base
import React, { useState } from 'react';

// style
import { StyledSettingPageMainTabs } from './style';

// containers
import { SettingPageMainBanner, SettingPageMainFaq } from 'containers';

// libraries
import { Tabs, TabsProps } from 'antd';

export const SettingPageMainTabs = () => {
  const [activeKey, setActiveKey] = useState<string>('HOME_BANNER');

  const handleChangeTab = (activeKey: string) => {
    setActiveKey(activeKey);
  };

  const mainSettingTabs: TabsProps['items'] = [
    {
      key: 'HOME_BANNER',
      label: '메인 배너',
      children: <SettingPageMainBanner />
    },
    { key: 'HOME_FAQ', label: 'FAQ', children: <SettingPageMainFaq /> },
    { key: 'HOME_SWIPER_SPEED', label: '슬라이드', children: '슬라이드' }
  ];

  return (
    <StyledSettingPageMainTabs>
      <div className="spmt-wrapper">
        <Tabs
          defaultActiveKey={activeKey}
          activeKey={activeKey}
          onChange={handleChangeTab}
          items={mainSettingTabs}
        />
      </div>
    </StyledSettingPageMainTabs>
  );
};
