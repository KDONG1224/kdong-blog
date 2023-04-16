// base
import React, { HTMLAttributes, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

// style
import { StyledMainLayout } from './style';

// components
import { BasicDrawer, BasicHeader } from 'components';

// libs
import { isMobile } from 'libs';

// libraries
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { commonColors, darkModeColors, lightModeColors } from 'consts';
import { Instagram } from 'containers';
import { SESSION_THEME_TEXT, sessionStorage } from 'services';
import { useRecoilState } from 'recoil';
import { selectThemeState } from 'modules';
import Head from 'next/head';

type MainLayoutProps = HTMLAttributes<HTMLDivElement>;

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => {
  const router = useRouter();

  const pathname = router.pathname === '/' ? true : false;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isSelectTheme, setSelectTheme] = useRecoilState(selectThemeState);

  console.log('isSelectTheme : ', isSelectTheme);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            // darkMode
            primary: {
              main: darkModeColors['primary']
            },
            divider: commonColors['dividerColor'],
            background: {
              default: darkModeColors['primary'],
              paper: darkModeColors['primary']
            },
            text: {
              primary: '#bcbaba',
              secondary: grey[500]
            }
          }
        : {
            // lightMode
            primary: {
              main: lightModeColors['primary'],
              darker: commonColors.grayscale['w40']
            },
            divider: commonColors['dividerColor'],
            text: {
              primary: lightModeColors['txtColor'],
              secondary: grey[800]
            }
          })
    }
  });

  const theme = useMemo(() => {
    const mode: PaletteMode = isDarkMode ? 'dark' : 'light';

    return createTheme(getDesignTokens(mode));
  }, [isDarkMode]);

  const onChangeTheme = (value: boolean) => {
    sessionStorage?.setItem(SESSION_THEME_TEXT, value ? 'dark' : 'light');
    setIsDarkMode(value);
  };

  const onClickIcon = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!sessionStorage) return;

    const theme = sessionStorage.getItem(SESSION_THEME_TEXT);

    setSelectTheme(theme || 'dark');
    setIsDarkMode(theme === 'dark' ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const mode: PaletteMode = isDarkMode ? 'dark' : 'light';

    setSelectTheme(mode);
  }, [isDarkMode, setSelectTheme]);

  return (
    <>
      <Head>
        <title>
          KDONG 포트폴리오
          {router.pathname !== '/'
            ? '-' +
              router.pathname
                .split('/')[1]
                .replace(/^[a-z]/, (char) => char.toUpperCase())
            : ''}
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledMainLayout {...props}>
          {!isOpen && (
            <BasicHeader
              onChangeTheme={onChangeTheme}
              isDarkMode={isDarkMode}
            />
          )}
          <main style={!pathname ? { marginTop: 120 } : {}}>{children}</main>
          {/* {!isOpen && <BasicFooter />} */}
          <div className="kdong-icon" onClick={onClickIcon} />
        </StyledMainLayout>
        <BasicDrawer
          anchor="bottom"
          open={isOpen}
          onClose={onClickIcon}
          width={isMobile ? '100%' : 350}
          transitionDuration={600}
          noPadding
        >
          <Instagram onClick={() => console.log('s')} />
        </BasicDrawer>
      </ThemeProvider>
    </>
  );
};
