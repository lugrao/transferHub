import "./Button.css";
import { Button as Btn } from "antd";

export default function Button({ children, type }) {
  return (
    <Btn type={type} className={`${type}-button`}>
      {children}
    </Btn>
  );
}
