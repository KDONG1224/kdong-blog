// base
import React from 'react';

// style
import { StyledBasicTab } from './style';

// libraries
import { Box, Tab, TabsProps, Typography } from '@mui/material';

interface BasicTabProps extends TabsProps {
  tabItems: {
    label: string;
    value: string;
  }[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string;
  label: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, label, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== label}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === label && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ fontSize: '5rem' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const BasicTab: React.FC<BasicTabProps> = ({ tabItems, ...props }) => {
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledBasicTab {...props}>
          {tabItems.map((tab, idx) => (
            <Tab
              label={tab.label}
              key={idx}
              value={tab.value}
              {...a11yProps(idx)}
            />
          ))}
        </StyledBasicTab>
      </Box>
      {tabItems.map((tab, idx) => (
        <TabPanel value={props.value} label={tab.value} index={idx} key={idx}>
          Testing - Item {tab.label}
        </TabPanel>
      ))}
    </>
  );
};
