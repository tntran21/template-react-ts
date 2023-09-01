import { useUserStore } from "@/stores/client/userStore";
import UiButton from "@/libs/atoms/UiButton";

/**
 * ## HomePage
 * @path src\views\Home\index.tsx
 * @router /home
 * @returns
 */
function HomePage() {
  const userStore = useUserStore((state) => state);

  const handleChangeUsername = () => {
    console.log(1);

    userStore.updateUserName("haha");
  };

  return (
    <div>
      <UiButton label="Set loading" className="nganttt" onClick={() => handleChangeUsername()} />
      <UiButton
        label="Set loading"
        className="haha"
        primary={false}
        loading={true}
        onClick={() => handleChangeUsername()}
      />
      <div>
        <div>username: {userStore.username}</div>
      </div>
    </div>
  );
}

HomePage.pageProps = {
  title: "HomPage haha",
  isMask: true,
};

export default HomePage;
