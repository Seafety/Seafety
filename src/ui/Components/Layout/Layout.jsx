import style from "./Layout.scss"

const Layout = (children) => {
  return (
    <section style={style.layout}>
      {children}
    </section>

  )
}

export default Layout;