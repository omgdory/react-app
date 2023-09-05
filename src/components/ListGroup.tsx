function ListGroup() {
  const items = ["Test", "Here", "Grogg", "Whimsical", "Intuition", "Larynx"];

  if (items.length === 0) return <p>No data</p>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
