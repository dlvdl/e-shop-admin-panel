import { FunctionComponent, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../features/api/apiSlice"
import { useAppDispatch } from "../app/hooks"
import { setCredentials } from "../features/auth/authSlice"
import LoadingSpinner from "../components/Spinner"

interface Props {
  title: string
  type: "login" | "signup" | "requestPassword" | "setNewPassword"
}

const Auth: FunctionComponent<Props> = ({ title, type }) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const data = await login({ email: email, password: pwd }).unwrap()
      dispatch(setCredentials(data))
      setEmail("")
      setPwd("")
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
    }
  }

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value)

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          {type !== "setNewPassword" && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={handleEmailInput}
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {type !== "requestPassword" && (
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"/request-password"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={pwd}
                  onChange={handlePwdInput}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {type === "requestPassword" && (
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to={"/login"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Remember your password?
                </Link>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      {isLoading && (
        <div className="flex justify-center mt-10">
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
}

export default Auth
