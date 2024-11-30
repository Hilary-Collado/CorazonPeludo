const Footer = () => {
    const _date = () =>{
        document.write(new Date().getFullYear());
    }
    return (
        <footer id="footer" class="footer">
            <div class="copyright">
                <p class="copy copy-inicio">Copyright - 
                </p>
            </div>
            <div class="credits">
                Designed by Hilary Collado
            </div>
        </footer>
    )
}

export default Footer