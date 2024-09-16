import { useDarkTheme } from "../ThemeContext";

function Footer() {
    console.log("renderd Footer");
    console.log("`````````````````````");
    return (<div
        style={{
            border: "1px solid ",
            padding: "1rem",
            margin: "1rem"
        }}>
        <div >Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}

function Options() {
    const { isDark } = useDarkTheme();

    return <div className={`${isDark?"dark":"light"}`}>Option</div>
}


export default Footer