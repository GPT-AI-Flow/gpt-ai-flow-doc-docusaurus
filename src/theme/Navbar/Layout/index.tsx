import React, { useEffect, type ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';

import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return <div role="presentation" {...props} className={clsx('navbar-sidebar__backdrop', props.className)} />;
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  // === Add by xiaoka - start ===
  const location = useLocation();
  const { pathname } = location;

  const [scrollTop, setScrollTop] = React.useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTopValue = window.scrollY || document.documentElement.scrollTop;
      setScrollTop(scrollTopValue);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // === Add by xiaoka - end ===

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
        }
      )}
      // === Add by xiaoka - start ===
      style={pathname === '/' && scrollTop <= 0 ? { background: 'transparent', boxShadow: 'none' } : {}}
      // === Add by xiaoka - end ===
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
