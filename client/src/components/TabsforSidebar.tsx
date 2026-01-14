import { Link } from "react-router-dom"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { StateType } from "@/redux/store"
import { logout } from "@/actions/user.actions"
import { changeAuth, initialThemeState, updateUser } from "@/redux/slices/themeSlice"
import toast from "react-hot-toast"
import { cssBase, htmlBase, initialState, javascriptBase, updateFullCode, upDateTitle } from "@/redux/slices/compilerSlice"
import { Button } from "./ui/button"
import { Code2, HomeIcon, LogInIcon, LogOutIcon, UserRoundPlus } from "lucide-react"
import {
  ButtonGroup,
} from "@/components/ui/button-group"

function TabsforSidebar() {
  const authorised = useSelector((state: StateType) => state.themeSlice.auth);
  const dispatch = useDispatch();
  const handleLogout = useCallback(async () => {
    try {
      const response = await logout();
      if (response.status === 200) {
        toast.success("Logged out")
        dispatch(changeAuth(false));
        dispatch(updateUser(initialThemeState.user))
        dispatch(updateFullCode({ html: htmlBase, css: cssBase, javascript: javascriptBase }));
        dispatch(upDateTitle(initialState.title));
      }
      else toast.error(response.data.message);
    } catch (error) {
      toast.error('Logout failed')
    }
  }, [authorised])
  return (
    <ButtonGroup className="mobile:hidden flex justify-between text-gray-400">
      <Button variant={'outline'}><Link to={'/'}>
        <HomeIcon />
      </Link></Button>
      <Button variant={'outline'} >
        <Link to={'/compiler'}>
          <Code2 />
        </Link>
      </Button>
      {!authorised && <Button variant={'outline'} >
        <Link to={'/signup'}>
          <UserRoundPlus />
        </Link>
      </Button>}
      {!authorised && <Button variant={'outline'} >
        <Link to={'/signin'}>
          <LogInIcon />
        </Link>
      </Button>}
      {authorised && <Button variant={'outline'} onClick={handleLogout}>
        <Link to={''}>
          <LogOutIcon />
        </Link>
      </Button>}
    </ButtonGroup>
  )
}

export default TabsforSidebar