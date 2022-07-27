import WhiteSpace from './WhiteSpace'

const FormHeader = ({ darkText, grayText }) => {
    return (
      <h3 className="text-center">
        {darkText}
        <WhiteSpace />
        <span class="text-muted ">{grayText}</span>
      </h3>
    );
  };

export default FormHeader;