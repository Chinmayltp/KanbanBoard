const Nav = (props) => {
  return (
    <nav className='navbar'>
      <h3>Kan Ban Board</h3>
      <h4>{props.username}</h4>
    </nav>
  );
};
export default Nav;
