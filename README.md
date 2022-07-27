# Simple Bootstrap form with validation

[link to deployed application 🌐](https://62e100ed7b1ad00009bae177--tranquil-cheesecake-e3496c.netlify.app/)

### References
1. pattern used for name

    <strong>Checking for</strong>
    1. initial accecpted (not required), should be in forent
    2. space (firstname last name)

    valid test: A.Abdul, A. P. J. Abdul Kalam

    invalid tets: Abdul.A, Somename @ lastname, 123455

    ```
    (([A-Za-z][\.]){0,}([A-Za-z][\s]{0,1})+?)$
    ```
    [link to regex doc and test cases](regexr.com/6qia9)

2. pattern used for email

    <strong>Checking for</strong>
    1. should have @
    2. should have '.'
    3. followed by com/in/etc

    valid test: person1.h@someemail.com,person33-234@fh.in
    invalid test: $person1.h@someemail.com, mailto:234@fh.in

    ```
    ^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$
    ```

3. pattern used for mobile number

    <strong>Checking for</strong>
    1. only numbers
    2. 10/12(country code added)

    ```
    ^(\+91){0,1}(([0-9]){10})$
    ```
    
    [link to regex doc and test cases](https://regexr.com/39t6d)
