import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const dom: { root: ReactDOM.Root | null } = {
  root: null,
};

function render({ container = document }: Partial<QkCustomProps>) {
  const wrap = container.querySelector("#root");
  if (wrap === null) return;

  dom.root = ReactDOM.createRoot(wrap);
  dom.root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

if (window.__POWERED_BY_QIANKUN__ === void 0) {
  render({});
}

interface QkCustomProps {
  onGlobalStateChange: (
    callback: OnGlobalStateChangeCallback,
    fireImmediately?: boolean
  ) => void;
  setGlobalState: (state: Record<string, any>) => boolean;
  container?: HTMLDivElement | Document;
  num?: number;
  util?: Record<PropertyKey, any>;
}

type OnGlobalStateChangeCallback = (
  state: Record<string, any>,
  prevState: Record<string, any>
) => void;

export async function bootstrap(props: QkCustomProps) {
  console.log(props);
}

export async function mount(props: QkCustomProps) {
  console.log(props);
  props.onGlobalStateChange((newData, oldData) => {
    console.log("child", newData, oldData);
  });
  props.setGlobalState({ name: "Lee" });
  render(props);
}

export async function unmount() {
  dom.root?.unmount();
}
