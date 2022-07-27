const fieldPattern = {
  userName: /^(([A-Za-z][\.]){0,}([A-Za-z][\s]{0,1})+?)$/,
  userEmail:
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/,
  userMobileNumber: /^(\+91){0,1}(([0-9]){10})$/,
  userCountry: /^([A-Za-z][\s]{0,1})*$/,
  userState: /^([A-Za-z][\s]{0,1})*$/,
};

export default fieldPattern;
