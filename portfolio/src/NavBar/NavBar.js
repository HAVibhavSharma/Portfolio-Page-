function NavBarComponent(props) {
  return <div>{props.component}</div>;
}
function NavBar(props) {
  const Navfields = props.navfields;

  return (
    <>
      {Navfields.map((ele) => {
        return <NavBarComponent component={ele}></NavBarComponent>;
      })}
    </>
  );
}
export default NavBar;
