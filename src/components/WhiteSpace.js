const WhiteSpace = ({ noSpace = 1 }) => {
    const spaces = Array.from(Array(noSpace)).fill(<>&ensp;</>);
    return spaces;
  };

export default WhiteSpace