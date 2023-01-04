import { useAppSelector } from '../../store/storeHooks';

const Home = () => {
  const userDetails = useAppSelector((state) => state.user.userDetails);
  return (
    <div>
      <h1>Home</h1>
      <span>
        <b>name:</b> {userDetails.name}
      </span>
      <br />
      <span>
        <b>email:</b> {userDetails.email}
      </span>
    </div>
  );
};
export default Home;
