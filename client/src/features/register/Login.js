import Orb from "../../components/Orb"
import { Main, FormWrapper, Card, Divider, Button, FormLayout } from "./styleSignup"

const Login = () => {
  return (
    <>
      <Orb />
      <Main>
        <h1>Login</h1>
        <FormLayout>
          <Card>
            <FormWrapper>
              <div className="input-container">
                <input 
                  type="email"
                  id="email"
                  placeholder=" " // Empty placeholder for label animation
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-container">
                <input 
                  type="password"
                  id="password"
                  placeholder=" " // Empty placeholder for label animation
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit">
                Login
              </button>
            </FormWrapper>
          </Card>
          <Divider>or</Divider>
          <Button>
            <a href="#">Login with Google</a>
          </Button>
        </FormLayout>
        <a href="/signup">Already have an account? Signup</a>
      </Main>
    </>
  )
}

export default Login;
