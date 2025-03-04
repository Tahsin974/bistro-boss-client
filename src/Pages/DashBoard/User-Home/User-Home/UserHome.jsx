import useAuthContext from "../../../../Hooks/useAuthContext";

const UserHome = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h3 className="text-3xl capitalize">
        hi, welcome {user?.displayName ? user?.displayName : "back"}
      </h3>
    </div>
  );
};

export default UserHome;
