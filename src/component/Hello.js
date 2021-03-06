import { useState } from "react";
import UserName from "./UserName";

const Hello = ({age}) => {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName);
    }

    return (
        <>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={changeName}>Change</button>
        </>
        );
};

export default Hello;
