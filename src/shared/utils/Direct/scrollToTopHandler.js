export const handleScrollToTop = (e) => {
    const { scrollTop } = e.target;
    if (scrollTop === 0) {
        alert("Top !!!")
    }
}