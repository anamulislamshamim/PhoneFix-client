const useTitle = () => {
    const title = (titleName) => {
        document.title = titleName;
    }
    return title;
};

export default useTitle;