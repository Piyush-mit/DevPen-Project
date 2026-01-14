import { findUserInfo } from "@/actions/user.actions";
import { Button } from "@/components/ui/button"
import { changeTheme, changeAuth, updateUser } from "@/redux/slices/themeSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const systemTheme = localStorage.getItem('vite-ui-theme');
    if (systemTheme == 'light') dispatch(changeTheme('githubLight'))
    else dispatch(changeTheme('githubDark'))
    try {
      findUserInfo().then((response) => {
        if (response.status === 200) {
          dispatch(changeAuth(true));
          const username = response.data.username;
          const email = response.data.email;
          const codes = response.data.codes;
          if (!response.data) return toast.error("Error fetching user")
          dispatch(updateUser({ username, email, codes }));
        }
      })
    } catch (error) { }
  }, []);
  return (
    <div className=" h-[calc(100dvh-60px)] flex justify-center flex-col items-center gap-3 flex-wrap w-screen">
      <div className="text-primary leading-tighter text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl text-center">The foundation for your web playground</div>
      <div className="text-primary max-w-3xl text-base text-balance sm:text-lg text-center">A clean, reliable compiler you can customize, enhance, and reuse. Start here, then own the flow. Open sandbox. Open code.</div>
      <Link to={'/compiler'}><Button variant={'custom'}>Get Started</Button></Link>
    </div>
  )
}

export default Home