// base
import React from 'react';

// style
import { StyledMetaCard } from './style';

// libraries
import { Divider, Tag } from 'antd';

interface Props {
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  iconBackground?: string;
  isLogisSigned?: boolean;
  rightExtra?: React.ReactNode;
  gap?: number;
  className?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  visibility?: any;
}

export const MetaCard = ({
  title,
  icon,
  iconBackground,
  isLogisSigned,
  rightExtra,
  gap,
  className,
  description,
  children,
  visibility = 'visible',
  ...rest
}: Props) => {
  return (
    <StyledMetaCard
      className={className}
      isIcon={!!icon}
      iconBackground={iconBackground}
      gap={gap}
      {...rest}
      style={{
        visibility
      }}
    >
      {/* <PageHeader
        avatar={{ shape: 'square', size: 'large', icon }}
        title={
          <>
            <span>{title}</span>
            {description && (
              <span
                style={{
                  fontSize: '1.6rem',
                  color: '#76767C',
                  fontWeight: 400,
                  display: 'block'
                }}
              >
                {description}
              </span>
            )}
            {isLogisSigned && (
              <Tag
                color="#eaefff"
                style={{ marginLeft: '0.6rem', color: '#78789D' }}
              >
                등록완료
              </Tag>
            )}
          </>
        }
        style={{ padding: 0 }}
        extra={rightExtra}
      /> */}
      {title && children && <Divider className="metaCard-divider" />}
      <div>{children}</div>
    </StyledMetaCard>
  );
};
