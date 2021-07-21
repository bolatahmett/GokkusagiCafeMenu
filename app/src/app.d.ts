/// <reference types="react" />
interface AppProps {
    firebase: any;
    database: any;
}
declare function App(props: AppProps): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof App, import("react-redux").Omit<AppProps, never>>;
export default _default;
