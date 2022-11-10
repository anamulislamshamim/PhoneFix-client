const useToken = () => {
    const token = (currentUser) => {
        fetch("https://phonefix-server.vercel.app/jwt", {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(token_data => {
                localStorage.setItem("access_token", token_data.token);
            })
    };
    return token;
};

export default useToken;