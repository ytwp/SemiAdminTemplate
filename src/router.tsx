import { IconHeart, IconIntro, IconToast } from "@douyinfe/semi-icons-lab";
import { NavItemProps, NavItemPropsWithItems, SubNavProps } from "@douyinfe/semi-ui/lib/es/navigation";
import styles from './components/layout.module.scss';
import { RouteProps } from "react-router-dom";
import { Home } from "./components/home";

import { Dashboard } from './components/dashboard';
import { Settings as Settings1 } from './components/settings1';
import { Settings as Settings2 } from './components/settings2';



export interface SubItemItem extends NavItemPropsWithItems {
  routeProps: RouteProps,
}

export interface SubRouterItem extends SubNavProps {
  items?: (SubItemItem)[],
  routeProps?: RouteProps,
}

export interface RouterItem extends NavItemProps {
  items?: (SubItemItem)[],
  routeProps: RouteProps,
}

export type RouterItems = (RouterItem | SubRouterItem)[]

export const routers: RouterItems = [
  {
    itemKey: '',
    text: "Home",
    icon: <IconIntro className={styles.icon} />,
    routeProps: {
      path: '/',
      element: < Home />
    },
  },
  {
    itemKey: 'dashboard',
    text: "Dashboard",
    icon: <IconHeart className={styles.icon} />,
    routeProps: {
      path: '/dashboard',
      element: < Dashboard />
    },
  },
  {
    itemKey: "settings",
    text: "Settings",
    icon: <IconToast className={styles.icon} />,
    items: [
      {
        itemKey: "settings1",
        text: "Settings1",
        routeProps: {
          path: '/settings/settings1',
          element: < Settings1 />
        },
      },
      {
        itemKey: "settings2",
        text: "Settings2",
        routeProps: {
          path: '/settings/settings2',
          element: < Settings2 />
        },
      }
    ]
  }]