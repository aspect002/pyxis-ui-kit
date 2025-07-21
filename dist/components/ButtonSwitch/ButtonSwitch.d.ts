import React from "react";
import { SwitchProps } from "antd";
export interface ButtonSwitchProps extends SwitchProps {
    containerClassName?: string;
}
export declare const ButtonSwitch: React.FC<ButtonSwitchProps>;
