import Navbar from "./(layout)/Navbar"

export const metadata = {
    title: "Portfolio"
}

const portfoloioLayout = ({ children }) => {
    return <>
        <Navbar />
       {children}
    </>
}

export default portfoloioLayout