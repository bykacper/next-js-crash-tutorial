const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <h1 className="bg-red-200"> ROOT NAVBAR </h1>
            {children}
        </div>
    )
}

export default Layout;