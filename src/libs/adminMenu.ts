import { MenuProps } from 'antd';

export type MenuItemProps = Required<MenuProps>['items'][number] | boolean;

export const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItemProps[]
) => {
  return {
    key,
    icon,
    children,
    label
  } as MenuItemProps;
};
