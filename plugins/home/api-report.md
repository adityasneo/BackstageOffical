## API Report File for "@backstage/plugin-home"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Extension } from '@backstage/core-plugin-api';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export type CardExtensionProps<T> = ComponentRenderer & {
  title?: string;
} & T;

// @public (undocumented)
export type ClockConfig = {
  label: string;
  timeZone: string;
};

// @public (undocumented)
export const ComponentAccordion: (props: {
  title: string;
  expanded?: boolean | undefined;
  Content: () => JSX.Element;
  Actions?: (() => JSX.Element) | undefined;
  Settings?: (() => JSX.Element) | undefined;
  ContextProvider?: ((props: any) => JSX.Element) | undefined;
}) => JSX.Element;

// @public (undocumented)
export type ComponentParts = {
  Content: (props?: any) => JSX.Element;
  Actions?: () => JSX.Element;
  Settings?: () => JSX.Element;
  ContextProvider?: (props: any) => JSX.Element;
};

// @public (undocumented)
export type ComponentRenderer = {
  Renderer?: (props: RendererProps) => JSX.Element;
};

// @public (undocumented)
export const ComponentTab: (props: {
  title: string;
  Content: () => JSX.Element;
  ContextProvider?: ((props: any) => JSX.Element) | undefined;
}) => JSX.Element;

// @public (undocumented)
export const ComponentTabs: (props: {
  title: string;
  tabs: {
    label: string;
    Component: () => JSX.Element;
  }[];
}) => JSX.Element;

// @public
export function createCardExtension<T>(options: {
  title: string;
  components: () => Promise<ComponentParts>;
  name?: string;
}): Extension<(props: CardExtensionProps<T>) => JSX.Element>;

// @public
export const HeaderWorldClock: (props: {
  clockConfigs: ClockConfig[];
  customTimeFormat?: Intl.DateTimeFormatOptions | undefined;
}) => JSX.Element | null;

// @public
export const HomePageCompanyLogo: (props: {
  logo?: ReactNode;
  className?: string | undefined;
}) => JSX.Element;

// @public (undocumented)
export const HomepageCompositionRoot: (props: {
  title?: string | undefined;
  children?: ReactNode;
}) => JSX.Element;

// @public (undocumented)
export const HomePageRandomJoke: (
  props: CardExtensionProps<{
    defaultCategory?: 'any' | 'programming' | undefined;
  }>,
) => JSX.Element;

// @public
export const HomePageStarredEntities: (
  props: CardExtensionProps<unknown>,
) => JSX.Element;

// @public
export const HomePageToolkit: (
  props: CardExtensionProps<ToolkitContentProps>,
) => JSX.Element;

// @public (undocumented)
export const homePlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// @public (undocumented)
export type RendererProps = {
  title: string;
} & ComponentParts;

// @public (undocumented)
export const SettingsModal: (props: {
  open: boolean;
  close: Function;
  componentName: string;
  children: JSX.Element;
}) => JSX.Element;

// @public (undocumented)
export const TemplateBackstageLogo: (props: {
  classes: {
    svg: string;
    path: string;
  };
}) => JSX.Element;

// @public (undocumented)
export const TemplateBackstageLogoIcon: () => JSX.Element;

// @public (undocumented)
export type Tool = {
  label: string;
  url: string;
  icon: React_2.ReactNode;
};

// @public
export type ToolkitContentProps = {
  tools: Tool[];
};

// @public
export const WelcomeTitle: () => JSX.Element;
```