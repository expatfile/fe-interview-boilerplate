import { type FunctionComponent, type PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./component.module.scss";

type WrapperProps = PropsWithChildren<{ className?: string }>;

export const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
  className,
}) => {
  return <div className={clsx(styles.component, className)}>{children}</div>;
};
