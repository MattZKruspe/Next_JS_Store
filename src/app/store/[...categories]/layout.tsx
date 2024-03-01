

export default function Layout({ children }: {children: React.ReactNode}){
    return (
        <main>
            <nav>
                Navegacion Categorías 
            </nav>

            {children}
        </main>
    )
}