const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (<footer id="footer" className="footer">
        <div className="copyright">
            <p className="copy copy-inicio"> &copy; Copyright - {currentYear} </p>
        </div>
        <div className="credits"> by Hilary Collado</div>
    </footer>);
}
export default Footer