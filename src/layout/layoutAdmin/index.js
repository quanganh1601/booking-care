import Header from "../../component/header-admin";

const LayoutAdmin = ({children}) => {
  return (
    <div className="container-admin">
      <Header/>
      {children}
    </div>
  )
}

export default LayoutAdmin;