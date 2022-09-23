export function Greeting({ title, name = "user" }) {
  console.log(title, name);
  return <h1>{`${title} ${name}`}</h1>;
}

export function UserCard(props) {
  return <div>
    <h1>{props.name}</h1>
    <p>${props.amount}</p>
    <p>{props.married ? 'married' : 'single'}</p>
  </div>;
}
