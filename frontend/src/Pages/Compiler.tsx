import Canvas from "@/components/Canvas"
import CodeEditor from "../components/CodeEditor"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../components/ui/resizable"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeAuth, changeTheme, updateUser } from "@/redux/slices/themeSlice"
import type { StateType } from "@/redux/store"
import { useParams } from "react-router-dom"
import { getCode } from "@/actions/compiler.action"
import toast from "react-hot-toast"
import { findUserInfo } from "@/actions/user.actions"
import useWidth from "@/hooks/useWidth"

function Compiler() {
  const dispatch = useDispatch();
  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      try {
        getCode(urlId, dispatch)
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
      } catch (error) {
        toast.error("Error fetching code")
      }
    }
  }, [urlId])

  const theme = useSelector((state: StateType) => state.themeSlice.value);
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

  const width = useWidth();
  return (
    <div className="w-screen">
      {width < 930 ? <Vertical theme={theme} /> : <Horizontal theme={theme} />}
    </div>
  )
}

export default Compiler

function Vertical({ theme }: { theme: string }) {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[calc(100dvh-60px)]">
      <ResizablePanel defaultSize={50}>
        <CodeEditor theme={theme} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <Canvas />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

function Horizontal({ theme }: { theme: string }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="">
      <ResizablePanel defaultSize={50} className="">
        <CodeEditor theme={theme} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="">
        <Canvas />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}