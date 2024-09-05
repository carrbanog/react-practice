export default function Gallery() {
  function Profile() {
    return <img src="https://i.imgur.com/MK3eW3As.jpg" />;
  }

  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
