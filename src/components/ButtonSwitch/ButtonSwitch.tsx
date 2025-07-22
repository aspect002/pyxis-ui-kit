import React from "react";
import { Switch, SwitchProps } from "antd";
import classNames from "classnames";
import styles from "./buttonSwitch.module.scss";

export interface ButtonSwitchProps extends SwitchProps {
  containerClassName?: string;
}

export const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div
      className={classNames(
        styles["buttonSwitch-container"],
        containerClassName
      )}
    >
      <Switch className={className} {...props} />
    </div>
  );
};
