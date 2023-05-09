// base
import React from 'react';

// style
import { StyledProject } from './style';
import { KdongProject, RecommandListProps } from 'consts';
import { CheckCard } from 'components';

export const Project = () => {
  return (
    <StyledProject>
      <div className="project-wrapper">
        {KdongProject.map(
          ({ key, projectName, projectDesc, company, date, thumbnail }) => (
            <CheckCard
              key={key}
              data={
                {
                  title: projectName,
                  desc: projectDesc,
                  tag: company,
                  created: date,
                  thumbnail: thumbnail,
                  bgColor: '',
                  badgeColor: ''
                } as RecommandListProps
              }
              type="image"
            />
          )
        )}
      </div>
    </StyledProject>
  );
};
